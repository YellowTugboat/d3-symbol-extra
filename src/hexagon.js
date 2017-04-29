// Hexagon reference: http://mathworld.wolfram.com/Hexagon.html
import {tau} from './math';
import {generatePoints} from './generatePoints';
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

    drawPath(context, generatePoints(6, R, t));
  };
}

export var hexagon = {
  draw: drawBuild(tau / 12) // Rotate 1/12 turn back so the shape is oriented with a point upward.
};

export var hexagonAlt = {
  draw: drawBuild()
};
