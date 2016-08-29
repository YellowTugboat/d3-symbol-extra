# d3-symbol-extra
Additional D3 symbol types.

For use with D3 version 4+.

## Demo
A demo is available [here](https://bl.ocks.org/kbuhrer/858e65ae9840f22da4f51b5e1121e765).

## Installing

If you use NPM, `npm install d3-symbol-extra`. Otherwise, download the
[latest release](https://github.com/YellowTugboat/d3-symbol-extra/releases/latest).
AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
  <script src="https://d3js.org/d3.v4.min.js"></script>
  <script src="d3-symbol-extra.js"></script>

  <svg width="100" height="100"></svg>
  <script>

  var symbol = d3.symbol().size(1000).type(d3.symbolPentagon);
  d3.select('svg').append('path')
    .attr('transform', 'translate(50, 50)')
    .attr('d', function(d, i) {
      return symbol();
    });

  </script>
```

## API Reference
### Symbols
<a href="#symbolTriangleDown"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/triangleDown.png" width="100" height="100">
<a href="#symbolTriangleLeft"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/triangleLeft.png" width="100" height="100">
<a href="#symbolTriangleRight"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/triangleRight.png" width="100" height="100">
<a href="#symbolDiamondAlt"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/diamondAlt.png" width="100" height="100"></a>
<a href="#symbolDiamondSquare"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/diamondSquare.png" width="100" height="100"></a>
<a href="#symbolPentagon"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/pentagon.png" width="100" height="100"></a>
<a href="#symbolHexagon"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/hexagon.png" width="100" height="100"></a>
<a href="#symbolHexagonAlt"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/hexagonAlt.png" width="100" height="100"></a>
<a href="#symbolOctagon"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/octagon.png" width="100" height="100"></a>
<a href="#symbolOctagonAlt"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/octagonAlt.png" width="100" height="100"></a>
<a href="#symbolX"><img src="https://raw.githubusercontent.com/YellowTugboat/d3-symbol-extra/master/img/x.png" width="100" height="100"></a>

<a name="symbolTriangleDown" href="#symbolTriangleDown">#</a> d3.<b>symbolTriangleDown</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/triangle.js "Source")

The triangle symbol type rotated 180&deg;. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolTriangle</a>.

<a name="symbolTriangleLeft" href="#symbolTriangleLeft">#</a> d3.<b>symbolTriangleLeft</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/triangle.js "Source")

The triangle symbol type rotated 90&deg; counterclockwise. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolTriangle</a>.

<a name="symbolTriangleRight" href="#symbolTriangleRight">#</a> d3.<b>symbolTriangleRight</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/triangle.js "Source")

The triangle symbol type rotated 90&deg; clockwise. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolTriangle</a>.

<a name="symbolDiamondAlt" href="#symbolDiamondAlt">#</a> d3.<b>symbolDiamondAlt</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/diamond.js "Source")

The diamond symbol type laid horizontally. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolDiamond</a>.

<a name="symbolDiamondSquare" href="#symbolDiamondSquare">#</a> d3.<b>symbolDiamondSquare</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/diamond.js "Source")

The square symbol type rotated 45&deg;. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolSquare</a>.

<a name="symbolPentagon" href="#symbolPentagon">#</a> d3.<b>symbolPentagon</b>
[<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/pentagon.js "Source")

The pentagon symbol type.

<a name="symbolHexagon" href="#symbolHexagon">#</a> d3.<b>symbolHexagon</b>
[<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/hexagon.js "Source")

The hexagon symbol type.

<a name="symbolHexagonAlt" href="#symbolHexagonAlt">#</a> d3.<b>symbolHexagonAlt</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/hexagon.js "Source")

The hexagon symbol type rotated to have horizontal top and bottom edges.

<a name="symbolOctagon" href="#symbolOctagon">#</a> d3.<b>symbolOctagon</b>
[<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/octagon.js "Source")

The octagon symbol type.

<a name="symbolOctagonAlt" href="#symbolOctagonAlt">#</a> d3.<b>symbolOctagonAlt</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/octagon.js "Source")

The octagon symbol type rotated to have horizontal top and bottom edges.

<a name="symbolX" href="#symbolX">#</a> d3.<b>symbolX</b> [<>](https://github.com/YellowTugboat/d3-symbol-extra/blob/master/src/x.js "Source")

The Greek cross symbol type rotated 45&deg;. Alias: d3.symbolCrossAlt. See <a href="https://github.com/d3/d3-shape/blob/master/README.md#symbols">d3.symbolCross</a>.
