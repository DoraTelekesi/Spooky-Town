class World {
  character = new Character();
  enemies = [
    new Enemy("img/Wraith_01/Idle/Wraith_01_Idle_000.png", "wraith-1"),
    new Enemy("img/Wraith_02/Idle/Wraith_02_Idle_000.png", "wraith-2"),
    new Enemy("img/Wraith_03/Idle/Wraith_03_Idle_000.png", "wraith-3"),
  ];
  backgrounds = [
    new BackgroundObject("img/Background/1_game_background/layers/1.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/2.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/3.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/4.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/5.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/6.png", 0, 0),
    new BackgroundObject("img/Background/1_game_background/layers/7.png", 0, 0),
  ];
  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addObjectsToMap(this.backgrounds);
    this.addToMap(this.character);

    this.addObjectsToMap(this.enemies);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
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
