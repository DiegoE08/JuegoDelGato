var tachaIMG, circuloIMG;
var tablero, tableroIMG;
var score1 = 0;
var score2 = 0;
var iniciar, iniciarIMG;
var blanco;
var reiniciar, reiniciarIMG;

var circle, circleDOS, circleTRES, circleCUATRO, circleCINCO, circleSEIS, circleSIETE, circleOCHO, circleNUEVE;
var tacha, tacha2, tacha3, tacha4, tacha5, tacha6, tacha7, tacha8, tacha9;

function preload(){
  tableroIMG = loadImage("tablero.png");
  tachaIMG = loadImage("tache.png");

  circuloIMG = loadImage("circle.png");
  tachaIMG = loadImage("tache.png");

  iniciarIMG = loadImage("iniciar.png");
  reiniciarIMG = loadImage("reiniciar.png");
}

function setup(){
  createCanvas(600,600);
  tablero = createSprite(300, 300, 20, 20);
  tablero.addImage("table", tableroIMG);

  iniciar = createSprite(350, 50, 20, 20);
  iniciar.addImage("iniciar", iniciarIMG);

  reiniciar = createSprite(300, 180, 20, 20);
  reiniciar.addImage("reiniciar", reiniciarIMG);

  blanco = createSprite(15, 45, 600, 20);
  blanco.shapeColor = "white";

  reiniciar.visible = false;

  

  tacha = createSprite(230, 230, 20, 20);
  tacha2 = createSprite(300, 230, 20, 20);
  tacha3 = createSprite(370, 230, 20, 20);
  tacha4 = createSprite(230, 310, 20, 20);
  tacha5 = createSprite(300, 310, 20, 20);
  tacha6 = createSprite(370, 310, 20, 20);
  tacha7 = createSprite(230, 380, 20, 20);
  tacha8 = createSprite(300, 380, 20, 20);
  tacha9 = createSprite(370, 380, 20, 20);

  tacha.addImage("tacha", tachaIMG);
  tacha2.addImage("tacha", tachaIMG);
  tacha3.addImage("tacha", tachaIMG);
  tacha4.addImage("tacha", tachaIMG);
  tacha5.addImage("tacha", tachaIMG);
  tacha6.addImage("tacha", tachaIMG);
  tacha7.addImage("tacha", tachaIMG);
  tacha8.addImage("tacha", tachaIMG);
  tacha9.addImage("tacha", tachaIMG);


  circle = createSprite(230, 230, 20, 20);
  circle.scale = 1.32;
  circleDOS = createSprite(300, 230, 20, 20);
  circleDOS.scale = 1.32;
  circleTRES = createSprite(370, 230, 20, 20);
  circleTRES.scale = 1.32;
  circleCUATRO = createSprite(230, 310, 20, 20);
  circleCUATRO.scale = 1.32;
  circleCINCO = createSprite(300, 310, 20, 20);
  circleCINCO.scale = 1.32;
  circleSEIS = createSprite(370, 310, 20, 20);
  circleSEIS.scale = 1.32;
  circleSIETE = createSprite(230, 380, 20, 20);
  circleSIETE.scale = 1.32;
  circleOCHO = createSprite(300, 380, 20, 20);
  circleOCHO.scale = 1.32;
  circleNUEVE = createSprite(370, 380, 20, 20);
  circleNUEVE.scale = 1.32;

  circle.addImage("circulo", circuloIMG);
  circleDOS.addImage("circulo", circuloIMG);
  circleTRES.addImage("circulo", circuloIMG);
  circleCUATRO.addImage("circulo", circuloIMG);
  circleCINCO.addImage("circulo", circuloIMG);
  circleSEIS.addImage("circulo", circuloIMG);
  circleSIETE.addImage("circulo", circuloIMG);
  circleOCHO.addImage("circulo", circuloIMG);
  circleNUEVE.addImage("circulo", circuloIMG);

  tacha.visible = false;
  tacha2.visible = false;
  tacha3.visible = false;
  tacha4.visible = false;
  tacha5.visible = false;
  tacha6.visible = false;
  tacha7.visible = false;
  tacha8.visible = false;
  tacha9.visible = false;
  
  circle.visible = false;
  circleDOS.visible = false;
  circleTRES.visible = false;
  circleCUATRO.visible = false;
  circleCINCO.visible = false;
  circleSEIS.visible = false;
  circleSIETE.visible = false;
  circleOCHO.visible = false;
  circleNUEVE.visible = false;
  tablero.visible = false;
  blanco.visible = false;
   
 
}


