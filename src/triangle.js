// Direct variations of `symbolTriangle` from d3-shape.
var sqrt3 = Math.sqrt(3);

export var triangleDown = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, -y * 2);
    context.lineTo(-sqrt3 * y, y);
    context.lineTo(sqrt3 * y, y);
    context.closePath();
  }
};

export var triangleLeft = {
  draw: function(context, size) {
    var x = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(x * 2, 0);
    context.lineTo(-x, -sqrt3 * x);
    context.lineTo(-x, sqrt3 * x);
    context.closePath();
  }
};

export var triangleRight = {
  draw: function(context, size) {
    var x = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(-x * 2, 0);
    context.lineTo(x, -sqrt3 * x);
    context.lineTo(x, sqrt3 * x);
    context.closePath();
  }
};
