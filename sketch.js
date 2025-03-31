let img_1;
let img_2;
let img_3;
let img_4;
let img_5;
let img_6;
let state = 0;

function preload(){
  img_1 = loadImage('01.png')
  img_2 = loadImage('02.png')
  img_3 = loadImage('03.png')
  img_4 = loadImage('04.png')
  img_5 = loadImage('05.png')
  img_6 = loadImage('06.png')
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <= 380){
    if(mouseY >= 688 && mouseY <= 748){
      if(state == 0){
        state = 1;
      }else if (state == 1){
        state = 0;
      }
    }
  }
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(225);
  if(state == 0){
  image(img_1, 0,0,393,128);
  image(img_2, 0, 128, 393, 284);
  image(img_3, 0, 412, 393, 440);
  image(img_4, 0, 764, 393, 88);
  image(img_5, 320, 688, 60, 60);
  }else if (state == 1){
    image(img_1, 0,0,393,128);
  image(img_2, 0, 128, 393, 284);
  image(img_3, 0, 412, 393, 440);
  image(img_4, 0, 764, 393, 88);
  image(img_5, 320, 688, 60, 60);
  image(img_6, 0, 612, 393, 152);
  }
}