import Mixin from './Mixin';


// class TestElement extends Basic.SingleSelection(Polymer.Element) {
// class TestElement extends Basic.SingleSelection(HTMLElement) {
// class TestElement extends Mixin(window.Polymer.Element) {
// class TestElement extends Mixin(HTMLElement) {
class TestElement extends window.Polymer.Element {

  constructor() {
    const result = super();
    console.log('component constructor');
    return result;
  }

  static get is() { return 'test-element'; }

}

customElements.define(TestElement.is, TestElement);
