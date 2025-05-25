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

let gamePaused = false;

/**
 * Starts the game by initializing the level, hiding modals, showing icons,
 * creating the world, and playing background music if not muted.
 *
 * - Initializes the game level.
 * - Hides the opening modal and overlay.
 * - Shows the canvas icons.
 * - Sets up the canvas and world objects.
 * - Plays background music if the user has not muted it in localStorage.
 */
function startGame() {
  initLevel();
  document.getElementById("opening-modal").classList.add("dp-none");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("canvas-icons").classList.remove("hidden");
  document.getElementById("pause-overlay").classList.add("hidden");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  if (localStorage.getItem("musicMuted") !== "true") {
    AUDIO_BACKGROUND.play();
  }
}

/**
 * Restarts the game by hiding modals, resetting audio, and starting the game again.
 */
function restartGame() {
  if (world && world.movableObjects) {
    world.movableObjects.forEach((obj) => {
      if (typeof obj.stopInterval === "function") {
        obj.stopInterval();
      }
    });
  }
  document.getElementById("fail-modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("win-modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("pause-overlay").classList.add("hidden");
  AUDIO_BACKGROUND.play();
  AUDIO_BACKGROUND.currentTime = 0;
  startGame();
}

/**
 * Initializes the game UI by hiding icons and overlays.
 */
function init() {
  document.getElementById("canvas-icons").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("pause-overlay").classList.add("hidden");
}

/**
 * Stops all intervals for movable objects in the world.
 * Used to pause the game logic for all entities that move or animate.
 */
function stopGame() {
  if (world && world.movableObjects) {
    world.movableObjects.forEach((obj) => {
      if (typeof obj.stopInterval === "function") {
        obj.stopInterval();
      }
    });
  }
}

/**
 * Resumes all intervals for the world and its movable objects.
 * Used to continue the game logic after a pause.
 */
function resumeGame() {
  if (world) {
    if (typeof world.startInterval === "function") {
      world.startInterval();
    }
    if (world.movableObjects) {
      world.movableObjects.forEach((obj) => {
        if (typeof obj.startInterval === "function") {
          obj.startInterval();
        }
      });
    }
  }
}

/**
 * Toggles the paused state of the game.
 * - Pauses or resumes the game logic and audio.
 * - Updates the pause button text and pause overlay visibility.
 */
function togglePauseGame() {
  if (!gamePaused) {
    stopGame();
    document.getElementById("btn-pause").innerHTML = "RESUME";
    muteAllAudio();
    gamePaused = true;
    document.getElementById("pause-overlay").classList.remove("hidden");
  } else {
    resumeGame();
    document.getElementById("btn-pause").innerHTML = "PAUSE";
    if (localStorage.getItem("musicMuted") === "false") {
      playAllAudio();
    }
    gamePaused = false;
    document.getElementById("pause-overlay").classList.add("hidden");
  }
}

/**
 * Toggles fullscreen mode for the canvas container.
 */
function goFullScreen() {
  let canvasContainer = document.getElementById("canvas-container");
  if (fullscreen == false) {
    enterFullScreen(canvasContainer);
    fullscreen = true;
    document.getElementById("fullscreen").src = "img/icons/compress-solid.svg";
  } else if (fullscreen == true) {
    exitfullscreen();
    fullscreen = false;
    document.getElementById("fullscreen").src = "img/icons/expand-solid.svg";
  }
}

/**
 * Requests fullscreen mode for the given element.
 * @param {HTMLElement} element - The element to display in fullscreen.
 */
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

/**
 * Exits fullscreen mode.
 */
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

/**
 * Handles keyboard events for controlling the game character.
 *
 * - Sets the corresponding property on the `keyboard` object to `true` when a key is pressed (keydown).
 * - Sets the corresponding property on the `keyboard` object to `false` when a key is released (keyup).
 *
 * Key mappings:
 *   - ArrowRight (39): Move right
 *   - ArrowUp (38): Move up/jump
 *   - ArrowLeft (37): Move left
 *   - ArrowDown (40): Move down/crouch
 *   - Space (32): Jump/action
 *   - D (68): Throw bottle/action
 */

// Keydown event: set key state to true
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

// Keyup event: set key state to false
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

/**
 * Opens the instructions modal.
 */
function openInstructions() {
  document.getElementById("instructions").classList.remove("hidden");
}

/**
 * Closes the instructions modal.
 */
function closeInstructions() {
  document.getElementById("instructions").classList.add("hidden");
}

/**
 * Prevents event bubbling for the given event.
 * @param {Event} event - The event to stop propagation for.
 */
function preventBubbling(event) {
  event.stopPropagation();
}

/**
 * Opens the impressum modal.
 */
function openImpressum() {
  document.getElementById("impressum-modal").classList.remove("hidden");
}

/**
 * Closes the impressum modal.
 */
function closeImpressum() {
  document.getElementById("impressum-modal").classList.add("hidden");
}

/**
 * Toggles the background music and updates the music icon.
 */
function toggleMusic() {
  const musicIcon = document.getElementById("music-on");
  if (musicIcon.classList.contains("music-on")) {
    musicIcon.classList.remove("music-on");
    musicIcon.classList.add("music-off");
    musicIcon.src = "img/icons/volume-xmark-solid.svg";
    muteAllAudio();
    localStorage.setItem("musicMuted", "true"); // Save mute state
  } else {
    musicIcon.classList.remove("music-off");
    musicIcon.classList.add("music-on");
    musicIcon.src = "img/icons/volume-high-solid.svg";
    playAllAudio();
    localStorage.setItem("musicMuted", "false"); // Save mute state
  }
}

/**
 * Mutes all game audio and pauses background music.
 */
function muteAllAudio() {
  AUDIO_BACKGROUND.muted = true;
  AUDIO_BACKGROUND.pause();
  AUDIO_JUMP.muted = true;
  AUDIO_COLLECT_COIN.muted = true;
  AUDIO_COLLECT_BOTTLE.muted = true;
  AUDIO_HURT.muted = true;
  AUDIO_SMASH_BOTTLE.muted = true;
  AUDIO_HURT.muted = true;
  AUDIO_FAIL.muted = true;
  AUDIO_SPLAT.muted = true;
  AUDIO_WHOOSH.muted = true;
  AUDIO_RUN.muted = true;
  AUDIO_BOSS.muted = true;
  AUDIO_WIN.muted = true;
}

/**
 * Unmutes all game audio and plays background music.
 */
function playAllAudio() {
  AUDIO_BACKGROUND.muted = false;
  AUDIO_BACKGROUND.play();
  AUDIO_JUMP.muted = false;
  AUDIO_COLLECT_COIN.muted = false;
  AUDIO_COLLECT_BOTTLE.muted = false;
  AUDIO_HURT.muted = false;
  AUDIO_SMASH_BOTTLE.muted = false;
  AUDIO_HURT.muted = false;
  AUDIO_FAIL.muted = false;
  AUDIO_SPLAT.muted = false;
  AUDIO_WHOOSH.muted = false;
  AUDIO_RUN.muted = false;
  AUDIO_BOSS.muted = false;
  AUDIO_WIN.muted = false;
}

/**
 * Sets the initial mute state and music icon based on the user's saved preference in localStorage
 * when the DOM content is loaded. Does not start playing music automatically.
 *
 * - If music is muted, all audio is muted and the icon is set to "off".
 * - If music is not muted, background audio is unmuted and the icon is set to "on".
 */
window.addEventListener("DOMContentLoaded", () => {
  const musicMuted = localStorage.getItem("musicMuted");
  const musicIcon = document.getElementById("music-on");
  if (musicMuted === "true") {
    muteAllAudio();
    if (musicIcon) {
      musicIcon.classList.remove("music-on");
      musicIcon.classList.add("music-off");
      musicIcon.src = "img/icons/volume-xmark-solid.svg";
    }
  } else {
    AUDIO_BACKGROUND.muted = false;
    if (musicIcon) {
      musicIcon.classList.remove("music-off");
      musicIcon.classList.add("music-on");
      musicIcon.src = "img/icons/volume-high-solid.svg";
    }
  }
});
