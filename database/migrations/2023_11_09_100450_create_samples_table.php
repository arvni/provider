<?php

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
        Schema::create('samples', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Order::class)->references("id")->on("orders");
            $table->foreignIdFor(\App\Models\SampleType::class)->references("id")->on("sample_types");
            $table->string("sampleId")->nullable();
            $table->date("collectionDate");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('samples');
    }
};
