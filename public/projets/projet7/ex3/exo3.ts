


// Définit un intervalle pour déclencher toutes les secondes (1000 millisecondes)
setInterval(() => {
    // Ajoute un écouteur d'événements pour les événements 'mousemove' sur le document
    document.addEventListener("mousemove", (event: MouseEvent) => {
    // Lorsqu'un événement de déplacement de la souris se produit, affiche les coordonnées x et y du pointeur de la souris
    console.log(`x: ${event.clientX}, y: ${event.clientY}`);
    });
}, 1000); // 1000 millisecondes = 1 seconde
