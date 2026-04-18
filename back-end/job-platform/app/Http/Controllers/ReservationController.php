<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    // créer réservation
    public function store(Request $request)
    {
        $request->validate([
            'client_id' => 'required|exists:utilisateurs,id',
            'travailleur_id' => 'required|exists:utilisateurs,id',
            'date_reservation' => 'required|date',
            'heure' => 'required|string',
            'service' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'duree' => 'required|integer|min:1',
            'notes' => 'nullable|string',
        ]);

        $reservation = Reservation::create([
            'client_id' => $request->client_id,
            'travailleur_id' => $request->travailleur_id,
            'date_reservation' => $request->date_reservation,
            'heure' => $request->heure,
            'service' => $request->service,
            'adresse' => $request->adresse,
            'duree' => $request->duree,
            'notes' => $request->notes,
            'statut' => 'en_attente',
        ]);

        return response()->json([
            'message' => 'Réservation créée avec succès',
            'reservation' => $reservation
        ], 201);
    }

    // réservations dyal client
    public function reservationsClient($id)
    {
        $reservations = Reservation::with(['travailleur'])
            ->where('client_id', $id)
            ->latest()
            ->get();

        return response()->json($reservations);
    }

    // réservations dyal travailleur
    public function reservationsTravailleur($id)
    {
        $reservations = Reservation::with(['client'])
            ->where('travailleur_id', $id)
            ->latest()
            ->get();

        return response()->json($reservations);
    }

    // changer statut
    public function updateStatut(Request $request, $id)
    {
        $request->validate([
            'statut' => 'required|in:en_attente,confirmee,annulee,terminee'
        ]);

        $reservation = Reservation::findOrFail($id);
        $reservation->statut = $request->statut;
        $reservation->save();

        return response()->json([
            'message' => 'Statut mis à jour avec succès',
            'reservation' => $reservation
        ]);
    }
}