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

  constructor(world) {
    super();
    this.world = world;

    this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
    this.y = 60;
    this.x = 3300;

    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
    this.speed = 0.5;
    this.animate();
  }

  animate() {
    this.setStoppableInterval(() => {
      this.moveLeft();
      this.x = world.endboss.x;
    }, 1000 / 25);
  }
  //setPercentage(50)
  setPercentage(percentage) {
    let images;
    this.percentage = percentage;
    images = this.IMAGES_ENDBOSS_HEALTH;
    let path = images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
