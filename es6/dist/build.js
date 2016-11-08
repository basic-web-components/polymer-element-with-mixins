(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Mixin = base => class Mixin extends base {
  constructor() {
    super();
    console.log('mixin constructor');
  }
};

window.Mixin = Mixin;

exports.default = Mixin;

},{}],2:[function(require,module,exports){
'use strict';

var _Mixin = require('./Mixin');

var _Mixin2 = _interopRequireDefault(_Mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestElement extends (0, _Mixin2.default)(window.Polymer.Element) {

  constructor() {
    super();
    console.log('component constructor');
  }

  static get is() {
    return 'test-element';
  }

}

customElements.define(TestElement.is, TestElement);

},{"./Mixin":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvTWl4aW4uanMiLCJlczYvVGVzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLE1BQU0sUUFBUyxJQUFELElBQVUsTUFBTSxLQUFOLFNBQW9CLElBQXBCLENBQXlCO0FBQy9DLGdCQUFjO0FBQ1o7QUFDQSxZQUFRLEdBQVIsQ0FBWSxtQkFBWjtBQUNEO0FBSjhDLENBQWpEOztBQU9BLE9BQU8sS0FBUCxHQUFlLEtBQWY7O2tCQUVlLEs7Ozs7O0FDVGY7Ozs7OztBQUdBLE1BQU0sV0FBTixTQUEwQixxQkFBTSxPQUFPLE9BQVAsQ0FBZSxPQUFyQixDQUExQixDQUF3RDs7QUFFdEQsZ0JBQWM7QUFDWjtBQUNBLFlBQVEsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7O0FBRUQsYUFBVyxFQUFYLEdBQWdCO0FBQUUsV0FBTyxjQUFQO0FBQXdCOztBQVBZOztBQVd4RCxlQUFlLE1BQWYsQ0FBc0IsWUFBWSxFQUFsQyxFQUFzQyxXQUF0QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBNaXhpbiA9IChiYXNlKSA9PiBjbGFzcyBNaXhpbiBleHRlbmRzIGJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnNvbGUubG9nKCdtaXhpbiBjb25zdHJ1Y3RvcicpO1xuICB9XG59O1xuXG53aW5kb3cuTWl4aW4gPSBNaXhpbjtcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW47XG4iLCJpbXBvcnQgTWl4aW4gZnJvbSAnLi9NaXhpbic7XG5cblxuY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBNaXhpbih3aW5kb3cuUG9seW1lci5FbGVtZW50KSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ3Rlc3QtZWxlbWVudCc7IH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVGVzdEVsZW1lbnQuaXMsIFRlc3RFbGVtZW50KTtcbiJdfQ==
