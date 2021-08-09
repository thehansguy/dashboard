<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudiencesTable extends Migration
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


            $table->string('profile_name');
            $table->string('demo_customer_age_range');
            $table->string('demo_gender');
            $table->string('demo_level_of_education');
            $table->string('demo_occupation');
            $table->string('demo_residential_address');
            $table->string('demo_household_composition');
            $table->string('demo_race_ethnic_origin');
            $table->string('psycho_hobbies_interests');
            $table->string('psycho_fav_tv_shows');
            $table->string('psycho_problems_solved');
            $table->string('psycho_potential_turn_offs');
            $table->string('pyscho_recommendation_reasons');
            $table->string('psycho_best_customer_reach');
            $table->string('review');

            $table->string('ideal_customer_image');
            $table->string('engagement_report_image');


            
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
        Schema::dropIfExists('audiences');
    }
}
