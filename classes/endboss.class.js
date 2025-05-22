class Endboss extends MovableObject {
  width = 350;
  height = 400;
  otherDirection = true;
  speed;
  speedY;
  offset = {
    top: 60,
    left: 40,
    right: 70,
    bottom: 60,
  };
  world;
  energy = 100;
  firstContact = false;
  gameWon = false;
  isJumping = false;

  IMAGES_STANDING = [
    "img/Golem_01/Idle/Golem_01_Idle_000.png",
    "img/Golem_01/Idle/Golem_01_Idle_001.png",
    "img/Golem_01/Idle/Golem_01_Idle_002.png",
    "img/Golem_01/Idle/Golem_01_Idle_003-fixed.png",
    "img/Golem_01/Idle/Golem_01_Idle_004.png",
    "img/Golem_01/Idle/Golem_01_Idle_005.png",
    "img/Golem_01/Idle/Golem_01_Idle_006.png",
    "img/Golem_01/Idle/Golem_01_Idle_007.png",
    "img/Golem_01/Idle/Golem_01_Idle_008.png",
    "img/Golem_01/Idle/Golem_01_Idle_009.png",
    "img/Golem_01/Idle/Golem_01_Idle_010.png",
    "img/Golem_01/Idle/Golem_01_Idle_011.png",
  ];

  IMAGES_WALKING = [
    "img/Golem_01/Walking/Golem_01_Walking_000.png",
    "img/Golem_01/Walking/Golem_01_Walking_001.png",
    "img/Golem_01/Walking/Golem_01_Walking_002.png",
    "img/Golem_01/Walking/Golem_01_Walking_003.png",
    "img/Golem_01/Walking/Golem_01_Walking_004.png",
    "img/Golem_01/Walking/Golem_01_Walking_005.png",
    "img/Golem_01/Walking/Golem_01_Walking_006.png",
    "img/Golem_01/Walking/Golem_01_Walking_007.png",
    "img/Golem_01/Walking/Golem_01_Walking_008.png",
    "img/Golem_01/Walking/Golem_01_Walking_009.png",
    "img/Golem_01/Walking/Golem_01_Walking_010.png",
    "img/Golem_01/Walking/Golem_01_Walking_011.png",
    "img/Golem_01/Walking/Golem_01_Walking_012.png",
    "img/Golem_01/Walking/Golem_01_Walking_013.png",
    "img/Golem_01/Walking/Golem_01_Walking_014.png",
    "img/Golem_01/Walking/Golem_01_Walking_015.png",
    "img/Golem_01/Walking/Golem_01_Walking_016.png",
    "img/Golem_01/Walking/Golem_01_Walking_017.png",
  ];

  IMAGES_JUMP = [
    "img/Golem_01/Jump Start/Golem_01_Jump Start_000.png",
    "img/Golem_01/Jump Start/Golem_01_Jump Start_001.png",
    "img/Golem_01/Jump Start/Golem_01_Jump Start_002.png",
    "img/Golem_01/Jump Start/Golem_01_Jump Start_003.png",
    "img/Golem_01/Jump Start/Golem_01_Jump Start_004.png",
    "img/Golem_01/Jump Start/Golem_01_Jump Start_005.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_000.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_001.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_002.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_003.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_004.png",
    "img/Golem_01/Jump Loop/Golem_01_Jump Loop_005.png",
  ];

  IMAGES_HURT = [
    "img/Golem_01/Hurt/Golem_01_Hurt_000.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_001.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_002.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_003.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_004.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_005.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_006.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_007.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_008.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_009.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_010.png",
    "img/Golem_01/Hurt/Golem_01_Hurt_011.png",
  ];

  IMAGES_DEAD = [
    "img/Golem_01/Dying/Golem_01_Dying_000.png",
    "img/Golem_01/Dying/Golem_01_Dying_001.png",
    "img/Golem_01/Dying/Golem_01_Dying_002.png",
    "img/Golem_01/Dying/Golem_01_Dying_003.png",
    "img/Golem_01/Dying/Golem_01_Dying_004.png",
    "img/Golem_01/Dying/Golem_01_Dying_005.png",
    "img/Golem_01/Dying/Golem_01_Dying_006.png",
    "img/Golem_01/Dying/Golem_01_Dying_007.png",
    "img/Golem_01/Dying/Golem_01_Dying_008.png",
    "img/Golem_01/Dying/Golem_01_Dying_009.png",
    "img/Golem_01/Dying/Golem_01_Dying_010.png",
    "img/Golem_01/Dying/Golem_01_Dying_011.png",
    "img/Golem_01/Dying/Golem_01_Dying_012.png",
    "img/Golem_01/Dying/Golem_01_Dying_013.png",
    "img/Golem_01/Dying/Golem_01_Dying_014.png",
  ];

  IMAGES_ATTACK = [
    "img/Golem_01/Attacking/Golem_01_Attacking_000.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_001.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_002.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_003.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_004.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_005.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_006.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_007.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_008.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_009.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_010.png",
    "img/Golem_01/Attacking/Golem_01_Attacking_011.png",
  ];

  constructor(world) {
    super().loadImage(this.IMAGES_STANDING[0]);
    this.world = world;
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 3100;
    this.y = 70;
    this.speed = 2 + Math.random() * 0.5;
    this.animate();
    this.applyGravity();
  }

  handleWalk() {
    this.playAnimation(this.IMAGES_WALKING);
  }

  handleHurt() {
    this.playAnimation(this.IMAGES_HURT);
    AUDIO_BOSS.play();
    // this.handleJump();
    setTimeout(() => {
      this.handleJump();
    }, 500);
  }

  handleDeath() {
    this.playAnimation(this.IMAGES_DEAD);
    if (!this.gameWon) {
      this.gameWon = true;
      this.world.movableObjects.forEach((obj) => obj.stopInterval());
      setTimeout(() => {
        document.getElementById("win-modal").classList.remove("hidden");
        document.getElementById("overlay").classList.remove("hidden");
        AUDIO_BACKGROUND.pause();
        AUDIO_WIN.play();
      }, 1000);
    }
  }

  handleJump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jump();
      this.speed = 4 + Math.random() * 0.5;
      // this.playAnimation(this.IMAGES_JUMP);
      this.playAnimation(this.IMAGES_ATTACK);
    }
  }

  animate() {
    this.setStoppableInterval(() => {
      if (this.isDead()) return this.handleDeath();
      this.handleFirstContact();
      // if (this.isHurt()) return this.handleJump();
      if (this.isHurt()) return this.handleHurt();
      if (!this.isAboveGround()) {
        this.isJumping = false;
      }
    }, 50);
  }

  characterStepsIntoEndbossArea() {
    if (this.firstContact) return true;
    if (this.world.character.x > 2520) {
      this.firstContact = true;
      return true;
    }
    return false;
  }

  handleFirstContact() {
    if (this.characterStepsIntoEndbossArea()) {
      this.firstContact = true;
      if ((this.firstContact = true)) {
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
      }
    } else {
      this.firstContact = false;
    }
  }

  handleAttack() {
    this.playAnimation(this.IMAGES_ATTACK);
  }
}
