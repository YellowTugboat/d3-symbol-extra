import {tau} from './math';
import {rotatePoint} from './rotatePoint';

export function generatePoints(count, R, theta) {
  var points = [];

  for (var i = 0; i < count; ++i) {
    var a = tau * i / count;
    var x = Math.cos(a) * R;
    var y = Math.sin(a) * R;

    points.push(rotatePoint(x, y, theta));
  }

  return points;
}
