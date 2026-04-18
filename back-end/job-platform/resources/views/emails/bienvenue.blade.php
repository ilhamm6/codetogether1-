<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bienvenue sur khidma.ma</title>
</head>
<body>
    <h2>Bonjour {{ $utilisateur->nom }},</h2>

    <p>Bienvenue sur <strong>khidma.ma</strong> !</p>

    @if($utilisateur->role === 'client')
        <p>Votre compte client a été créé avec succès.</p>
        <p>Vous pouvez maintenant chercher des professionnels sur notre plateforme.</p>
    @elseif($utilisateur->role === 'travailleur')
        <p>Votre compte travailleur a été créé avec succès.</p>
        <p>Vous pouvez maintenant proposer vos services sur notre plateforme.</p>
    @endif

    <p>Merci de votre confiance.</p>
    <p>L’équipe khidma.ma</p>
</body>
</html>