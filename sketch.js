let speech;

function preload() {
  // speech = new p5.Speech();
}

function setup() {
  noCanvas();
  speech = new p5.Speech();
}

function keyPressed() {
  if (key == 'e') {
    speech.speak('Hello world'); // English
  } else if (key == 'k') {
    speech.speak('안녕'); // 한국어
  } else if (key == 'n') {
    speech.speak('18'); // 수
  }
}