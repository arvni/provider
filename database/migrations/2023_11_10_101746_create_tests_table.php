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
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("server_id")->nullable()->unique();
            $table->string("name");
            $table->string("code");
            $table->string("shortName");
            $table->longText("description")->nullable();
            $table->integer("turnaroundTime");
            $table->timestamps();
        });

        Schema::create("sample_type_test",function (Blueprint $table){
            $table->uuid("id")->unique();
            $table->foreignIdFor(\App\Models\SampleType::class)->constrained()->onDelete("cascade");
            $table->foreignIdFor(\App\Models\Test::class)->constrained()->onDelete("cascade");
            $table->longText("description")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("sample_type_test");
        Schema::dropIfExists('tests');
    }
};
