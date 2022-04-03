<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWashersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('washers', function (Blueprint $table) {
            $table->increments ('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->integer('phone');   // il faut changer entier
            $table->string('email')->unique();
            $table->string('activity');
            $table->string('availability');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('washers');
    }
}
