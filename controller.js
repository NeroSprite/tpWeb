
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
		if(this.currentShape === editingMode.rect ) {
			this.currentShape = new Rectangle(myDND.startX, myDND.startY, 0, 0, this.currLineWidth, this.currColour)
			console.log("Start creation of a Rectangle...");
		}
		else {
			this.currentShape = new Line(myDND.startX, myDND.startY, myDND.endX, myDND.endY, this.currLineWidth, this.currColour)
			console.log("Now we do a Line ...");
		}
	};

	this.onInteractionUpdate = function (myDND) {
		switch (this.currEditingMode) {
			case editingMode.rect: {
				this.currentShape = new Rectangle(myDND.startX,
					myDND.startY,
					myDND.endX - myDND.startX,
					myDND.endY - myDND.startY,
					this.currLineWidth,
					this.currColour);
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(myDND.startX, myDND.startY, myDND.endX, myDND.endY, this.currLineWidth, this.currColour);
				break;
			}
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx, canvas);
	}.bind(this);


	this.onInteractionEnd = function (myDND) {
		console.log("Add new shape to the drawing...")
		drawing.addShape(this.currentShape);
		drawing.paint(ctx, canvas);
	}.bind(this);


}


