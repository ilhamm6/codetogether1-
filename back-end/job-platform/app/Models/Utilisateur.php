<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Utilisateur extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $table = 'utilisateurs';

    protected $fillable = [
        'nom',
        'email',
        'telephone',
        'mot_de_passe',
        'ville',
        'role'
    ];

    protected $hidden = [
        'mot_de_passe',
        'remember_token'
    ];

    public function travailleur()
    {
        return $this->hasOne(Travailleur::class, 'utilisateur_id');
    }

    public function getAuthPassword()
    {
        return $this->mot_de_passe;
    }
}