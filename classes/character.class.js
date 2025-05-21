class Character extends MovableObject {
  x = 10;
  y = 230;
  height = 250;
  width = 250;
  speed = 10;
  offset2 = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 10,
  };
  offset = {
    top: 50,
    left: 30,
    right: 105,
    bottom: 85,
  };
  energy = 100;
  canBounce = true;
  gameFailed = false;

  IMAGES_STANDING = [
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_000.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_001.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_002.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_003.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_004.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_005.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_006.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_007.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_008.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_009.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_010.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_011.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_012.png",
    "img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_013.png",
  ];
  IMAGES_WALKING = [
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_000.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_001.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_002.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_003.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_004.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_005.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_006.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_007.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_008.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_009.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_010.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_011.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_012.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_013.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_014.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_015.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_016.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_017.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_018.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_019.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_020.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_021.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_022.png",
    "img/Skeleton_Warrior_3/Walking/0_Skeleton_Warrior_Walking_023.png",
  ];

  IMAGES_JUMPING = [
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_000.png",
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_001.png",
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_002.png",
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_003.png",
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_004.png",
    "img/Skeleton_Warrior_3/Jump Start/0_Skeleton_Warrior_Jump Start_005.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_000.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_001.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_002.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_003.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_004.png",
    "img/Skeleton_Warrior_3/Jump Loop/0_Skeleton_Warrior_Jump Loop_005.png",
  ];

  IMAGES_HURT = [
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_000.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_001.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_002.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_003.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_004.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_005.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_006.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_007.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_008.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_009.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_010.png",
    "img/Skeleton_Warrior_3/Hurt/0_Skeleton_Warrior_Hurt_011.png",
  ];

  IMAGES_DEAD = [
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_000.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_001.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_002.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_003.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_004.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_005.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_006.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_007.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_008.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_009.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_010.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_011.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_012.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_013.png",
    "img/Skeleton_Warrior_3/Dying/0_Skeleton_Warrior_Dying_014.png",
  ];

  currentImage = 0;
  world;
  constructor() {
    super().loadImage("img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_000.png");
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animateCharacter();
    this.applyGravity();
  }

  navigateCharacter() {
    this.setStoppableInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        AUDIO_JUMP.play();
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 60);
  }

  handleHurt() {
    this.playAnimation(this.IMAGES_HURT);
    AUDIO_HURT.play();
  }

  handleDeath() {
    this.gameFailed = true;
    this.playAnimation(this.IMAGES_DEAD);
    this.world.movableObjects.forEach((obj) => obj.stopInterval());
    setTimeout(() => {
      document.getElementById("fail-modal").classList.remove("hidden");
      document.getElementById("overlay").classList.remove("hidden");
      AUDIO_BACKGROUND.pause();
      AUDIO_FAIL.play();
      AUDIO_RUN.pause();
    }, 100);
  }

  handleJump() {
    this.playAnimation(this.IMAGES_JUMPING);

    AUDIO_RUN.pause();
  }

  handleWalk() {
    this.playAnimation(this.IMAGES_WALKING);
    AUDIO_RUN.play();
  }

  animateCharacter() {
    this.navigateCharacter();
    this.setStoppableInterval(() => {
      if (this.isHurt()) return this.handleHurt();
      if (this.isDead()) return this.handleDeath();
      if (this.isAboveGround()) return this.handleJump();
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) return this.handleWalk();
      this.playAnimation(this.IMAGES_STANDING);
      AUDIO_RUN.pause();
    }, 100);
  }
}
