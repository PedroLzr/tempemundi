let imgMapa;

function preload(){
    imgMapa = loadImage('assets/World-Map.svg');
}

function setup(){
    createCanvas(918, 466);
    imgMapa.resize(918, 466);
    image(imgMapa, 0, 0);
}

function draw(){
    pintarCuadricula();
}

function pintarCuadricula(){
    for(let i = 0; i < width; i+10){
        line(i, 0, i, height);
    }
    for(let i = 0; i < height; i+10){
        line(0, i, width, i);
    }
}