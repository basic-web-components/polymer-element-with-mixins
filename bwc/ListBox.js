import DistributedChildren from 'basic-component-mixins/src/DistributedChildren';
import DistributedChildrenAsContent from 'basic-component-mixins/src/DistributedChildrenAsContent';
import ClickSelection from 'basic-component-mixins/src/ClickSelection';
import ContentAsItems from 'basic-component-mixins/src/ContentAsItems';
import DirectionSelection from 'basic-component-mixins/src/DirectionSelection';
import Generic from 'basic-component-mixins/src/Generic';
import Keyboard from 'basic-component-mixins/src/Keyboard';
import KeyboardDirection from 'basic-component-mixins/src/KeyboardDirection';
import KeyboardPagedSelection from 'basic-component-mixins/src/KeyboardPagedSelection';
import KeyboardPrefixSelection from 'basic-component-mixins/src/KeyboardPrefixSelection';
import SelectedItemTextAsValue from 'basic-component-mixins/src/SelectedItemTextAsValue';
import SelectionAriaActive from 'basic-component-mixins/src/SelectionAriaActive';
import SelectionHighlight from 'basic-component-mixins/src/SelectionHighlight';
import SelectionInView from 'basic-component-mixins/src/SelectionInView';
import SingleSelection from 'basic-component-mixins/src/SingleSelection';
import symbols from 'basic-component-mixins/src/symbols';


const mixins = [
  ClickSelection,
  ContentAsItems,
  DirectionSelection,
  DistributedChildren,
  DistributedChildrenAsContent,
  Generic,
  Keyboard,
  KeyboardDirection,
  KeyboardPagedSelection,
  KeyboardPrefixSelection,
  SelectedItemTextAsValue,
  SelectionAriaActive,
  SelectionHighlight,
  SelectionInView,
  SingleSelection
];
const base = mixins.reduce((subclass, mixin) => mixin(subclass), window.Polymer.Element);

class ListBox extends base {

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.navigationAxis = 'vertical';
    return defaults;
  }

  static get is() { return 'list-box'; }

  ready() {
    super.ready();
    // HACK to compensate for fact that Polymer doesn't create shadowRoot in
    // constructor.
    this.contentChanged();
  }

  get scrollTarget() {
    return this.$.itemsContainer;
  }

}

customElements.define(ListBox.is, ListBox);
