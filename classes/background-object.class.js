class BackgroundObject extends MovableObject {
  width = 729;
  height = 480;
  /**
   * Creates a new BackgroundObject.
   * @param {string} imagePath - The path to the background image.
   * @param {number} x - The x-coordinate of the background object.
   * @param {number} y - The y-coordinate of the background object.
   */
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
