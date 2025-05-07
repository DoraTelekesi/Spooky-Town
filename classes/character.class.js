class Character extends MovableObject {
  x = 10;
  y = 230;
  height = 250;
  width = 250;
  speed = 10;
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
  currentImage = 0;
  world;
  constructor() {
    super().loadImage("img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.animateCharacter();
    this.applyGravity();
  }

  animateCharacter() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          //Walk animation
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 40);
  }
}
