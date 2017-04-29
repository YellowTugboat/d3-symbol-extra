// Hexagon reference: http://mathworld.wolfram.com/Hexagon.html
import {tau} from './math';
import {rotatePoint} from './rotatePoint';
import {drawPath} from './drawPath';

function sideLength(area) {
  var num = 2 * area;
  var denom = 3 * Math.sqrt(3);
  return Math.sqrt(num / denom);
}

function drawBuild(theta) {
  var t = theta || 0;

  return function draw(context, size) {
    var s = sideLength(size);
    var R = s;

    var points = [ rotatePoint(R, 0, t) ];

    for (var i = 0; i < 6; ++i) {
      var a = tau * i / 6;
      var x = Math.cos(a) * R;
      var y = Math.sin(a) * R;

      points.push(rotatePoint(x, y, t));
    }

    drawPath(context, points);
  };
}

export var hexagon = {
  draw: drawBuild(tau / 12) // Rotate 1/12 turn back so the shape is oriented with a point upward.
};

export var hexagonAlt = {
  draw: drawBuild()
};
