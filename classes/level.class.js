class Level {
  enemies;
  backgroundObjects;
  clouds;
  statusbar;
  collectibleObjects;
  statusbarEndboss;
  level_end_x = 3300;

  /**
   * Creates a new Level instance.
   * @param {MovableObject[]} enemies - Array of enemy objects.
   * @param {Cloud[]} clouds - Array of cloud objects.
   * @param {CollectibleObject[]} collectibleObjects - Array of collectible objects.
   * @param {BackgroundObject[]} backgroundObjects - Array of background objects.
   * @param {Statusbar} statusbar - The status bar for the player.
   * @param {Statusbar} statusbarEndboss - The status bar for the endboss.
   */
  constructor(enemies, clouds, collectibleObjects, backgroundObjects, statusbar, statusbarEndboss) {
    this.clouds = clouds;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.statusbar = statusbar;
    this.collectibleObjects = collectibleObjects;
    this.statusbarEndboss = statusbarEndboss;
  }
}
