/* SCRIPT */

// Attend que le DOM soit chargé pour exécuter
window.addEventListener('DOMContentLoaded', function() {

function goMouse(lng) {
  // Ciblage
  const divCercle = document.getElementById('c0'),
        divDebug = document.querySelector('.debug'),
        body = document.getElementsByTagName('body'),
        opa = 1/lng;
  let divs = [],
      posX = [],
      posY = [];
  // Création des occurences pour la trace
  for (let i = lng; i >= 1; i--) {
    divs[i] = document.createElement('div');
    divs[i].id = `c${i}`;
    body[0].insertBefore(divs[i], divCercle);
    divs[i].style.transform = `translateX(${i * 25}px)`;
    divs[i].style.opacity = `${1 - (opa * i)}`;
    divs[i].style.width = `${ divCercle.offsetWidth - i }px`;
    divs[i].style.height = `${ divCercle.offsetHeight - i }px`;
  }

  // Evenement mouvement cercle/curseur
  const cercleCursor = function(event) {
    for (let i = lng; i > 0; i--) {
      posX[i] = posX[i-1];
      posY[i] = posY[i-1];
    }
    // Récupération des coordonnées de la souris
    posX[0] = event.clientX - `${ divCercle.offsetWidth / 2 }`;
    posY[0] = event.clientY - `${ divCercle.offsetHeight / 2 }`;
    // Affectation des coordonnées au cercle principal
    divDebug.textContent = `${ posX[0] } | ${ posY[0] }`;
    // Déplacer les divs 'traces'
    for (let i = lng; i >= 0; i--) {
      document.querySelector(`#c${i}`).style.transform = `translate(${posX[i]}px, ${posY[i]}px)`;
    }
  };

  document.addEventListener('mousemove', cercleCursor);

  const fadeOutCircle = function(event) {
    
  }
}

goMouse(50);

});
