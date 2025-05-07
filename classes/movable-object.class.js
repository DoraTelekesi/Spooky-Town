class MovableObject extends DrawableObject {
  otherDirection = false;
  speed = 0.25;
  imageCache = {};

  moveLeft() {
    this.x -= this.speed;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 6 % 6; 1, Rest 0 = >
    // i = 0, 1, 2, 3, 4, 5, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
