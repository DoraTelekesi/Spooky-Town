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
    this.bindBtnPressEventEnd();
  }

  /**
   * Binds touchstart events to the on-screen control buttons to set the corresponding
   * keyboard state properties to true when a button is pressed.
   *
   * - "btn-left-resp": Sets LEFT to true.
   * - "btn-right-resp": Sets RIGHT to true.
   * - "btn-jump-resp": Sets SPACE to true.
   * - "btn-throw-resp": Sets D to true.
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
  }

  /**
   * Binds touchend events to the on-screen control buttons to set the corresponding
   * keyboard state properties to false when a button is released.
   *
   * - "btn-left-resp": Sets LEFT to false.
   * - "btn-right-resp": Sets RIGHT to false.
   * - "btn-jump-resp": Sets SPACE to false.
   * - "btn-throw-resp": Sets D to false.
   */
  bindBtnPressEventEnd() {
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
