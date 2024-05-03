let sound1, sound2, sound3, sound4, playButton, stopButton, player, file;

function preload() {
  sound1 = loadSound('assets/drip1.mp3');
  sound2 = loadSound('assets/drip2.mp3');
  sound3 = loadSound('assets/drip3.mp3');
}
  
function setup(){  
  createCanvas(windowWidth, windowHeight);

  background(0);
  
  fSize = width / 10;
  textAlign(CENTER);
  fill(255);
  textSize(fSize/2);
  
  text("Drip Music", width / 2, height / 9);
  text("George Brecht",width / 2, (height / 9) * 2.2 - fSize);
  
  chooseSound();
  player.amp(0.8);
  
  playButton = createButton('PLAY');
  playButton.position(width / 2 - fSize * 4, (height / 9) * 3 - fSize);
  playButton.size(fSize * 8, fSize * 2);
  playButton.style('font-size', 'xx-large');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');  
  playButton.mousePressed(togglePlay);
  
  stopButton = createButton('STOP');
  stopButton.position(width / 2 - fSize * 4, (height / 9) * 5 - fSize);
  stopButton.size(fSize * 8, fSize * 2);
  stopButton.style('font-size', 'xx-large');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.mousePressed(function stopSound(){
    player.stop();
  })
}
  
  
function togglePlay() {
  if (player.isPlaying()) {
    // player.pause();
  } else {
    chooseSound();
    player.loop();
  }
}
  
  
function chooseSound(){
  file = random(0,4);
  if (file < 1) {
    player = sound1;
  } else if (file > 1 && file < 2) {
    player = sound2;
  } else if (file > 2 && file < 3) {
    player = sound3;
  }
}
