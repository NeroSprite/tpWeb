
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
//ctx.fillStyle = '#F0F0F0'; // set canvas' background color
//ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#e70f0f');
//rec.paint(ctx);
//var ligne = new Line(100, 20, 550, 500, 5, '#4ecc00');
//ligne.paint(ctx);
// tester également Dessin.
////

// Should this function stay on main ? or in controller ?
function deleteShape(index) {
    drawing.listForme.splice(index - 1,1);
    pencil.updateShapeList();
    drawing.paint(ctx, canvas);
    console.log("remove : " + index);
}

// Code final à utiliser pour manipuler Pencil.
drawing = new Drawing();
pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

