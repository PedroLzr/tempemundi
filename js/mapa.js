let imgMapa;
let data = [];
let cbTemperaturas, cbHumedad, cbPresion;
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
    cbTemperaturas = createCheckbox('Temperaturas', true);
    cbHumedad = createCheckbox('Humedad', false);
    cbPresion = createCheckbox('Presion Atmosferica', false);

    createCanvas(918, 466);
    imgMapa.resize(918, 466);
    image(imgMapa, 0, 0);
}

function draw(){
    image(imgMapa, 0, 0);

    //pintarCuadricula();
    pintarCiudades();
}

function pintarCiudades(){
    noStroke();
    textSize(10);

    if(cbTemperaturas.checked()){
        pintarTemperaturas();
    }
    if(cbHumedad.checked()){
        pintarHumedad();
    }
    if(cbPresion.checked()){
        pintarPresion();
    }
}

function pintarTemperaturas(){
    fill(255, 0, 0);

    text(data[0].list[0].main.temp + char(176), 420, 120); //Madrid
    text(data[1].list[0].main.temp + char(176), 440, 100); //Paris
    text(data[2].list[0].main.temp + char(176), 240, 230); //Bogotá
    text(data[3].list[0].main.temp + char(176), 250, 120); //Nueva York
    text(data[4].list[0].main.temp + char(176), 480, 50);  //Rauma
    text(data[5].list[0].main.temp + char(176), 800, 320); //Sydney
    text(data[6].list[0].main.temp + char(176), 520, 70);  //Moscú
}

function pintarHumedad(){
    fill(0, 0, 200);

    text(data[0].list[0].main.humidity + "%", 420, 120); //Madrid
    text(data[1].list[0].main.humidity + "%", 440, 100); //Paris
    text(data[2].list[0].main.humidity + "%", 240, 230); //Bogotá
    text(data[3].list[0].main.humidity + "%", 250, 120); //Nueva York
    text(data[4].list[0].main.humidity + "%", 480, 50);  //Rauma
    text(data[5].list[0].main.humidity + "%", 800, 320); //Sydney
    text(data[6].list[0].main.humidity + "%", 520, 70);  //Moscú
}

function pintarPresion(){
    fill(0, 200, 0);

    text(data[0].list[0].main.pressure + "mm", 420, 120); //Madrid
    text(data[1].list[0].main.pressure + "mm", 440, 100); //Paris
    text(data[2].list[0].main.pressure + "mm", 240, 230); //Bogotá
    text(data[3].list[0].main.pressure + "mm", 250, 120); //Nueva York
    text(data[4].list[0].main.pressure + "mm", 480, 50);  //Rauma
    text(data[5].list[0].main.pressure + "mm", 800, 320); //Sydney
    text(data[6].list[0].main.pressure + "mm", 520, 70);  //Moscú
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