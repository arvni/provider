<?php

use App\Enums\OrderStatus;
use App\Enums\OrderStep;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("server_id")->unique()->nullable();
            $table->foreignIdFor(User::class)->references("id")->on("users");
            $table->foreignIdFor(Patient::class)->nullable()->references("id")->on("patients");
            $table->enum("status",array_map(fn($item)=>$item->value, OrderStatus::cases()))->default(OrderStatus::PENDING->value);
            $table->enum("step",array_map(fn($item)=>$item->value, OrderStep::cases()))->default(OrderStep::TEST_METHOD->value);
            $table->json("test_method");
            $table->json("clinical_information")->nullable();
            $table->json("consents")->nullable();
            $table->timestamps();
            $table->timestamp("sent_at")->nullable();
            $table->timestamp("received_at")->nullable();
            $table->timestamp("reported_at")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
