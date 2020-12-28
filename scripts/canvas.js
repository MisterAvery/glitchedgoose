let circles = [
  new Circle(width/2, height/3, 40, '#13b8ff22'),
  new Circle(width/5, height/7, 30, '#13b8ff22'),
  new Circle(width/4, height/1.5, 20, '#53e38f44'),
  new Circle(width/1.25, height/1.40, 40, '#53e38f44'),
  new Circle(width/2, height/7, 20, '#ff5f5f33')
];

(function beginAnimation() {
  ctx.clearRect(0, 0, width, height);

  circles.forEach(circle => {
    circle.show();
    circle.move();
  });

  window.requestAnimationFrame(beginAnimation);
})();
