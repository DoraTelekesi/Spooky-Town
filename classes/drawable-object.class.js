class DrawableObject {
  x;
  y;
  img;
  height;
  width;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading img");
      console.log("could not load image", e);
    }
  }
  drawFrame(ctx) {
    if (this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
  drawFrameOffset(ctx) {
    if (this instanceof Character || this instanceof Enemy || this instanceof CollectibleObject || this instanceof ThrowableObject) {
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
    drawFrameOffset2(ctx) {
    if (this instanceof Enemy) {
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
