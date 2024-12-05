function pierrePapierCiseaux() {
    let scoreJoueur = 0;
    let scoreOrdinateur = 0;

    const choixPossibles = ["Pierre", "Papier", "Ciseaux"];

    while (true) {
      // Demander au joueur de choisir
    let choixJoueur = prompt("Choisissez : Pierre, Papier ou Ciseaux. (ou tapez 'Quitter' pour arrêter)");
    
      // Gérer la sortie du jeu
    if (choixJoueur === null || choixJoueur.toLowerCase() === "quitter") {
        alert(`Merci d'avoir joué ! Score final - Vous : ${scoreJoueur}, Ordinateur : ${scoreOrdinateur}`);
        break;
    }

      // Valider l'entrée du joueur
    choixJoueur = choixJoueur.charAt(0).toUpperCase() + choixJoueur.slice(1).toLowerCase();
    if (!choixPossibles.includes(choixJoueur)) {
        alert("Entrée invalide. Veuillez choisir entre Pierre, Papier ou Ciseaux.");
        continue;
    }

      // Choix aléatoire de l'ordinateur
      const choixOrdinateur = choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
    alert(`Ordinateur a choisi : ${choixOrdinateur}`);

      // Déterminer le gagnant
    if (choixJoueur === choixOrdinateur) {
        alert("Égalité !");
    } else if (
        (choixJoueur === "Pierre" && choixOrdinateur === "Ciseaux") ||
        (choixJoueur === "Papier" && choixOrdinateur === "Pierre") ||
        (choixJoueur === "Ciseaux" && choixOrdinateur === "Papier")
    ) {
        alert("Vous gagnez cette manche !");
        scoreJoueur++;
    } else {
        alert("L'ordinateur gagne cette manche !");
        scoreOrdinateur++;
    }

      // Afficher le score
    alert(`Score - Vous : ${scoreJoueur}, Ordinateur : ${scoreOrdinateur}`);
    }
}

  // Lancer le jeu
pierrePapierCiseaux();