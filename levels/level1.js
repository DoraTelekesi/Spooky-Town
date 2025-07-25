let level1;

/**
 * Initializes the first level by creating all enemies, clouds, collectibles, backgrounds, and status bars.
 */
function initLevel() {
  level1 = new Level(
    [
      new Enemy("img/Wraith_01/Idle/Wraith_01_Idle_000.png", "wraith-1"),
      new Enemy("img/Wraith_02/Idle/Wraith_02_Idle_000.png", "wraith-2"),
      new Enemy("img/Wraith_03/Idle/Wraith_03_Idle_000.png", "wraith-3"),
      new Enemy("img/Wraith_01/Idle/Wraith_01_Idle_000.png", "wraith-1"),
      new Enemy("img/Wraith_02/Idle/Wraith_02_Idle_000.png", "wraith-2"),
      new Enemy("img/Wraith_03/Idle/Wraith_03_Idle_000.png", "wraith-3"),
    ],
    [
      new Cloud("img/Background/1_game_background/layers/2.png", -729),
      new Cloud("img/Background/1_game_background/layers/2.png", 0),
      new Cloud("img/Background/1_game_background/layers/2.png", 729),
      new Cloud("img/Background/1_game_background/layers/2.png", 729 * 2),
      new Cloud("img/Background/1_game_background/layers/2.png", 729 * 3),
      new Cloud("img/Background/1_game_background/layers/2.png", 729 * 4),
      new Cloud("img/Background/1_game_background/layers/2.png", 729 * 5),
    ],
    [
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(360, "bottle"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
      new CollectibleObject(220, "coin"),
    ],
    [
      new BackgroundObject("img/Background/1_game_background/layers/1.png", -729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", -729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", -729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", -729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/6.png", -729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", -729 * 2, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", -729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", -729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", -729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", -729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", -729, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 0, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 0, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 0, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 0, 0),
      new BackgroundObject("img/Background/1_game_background/layers/6.png", 0, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 0, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 729, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 729, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/6.png", 729 * 2, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 729 * 2, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 729 * 3, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 729 * 3, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 729 * 3, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 729 * 3, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 729 * 3, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 729 * 4, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 729 * 4, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 729 * 4, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 729 * 4, 0),
      new BackgroundObject("img/Background/1_game_background/layers/6.png", 729 * 4, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 729 * 4, 0),

      new BackgroundObject("img/Background/1_game_background/layers/1.png", 729 * 5, 0),
      new BackgroundObject("img/Background/1_game_background/layers/3.png", 729 * 5, 0),
      new BackgroundObject("img/Background/1_game_background/layers/4.png", 729 * 5, 0),
      new BackgroundObject("img/Background/1_game_background/layers/5.png", 729 * 5, 0),
      new BackgroundObject("img/Background/1_game_background/layers/7.png", 729 * 5, 0),
    ],
    [new StatusBar(10, 10, "health"), new StatusBar(10, 50, "coin"), new StatusBar(10, 90, "bottle")],
    [new StatusBarEndboss(world)]
  );
}
