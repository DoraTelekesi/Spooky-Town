class StatusBar extends DrawableObject {
  width = 300;
  height = 70;
  IMAGES_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];
  IMAGES_COIN = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];
  IMAGES_BOTTLE = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  ];

  /**
   * Creates a new StatusBar instance.
   * @param {number} x - The x-coordinate of the status bar.
   * @param {number} y - The y-coordinate of the status bar.
   * @param {string} type - The type of the status bar ("health", "bottle", or "coin").
   */
  constructor(x, y, type) {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.loadImages(this.IMAGES_COIN);
    this.loadImages(this.IMAGES_BOTTLE);
    this.type = type;
    this.x = x;
    this.y = y;
    if (type === "health") {
      this.setPercentage(100, type);
    } else if (type === "bottle") {
      this.setPercentage(0, type);
    } else if (type === "coin") {
      this.setPercentage(0, type);
    }
  }

  /**
   * Sets the percentage value and updates the status bar image based on the type.
   * @param {number} percentage - The percentage value (0-100).
   * @param {string} type - The type of the status bar ("health", "bottle", or "coin").
   */
  setPercentage(percentage, type) {
    this.percentage = percentage;
    if (type === "health") {
      let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
    if (type === "coin") {
      let path = this.IMAGES_COIN[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
    if (type === "bottle") {
      let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  }

  /**
   * Resolves the image index based on the current percentage.
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
