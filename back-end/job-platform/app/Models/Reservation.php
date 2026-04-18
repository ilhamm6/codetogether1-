<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'client_id',
        'travailleur_id',
        'date_reservation',
        'heure',
        'service',
        'adresse',
        'duree',
        'notes',
        'statut',
    ];

    public function client()
    {
        return $this->belongsTo(Utilisateur::class, 'client_id');
    }

    public function travailleur()
    {
        return $this->belongsTo(Utilisateur::class, 'travailleur_id');
    }
}