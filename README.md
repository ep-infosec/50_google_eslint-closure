# Closure Linter - ESLint Plugin and Config for the Google JavaScript Style Guide



A heavily customized ESLint config and plugin for JavaScript following
the
[Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html).

Check out the [**demo page**](https://google.github.io/eslint-closure/).

## Google Style Guide Specific Features

- Recognizes `goog.scope` as an immediately invoked function expression (IIFE)
  that doesn't increase the indent.

  ```javascript
  goog.scope(function() {
  var noIndent = 2;
  });
  ```
  
- Recognizes `goog.provide` and `goog.require`.

  ```javascript
  goog.provide('my.module');
  goog.require('other.module');
  
  my.module.Foo = other.module.Bar;
  ```

- Avoids flagging `typedef`, `export` and other type-related tags as unused.

  ```javascript
  /** @export {number} */
  my.module.foo = 2;
  ```
  
See the
[Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html) for
the rest of the rules.

## Disclaimer

This is not an official Google product (experimental or otherwise), it is just
code that happens to be owned by Google.

## Developing

Pull requests are always welcome.  To get started,
install [Bazel](https://bazel.build/), Google's open-source build system,
and [Yarn](https://yarnpkg.com/en/), an NPM replacement.

A typical development flow looks like this:

1.  `make develop` to download dependencies from NPM and to link the projects together.
2.  `make test` to ensure everything works first.
3.  Add a feature or fix a bug.
4.  `make test`
5.  `git commit`
6.  `git push`

