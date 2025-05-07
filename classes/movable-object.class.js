class MovableObject extends DrawableObject {
  otherDirection = false;
  speed = 0.25;
  imageCache = {};
  currentImage = 0;
  speedY = 0;
  acceleration = 2.5;

  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  jump() {
    this.speedY = 30;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 230;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 6 % 6; 1, Rest 0 = >
    // i = 0, 1, 2, 3, 4, 5, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
