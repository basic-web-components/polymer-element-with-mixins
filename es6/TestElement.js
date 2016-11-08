import Mixin from './Mixin';


class TestElement extends Mixin(window.Polymer.Element) {

  constructor() {
    super();
    console.log('component constructor');
  }

  static get is() { return 'test-element'; }

}

customElements.define(TestElement.is, TestElement);
