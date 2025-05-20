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

  constructor(canvas, keyboard, world) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.world = world;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }
  run() {
    this.character.setStoppableInterval(() => {
      this.checkCollisionWithGround();
    }, 200);
    this.character.setStoppableInterval(() => {
      this.checkCollisionFromAbove();
    }, 50);
    
    this.character.setStoppableInterval(() => {
      this.checkCollisions();
    }, 200);
    this.character.setStoppableInterval(() => {
      this.checkCollisionWithThrowableObject();
    }, 200);
    this.character.setStoppableInterval(() => {
      this.checkCollisionWithCollectibles();
    }, 1000 / 60);
    this.character.setStoppableInterval(() => {
      this.checkThrowObject();
    }, 200);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isCollidingOffset(enemy)) {
        this.character.hit();
        this.level.statusbar[0].setPercentage(this.character.energy, "health");
        console.log("collided");
      }
    });
  }

  checkCollisionWithCollectibles() {
    this.level.collectibleObjects = this.level.collectibleObjects.filter((item) => {
      if (this.character.isCollidingOffset(item)) {
        if (item.type === "bottle") {
          this.amount_bottle++;
          this.level.statusbar[2].setPercentage((this.amount_bottle * 100) / 10, "bottle");
          console.log("bottle collected");
        } else if (item.type === "coin") {
          this.amount_coin++;
          this.level.statusbar[1].setPercentage((this.amount_coin * 100) / 10, "coin");
          console.log("coin collected");
        }
        return false;
      }
      return true;
    });
  }

  checkCollisionWithThrowableObject() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObject.forEach((item) => {
        if (enemy.isCollidingOffset(item)) {
          enemy.hit();
          item.broken = true;
          this.removeItem(enemy);
          this.removeEnemy(item);
        }
      });
    });
  }

  checkCollisionWithGround() {
    this.throwableObject.forEach((item) => {
      if (item.y > 380) {
        item.y = 380;
        item.broken = true;
        this.removeItem(item);
      }
    });
  }

checkCollisionFromAbove() {
  for (let enemy of this.level.enemies) {
    if (this.character.isCollidingFromAbove(enemy) && this.character.isAboveGround()) {
      enemy.hit();
      this.character.bounce();
      this.removeEnemy(enemy);
      break; // Stop after the first enemy
    }
  }
}

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
removeEnemy(enemy) {
  setTimeout(() => {
    this.level.enemies = this.level.enemies.filter(e => e !== enemy);
  }, 400);
}

  checkThrowObject() {
    if (this.keyboard.D) {
      if (this.amount_bottle > 0) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        this.throwableObject.push(bottle);
        this.amount_bottle--;
        this.level.statusbar[2].setPercentage((this.amount_bottle * 100) / 10, "bottle");
        console.log("bottle thrown");
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);

    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.statusbar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.collectibleObjects);
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

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    mo.drawFrameOffset(this.ctx);
    mo.drawFrameOffset2(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
