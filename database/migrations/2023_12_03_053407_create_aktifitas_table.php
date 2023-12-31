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
        Schema::create('aktifitas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tugas_id')->references('id')->on('tugas')->onDelete('cascade');
            $table->foreignId('pelaku_id')->references('id')->on('users');
            $table->string('judul');
            $table->string('status_tugas');
            $table->string('prioritas');
            $table->date('deadline')->nullable();
            $table->enum('status', ['create','update']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aktifitas');
    }
};
