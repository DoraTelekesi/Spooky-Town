class Enemy extends MovableObject {
  width = 170;
  height = 170;
  y = 300;
  otherDirection = true;
  speed;
  speedY;
  energy = 5;
  hasToTurn = false;
  offset = {
    top: 10,
    left: 30,
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

  /**
   * Creates a new Enemy object.
   * @param {string} imagePath - The path to the enemy image.
   * @param {string} type - The type of the enemy ("wraith-1", "wraith-2", or "wraith-3").
   */
  constructor(imagePath, type) {
    super().loadImage(imagePath);
    this.type = type;
    this.loadImages(this.IMAGES_WALKING_WRAITH_1);
    this.loadImages(this.IMAGES_WALKING_WRAITH_2);
    this.loadImages(this.IMAGES_WALKING_WRAITH_3);
    this.loadImages(this.IMAGES_DEAD_WRAITH_1);
    this.loadImages(this.IMAGES_DEAD_WRAITH_2);
    this.loadImages(this.IMAGES_DEAD_WRAITH_3);
    this.x = 400 + Math.random() * 2400;
    this.speed = 0.05 + Math.random() * 0.5;
    this.startInterval();
  }

  startInterval() {
    this.animate();
    if (this.type === "wraith-2") {
      this.applyGravity();
    }
  }
  /**
   * Changes the direction of the enemy based on its position.
   */
  changeDirection() {
    if (this.otherDirection) {
      if (this.x > 20) {
        this.moveLeft();
      } else {
        this.otherDirection = false;
      }
    } else {
      if (this.x < 2500) {
        this.moveRight();
      } else {
        this.otherDirection = true;
      }
    }
  }

  /**
   * Animates the enemy by setting intervals for movement and image changes.
   */
  animate() {
    this.setStoppableInterval(() => {
      if (this.type === "wraith-2") {
        this.jump();
        this.speed = 1.2 + Math.random() * 0.5;
      }
    }, 2000);
    this.setStoppableInterval(() => {
      this.changeDirection();
    }, 1000 / 60);
    this.playEnemyImages();
  }

  /**
   * Plays the appropriate animation images for the enemy type.
   */
  playEnemyImages() {
    this.setStoppableInterval(() => {
      if (this.type === "wraith-1") {
        this.firstEnemyMovement();
      } else if (this.type === "wraith-2") {
        this.secondEnemyMovement();
      } else if (this.type === "wraith-3") {
        this.thirdEnemyMovement();
      }
    }, 100);
  }

  /**
   * Handles movement and animation for the first enemy type.
   */
  firstEnemyMovement() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD_WRAITH_1);
    } else {
      this.playAnimation(this.IMAGES_WALKING_WRAITH_1);
    }
  }

  /**
   * Handles movement and animation for the second enemy type.
   */
  secondEnemyMovement() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD_WRAITH_2);
    } else {
      this.playAnimation(this.IMAGES_WALKING_WRAITH_2);
    }
  }

  /**
   * Handles movement and animation for the third enemy type.
   */
  thirdEnemyMovement() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD_WRAITH_3);
    } else {
      this.playAnimation(this.IMAGES_WALKING_WRAITH_3);
    }
  }
}
