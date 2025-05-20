class Endboss extends MovableObject {
  width = 350;
  height = 400;
  otherDirection = true;
  speed = 5;
  offset = {
    top: 60,
    left: 40,
    right: 70,
    bottom: 60,
  };
  world;
  energy = 50;
  firstContact = false;

  IMAGES_STANDING = [
    "img/Golem_01/Idle/Golem_01_Idle_000.png",
    "img/Golem_01/Idle/Golem_01_Idle_001.png",
    "img/Golem_01/Idle/Golem_01_Idle_002.png",
    "img/Golem_01/Idle/Golem_01_Idle_003.png",
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

  constructor(world) {
    super().loadImage(this.IMAGES_STANDING[0]);
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 3100;
    this.y = 70;
    this.world = world;
    this.animate();
  }

  handleWalk() {
    this.playAnimation(this.IMAGES_WALKING);
  }
  handleHurt() {
    this.playAnimation(this.IMAGES_HURT);
  }

  handleDeath() {
    this.playAnimation(this.IMAGES_DEAD);
  }

  animate() {
    this.setStoppableInterval(() => {
      if (this.world.character.x > 2520) {
        this.firstContact = true;
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
      } else {
        this.firstContact = false;
        this.playAnimation(this.IMAGES_STANDING);
      }
    }, 50);
    this.setStoppableInterval(() => {
      if (this.isHurt()) return this.handleHurt();
      if (this.isDead()) return this.handleDeath();
    }, 50);
  }
}
