<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Travailleur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\BienvenueUtilisateurMail;

class AuthentificationController extends Controller
{
    // INSCRIPTION CLIENT
    public function inscrireClient(Request $request)
    {   
        dd($request->all());
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:utilisateurs,email',
            'telephone' => 'required|string|max:20',
            'mot_de_passe' => 'required|string|min:6',
            'ville' => 'required|string|max:255',
        ]);

        $utilisateur = Utilisateur::create([
            'nom' => $request->nom,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'mot_de_passe' => Hash::make($request->mot_de_passe),
            'ville' => $request->ville,
            'role' => 'client'
        ]);
        Mail::to($utilisateur->email)->send(new BienvenueUtilisateurMail($utilisateur));
        $token = $utilisateur->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Client inscrit avec succès',
            'utilisateur' => $utilisateur,
            'token' => $token
        ], 201);
    }

    // INSCRIPTION TRAVAILLEUR
    public function inscrireTravailleur(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:utilisateurs,email',
            'telephone' => 'required|string|max:20',
            'mot_de_passe' => 'required|string|min:6',
            'ville' => 'required|string|max:255',
            'profession' => 'required|string|max:255',
            'prix' => 'required|numeric|min:0',
            'description' => 'required|string',
            'disponibilite' => 'nullable|string|max:255',
            'cin' => 'nullable|string|max:255',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $utilisateur = Utilisateur::create([
            'nom' => $request->nom,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'mot_de_passe' => Hash::make($request->mot_de_passe),
            'ville' => $request->ville,
            'role' => 'travailleur'
        ]);

        $photoPath = null;

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');
        }

        $travailleur = Travailleur::create([
            'utilisateur_id' => $utilisateur->id,
            'profession' => $request->profession,
            'prix' => $request->prix,
            'description' => $request->description,
            'disponibilite' => $request->disponibilite ?? 'Disponible',
            'cin' => $request->cin,
            'photo' => $photoPath,
            'verifie' => false,
            'note' => 0
        ]);
        
       Mail::to($utilisateur->email)->send(new BienvenueUtilisateurMail($utilisateur));
        $travailleur->photo_url = $travailleur->photo
            ? asset('storage/' . $travailleur->photo)
            : null;

        $token = $utilisateur->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Travailleur inscrit avec succès',
            'utilisateur' => $utilisateur,
            'travailleur' => $travailleur,
            'token' => $token
        ], 201);
    }

    // CONNEXION
    public function connecter(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'mot_de_passe' => 'required'
        ]);

        $utilisateur = Utilisateur::where('email', $request->email)->first();

        if (!$utilisateur || !Hash::check($request->mot_de_passe, $utilisateur->mot_de_passe)) {
            return response()->json([
                'message' => 'Email ou mot de passe incorrect'
            ], 401);
        }

        $token = $utilisateur->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Connexion réussie',
            'utilisateur' => $utilisateur,
            'token' => $token
        ]);
    }

    // AFFICHER TOUS LES TRAVAILLEURS + FILTRES
    public function getTravailleurs(Request $request)
    {
        $query = Travailleur::with('utilisateur');

        if ($request->filled('profession')) {
            $query->where('profession', 'LIKE', '%' . $request->profession . '%');
        }

        if ($request->filled('ville')) {
            $query->whereHas('utilisateur', function ($q) use ($request) {
                $q->where('ville', 'LIKE', '%' . $request->ville . '%');
            });
        }

        if ($request->has('verifie') && $request->verifie !== '') {
            $query->where('verifie', $request->verifie);
        }

        if ($request->filled('disponibilite')) {
            $query->where('disponibilite', 'LIKE', '%' . $request->disponibilite . '%');
        }

        if ($request->filled('min_prix')) {
            $query->where('prix', '>=', $request->min_prix);
        }

        if ($request->filled('max_prix')) {
            $query->where('prix', '<=', $request->max_prix);
        }

        if ($request->filled('note')) {
            $query->where('note', '>=', $request->note);
        }

        $travailleurs = $query->get();

        $travailleurs->map(function ($travailleur) {
            $travailleur->photo_url = $travailleur->photo
                ? asset('storage/' . $travailleur->photo)
                : null;

            return $travailleur;
        });

        return response()->json($travailleurs);
    }

    // AFFICHER UN TRAVAILLEUR PAR ID
    public function getTravailleurById($id)
    {
        $travailleur = Travailleur::with('utilisateur')->find($id);

        if (!$travailleur) {
            return response()->json([
                'message' => 'Travailleur non trouvé'
            ], 404);
        }

        $travailleur->photo_url = $travailleur->photo
            ? asset('storage/' . $travailleur->photo)
            : null;

        return response()->json($travailleur);
    }

    // DECONNEXION
    public function deconnecter(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Déconnexion réussie'
        ]);
    }
}