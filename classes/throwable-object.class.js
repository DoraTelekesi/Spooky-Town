class ThrowableObject extends MovableObject {
  offset = {
    right: 20,
    left: 10,
    top: 10,
    bottom: 20,
  };
  ROTATING_BOTTLES = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];
  SPLASHING_BOTTLES = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];
  broken = false;
  world;

  /**
   * Creates a new ThrowableObject instance.
   * @param {number} x - The x-coordinate of the throwable object.
   * @param {number} y - The y-coordinate of the throwable object.
   * @param {object} world - The game world object.
   */
  constructor(x, y, world) {
    super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.loadImages(this.ROTATING_BOTTLES);
    this.loadImages(this.SPLASHING_BOTTLES);
    this.world = world;
    this.x = x;
    this.y = y;
    this.height = 80;
    this.width = 90;
    this.throw();
  }

  /**
   * Throws the object, applying gravity and animating its movement and rotation/splash.
   */
  throw() {
    this.applyGravity();
    this.speedY = 25;
    const horizontalMovement = setInterval(() => {
      if (!this.broken) {
        if (world.character.otherDirection === false) {
          this.x += 6;
        } else {
          this.x -= 8;
        }
      } else {
        clearInterval(horizontalMovement);
      }
    }, 25);
    setInterval(() => {
      if (this.broken) {
        this.playAnimation(this.SPLASHING_BOTTLES);
      } else {
        this.playAnimation(this.ROTATING_BOTTLES);
      }
    }, 100);
  }
}
