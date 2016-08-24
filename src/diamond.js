// Direct variation of `symbolDiamond` from d3-shape.

var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

export var diamondAlt = {
  draw: function(context, size) {
    var x = Math.sqrt(size / tan30_2);
    var y = x * tan30;

    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);

    context.closePath();
  }
};

export var diamondSquare = {
  draw: function(context, size) {
    var w = Math.sqrt(size);
    var d = w / 2 * Math.sqrt(2);

    context.moveTo(0, -d);
    context.lineTo(d, 0);
    context.lineTo(0, d);
    context.lineTo(-d, 0);

    context.closePath();
  }
};
