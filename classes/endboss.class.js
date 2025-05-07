class Endboss extends MovableObject {
    width=350;
    height=400;
    otherDirection = true;
  IMAGES_WALKING = [
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
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 700;
    this.y = 70;
    this.animate();
  }

  animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 70);
  }
}
