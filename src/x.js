// Direct variation of `symbolCross` from d3-shape.
import {tau} from './math';
import {rotatePoint} from './rotatePoint';

export var x = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    var theta = tau / 8;

    // Use the same construction points as `symbolCross` and rotate 1/8 turn.
    var points = [
      rotatePoint(-3 * r, -r, theta),
      rotatePoint(-r, -r, theta),
      rotatePoint(-r, -3 * r, theta),
      rotatePoint(r, -3 * r, theta),
      rotatePoint(r, -r, theta),
      rotatePoint(3 * r, -r, theta),
      rotatePoint(3 * r, r, theta),
      rotatePoint(r, r, theta),
      rotatePoint(r, 3 * r, theta),
      rotatePoint(-r, 3 * r, theta),
      rotatePoint(-r, r, theta),
      rotatePoint(-3 * r, r, theta)
    ];

    context.moveTo.apply(context, points.pop());
    
    for (var i = 0; i < points.length; i++) {
      context.lineTo.apply(context, points[i]);
    }

    context.closePath();
  }
};
