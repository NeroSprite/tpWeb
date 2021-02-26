
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('colour').addEventListener("change", function (){
		this.currColour = document.getElementById('colour').value;
	}.bind(this));


	document.getElementById('butRect').addEventListener("click", function () {
		this.currEditingMode = editingMode.rect;
		console.log("Bouton Rect");
	}.bind(this));

	document.getElementById('butLine').addEventListener("click", function () {
		this.currEditingMode = editingMode.line;
		console.log("Bouton Line");
	}.bind(this));


	new DnD(canvas, this);

	onInteractionEnd = function(){

	}
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


