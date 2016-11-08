const Mixin = (base) => class Mixin extends base {
  constructor() {
    super();
    console.log('mixin constructor');
  }
};

window.Mixin = Mixin;

export default Mixin;
