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
        Schema::create('symptoms', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\SymptomGroup::class)->references("id")->on("symptom_groups");
            $table->string("name");
            $table->string("hpo")->nullable();
            $table->boolean("family_history")->default(false);
            $table->boolean("ultrasound")->default(false);
            $table->boolean("disabled")->default(false);
            $table->timestamps();
        });

        Schema::create("symptom_test",function (Blueprint $table){
            $table->foreignIdFor(\App\Models\Symptom::class)->references("id")->on("symptoms");
            $table->foreignIdFor(\App\Models\Test::class)->references("id")->on("tests");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("symptom_test");
        Schema::dropIfExists('symptoms');
    }
};
