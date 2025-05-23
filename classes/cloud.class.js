class Cloud extends MovableObject {
  y = 80;
  height = 280;
  speed = 1;

  /**
   * Creates a new Cloud object.
   * @param {string} imagePath - The path to the cloud image.
   * @param {number} x - The x-coordinate of the cloud.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.width = 729;
    this.animate();
  }

  /**
   * Starts the cloud's movement animation.
   */
  animate() {
    this.moveLeft();
  }

  /**
   * Moves the cloud to the left at a constant speed.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 100);
  }
}
