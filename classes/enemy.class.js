class Enemy extends MovableObject {
  width = 170;
  height = 170;
  y = 300;
  otherDirection = true;

  constructor(imagePath) {
    super().loadImage(imagePath);
    this.x = 200 + Math.random() * 400;
  }
}
