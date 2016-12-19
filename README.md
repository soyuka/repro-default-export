# Bug Reproduction repository

Related issues:

https://github.com/trueadm/inferno/issues/596
https://github.com/rollup/rollup/issues/1156

## Install

run `bash init.sh`

## What's wrong?

In `src/index.ts`:

```javascript
import createElement from 'inferno-create-element'
import Component from 'inferno-component'

console.log(createElement)
console.log(Component)
```

`createElement` and `Component` should have the value of the related package default export.

Though, if you run `node dist/bundle.js`, you'll get `undefined`

If you check out the compiled file, you will see something like:

```javascript
const inferno_create_element_1 = __webpack_require__(3);
const inferno_component_1 = __webpack_require__(2);
console.log(inferno_create_element_1.default);
console.log(inferno_component_1.default);
```

But, rollup (which is used by Inferno) doesn't export any default:

```javascript
true ? module.exports = factory(__webpack_require__(0)) :
typeof define === 'function' && define.amd ? define(['inferno'], factory) :
(global.Inferno = global.Inferno || {}, global.Inferno.createElement = factory(global.Inferno));
```

An alternative is to use the following import statements:

```javascript
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'

console.log(createElement)
console.log(Component)
```

But by using this, typescript expects Objects and the module signatures are wrong, and therefore blocking the compilation.

**For example, you won't be able to extend `Component`, because it's not recognized as a class.**

## Version used:

- typescript@2.1.4
- webpack@^2.1.0-beta.25
- trueadm/inferno#master
