// Ajoute un écouteur d'événements pour les événements 'click' sur le document
document.addEventListener("click", (event: MouseEvent) => {
  // Lorsqu'un événement de clic se produit, affiche les coordonnées x et y du pointeur de la souris
  console.log(`x : ${event.clientX}, y : ${event.clientY}`);
});