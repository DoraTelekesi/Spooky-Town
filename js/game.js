let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;

let AUDIO_BACKGROUND = new Audio("audio/halloween-background.mp3");
let AUDIO_JUMP = new Audio("audio/jump.mp3");
let AUDIO_COLLECT_COIN = new Audio("./audio/collect-coin.mp3");
let AUDIO_COLLECT_BOTTLE = new Audio("./audio/glass-bottle-clink.mp3");
let AUDIO_HURT = new Audio("audio/player-hurt.mp3");
let AUDIO_SMASH_BOTTLE = new Audio("audio/glass-break.mp3");
let AUDIO_FAIL = new Audio("audio/fail.mp3");
let AUDIO_SPLAT = new Audio("audio/small-enemy-kill.mp3");
let AUDIO_WHOOSH = new Audio("./audio/whoosh.mp3");
let AUDIO_RUN = new Audio("audio/run.mp3");
let AUDIO_BOSS = new Audio("audio/monster-sound.mp3");
let AUDIO_WIN = new Audio("audio/game-win.mp3");

AUDIO_BACKGROUND.loop = true;
AUDIO_BACKGROUND.volume = 0.1;
AUDIO_FAIL.volume = 0.05;
AUDIO_WIN.volume = 0.05;

function startGame() {
  initLevel();
  document.getElementById("opening-modal").classList.add("dp-none");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("canvas-icons").classList.remove("hidden");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  // AUDIO_BACKGROUND.play();
}

function restartGame() {
  document.getElementById("fail-modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("win-modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  AUDIO_BACKGROUND.currentTime = 0;
  startGame();
}

function init() {
  document.getElementById("canvas-icons").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
}

function goFullScreen() {
  let canvasContainer = document.getElementById("canvas-container");
  if (fullscreen == false) {
    enterFullScreen(canvasContainer);
    fullscreen = true;
    document.getElementById("fullscreen").src = "img/icons/compress-solid.svg";
    console.log("fullscreen loaded");
  } else if (fullscreen == true) {
    exitfullscreen();
    fullscreen = false;
    document.getElementById("fullscreen").src = "img/icons/expand-solid.svg";
  }
}

// Enter fullscreen
function enterFullScreen(element) {
  if (element.RequestFullScreen) {
    element.RequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    alert("This browser doesn't supporter fullscreen");
  }
}

// Exit fullscreen
function exitfullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    alert("Exit fullscreen doesn't work");
  }
}
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function openInstructions() {
  document.getElementById("instructions").classList.remove("hidden");
}

function closeInstructions() {
  document.getElementById("instructions").classList.add("hidden");
}

function preventBubbling(event) {
  event.stopPropagation();
}

function openImpressum() {
  document.getElementById("impressum-modal").classList.remove("hidden");
}

function closeImpressum() {
  document.getElementById("impressum-modal").classList.add("hidden");
}

function toggleMusic() {
  const musicIcon = document.getElementById("music-on");
  if (musicIcon.classList.contains("music-on")) {
    musicIcon.classList.remove("music-on");
    musicIcon.classList.add("music-off");
    musicIcon.src = "img/icons/volume-xmark-solid.svg";
    muteAllAudio();
  } else {
    musicIcon.classList.remove("music-off");
    musicIcon.classList.add("music-on");
    musicIcon.src = "img/icons/volume-high-solid.svg";
    playAllAudio();
  }
}

function muteAllAudio() {
  AUDIO_BACKGROUND.muted = true;
  AUDIO_BACKGROUND.pause();

  AUDIO_JUMP.muted = true;
  // AUDIO_JUMP.pause();

  AUDIO_COLLECT_COIN.muted = true;
  // AUDIO_COLLECT_COIN.pause();

  AUDIO_COLLECT_BOTTLE.muted = true;
  // AUDIO_COLLECT_BOTTLE.pause();

  AUDIO_HURT.muted = true;
  // AUDIO_HURT.pause();

  AUDIO_SMASH_BOTTLE.muted = true;

  AUDIO_HURT.muted = true;
  // AUDIO_HURT.pause();

  AUDIO_FAIL.muted = true;
  // AUDIO_FAIL.pause();

  AUDIO_SPLAT.muted = true;
  // AUDIO_SPLAT.pause();

  AUDIO_WHOOSH.muted = true;
  // AUDIO_WHOOSH.pause();

  AUDIO_RUN.muted = true;
  // AUDIO_RUN.pause();

  AUDIO_BOSS.muted = true;
  // AUDIO_BOSS.pause();

  AUDIO_WIN.muted = true;
  // AUDIO_WIN.pause();
}

function playAllAudio() {
  AUDIO_BACKGROUND.muted = false;
  AUDIO_BACKGROUND.play();

  AUDIO_JUMP.muted = false;
  // AUDIO_JUMP.play();

  AUDIO_COLLECT_COIN.muted = false;
  // AUDIO_COLLECT_COIN.play();

  AUDIO_COLLECT_BOTTLE.muted = false;
  // AUDIO_COLLECT_BOTTLE.play();

  AUDIO_HURT.muted = false;
  // AUDIO_HURT.play();

  AUDIO_SMASH_BOTTLE.muted = false;

  AUDIO_HURT.muted = false;
  // AUDIO_HURT.play();

  AUDIO_FAIL.muted = false;
  // AUDIO_FAIL.play();

  AUDIO_SPLAT.muted = false;
  // AUDIO_SPLAT.play();

  AUDIO_WHOOSH.muted = false;
  // AUDIO_WHOOSH.play();

  AUDIO_RUN.muted = false;
  // AUDIO_RUN.play();

  AUDIO_BOSS.muted = false;
  // AUDIO_BOSS.play();

  AUDIO_WIN.muted = false;
  // AUDIO_WIN.play();
}
