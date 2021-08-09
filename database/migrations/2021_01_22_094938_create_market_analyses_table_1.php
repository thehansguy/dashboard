<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarketAnalysesTable1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('market_analyses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->onDelete('cascade');


            $table->string('accounts_reached');
            $table->string('interaction');
            $table->string('total_followers');
            $table->string('likes');

            $table->string('competitor_accounts_reached');
            $table->string('competitor_interaction');
            $table->string('competitor_total_followers');
            $table->string('competiter_likes');

            $table->string('market_size_chart');
           
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
        Schema::dropIfExists('market_analyses');
    }
}
