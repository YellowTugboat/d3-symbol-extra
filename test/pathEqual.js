// File taken from https://github.com/d3/d3-shape/tree/master/test
var tape = require("tape");

var reNumber = /[-+]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[eE][-]?\d+)?/g;

tape.Test.prototype.pathEqual = function(actual, expected) {
  actual = normalizePath(actual + "");
  this._assert(actual === expected, {
    message: "should be equal",
    operator: "pathEqual",
    actual: actual,
    expected: expected
  });
};

function normalizePath(path) {
  return path.replace(reNumber, formatNumber);
}

function formatNumber(s) {
  return Math.abs((s = +s) - Math.round(s)) < 1e-6 ? Math.round(s) : s.toFixed(6);
}
