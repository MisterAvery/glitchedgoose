class Circle {
  constructor(x, y, r, fill) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fill = fill;
    this.vel = {xVel: (Math.random() >= 0.5? -1:1) * 0.8, yVel: (Math.random() >= 0.5? -1:1) * 0.8}
  }

  show() {
    ctx.beginPath();
    ctx.fillStyle = this.fill;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  checkPoint(x, y) {
    if(x < 0 || x > width || y < 0 || y > height) return true;
  }

  move() {
    if(this.checkPoint(this.x - this.r, this.y)) {
      this.x = this.r + 0.1;
      this.vel.xVel *= -1;
    } else if(this.checkPoint(this.x + this.r, this.y)) {
      this.x = width - this.r - 0.1;
      this.vel.xVel *= -1;
    }
    if(this.checkPoint(this.x, this.y - this.r)) {
      this.y = this.r + 0.1;
      this.vel.yVel *= -1;
    } else if(this.checkPoint(this.x, this.y + this.r)) {
      this.y = height - this.r - 0.1;
      this.vel.yVel *= -1;
    }

    this.x += this.vel.xVel;
    this.y += this.vel.yVel;
  }
}
