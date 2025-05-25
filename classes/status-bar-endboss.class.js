class StatusBarEndboss extends MovableObject {
  otherDirection = false;
  IMAGES_ENDBOSS_HEALTH = [
    "img/7_statusbars/2_statusbar_endboss/green/green0.png",
    "img/7_statusbars/2_statusbar_endboss/green/green20.png",
    "img/7_statusbars/2_statusbar_endboss/green/green40.png",
    "img/7_statusbars/2_statusbar_endboss/green/green60.png",
    "img/7_statusbars/2_statusbar_endboss/green/green80.png",
    "img/7_statusbars/2_statusbar_endboss/green/green100.png",
  ];
  percentage;
  world;

  /**
   * Creates a new StatusBarEndboss instance.
   * @param {object} world - The game world object.
   */
  constructor(world) {
    super();
    this.world = world;
    this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
    this.y = 140;
    this.x = 3300;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
    this.speed = 0.5;
    this.startInterval();
  }

  /**
   * Starts the status bar's animation interval.
   * Calls the animate method to update the status bar position and image.
   */
  startInterval() {
    this.animate();
  }
  /**
   * Animates the status bar to follow the endboss's x position.
   */
  animate() {
    this.setStoppableInterval(() => {
      this.moveLeft();
      this.x = world.endboss.x + 250;
    }, 1000 / 25);
  }

  /**
   * Sets the health percentage and updates the status bar image.
   * @param {number} percentage - The health percentage (0-100).
   */
  setPercentage(percentage) {
    let images;
    this.percentage = percentage;
    images = this.IMAGES_ENDBOSS_HEALTH;
    let path = images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index based on the current health percentage.
   * @returns {number} The index of the image to display.
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 30) {
      return 2;
    } else if (this.percentage > 0) {
      return 1;
    } else {
      return 0;
    }
  }
}
