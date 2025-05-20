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

  constructor(y, type) {
    if (type === "bottle") {
      super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.loadImages(this.IMAGES_BOTTLE);
      this.offset = {
        right: 40,
        left: 30,
        top: 20,
        bottom: 30,
      };
    } else if (type === "coin") {
      super().loadImage("img/8_coin/coin_1.png");
      this.loadImages(this.IMAGES_COIN);
      this.offset = {
        right: 60,
        left: 30,
        top: 30,
        bottom: 60,
      };
    }
    this.x = 200 + Math.random() * 2400;
    this.y = y;
    this.type = type;
    this.animate();
  }

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
