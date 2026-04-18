<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthentificationController;

Route::post('/inscription-client', [AuthentificationController::class, 'inscrireClient']);
Route::post('/inscription-travailleur', [AuthentificationController::class, 'inscrireTravailleur']);
Route::post('/connexion', [AuthentificationController::class, 'connecter']);

Route::get('/travailleurs', [AuthentificationController::class, 'getTravailleurs']);
Route::get('/travailleurs/{id}', [AuthentificationController::class, 'getTravailleurById']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/deconnexion', [AuthentificationController::class, 'deconnecter']);
});