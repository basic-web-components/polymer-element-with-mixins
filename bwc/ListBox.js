import DistributedChildrenMixin from 'basic-component-mixins/src/DistributedChildrenMixin';
import DistributedChildrenContentMixin from 'basic-component-mixins/src/DistributedChildrenContentMixin';
import ClickSelectionMixin from 'basic-component-mixins/src/ClickSelectionMixin';
import ContentItemsMixin from 'basic-component-mixins/src/ContentItemsMixin';
import DirectionSelectionMixin from 'basic-component-mixins/src/DirectionSelectionMixin';
import GenericMixin from 'basic-component-mixins/src/GenericMixin';
import KeyboardMixin from 'basic-component-mixins/src/KeyboardMixin';
import KeyboardDirectionMixin from 'basic-component-mixins/src/KeyboardDirectionMixin';
import KeyboardPagedSelectionMixin from 'basic-component-mixins/src/KeyboardPagedSelectionMixin';
import KeyboardPrefixSelectionMixin from 'basic-component-mixins/src/KeyboardPrefixSelectionMixin';
import SelectedItemTextValueMixin from 'basic-component-mixins/src/SelectedItemTextValueMixin';
import SelectionAriaActiveMixin from 'basic-component-mixins/src/SelectionAriaActiveMixin';
import SelectionHighlightMixin from 'basic-component-mixins/src/SelectionHighlightMixin';
import SelectionInViewMixin from 'basic-component-mixins/src/SelectionInViewMixin';
import SingleSelectionMixin from 'basic-component-mixins/src/SingleSelectionMixin';
import symbols from 'basic-component-mixins/src/symbols';


const mixins = [
  ClickSelectionMixin,
  ContentItemsMixin,
  DirectionSelectionMixin,
  DistributedChildrenMixin,
  DistributedChildrenContentMixin,
  GenericMixin,
  KeyboardMixin,
  KeyboardDirectionMixin,
  KeyboardPagedSelectionMixin,
  KeyboardPrefixSelectionMixin,
  SelectedItemTextValueMixin,
  SelectionAriaActiveMixin,
  SelectionHighlightMixin,
  SelectionInViewMixin,
  SingleSelectionMixin
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
