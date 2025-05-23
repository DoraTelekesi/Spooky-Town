class DrawableObject {
  x;
  y;
  img;
  height;
  width;
  imageCache = {};

  /**
   * Loads a single image and assigns it to this object.
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads multiple images and stores them in the image cache.
   * @param {string[]} arr - Array of image paths to load.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws the object's image on the given canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading img");
      console.log("could not load image", e);
    }
  }

  /**
   * Draws a blue frame around the object if it is an Endboss, Character, or Enemy.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  drawFrame(ctx) {
    if (this instanceof Endboss || this instanceof Character || this instanceof Enemy) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  /**
   * Draws a red frame using the object's offset if it is a Character, Enemy, CollectibleObject, ThrowableObject, or Endboss.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  drawFrameOffset(ctx) {
    if (
      this instanceof Character ||
      this instanceof Enemy ||
      this instanceof CollectibleObject ||
      this instanceof ThrowableObject ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.stroke();
    }
  }

  /**
   * Draws a purple frame using the object's offset2 if it is an Enemy or Character.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  drawFrameOffset2(ctx) {
    if (this instanceof Enemy || this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "purple";
      ctx.rect(
        this.x + this.offset2.left,
        this.y + this.offset2.top,
        this.width - this.offset2.right,
        this.height - this.offset2.bottom
      );
      ctx.stroke();
    }
  }
}
