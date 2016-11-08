const Mixin = (base) => class Mixin extends base {
  constructor() {
    const result = super();
    console.log('mixin constructor');
    return result;
  }
};

window.Mixin = Mixin;

export default Mixin;
