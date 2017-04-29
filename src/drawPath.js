export function drawPath(context, points) {
  points = points.slice(0);

  context.moveTo.apply(context, points.shift());

  while (points.length) {
      context.lineTo.apply(context, points.shift());
  }

  context.closePath();
}
