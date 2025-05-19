class Level {
  enemies;
  backgroundObjects;
  clouds;
  level_end_x = 3300;

  constructor(enemies, clouds, backgroundObjects) {
    this.clouds = clouds;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
  }
}
