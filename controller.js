
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('colour').addEventListener("change", function (){
		this.currColour = document.getElementById('colour').value;
		console.log("New color : " + this.currColour);
	}.bind(this), false);

	document.getElementById('spinnerWidth').addEventListener("change", function (){
		this.currLineWidth = document.getElementById('spinnerWidth').value;
		console.log("New line width : " + this.currLineWidth);
	}.bind(this), false);


	document.getElementById('butRect').addEventListener("click", function () {
		this.currEditingMode = 0;
		console.log("Bouton Rect");
	}.bind(this) , false);

	document.getElementById('butLine').addEventListener("click", function () {
		this.currEditingMode = 1;
		console.log("Bouton Line");
	}.bind(this) , false);


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function( myDND ) {
		this.currLineWidth = document.getElementById('spinnerWidth').value; // taille du trait
		this.currColour = document.getElementById('colour').value;
		if(this.currentShape === editingMode.rect ) {
			console.log("Start creation of a Rectangle...");
		}
		else {
			console.log("Now we do a Line ...");
		}
	}





};


