<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    // send message
    public function send(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:utilisateurs,id',
            'message' => 'required|string'
        ]);

        $message = Message::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $request->receiver_id,
            'message' => $request->message,
        ]);

        return response()->json($message, 201);
    }

    // get conversation
    public function conversation($userId)
    {
        $messages = Message::where(function ($q) use ($userId) {
            $q->where('sender_id', auth()->id())
              ->where('receiver_id', $userId);
        })
        ->orWhere(function ($q) use ($userId) {
            $q->where('sender_id', $userId)
              ->where('receiver_id', auth()->id());
        })
        ->orderBy('created_at')
        ->get();

        return response()->json($messages);
    }
}