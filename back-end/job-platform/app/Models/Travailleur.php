<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travailleur extends Model
{
    use HasFactory;

    protected $table = 'travailleurs';

    protected $fillable = [
        'utilisateur_id',
        'profession',
        'prix',
        'description',
        'disponibilite',
        'cin',
        'photo',
        'verifie',
        'note'
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'utilisateur_id');
    }
}