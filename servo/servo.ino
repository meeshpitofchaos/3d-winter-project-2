//modified by Michelle Lillo Meza
//Original code by Adafruit IO Basics Servo
#include <Servo.h>

// pin used to control the servo
#include "config.h"
#define SERVO_PIN 2

Servo servo;
 
// set up the 'servo' feed
AdafruitIO_Feed *servo_feed = io.feed("servo");


void setup() {
 
  // start the serial connection
  Serial.begin(115200);
 
  // wait for serial monitor to open
  while(! Serial);
 
  // tell the servo class which pin we are using
  servo.attach(SERVO_PIN);
 
  // connect to io.adafruit.com
  Serial.print("Connecting to Adafruit IO");
  io.connect();
 
  // set up a message handler for the 'servo' feed.
  // the handleMessage function (defined below)
  // will be called whenever a message is
  // received from adafruit io.
  servo_feed->onMessage(handleMessage);
 
  // wait for a connection
  while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
 
  // we are connected
  Serial.println();
  Serial.println(io.statusText());
 
}

void loop() {
  // io.run(); is required for all sketches.
  // it should always be present at the top of your loop
  // function. it keeps the client connected to
  // io.adafruit.com, and processes any incoming data.
  io.run();
}
void handleMessage(AdafruitIO_Data *data) {
 
  // convert the data to integer
  int angle = data->toInt();
 
 
  if(angle < 0)
    angle = 0;
  else if(angle > 180)
    angle = 180;
 
  servo.write(angle);
 
}
