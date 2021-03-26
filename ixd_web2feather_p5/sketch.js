
//Written by William Luk
// posts data to an Adafuit.io feed
//modified by michelle lillo meza
let url = 'https://io.adafruit.com/api/v2/MeeshisChaos/feeds/servo/data';
let slider;
let img;
var data = 0;

function preload (){
    img = loadImage('img/hamburger.png');
    img2 = loadImage('img/flyingmoney.png');
    img3 = loadImage('img/pizza.png');
    img4 = loadImage('img/sushi.png');
    img5 = loadImage('img/salad.png');
    img6 = loadImage('img/no.png');
    img7 = loadImage('img/cupcake.png');

    fontMoranga = loadFont('typ/Moranga-Medium.otf');
}

function setup() {
  createCanvas(1500,500);
//  myButton = createButton('Click me to turn on the LED!');
//  myButton.mousePressed(press);
//  myButton.mouseReleased(off);
    
  slider = createSlider(0, 180, 0);
  slider.position(400, 400);
  slider.style('width', '600px');

}

function draw() {
     background(255, 204, 0);
    textFont(fontMoranga);
        textSize(55);
      text('What is for lunch today?', 400,150);
        image(img2, 400,300,50,50);
        image(img,500,300,50,50);
    image(img3,600,300,50,50);
        image(img4,700,300,50,50);
        image(img5,800,300,50,50);
        image(img6,950,300,50,50);
      image(img7,875,300,50,50);
      let val = slider.value();
background(val, 0, 180, 0);
     console.log(data);
  sendData(data);
}

function press() {
  data = 1;
  console.log(data);
  sendData(data);
}

function off() {
  data = 0;
  console.log(data);
  sendData(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": ""
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}
