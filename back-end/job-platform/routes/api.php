<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthentificationController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\MessageController;

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
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/reservations', [ReservationController::class, 'store']);
    Route::get('/reservations/client/{id}', [ReservationController::class, 'reservationsClient']);
    Route::get('/reservations/travailleur/{id}', [ReservationController::class, 'reservationsTravailleur']);
    Route::put('/reservations/{id}/statut', [ReservationController::class, 'updateStatut']);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/messages', [MessageController::class, 'send']);
    Route::get('/messages/{id}', [MessageController::class, 'conversation']);
});