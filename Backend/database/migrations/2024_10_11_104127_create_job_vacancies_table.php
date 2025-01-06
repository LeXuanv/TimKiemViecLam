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
        Schema::create('job_vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('salary', 50)->nullable();
            $table->string('employment_type', 50)->nullable();
            $table->date('application_deadline')->nullable();
            $table->boolean('is_published')->default(false);
            $table->foreignId('company_id')->constrained('companies');
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('job_position_id')->constrained('job_positions');
            $table->string('address')->nullable();
            $table->string('province_code')->nullable();
            $table->foreign('province_code')->references('code')->on('provinces');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_vacancies');
    }
};
