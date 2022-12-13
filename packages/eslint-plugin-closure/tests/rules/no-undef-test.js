// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Tests for no-undef rule.
 */

goog.module('eslintClosure.tests.rules.noUndef');

const noUndefRule = goog.require('eslintClosure.rules.noUndef');

const eslint = /** @type {!ESLint.Module} */ (require('eslint'));

const RuleTester = eslint.RuleTester;
const ruleTester = new RuleTester();

ruleTester.run('no-undef', noUndefRule, {
  valid: [
    'var a = 1, b = 2; a;',
    '/*global b*/ function f() { b; }',
    {code: 'function f() { b; }', globals: {b: false}},
    {code: 'function f() { b; }', global: {b: false}},
    '/*global b a:false*/  a;  function f() { b; a; }',
    'function a(){}  a();',
    'function f(b) { b; }',
    'var a; a = 1; a++;',
    'var a; function f() { a = 1; }',
    '/*global b:true*/ b++;',
    '/*eslint-env browser*/ window;',
    '/*eslint-env browser*/ window;',
    '/*eslint-env node*/ require("a");',
    'Object; isNaN();',
    'toString()',
    'hasOwnProperty()',
    `
function evilEval(stuffToEval) {
  var ultimateAnswer;
  ultimateAnswer = 42;
  eval(stuffToEval);
}`,
    'typeof a',
    'typeof (a)',
    'var b = typeof a',
    "typeof a === 'undefined'",
    "if (typeof a === 'undefined') {}",
    {
      code: 'function foo() { var [a, b=4] = [1, 2]; return {a, b}; }',
      parserOptions: {ecmaVersion: 6},
    },
    {code: 'var toString = 1;', parserOptions: {ecmaVersion: 6}},
    {
      code: 'function myFunc(...foo) {  return foo;}',
      parserOptions: {ecmaVersion: 6},
    },
    {
      code: 'var React, App, a=1; React.render(<App attr={a} />);',
      parserOptions: {ecmaVersion: 6, ecmaFeatures: {jsx: true}},
    },
    {
      code: 'var console; [1,2,3].forEach(obj => {console.log(obj);});',
      parserOptions: {ecmaVersion: 6},
    },
    {
      code: 'var Foo; class Bar extends Foo { constructor() { super();  }}',
      parserOptions: {ecmaVersion: 6},
    },
    {
      code: `
import Warning from '../lib/warning';
var warn = new Warning('text');`,
      parserOptions: {sourceType: 'module'},
    },
    {
      code: `
import *as Warning from '../lib/warning';
var warn = new Warning('text');`,
      parserOptions: {sourceType: 'module'},
    },
    {code: 'var a; [a] = [0];', parserOptions: {ecmaVersion: 6}},
    {code: 'var a; ({a} = {});', parserOptions: {ecmaVersion: 6}},
    {code: 'var a; ({b: a} = {});', parserOptions: {ecmaVersion: 6}},
    {
      code: 'var obj; [obj.a, obj.b] = [0, 1];',
      parserOptions: {ecmaVersion: 6},
    },
    {code: 'URLSearchParams;', env: {browser: true}},

    // Notifications of readonly are removed:
    // https://github.com/eslint/eslint/issues/4504
    {code: '/*global b:false*/ function f() { b = 1; }'},
    {code: 'function f() { b = 1; }', global: {b: false}},
    {code: '/*global b:false*/ function f() { b++; }'},
    {code: '/*global b*/ b = 1;'},
    {code: '/*global b:false*/ var b = 1;'},
    {code: 'Array = 1;'},

    // new.target: https://github.com/eslint/eslint/issues/5420
    {
      code: 'class A { constructor() { new.target; } }',
      parserOptions: {ecmaVersion: 6},
    },

    // Experimental,
    {
      code: 'var {bacon, ...others} = stuff; foo(others)',
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },
      globals: {stuff: false, foo: false},
    },
    {
      code: `
goog.require('foo');
foo.bar;`,
      globals: {goog: true},
    },
    {
      code: `
goog.require('foo');
foo();`,
      globals: {goog: true},
    },
    {
      code: `
goog.require('foo.bar');
foo.bar.baz();`,
      globals: {goog: true},
    },
    {
      code: `
goog.require('foo.bar.baz');
foo.bar.baz();`,
      globals: {goog: true},
    },
    {
      code: `
goog.require('foo.bar.baz');
goog.require('qux.bar');
foo.bar.baz();
foo.bar.baz.foof();
qux.bar();
qux.bar.baz;`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo');
foo.bar;`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo');
foo = function() {return 2;}`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo');
foo();`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo.bar');
foo.bar.baz();`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo.bar.baz');
foo.bar.baz();`,
      globals: {goog: true},
    },
    {
      code: `
goog.provide('foo.bar.baz');
goog.provide('qux.bar');
foo.bar.baz();
foo.bar.baz.foof();
qux.bar();
qux.bar.baz;`,
      globals: {goog: true},
    },
  ],
  invalid: [
    {
      code: 'a = 1;',
      errors: [{message: "'a' is not defined.", type: 'Identifier'}],
    },
    {
      code: "if (typeof anUndefinedVar === 'string') {}",
      options: [{typeof: true}],
      errors:
          [{message: "'anUndefinedVar' is not defined.", type: 'Identifier'}],
    },
    {
      code: 'var a = b;',
      errors: [{message: "'b' is not defined.", type: 'Identifier'}],
    },
    {
      code: 'function f() { b; }',
      errors: [{message: "'b' is not defined.", type: 'Identifier'}],
    },
    {
      code: 'window;',
      errors: [{message: "'window' is not defined.", type: 'Identifier'}],
    },
    {
      code: 'require("a");',
      errors: [{message: "'require' is not defined.", type: 'Identifier'}],
    },
    {
      code: 'var React; React.render(<img attr={a} />);',
      errors: [{message: "'a' is not defined."}],
      parserOptions: {ecmaVersion: 6, ecmaFeatures: {jsx: true}},
    },
    {
      code: 'var React, App; React.render(<App attr={a} />);',
      errors: [{message: "'a' is not defined."}],
      parserOptions: {ecmaVersion: 6, ecmaFeatures: {jsx: true}},
    },
    {
      code: '[a] = [0];',
      parserOptions: {ecmaVersion: 6},
      errors: [{message: "'a' is not defined."}],
    },
    {
      code: '({a} = {});',
      parserOptions: {ecmaVersion: 6},
      errors: [{message: "'a' is not defined."}],
    },
    {
      code: '({b: a} = {});',
      parserOptions: {ecmaVersion: 6},
      errors: [{message: "'a' is not defined."}],
    },
    {
      code: '[obj.a, obj.b] = [0, 1];',
      parserOptions: {ecmaVersion: 6},
      errors: [
        {message: "'obj' is not defined."},
        {message: "'obj' is not defined."},
      ],
    },

    // Experimental
    {
      code: 'const c = 0; const a = {...b, c};',
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },
      errors: [{message: "'b' is not defined."}],
    },

    {
      code: `
goog.require('foo');
foo.bar;
foobar`,
      globals: {goog: true},
      errors: [{message: "'foobar' is not defined."}],
    },
    {
      code: `
goog.require('foo.bar');
foo.baz();`,
      globals: {goog: true},
      errors: [{message: "'foo' is not defined."}],
    },
    {
      code: `
goog.require('foo.bar.baz');
foo.barbaz();`,
      globals: {goog: true},
      errors: [{message: "'foo' is not defined."}],
    },
    {
      code: `
goog.require('foo.bar.baz');
goog.require('qux.bar');
foobar.baz();
foo.bar.bazfoof();
qux.baz();
qux.bar.baz;`,
      globals: {goog: true},
      errors: [
        {message: "'foobar' is not defined."},
        {message: "'foo' is not defined."},
        {message: "'qux' is not defined."},
      ],
    },
    {
      code: `
goog.provide('foo');
foobar;`,
      globals: {goog: true},
      errors: [{message: "'foobar' is not defined."}],
    },
    {
      code: `
goog.provide('foo');
foobar = function() {return 2;}`,
      globals: {goog: true},
      errors: [{message: "'foobar' is not defined."}],
    },
    {
      code: `
goog.provide('foo');
foobar();`,
      globals: {goog: true},
      errors: [{message: "'foobar' is not defined."}],
    },
    {
      code: `
goog.provide('foo.bar');
foo.baz();`,
      globals: {goog: true},
      errors: [{message: "'foo' is not defined."}],
    },
    {
      code: `
goog.provide('foo.bar.baz');
foo.bar.qux();`,
      globals: {goog: true},
      errors: [{message: "'foo' is not defined."}],
    },
  ],
});
