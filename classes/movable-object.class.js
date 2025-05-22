class MovableObject extends DrawableObject {
  otherDirection = false;
  speed = 0.25;
  imageCache = {};
  currentImage = 0;
  speedY = 0;
  acceleration = 2.5;
  intervalIds = [];

  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  jump() {
    this.speedY = 35;
    // if (this instanceof Endboss) {
    //   this.x -= 50;
    // }
  }

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

  bounce() {
    if (this.canBounce) {
      this.speedY = 20;
      this.canBounce = false;
      setTimeout(() => {
        this.canBounce = true;
      }, 300);
    }
  }

  isCollidingOffset(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x && this.x < mo.x + mo.width && this.y < mo.y + mo.height && this.y + this.height > mo.y
    );
  }

  isCollidingFromAbove(mo) {
    const margin = 5;
    const isFalling = this.speedY < 0;
    const charLeft = this.x + this.offset2.left;
    const charRight = this.x + this.width - this.offset2.right;
    const charBottom = this.y + this.height - this.offset2.bottom;
    const enemyOffset = mo.offset2 || mo.offset || { left: 0, right: 0, top: 0, bottom: 0 };
    const enemyLeft = mo.x + enemyOffset.left;
    const enemyRight = mo.x + mo.width - enemyOffset.right;
    const enemyTop = mo.y + enemyOffset.top;
    const horizontalOverlap = charRight > enemyLeft && charLeft < enemyRight;
    const verticalFromAbove = charBottom > enemyTop + margin && charBottom < enemyTop + 20;
    return horizontalOverlap && verticalFromAbove 
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  stopInterval() {
    this.intervalIds.forEach(clearInterval);
    this.intervalIds = [];
  }

  setStoppableInterval(fn, time) {
    const id = setInterval(fn, time);
    this.intervalIds.push(id);
  }
}
