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
        Schema::create('collections', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('image_front');
            $table->string('image_back');
            $table->string('title');
            $table->string('denomination');
            $table->string('year');
            $table->string('country');
            $table->string('material');
            $table->string('theme');
            $table->string('remark');
            $table->boolean('visibility_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collections');
    }
};
