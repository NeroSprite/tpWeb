
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Shape(c, s){
    this.couleur = c;
    this.size = s;

}

function Rectangle(PtX , PtY , width, height , color, size){
    Shape.call(this , color , size);
    this.PtX = PtX;
    this.PtY = PtY;
    this.width = width;
    this.height = height
}
Rectangle.prototype = new Shape();

function Line(startX , startY , endX, endY, color , size){
    Shape.call(this , color , size);
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
}
Line.prototype = new Shape();

function Drawing() {
    this.listForme = new Array();

    Drawing.prototype.addShape = function(shape){
        this.listForme.push(shape);
    }



}