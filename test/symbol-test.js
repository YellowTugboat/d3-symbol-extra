var tape = require("tape"),
    shape = require("d3-shape"),
    extra = require("../"),
    polygonContext = require("./polygonContext");

require("./inDelta");
require("./pathEqual");

// symbolDiamondSquare
tape("symbol.type(symbolDiamondSquare) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolDiamondSquare).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolDiamondSquare) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolDiamondSquare).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M0,-2.236068L2.236068,0L0,2.236068L-2.236068,0Z");
  test.end();
});


// symbolDiamondAlt
tape("symbol.type(symbolDiamondAlt) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolDiamondAlt).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolDiamondAlt) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolDiamondAlt).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M0,-1.699044L2.942831,0L0,1.699044L-2.942831,0Z");
  test.end();
});


// symbolHexagon
tape("symbol.type(symbolHexagon) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolHexagon).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolHexagon) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolHexagon).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M1.699044,0.980944L1.699044,0.980944L0,1.961887L-1.699044,0.980944L-1.699044,-0.980944L0,-1.961887L1.699044,-0.980944Z");
  test.end();
});


// symbolHexagonAlt
tape("symbol.type(symbolHexagonAlt) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolHexagonAlt).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolHexagonAlt) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolHexagonAlt).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M1.961887,0L1.961887,0L0.980944,1.699044L-0.980944,1.699044L-1.961887,0L-0.980944,-1.699044L0.980944,-1.699044Z");
  test.end();
});


// symbolOctagon
tape("symbol.type(symbolOctagon) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolOctagon).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolOctagon) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolOctagon).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M1.880302,0L1.880302,0L1.329574,1.329574L0,1.880302L-1.329574,1.329574L-1.880302,0L-1.329574,-1.329574L0,-1.880302L1.329574,-1.329574Z");
  test.end();
});


// symbolOctagonAlt
tape("symbol.type(symbolOctagonAlt) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolOctagonAlt).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolOctagonAlt) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolOctagonAlt).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M1.737172,0.719560L1.737172,0.719560L0.719560,1.737172L-0.719560,1.737172L-1.737172,0.719560L-1.737172,-0.719560L-0.719560,-1.737172L0.719560,-1.737172L1.737172,-0.719560Z");
  test.end();
});


// symbolPentagon
tape("symbol.type(symbolPentagon) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolPentagon).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolPentagon) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolPentagon).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0L0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M0,-2.050817L0,-2.050817L1.950443,-0.633737L1.205440,1.659146L-1.205440,1.659146L-1.950443,-0.633737Z");
  test.end();
});


// symbolTriangleDown
tape("symbol.type(symbolTriangleDown) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolTriangleDown).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolTriangleDown) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolTriangleDown).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M0,2.774528L2.402811,-1.387264L-2.402811,-1.387264Z");
  test.end();
});


// symbolTriangleLeft
tape("symbol.type(symbolTriangleLeft) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolTriangleLeft).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolTriangleLeft) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolTriangleLeft).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M-2.774528,0L1.387264,2.402811L1.387264,-2.402811Z");
  test.end();
});


// symbolTriangleRight
tape("symbol.type(symbolTriangleRight) generates a polygon with the specified size", function(test) {
  var p = polygonContext(), s = shape.symbol().type(extra.symbolTriangleRight).context(p);
  s.size(1)(); test.inDelta(p.area(), 1);
  s.size(240)(); test.inDelta(p.area(), 240);
  test.end();
});

tape("symbol.type(symbolTriangleRight) generates the expected path", function(test) {
  var s = shape.symbol().type(extra.symbolTriangleRight).size(function(d) { return d; });
  test.pathEqual(s(0), "M0,0L0,0L0,0Z");
  test.pathEqual(s(10), "M2.774528,0L-1.387264,2.402811L-1.387264,-2.402811Z");
  test.end();
});
