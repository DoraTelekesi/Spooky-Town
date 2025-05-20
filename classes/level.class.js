class Level {
  enemies;
  backgroundObjects;
  clouds;
  statusbar;
  collectibleObjects;
  level_end_x = 3300;

  constructor(enemies, clouds, collectibleObjects, backgroundObjects, statusbar) {
    this.clouds = clouds;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.statusbar = statusbar;
    this.collectibleObjects = collectibleObjects;
  }
}
