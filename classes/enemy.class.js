class Enemy extends MovableObject {
  width = 170;
  height = 170;
  y = 300;
  otherDirection = true;
  speed;
  energy = 5;
  hasToTurn = false;
  offset = {
    top: 10,
    left: 0,
    right: 50,
    bottom: 40,
  };
  offset2 = {
    top: 10,
    left: 40,
    right: 80,
    bottom: 40,
  };
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

  IMAGES_DEAD_WRAITH_1 = [
    "img/Wraith_01/Dying/Wraith_01_Dying_000.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_001.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_002.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_003.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_004.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_005.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_006.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_007.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_008.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_009.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_010.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_011.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_012.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_013.png",
    "img/Wraith_01/Dying/Wraith_01_Dying_014.png",
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
  IMAGES_DEAD_WRAITH_2 = [
    "img/Wraith_02/Dying/Wraith_02_Dying_000.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_001.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_002.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_003.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_004.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_005.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_006.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_007.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_008.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_009.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_010.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_011.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_012.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_013.png",
    "img/Wraith_02/Dying/Wraith_02_Dying_014.png",
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
  IMAGES_DEAD_WRAITH_3 = [
    "img/Wraith_03/Dying/Wraith_03_Dying_000.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_001.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_002.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_003.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_004.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_005.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_006.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_007.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_008.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_009.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_010.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_011.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_012.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_013.png",
    "img/Wraith_03/Dying/Wraith_03_Dying_014.png",
  ];
  currentImage = 0;
  type = "";
  constructor(imagePath, type) {
    super().loadImage(imagePath);
    this.type = type;
    this.loadImages(this.IMAGES_WALKING_WRAITH_1);
    this.loadImages(this.IMAGES_WALKING_WRAITH_2);
    this.loadImages(this.IMAGES_WALKING_WRAITH_3);
    this.loadImages(this.IMAGES_DEAD_WRAITH_1);
    this.loadImages(this.IMAGES_DEAD_WRAITH_2);
    this.loadImages(this.IMAGES_DEAD_WRAITH_3);
    this.x = 1200 + Math.random() * 2600;
    this.speed = 0.05 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    this.setStoppableInterval(() => {
      if (this.otherDirection) {
        if (this.x > 20) {
          this.moveLeft();
        } else {
          this.otherDirection = true;
        }
      } else {
        if (this.x < 2500) {
          // Set your right boundary here
          this.moveRight();
        } else {
          this.otherDirection = false;
        }
      }
    }, 1000 / 60);

    setInterval(() => {
      let images;
      if (this.type === "wraith-1") {
        if (this.isDead()) {
          images = this.IMAGES_DEAD_WRAITH_1;
        } else {
          images = this.IMAGES_WALKING_WRAITH_1;
        }
      } else if (this.type === "wraith-2") {
        if (this.isDead()) {
          images = this.IMAGES_DEAD_WRAITH_2;
        } else {
          images = this.IMAGES_WALKING_WRAITH_2;
        }
      } else if (this.type === "wraith-3") {
        if (this.isDead()) {
          images = this.IMAGES_DEAD_WRAITH_3;
        } else {
          images = this.IMAGES_WALKING_WRAITH_3;
        }
      }
      if (images) {
        this.playAnimation(images);
      }
    }, 100);
  }
}
