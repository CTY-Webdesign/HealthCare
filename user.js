// Ouvrir le menu latéral
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "250px"; // Largeur du menu
}

// Fermer le menu latéral
function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "0"; // Réduit la largeur à 0
}

// Mettre à jour dynamiquement les données des sections
document.addEventListener("DOMContentLoaded", () => {
    // Simuler les données (à remplacer par des appels à une API ou des calculs en temps réel)
    const dailySteps = 7321; // Exemple : Nombre de pas
    const averageBPM = 78; // Exemple : BPM moyen

    // Mettre à jour les éléments DOM avec les données
    const stepsElement = document.querySelector("#banner:nth-of-type(1) .box h3");
    const bpmElement = document.querySelector("#banner:nth-of-type(2) .box:nth-of-type(2) h3");

    if (stepsElement) {
        stepsElement.innerText = `${dailySteps} pas`;
    }

    if (bpmElement) {
        bpmElement.innerText = `${averageBPM} BPM`;
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const tailleElement = document.querySelector("#taille");
    const poidsElement = document.querySelector("#poids");
    const imcElement = document.querySelector("#imc");
    const imcStatusElement = document.querySelector("#imc-status");
    const editButtons = document.querySelectorAll(".edit-btn");

    // Fonction pour valider une valeur numérique positive
    const isValidNumber = (value) => {
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
    };

    // Fonction pour calculer et afficher l'IMC et son état
    const calculerIMC = () => {
        const taille = parseFloat(tailleElement.textContent);
        const poids = parseFloat(poidsElement.textContent);

        if (!isNaN(taille) && !isNaN(poids) && taille > 0) {
            const tailleEnMetres = taille / 100;
            const imc = (poids / (tailleEnMetres ** 2)).toFixed(1);
            imcElement.textContent = imc;

            // Déterminer l'état de l'IMC
            let statusText = "";
            let statusColor = "";

            if (imc < 18.5) {
                statusText = `Insuffisance pondérale (sous-poids) : IMC inférieur à 18,5. Le poids est trop bas pour la taille.`;
                statusColor = "orange";
            } else if (imc >= 18.5 && imc < 25) {
                statusText = `Poids normal : IMC entre 18,5 et 24,9. Le poids est adapté pour la taille.`;
                statusColor = "green";
            } else if (imc >= 25 && imc < 30) {
                statusText = `Surpoids : IMC entre 25 et 29,9. Le poids est un peu élevé pour la taille.`;
                statusColor = "yellow";
            } else if (imc >= 30 && imc < 35) {
                statusText = `Obésité modérée : IMC entre 30 et 34,9. Excès de poids plus important, ce qui peut affecter la santé.`;
                statusColor = "red";
            } else {
                statusText = `Obésité sévère ou morbide : IMC de 35 et plus. Le poids très élevé peut engendrer des risques majeurs pour la santé.`;
                statusColor = "darkred";
            }

            imcElement.style.color = statusColor;
            imcStatusElement.textContent = statusText;
            imcStatusElement.style.color = statusColor;
        } else {
            imcElement.textContent = "--";
            imcElement.style.color = "inherit";
            imcStatusElement.textContent = "";
        }
    };

    // Événements pour modifier la taille ou le poids
    editButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const field = e.target.dataset.field;
            const valueElement = document.querySelector(`#${field}`);
            const currentValue = valueElement.textContent.split(" ")[0]; // Extraction du nombre actuel (sans unité)

            // Demander une nouvelle valeur à l'utilisateur
            const newValue = prompt(`Entrez la nouvelle valeur pour ${field} :`, currentValue)?.trim();

            if (newValue && isValidNumber(newValue)) {
                valueElement.textContent = `${parseFloat(newValue)} ${field === "taille" ? "cm" : "kg"}`;
                calculerIMC(); // Recalcule l'IMC après modification
            } else if (newValue) {
                alert("Veuillez entrer un nombre valide et positif.");
            }
        });
    });

    // Calcul initial de l'IMC
    calculerIMC();
});