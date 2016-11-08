(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Mixin(base) {
  // return class Mixin extends base {
  //   constructor() {
  //     const result = super();
  //     console.log('mixin constructor');
  //     return result;
  //   }
  // };
  return base;
}

window.Mixin = Mixin;

exports.default = Mixin;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Mixin = require('./Mixin');

var _Mixin2 = _interopRequireDefault(_Mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class TestElement extends Basic.SingleSelection(Polymer.Element) {
// class TestElement extends Basic.SingleSelection(HTMLElement) {
// class TestElement extends Mixin(window.Polymer.Element) {
// class TestElement extends Mixin(HTMLElement) {
var TestElement = function (_window$Polymer$Eleme) {
  _inherits(TestElement, _window$Polymer$Eleme);

  function TestElement() {
    var _this, _ret;

    _classCallCheck(this, TestElement);

    var result = (_this = _possibleConstructorReturn(this, (TestElement.__proto__ || Object.getPrototypeOf(TestElement)).call(this)), _this);
    console.log('component constructor');
    return _ret = result, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestElement, null, [{
    key: 'is',
    get: function get() {
      return 'test-element';
    }
  }]);

  return TestElement;
}(window.Polymer.Element);

customElements.define(TestElement.is, TestElement);

},{"./Mixin":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvTWl4aW4uanMiLCJlczUvVGVzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxPQUFPLEtBQVAsR0FBZSxLQUFmOztrQkFFZSxLOzs7Ozs7O0FDYmY7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0lBQ00sVzs7O0FBRUoseUJBQWM7QUFBQTs7QUFBQTs7QUFDWixRQUFNLG9JQUFOO0FBQ0EsWUFBUSxHQUFSLENBQVksdUJBQVo7QUFDQSxrQkFBTyxNQUFQO0FBQ0Q7Ozs7d0JBRWU7QUFBRSxhQUFPLGNBQVA7QUFBd0I7Ozs7RUFSbEIsT0FBTyxPQUFQLENBQWUsTzs7QUFZekMsZUFBZSxNQUFmLENBQXNCLFlBQVksRUFBbEMsRUFBc0MsV0FBdEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gTWl4aW4oYmFzZSkge1xuICAvLyByZXR1cm4gY2xhc3MgTWl4aW4gZXh0ZW5kcyBiYXNlIHtcbiAgLy8gICBjb25zdHJ1Y3RvcigpIHtcbiAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyKCk7XG4gIC8vICAgICBjb25zb2xlLmxvZygnbWl4aW4gY29uc3RydWN0b3InKTtcbiAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gIC8vICAgfVxuICAvLyB9O1xuICByZXR1cm4gYmFzZTtcbn1cblxud2luZG93Lk1peGluID0gTWl4aW47XG5cbmV4cG9ydCBkZWZhdWx0IE1peGluO1xuIiwiaW1wb3J0IE1peGluIGZyb20gJy4vTWl4aW4nO1xuXG5cbi8vIGNsYXNzIFRlc3RFbGVtZW50IGV4dGVuZHMgQmFzaWMuU2luZ2xlU2VsZWN0aW9uKFBvbHltZXIuRWxlbWVudCkge1xuLy8gY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBCYXNpYy5TaW5nbGVTZWxlY3Rpb24oSFRNTEVsZW1lbnQpIHtcbi8vIGNsYXNzIFRlc3RFbGVtZW50IGV4dGVuZHMgTWl4aW4od2luZG93LlBvbHltZXIuRWxlbWVudCkge1xuLy8gY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBNaXhpbihIVE1MRWxlbWVudCkge1xuY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyB3aW5kb3cuUG9seW1lci5FbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlcigpO1xuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHsgcmV0dXJuICd0ZXN0LWVsZW1lbnQnOyB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRlc3RFbGVtZW50LmlzLCBUZXN0RWxlbWVudCk7XG4iXX0=
