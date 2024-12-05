function pierrePapierCiseaux() {
    let scoreJoueur = 0;
    let scoreOrdinateur = 0;

    const choixPossibles = ["Pierre", "Papier", "Ciseaux"];

    while (true) {
      // Demander au joueur de choisir avec des chiffres
    let choixJoueur = prompt(
        "Choisissez :\n1 - Pierre\n2 - Papier\n3 - Ciseaux\n(ou tapez '0' pour quitter)"
    );

      // Gérer la sortie du jeu
    if (choixJoueur === null || choixJoueur === "0") {
        alert(
        `Merci d'avoir joué ! Score final - Vous : ${scoreJoueur}, Ordinateur : ${scoreOrdinateur}`
        );
        break;
    }
  
      // Convertir l'entrée en un entier et valider
    choixJoueur = parseInt(choixJoueur, 10);
    if (![1, 2, 3].includes(choixJoueur)) {
        alert(
        "Entrée invalide. Veuillez choisir un chiffre entre 1 (Pierre), 2 (Papier) ou 3 (Ciseaux)."
        );
        continue;
    }
  
      // Traduire le choix du joueur en texte
    const choixJoueurTexte = choixPossibles[choixJoueur - 1];
  
      // Choix aléatoire de l'ordinateur
    const choixOrdinateurTexte =
        choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
    alert(`Vous avez choisi : ${choixJoueurTexte}`);
    alert(`Ordinateur a choisi : ${choixOrdinateurTexte}`);

      // Déterminer le gagnant
    if (choixJoueurTexte === choixOrdinateurTexte) {
        alert("Égalité !");
    } else if (
        (choixJoueurTexte === "Pierre" && choixOrdinateurTexte === "Ciseaux") ||
        (choixJoueurTexte === "Papier" && choixOrdinateurTexte === "Pierre") ||
        (choixJoueurTexte === "Ciseaux" && choixOrdinateurTexte === "Papier")
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