class Level {
  enemies;
  backgroundObjects;
  clouds;
  statusbar;
  collectibleObjects;
  statusbarEndboss;
  level_end_x = 3300;

  constructor(enemies, clouds, collectibleObjects, backgroundObjects, statusbar, statusbarEndboss) {
    this.clouds = clouds;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.statusbar = statusbar;
    this.collectibleObjects = collectibleObjects;
    this.statusbarEndboss = statusbarEndboss;
  }
}
