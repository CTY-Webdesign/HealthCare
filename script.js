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
