let imgMapa;

function preload(){
    imgMapa = loadImage('assets/World-Map.svg');
}

function setup(){
    createCanvas(400, 400);
    Image(imgMapa, 0, 0);
}

function draw(){
    background(222);
}