function draw(){
  background("white");
  text("Score P1: " + score1, 100, 30);
  text("Score P2: " + score2, 200, 30);
  text("Si sabes jugar picale aqui en la flechita", 100, 50);
  
    

  if(mousePressedOver(iniciar)){
    tacha.visible = false;
    tacha2.visible = false;
    tacha3.visible = false;
    tacha4.visible = false;
    tacha5.visible = false;
    tacha6.visible = false;
    tacha7.visible = false;
    tacha8.visible = false;
    tacha9.visible = false;
  
    circle.visible = false;
    circleDOS.visible = false;
    circleTRES.visible = false;
    circleCUATRO.visible = false;
    circleCINCO.visible = false;
    circleSEIS.visible = false;
    circleSIETE.visible = false;
    circleOCHO.visible = false;
    circleNUEVE.visible = false;
    tablero.visible = true;
    iniciar.visible = false;
    blanco.visible = true;
  }

  if (keyDown("1")){
      circle.visible = true;
      
  }  
  
  if (keyDown("2")){
      circleDOS.visible = true;
      
  }

  if (keyDown("3")){
    circleTRES.visible = true;
    
  }

  if (keyDown("4")){
    circleCUATRO.visible = true;
    
  }
  if (keyDown("5")){
    circleCINCO.visible = true;
    
}
if (keyDown("6")){
  circleSEIS.visible = true;
  
}
if (keyDown("7")){
  circleSIETE.visible = true;
  
}
if (keyDown("8")){
  circleOCHO.visible = true;
  
}
if (keyDown("9")){
  circleNUEVE.visible = true;
  
}
if (circle.visible === false){

  if(mousePressedOver(tacha)){
    tacha.visible = true;
  }
}
if (tacha.visible === true){
  circle.visible = false;

}
if (circleDOS.visible  === false){
  if(mousePressedOver(tacha2)){
    tacha2.visible = true;
  }
}
if (tacha2.visible === true){
  circleDOS.visible = false;

}
if (circleTRES.visible === false){
  if(mousePressedOver(tacha3)){
    tacha3.visible = true;
  }
}
if (tacha3.visible === true){
  circleTRES.visible = false;

}
if (circleCUATRO.visible === false){
  if(mousePressedOver(tacha4)){
    tacha4.visible = true;
  }
}
if (tacha4.visible === true){
  circleCUATRO.visible = false;

}
if (circleCINCO.visible === false){
  if(mousePressedOver(tacha5)){
    tacha5.visible = true;
  }
}
if (tacha5.visible === true){
  circleCINCO.visible = false;

}
if (circleSEIS.visible === false){
  if(mousePressedOver(tacha6)){
    tacha6.visible = true;
  }
}
if (tacha6.visible === true){
  circleSEIS.visible = false;

}
if (circleSIETE.visible === false){
  if(mousePressedOver(tacha7)){
    tacha7.visible = true;
  }
}
if (tacha7.visible === true){
  circleSIETE.visible = false;

}
if (circleOCHO.visible === false) {
  if(mousePressedOver(tacha8)){
    tacha8.visible = true;
  }
}
if (tacha8.visible === true){
  circleOCHO.visible = false;

}
if (circleNUEVE.visible === false){
  if(mousePressedOver(tacha9)){
    tacha9.visible = true;
  }
}
if (tacha9.visible === true){
  circleNUEVE.visible = false;
}

  drawSprites();
}

