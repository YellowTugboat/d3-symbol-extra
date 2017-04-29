// Direct variation of `symbolDiamond` from d3-shape.
import {drawPath} from './drawPath';

var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

export var diamondAlt = {
  draw: function(context, size) {
    var x = Math.sqrt(size / tan30_2);
    var y = x * tan30;

    drawPath(context, [
      [ 0, -y ],
      [ x, 0 ],
      [ 0, y ],
      [ -x, 0 ]
    ]);
  }
};

export var diamondSquare = {
  draw: function(context, size) {
    var w = Math.sqrt(size);
    var d = w / 2 * Math.sqrt(2);

    drawPath(context, [
      [ 0, -d ],
      [ d, 0 ],
      [ 0, d ],
      [ -d, 0 ]
    ]);
  }
};
