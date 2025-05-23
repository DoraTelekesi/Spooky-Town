class MovableObject extends DrawableObject {
  otherDirection = false;
  speed = 0.25;
  imageCache = {};
  currentImage = 0;
  speedY = 0;
  acceleration = 2.5;
  intervalIds = [];

  /**
   * Moves the object to the left by decreasing its x-coordinate.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Moves the object to the right by increasing its x-coordinate.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Makes the object jump by setting its vertical speed.
   */
  jump() {
    this.speedY = 35;
  }

  /**
   * Applies gravity to the object, updating its y-coordinate and speedY.
   */
  applyGravity() {
    const id = setInterval(() => {
      if (!this.broken) {
        if (this.isAboveGround() || this.speedY > 0) {
          this.y -= this.speedY;
          this.speedY -= this.acceleration;
        } else if (this instanceof Character) {
          this.y = 230;
          this.speedY = 0;
        } else if (this instanceof ThrowableObject) {
          this.y = 400;
          this.speedY = 0;
        } else if (this instanceof Endboss) {
          this.y = 90;
          this.speedY = 0;
        }
      }
    }, 1000 / 25);
    this.intervalIds.push(id); // Store the interval ID
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} True if above ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else if (this instanceof Enemy) {
      return this.y < 300;
    } else if (this instanceof Endboss) {
      return this.y < 90;
    } else {
      return this.y < 230;
    }
  }

  /**
   * Makes the object bounce if it can bounce.
   */
  bounce() {
    if (this.canBounce) {
      this.speedY = 20;
      this.canBounce = false;
      setTimeout(() => {
        this.canBounce = true;
      }, 300);
    }
  }

  /**
   * Checks for collision with another object using offset values.
   * @param {MovableObject} mo - The other movable object.
   * @returns {boolean} True if colliding, otherwise false.
   */
  isCollidingOffset(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * Checks for collision with another object (bounding box).
   * @param {MovableObject} mo - The other movable object.
   * @returns {boolean} True if colliding, otherwise false.
   */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x && this.x < mo.x + mo.width && this.y < mo.y + mo.height && this.y + this.height > mo.y
    );
  }

  /**
   * Checks if this object is colliding with another object from above.
   * @param {MovableObject} mo - The other movable object.
   * @returns {boolean} True if colliding from above, otherwise false.
   */
  isCollidingFromAbove(mo) {
    const margin = 5;
    const isFalling = this.speedY < 0;
    const charLeft = this.x + this.offset.left;
    const charRight = this.x + this.width - this.offset.right;
    const charBottom = this.y + this.height - this.offset.bottom;
    const enemyOffset = mo.offset;
    const enemyLeft = mo.x + enemyOffset.left;
    const enemyRight = mo.x + mo.width - enemyOffset.right;
    const enemyTop = mo.y + enemyOffset.top;
    const horizontalOverlap = charRight > enemyLeft && charLeft < enemyRight;
    const verticalFromAbove = charBottom > enemyTop + margin && charBottom < enemyTop + 20;
    return horizontalOverlap && verticalFromAbove && isFalling;
  }

  /**
   * Reduces the object's energy when hit.
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitByEndboss() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is currently hurt (recently hit).
   * @returns {boolean} True if hurt, otherwise false.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * Checks if the object is dead (energy is zero).
   * @returns {boolean} True if dead, otherwise false.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Plays the next animation frame from the given images array.
   * @param {string[]} images - Array of image paths.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Stops all intervals associated with this object.
   */
  stopInterval() {
    this.intervalIds.forEach(clearInterval);
    this.intervalIds = [];
  }

  /**
   * Sets an interval and stores its ID for later clearing.
   * @param {Function} fn - The function to execute.
   * @param {number} time - The interval time in milliseconds.
   */
  setStoppableInterval(fn, time) {
    const id = setInterval(fn, time);
    this.intervalIds.push(id);
  }
}
