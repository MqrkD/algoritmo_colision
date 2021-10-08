function setup() {
  createCanvas(800,400);
  RectanguloFijo = createSprite(400, 200, 50, 50);
  RectanguloFijo.shapeColor="green";
  RectanguloFijo.debug=true;

  RectanguloMovil = createSprite(400, 200, 50, 50);
  RectanguloMovil.shapeColor="green";
  RectanguloMovil.debug=true;
}

function draw() {
  background(255,255,255);  
  RectanguloMovil.x = mouseX;
  RectanguloMovil.y = mouseY;

  if(RectanguloFijo.x-RectanguloMovil.x < RectanguloFijo.width/2+RectanguloMovil.width/2 &&
    RectanguloMovil.x-RectanguloFijo.x < RectanguloFijo.width/2+RectanguloMovil.width/2 &&

    RectanguloFijo.y-RectanguloMovil.y < RectanguloFijo.height/2+RectanguloMovil.height/2 &&
    RectanguloMovil.y-RectanguloFijo.y < RectanguloFijo.height/2+RectanguloMovil.height/2) {

    RectanguloMovil.shapeColor="blue";
    RectanguloFijo.shapeColor="blue";
    
  } else {

    RectanguloFijo.shapeColor="green";
    RectanguloMovil.shapeColor="green";

  }

  drawSprites();
}