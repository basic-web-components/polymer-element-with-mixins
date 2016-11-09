// import DistributedChildrenAsContent from 'basic-component-mixins/src/DistributedChildrenAsContent';
import ClickSelection from 'basic-component-mixins/src/ClickSelection';
// import ContentAsItems from 'basic-component-mixins/src/ContentAsItems';
// import DirectionSelection from 'basic-component-mixins/src/DirectionSelection';
// import Generic from 'basic-component-mixins/src/Generic';
// import Keyboard from 'basic-component-mixins/src/Keyboard';
// import KeyboardDirection from 'basic-component-mixins/src/KeyboardDirection';
// import KeyboardPagedSelection from 'basic-component-mixins/src/KeyboardPagedSelection';
// import KeyboardPrefixSelection from 'basic-component-mixins/src/KeyboardPrefixSelection';
import SelectionAriaActive from 'basic-component-mixins/src/SelectionAriaActive';
import SelectionHighlight from 'basic-component-mixins/src/SelectionHighlight';
// import SelectionInView from 'basic-component-mixins/src/SelectionInView';
import SingleSelection from 'basic-component-mixins/src/SingleSelection';
// import symbols from 'basic-component-mixins/src/symbols';


const base = [
  ClickSelection,
  // ContentAsItems,
  // DirectionSelection,
  // DistributedChildrenAsContent,
  // Generic,
  // Keyboard,
  // KeyboardDirection,
  // KeyboardPagedSelection,
  // KeyboardPrefixSelection,
  SelectionAriaActive,
  SelectionHighlight,
  // SelectionInView,
  SingleSelection
].reduce((subclass, mixin) => mixin(subclass), window.Polymer.Element);

class ListBox extends base {

  get items() {
    return [...this.children];
  }

  static get is() { return 'list-box'; }

}

customElements.define(ListBox.is, ListBox);
