This project defines a custom element by subclassing Polymer.Element and
applying a mixin. This defines the same simple element in various conditions:

* The `es5` folder contains ES6 code that gets transpiled to ES5.
* The `es6` folder contains ES6 code that is bundled but otherwise not
  transpiled.

To rebuild these versions:

1. `yarn install`
2. `npm run es5` (to build ES5 version)
3. `npm run es6` (to build ES6 version)
