
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startX = 0;
  this.startY = 0;
  this.endX = 0;
  this.endY = 0;
  this.pressed = false;


	// Developper les 3 fonctions gérant les événements
  DnD.prototype.Press = function (evt){
    let res = getMousePosition(canvas, evt);
    this.startX = res.x;
    this.startY = res.y;
    this.endX = res.x;
    this.endY = res.y;
    this.pressed = true;
    console.log("Start : " + this.startX + " : " + this.startY);
    interactor.onInteractionStart(this);
  }.bind(this);

  DnD.prototype.Move = function (evt){
    if(this.pressed){
      let res = getMousePosition(canvas, evt);
      this.endX = res.x;
      this.endY = res.y;
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  DnD.prototype.Release = function (evt){
    getMousePosition(canvas, evt);
    this.pressed = false;
    console.log("Stop : " + this.endX + " : " + this.endY);
    interactor.onInteractionEnd(this);
  }.bind(this);


	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.Press, false);
  canvas.addEventListener('mousemove', this.Move, false);
  canvas.addEventListener('mouseup', this.Release, false);

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



