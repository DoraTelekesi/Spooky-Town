class Endboss extends MovableObject {
    width=350;
    height=400;
    otherDirection = true;
      offset = {
    top: 10,
    left: 40,
    right: 80,
    bottom: 40,
  };
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

  IMAGES_WALKING =[
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
  ]
  constructor() {
    super().loadImage(this.IMAGES_STANDING[0]);
    this.loadImages(this.IMAGES_STANDING);
    this.x = 3100;
    this.y = 70;
    this.animate();
  }

  animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES_STANDING);
    }, 70);
  }
}
