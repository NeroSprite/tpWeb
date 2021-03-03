
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Shape(s, c){
    this.color = c;
    this.size = s;

}

function Rectangle(PtX , PtY , width, height , size, color){
    Shape.call(this , size , color);
    this.PtX = PtX;
    this.PtY = PtY;
    this.width = width;
    this.height = height
}

Rectangle.prototype = new Shape();

function Line(startX , startY , endX, endY, size , color){
    Shape.call(this , size , color);
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
}

Line.prototype = new Shape();

function Drawing() {
    this.listForme = [];

    Drawing.prototype.addShape = function(shape){
        this.listForme.push(shape);
    }

    Drawing.prototype.getShapes = function(){
        return this.listForme;
    }
}