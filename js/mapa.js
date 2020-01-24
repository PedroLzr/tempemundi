let imgMapa;
let data = [];
let ciudades = new Array("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=28001,es&units=metric",
 /*Paris*/          "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=75000,fr&units=metric",
 /*Bogotá*/         "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=110111,co&units=metric",
 /*Nueva York*/     "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=10001,us&units=metric",
 /*Rauma*/          "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=26100,fi&units=metric",
 /*Sydney*/         "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=2000,au&units=metric",
 /*Moscú*/          "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=101000,ru&units=metric");

function preload(){
    imgMapa = loadImage('assets/World-Map.svg');
    for(let i = 0; i<ciudades.length; i++){
        data.push(loadJSON(ciudades[i]));
    }
}

function setup(){
    createCanvas(918, 466);
    imgMapa.resize(918, 466);
    image(imgMapa, 0, 0);
}

function draw(){
    //pintarCuadricula();
    pintarCiudades();
}

function pintarCiudades(){
    noStroke();
    fill(255, 0, 0);
    textSize(10);

    pintarTemperaturas();
}

function pintarTemperaturas(){
    text(data[0].list[0].main.temp + char(176), 420, 120); //Madrid
    text(data[1].list[0].main.temp + char(176), 440, 100); //Paris
    text(data[2].list[0].main.temp + char(176), 240, 230); //Bogotá
    text(data[3].list[0].main.temp + char(176), 250, 120); //Nueva York
    text(data[4].list[0].main.temp + char(176), 480, 50);  //Rauma
    text(data[5].list[0].main.temp + char(176), 800, 320); //Sydney
    text(data[6].list[0].main.temp + char(176), 520, 60);  //Moscú
}

function pintarCuadricula(){
    textSize(10);
    for(let x = 0; x < width; x=x+10){
        if((x/10)%2==0){
            text(x/10, x, 10);
        }
        line(x, 0, x, height);
    }
    for(let y = 0; y < height; y=y+10){
        if((y/10)%2==0){
            text(y/10, 10, y);
        }
        line(0, y, width, y);
    }
}