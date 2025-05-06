class Character extends MovableObject {
  x = 10;
  y = 230;
  height = 250;
  width = 250;

  constructor() {
    super().loadImage("img/Skeleton_Warrior_3/Idle/0_Skeleton_Warrior_Idle_000.png");
  }
}
