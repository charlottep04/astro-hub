// Définit un intervalle pour déclencher toutes les secondes (1000 millisecondes)
setInterval(function () {
    // Ajoute un écouteur d'événements pour les événements 'mousemove' sur le document
    document.addEventListener("mousemove", function (event) {
        // Lorsqu'un événement de déplacement de la souris se produit, affiche les coordonnées x et y du pointeur de la souris
        console.log("x: ".concat(event.clientX, ", y: ").concat(event.clientY));
    });
}, 1000); // 1000 millisecondes = 1 seconde
