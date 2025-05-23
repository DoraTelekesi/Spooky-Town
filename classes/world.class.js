class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  world;
  camera_x = 0;
  amount_coin = 0;
  amount_bottle = 0;
  throwableObject = [];
  movableObjects = [];
  statusBarEndboss;
  endbossFightStarted = false;

  /**
   * Creates a new World instance and initializes the game.
   * @param {HTMLCanvasElement} canvas - The canvas element for rendering.
   * @param {Keyboard} keyboard - The keyboard input handler.
   * @param {object} world - The game world object.
   */
  constructor(canvas, keyboard, world) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.world = world;
    this.draw();
    this.setWorld();
    this.run();
    this.endboss = new Endboss(this);
    this.level.enemies.push(this.endboss);
    this.movableObjects = [
      this.character,
      ...this.level.enemies,
      ...this.level.clouds,
      ...this.level.collectibleObjects,
      ...this.level.statusbarEndboss,
      ...this.throwableObject,
    ];
  }

  /**
   * Sets the world reference for the character.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Starts the main game loops for collision checks and collectible updates.
   */
  run() {
    this.character.setStoppableInterval(() => {
      this.checkCollisionFromAbove();
    }, 1000 / 50);
    this.character.setStoppableInterval(() => {
      this.checkCollisionWithGround();
      this.checkCollisions();
      this.checkCollisionWithThrowableObject();
      this.checkThrowObject();
    }, 200);
    this.character.setStoppableInterval(() => {
      this.checkCollisionWithCollectibles();
    }, 1000 / 60);
  }

  /**
   * Checks for collisions between the character and enemies.
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isCollidingOffset(enemy) && !this.character.isHurt()) {
        this.character.hit();
        this.level.statusbar[0].setPercentage(this.character.energy, "health");
      }
    });
  }

  /**
   * Checks for collisions between the character and collectible objects.
   */
  checkCollisionWithCollectibles() {
    this.level.collectibleObjects = this.level.collectibleObjects.filter((item) => {
      if (this.character.isCollidingOffset(item)) {
        if (item.type === "bottle") {
          this.amount_bottle++;
          this.level.statusbar[2].setPercentage((this.amount_bottle * 100) / 10, "bottle");
          AUDIO_COLLECT_BOTTLE.play();
        } else if (item.type === "coin") {
          this.amount_coin++;
          this.level.statusbar[1].setPercentage((this.amount_coin * 100) / 10, "coin");
          AUDIO_COLLECT_COIN.play();
        }
        return false;
      }
      return true;
    });
  }

  /**
   * Checks for collisions between throwable objects and enemies.
   */
  checkCollisionWithThrowableObject() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObject.forEach((item) => {
        if (enemy.isCollidingOffset(item)) {
          enemy.hit();
          item.broken = true;
          AUDIO_SMASH_BOTTLE.play();
          if (!(enemy instanceof Endboss)) {
            this.removeEnemy(enemy);
            this.removeItem(item);
          } else if (enemy instanceof Endboss) {
            this.removeItem(item);
            this.level.statusbarEndboss[0].setPercentage((enemy.energy * 100) / 100);
          }
        }
      });
    });
  }

  /**
   * Checks if throwable objects have hit the ground and handles their removal.
   */
  checkCollisionWithGround() {
    this.throwableObject.forEach((item) => {
      if (item.y > 380) {
        item.y = 380;
        item.broken = true;
        AUDIO_SMASH_BOTTLE.play();
        this.removeItem(item);
      }
    });
  }

  /**
   * Checks if the character is colliding with enemies from above and handles enemy defeat.
   */
  checkCollisionFromAbove() {
    for (let enemy of this.level.enemies) {
      if (this.character.isCollidingFromAbove(enemy) && this.character.isAboveGround()) {
        enemy.hit();
        this.character.bounce();
        AUDIO_SPLAT.play();
        if (!(enemy instanceof Endboss)) {
          this.removeEnemy(enemy);
        } else {
          this.endboss.hit();
          this.level.statusbarEndboss[0].setPercentage((enemy.energy * 100) / 100);
        }
        break;
      }
    }
  }

  /**
   * Removes a throwable object from the game after a short delay.
   * @param {MovableObject} enemy - The enemy or object to remove.
   */
  removeItem(enemy) {
    setTimeout(() => {
      this.throwableObject = this.throwableObject.filter((item) => {
        if (enemy.isCollidingOffset(item)) {
          return false;
        } else {
          return true;
        }
      });
    }, 400);
  }

  /**
   * Removes an enemy from the game after a short delay.
   * @param {MovableObject} enemy - The enemy to remove.
   */
  removeEnemy(enemy) {
    setTimeout(() => {
      this.level.enemies = this.level.enemies.filter((e) => e !== enemy);
    }, 400);
  }

  /**
   * Checks if the player can throw a bottle and handles the throw action.
   */
  checkThrowObject() {
    if (this.keyboard.D) {
      if (this.amount_bottle > 0) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this);
        AUDIO_WHOOSH.play();
        this.throwableObject.push(bottle);
        this.amount_bottle--;
        this.level.statusbar[2].setPercentage((this.amount_bottle * 100) / 10, "bottle");
      }
    }
  }

  /**
   * Draws all game objects and backgrounds to the canvas.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.statusbar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.collectibleObjects);
    this.addObjectsToMap(this.level.statusbarEndboss);
    this.addObjectsToMap(this.throwableObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Draws a single movable object to the canvas, flipping it if needed.
   * @param {MovableObject} mo - The movable object to draw.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Draws an array of objects to the canvas.
   * @param {MovableObject[]} objects - The objects to draw.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Flips the image horizontally for objects facing the other direction.
   * @param {MovableObject} mo - The movable object to flip.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Restores the image orientation after flipping.
   * @param {MovableObject} mo - The movable object to restore.
   */
  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
