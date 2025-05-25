class CollectibleObject extends MovableObject {
  width = 100;
  height = 100;
  offset = {
    right: 60,
    left: 30,
    top: 30,
    bottom: 60,
  };
  IMAGES_BOTTLE = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];
  IMAGES_COIN = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  /**
   * Creates a new CollectibleObject.
   * @param {number} y - The y-coordinate of the collectible object.
   * @param {string} type - The type of collectible ("bottle" or "coin").
   */
  constructor(y, type) {
    super();
    if (type === "bottle") {
      this.loadBottleImages();
    } else if (type === "coin") {
      this.loadCoinImages();
    }
    this.x = 200 + Math.random() * 2400;
    this.y = y;
    this.type = type;
    this.startInterval();
  }

  startInterval() {
    this.animate();
  }
  /**
   * Loads the images and sets the offset for a bottle collectible object.
   * Loads the main bottle image and all bottle animation images,
   * and sets the collision offset specific to bottles.
   */
  loadBottleImages() {
    this.loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGES_BOTTLE);
    this.offset = {
      right: 40,
      left: 30,
      top: 20,
      bottom: 30,
    };
  }

  /**
   * Loads the images and sets the offset for a coin collectible object.
   * Loads the main coin image and all coin animation images,
   * and sets the collision offset specific to coins.
   */
  loadCoinImages() {
    this.loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGES_COIN);
    this.offset = {
      right: 60,
      left: 30,
      top: 30,
      bottom: 60,
    };
  }

  /**
   * Animates the collectible object by cycling through its images.
   */
  animate() {
    this.setStoppableInterval(() => {
      let images;
      if (this.type === "bottle") {
        images = this.IMAGES_BOTTLE;
      }
      if (this.type === "coin") {
        images = this.IMAGES_COIN;
      }
      if (images) {
        this.playAnimation(images);
      }
    }, 400);
  }
}
