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
  currentImage = 0;
  world;
  constructor() {
    super().loadImage("img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animateCharacter();
  }

  animateCharacter() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
      if (this.world.keyboard.LEFT) {
      }
    }, 40);
  }
}
