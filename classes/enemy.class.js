class Enemy extends MovableObject {
  width = 170;
  height = 170;
  y = 300;
  otherDirection = true;
  // speed = 0.35;
  IMAGES_WALKING_WRAITH_1 = [
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_000.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_001.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_002.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_003.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_004.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_005.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_006.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_007.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_008.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_009.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_010.png",
    "img/Wraith_01/Walking/Wraith_01_Moving Forward_011.png",
  ];
  IMAGES_WALKING_WRAITH_2 = [
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_000.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_001.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_002.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_003.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_004.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_005.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_006.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_007.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_008.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_009.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_010.png",
    "img/Wraith_02/Walking/Wraith_02_Moving Forward_011.png",
  ];
  IMAGES_WALKING_WRAITH_3 = [
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_000.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_001.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_002.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_003.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_004.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_005.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_006.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_007.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_008.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_009.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_010.png",
    "img/Wraith_03/Walking/Wraith_03_Moving Forward_011.png",
  ];
  currentImage = 0;
  type = "";
  constructor(imagePath, type) {
    super().loadImage(imagePath);
    this.type = type;
    this.loadImages(this.IMAGES_WALKING_WRAITH_1);
    this.loadImages(this.IMAGES_WALKING_WRAITH_2);
    this.loadImages(this.IMAGES_WALKING_WRAITH_3);
    this.x = 200 + Math.random() * 400;
    this.speed = 0.005 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      let images;
      if (this.type === "wraith-1") {
        images = this.IMAGES_WALKING_WRAITH_1;
      } else if (this.type === "wraith-2") {
        images = this.IMAGES_WALKING_WRAITH_2;
      } else if (this.type === "wraith-3") {
        images = this.IMAGES_WALKING_WRAITH_3;
      }
      if (images) {
        this.playAnimation(images);
      }
    }, 100);
  }
}
