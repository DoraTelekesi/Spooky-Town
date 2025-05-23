class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  /**
   * Creates a new Keyboard instance and binds button press events.
   */
  constructor() {
    this.bindBtnPressEvent();
  }

  /**
   * Binds touch events to the on-screen control buttons to update keyboard state.
   */
  bindBtnPressEvent() {
    document.getElementById("btn-left-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.LEFT = true;
    });
    document.getElementById("btn-right-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });
    document.getElementById("btn-jump-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.SPACE = true;
    });
    document.getElementById("btn-throw-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.D = true;
    });
    document.getElementById("btn-left-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.LEFT = false;
    });
    document.getElementById("btn-right-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });
    document.getElementById("btn-jump-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.SPACE = false;
    });
    document.getElementById("btn-throw-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.D = false;
    });
  }
}
