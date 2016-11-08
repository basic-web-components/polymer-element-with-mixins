This is an experiment to try applying a mixin to Polymer.Element under
different conditions:

* The `es5` folder contains ES6 code that gets transpiled to ES5.
* The `es6` folder contains ES6 code that is bundled but otherwise not
  transpiled.

To rebuild these versions:

1. `yarn install`
2. `npm run es5` (to build ES5 version)
3. `npm run es6` (to build ES6 version)
