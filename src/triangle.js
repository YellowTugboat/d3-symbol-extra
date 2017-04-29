// Direct variations of `symbolTriangle` from d3-shape.
import {drawPath} from './drawPath';

var sqrt3 = Math.sqrt(3);

export var triangleDown = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    drawPath(context, [
      [ 0, -y * 2 ],
      [ -sqrt3 * y, y ],
      [ sqrt3 * y, y ]
    ]);
  }
};

export var triangleLeft = {
  draw: function(context, size) {
    var x = -Math.sqrt(size / (sqrt3 * 3));
    drawPath(context, [
      [ x * 2, 0 ],
      [ -x, -sqrt3 * x ],
      [ -x, sqrt3 * x ]
    ]);
  }
};

export var triangleRight = {
  draw: function(context, size) {
    var x = -Math.sqrt(size / (sqrt3 * 3));
    drawPath(context, [
      [ -x * 2, 0 ],
      [ x, -sqrt3 * x ],
      [ x, sqrt3 * x ]
    ]);
  }
};
