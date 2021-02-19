
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startX;
  this.startY;
  this.endX;
  this.endY;
  this.pressed;


	// Developper les 3 fonctions gérant les événements
  DnD.prototype.Press = function (evt){
    this.startX = evt.x;
    this.startY = evt.y;
    this.pressed = true;
    console.log("Start : " + this.startX + " : " + this.startY);
  }

  DnD.prototype.Move = function (evt){
    if(this.pressed){
      this.endX = evt.x;
      this.endY = evt.y;
    }
  }

  DnD.prototype.Release = function (evt){
    this.pressed = false;
    console.log("Stop : " + this.endX + " : " + this.endY);
  }


	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.Press, false);
  canvas.addEventListener('mousemove', this.Move, false);
  canvas.addEventListener('mouseup', this.Release, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



