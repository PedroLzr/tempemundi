let imgMapa;
let data = [];
let ciudades = array("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=28001,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric",
                    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2a561310e42c062d6e1109fc958905c6&zip=03501,es&units=metric");

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
    pintarCuadricula();
    pintarTodasCiudades();
}

function pintarTodasCiudades(){
    noStroke();
    fill(255, 0, 0);
    textSize(14);

    pintarMadrid();
}

function pintarMadrid(){
    text(data[0].list[i].main.temp_max, 50, 80);
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