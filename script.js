document.addEventListener("DOMContentLoaded", () => {
    const choixPossibles = ["Pierre", "Papier", "Ciseaux"];
    let mode = "solo";
    let scoreJoueur = 0;
    let scoreOrdinateur = 0;
    let scoreJoueur1 = 0;
    let scoreJoueur2 = 0;
    let joueurActuel = 1;
    let choixJoueur1 = null;

    const btnSolo = document.getElementById("btn-solo");
    const btnMultijoueur = document.getElementById("btn-multijoueur");
    const options = document.querySelectorAll(".btn-option");
    const resultDiv = document.getElementById("result");
    const modeSoloDiv = document.getElementById("mode-solo");
    const modeMultijoueurDiv = document.getElementById("mode-multijoueur");

    const updateScores = () => {
        document.getElementById("score-joueur").textContent = scoreJoueur;
        document.getElementById("score-ordinateur").textContent = scoreOrdinateur;
        document.getElementById("score-joueur1").textContent = scoreJoueur1;
        document.getElementById("score-joueur2").textContent = scoreJoueur2;
    };

    const determinerGagnant = (choix1, choix2) => {
        if (choix1 === choix2) return "Égalité";
        if (
            (choix1 === "Pierre" && choix2 === "Ciseaux") ||
            (choix1 === "Papier" && choix2 === "Pierre") ||
            (choix1 === "Ciseaux" && choix2 === "Papier")
        ) {
            return "Joueur 1";
        }
        return "Joueur 2";
    };

    btnSolo.addEventListener("click", () => {
        mode = "solo";
        modeSoloDiv.classList.remove("hidden");
        modeMultijoueurDiv.classList.add("hidden");
    });

    btnMultijoueur.addEventListener("click", () => {
        mode = "multijoueur";
        modeSoloDiv.classList.add("hidden");
        modeMultijoueurDiv.classList.remove("hidden");
        joueurActuel = 1;
        choixJoueur1 = null;
    });

    options.forEach((button) => {
        button.addEventListener("click", () => {
            const choix = button.dataset.choice;

            if (mode === "solo") {
                const choixOrdinateur =
                    choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
                const gagnant = determinerGagnant(choix, choixOrdinateur);

                if (gagnant === "Joueur 1") {
                    scoreJoueur++;
                } else if (gagnant === "Joueur 2") {
                    scoreOrdinateur++;
                }

                resultDiv.textContent = `Vous : ${choix}, Ordinateur : ${choixOrdinateur}. ${gagnant} gagne !`;
            } else if (mode === "multijoueur") {
                if (joueurActuel === 1) {
                    choixJoueur1 = choix;
                    joueurActuel = 2;
                    resultDiv.textContent = "Joueur 2, à vous de jouer !";
                } else {
                    const gagnant = determinerGagnant(choixJoueur1, choix);
                    if (gagnant === "Joueur 1") {
                        scoreJoueur1++;
                    } else if (gagnant === "Joueur 2") {
                        scoreJoueur2++;
                    }
                    resultDiv.textContent = `Joueur 1 : ${choixJoueur1}, Joueur 2 : ${choix}. ${gagnant} gagne !`;
                    joueurActuel = 1;
                    choixJoueur1 = null;
                }
            }

            updateScores();
        });
    });
});