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
      var _this, _ret;

      _classCallCheck(this, Mixin);

      var result = (_this = _possibleConstructorReturn(this, (Mixin.__proto__ || Object.getPrototypeOf(Mixin)).call(this)), _this);
      console.log('mixin constructor');
      return _ret = result, _possibleConstructorReturn(_this, _ret);
    }

    return Mixin;
  }(base);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvTWl4aW4uanMiLCJlczUvVGVzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLFFBQVEsU0FBUixLQUFRLENBQUMsSUFBRDtBQUFBO0FBQUE7O0FBQ1oscUJBQWM7QUFBQTs7QUFBQTs7QUFDWixVQUFNLHdIQUFOO0FBQ0EsY0FBUSxHQUFSLENBQVksbUJBQVo7QUFDQSxvQkFBTyxNQUFQO0FBQ0Q7O0FBTFc7QUFBQSxJQUE4QixJQUE5QjtBQUFBLENBQWQ7O0FBUUEsT0FBTyxLQUFQLEdBQWUsS0FBZjs7a0JBRWUsSzs7Ozs7OztBQ1ZmOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtJQUNNLFc7OztBQUVKLHlCQUFjO0FBQUE7O0FBQUE7O0FBQ1osUUFBTSxvSUFBTjtBQUNBLFlBQVEsR0FBUixDQUFZLHVCQUFaO0FBQ0Esa0JBQU8sTUFBUDtBQUNEOzs7O3dCQUVlO0FBQUUsYUFBTyxjQUFQO0FBQXdCOzs7O0VBUmxCLE9BQU8sT0FBUCxDQUFlLE87O0FBWXpDLGVBQWUsTUFBZixDQUFzQixZQUFZLEVBQWxDLEVBQXNDLFdBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IE1peGluID0gKGJhc2UpID0+IGNsYXNzIE1peGluIGV4dGVuZHMgYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyKCk7XG4gICAgY29uc29sZS5sb2coJ21peGluIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxud2luZG93Lk1peGluID0gTWl4aW47XG5cbmV4cG9ydCBkZWZhdWx0IE1peGluO1xuIiwiaW1wb3J0IE1peGluIGZyb20gJy4vTWl4aW4nO1xuXG5cbi8vIGNsYXNzIFRlc3RFbGVtZW50IGV4dGVuZHMgQmFzaWMuU2luZ2xlU2VsZWN0aW9uKFBvbHltZXIuRWxlbWVudCkge1xuLy8gY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBCYXNpYy5TaW5nbGVTZWxlY3Rpb24oSFRNTEVsZW1lbnQpIHtcbi8vIGNsYXNzIFRlc3RFbGVtZW50IGV4dGVuZHMgTWl4aW4od2luZG93LlBvbHltZXIuRWxlbWVudCkge1xuLy8gY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyBNaXhpbihIVE1MRWxlbWVudCkge1xuY2xhc3MgVGVzdEVsZW1lbnQgZXh0ZW5kcyB3aW5kb3cuUG9seW1lci5FbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlcigpO1xuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHsgcmV0dXJuICd0ZXN0LWVsZW1lbnQnOyB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRlc3RFbGVtZW50LmlzLCBUZXN0RWxlbWVudCk7XG4iXX0=
