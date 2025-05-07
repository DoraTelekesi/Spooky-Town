class Cloud extends MovableObject {
  y = 80;
  height = 280;
  speed = 1;
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.width = 729;
    this.animate();
  }
  animate() {
    this.moveLeft();
  }
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 100);
  }
}
