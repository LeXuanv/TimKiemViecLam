<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToJobVacanciesTable extends Migration
{
    public function up()
    {
        Schema::table('job_vacancies', function (Blueprint $table) {
            $table->text('request')->nullable();
            $table->text('interest')->nullable();
            $table->text('location')->nullable();
            $table->text('work_time')->nullable();
            $table->text('experience')->nullable();
            $table->text('gender')->nullable();
        });
    }

    public function down()
    {
        Schema::table('job_vacancies', function (Blueprint $table) {
            $table->dropColumn(['request', 'interest', 'location', 'work_time', 'experience','gender']);
        });
    }
}
