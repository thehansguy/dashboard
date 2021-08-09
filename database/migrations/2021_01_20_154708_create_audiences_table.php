<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudienceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audiences', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->onDelete('cascade');


            $table->string('accounts_reached');
            $table->string('total_followers');
            $table->string('content_interaction');
            $table->string('likes');

            $table->string('facebook_page_likes');
            $table->string('instagram_followers');
            $table->string('instagram_reach');
            $table->string('impressions');

            $table->string('new_audience');

            $table->string('total_audience');
            $table->string('top_locations');
            $table->string('age_range');
            $table->string('gender');
            $table->string('pie_chart');
            $table->string('histogram');

            
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
        Schema::dropIfExists('audience');
    }
}
