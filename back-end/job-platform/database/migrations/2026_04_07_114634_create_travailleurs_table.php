<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('travailleurs', function (Blueprint $table) {
            $table->id();

            $table->foreignId('utilisateur_id')
                ->constrained('utilisateurs')
                ->onDelete('cascade');

            $table->string('profession');
            $table->decimal('prix', 8, 2);
            $table->text('description');
            $table->string('disponibilite')->default('Disponible');
            $table->string('cin')->nullable();
            $table->string('photo')->nullable();
            $table->boolean('verifie')->default(false);
            $table->float('note')->default(0);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('travailleurs');
    }
};