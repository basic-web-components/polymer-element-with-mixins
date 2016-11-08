(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mixin = function Mixin(base) {
  return function (_base) {
    _inherits(Mixin, _base);

    function Mixin() {
      _classCallCheck(this, Mixin);

      var _this = _possibleConstructorReturn(this, (Mixin.__proto__ || Object.getPrototypeOf(Mixin)).call(this));

      console.log('mixin constructor');
      return _this;
    }

    return Mixin;
  }(base);
};

window.Mixin = Mixin;

exports.default = Mixin;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Mixin2 = require('./Mixin');

var _Mixin3 = _interopRequireDefault(_Mixin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestElement = function (_Mixin) {
  _inherits(TestElement, _Mixin);

  function TestElement() {
    _classCallCheck(this, TestElement);

    var _this = _possibleConstructorReturn(this, (TestElement.__proto__ || Object.getPrototypeOf(TestElement)).call(this));

    console.log('component constructor');
    return _this;
  }

  _createClass(TestElement, null, [{
    key: 'is',
    get: function get() {
      return 'test-element';
    }
  }]);

  return TestElement;
}((0, _Mixin3.default)(window.Polymer.Element));

customElements.define(TestElement.is, TestElement);

},{"./Mixin":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvTWl4aW4uanMiLCJlczUvVGVzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLFFBQVEsU0FBUixLQUFRLENBQUMsSUFBRDtBQUFBO0FBQUE7O0FBQ1oscUJBQWM7QUFBQTs7QUFBQTs7QUFFWixjQUFRLEdBQVIsQ0FBWSxtQkFBWjtBQUZZO0FBR2I7O0FBSlc7QUFBQSxJQUE4QixJQUE5QjtBQUFBLENBQWQ7O0FBT0EsT0FBTyxLQUFQLEdBQWUsS0FBZjs7a0JBRWUsSzs7Ozs7OztBQ1RmOzs7Ozs7Ozs7Ozs7SUFHTSxXOzs7QUFFSix5QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQVEsR0FBUixDQUFZLHVCQUFaO0FBRlk7QUFHYjs7Ozt3QkFFZTtBQUFFLGFBQU8sY0FBUDtBQUF3Qjs7OztFQVBsQixxQkFBTSxPQUFPLE9BQVAsQ0FBZSxPQUFyQixDOztBQVcxQixlQUFlLE1BQWYsQ0FBc0IsWUFBWSxFQUFsQyxFQUFzQyxXQUF0QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBNaXhpbiA9IChiYXNlKSA9PiBjbGFzcyBNaXhpbiBleHRlbmRzIGJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnNvbGUubG9nKCdtaXhpbiBjb25zdHJ1Y3RvcicpO1xuICB9XG59O1xuXG53aW5kb3cuTWl4aW4gPSBNaXhpbjtcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW47XG4iLCJpbXBvcnQgTWl4aW4gZnJvbSAnLi9NaXhpbic7XG5cblxuY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBNaXhpbih3aW5kb3cuUG9seW1lci5FbGVtZW50KSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ3Rlc3QtZWxlbWVudCc7IH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVGVzdEVsZW1lbnQuaXMsIFRlc3RFbGVtZW50KTtcbiJdfQ==
