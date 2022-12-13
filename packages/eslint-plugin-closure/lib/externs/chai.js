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
 * @fileoverview An extern file for chai.js.
 * @externs
 */

/* eslint no-unused-vars: "off" */

/** @const */
const Chai = {};


/**
 * The overall Chai module.
 * @constructor
 */
Chai.Module = function() {};

/**
 * The expect function.
 * @param {*} target
 * @param {string=} message
 * @return {!Chai.Expect}
 */
Chai.Module.prototype.expect = function(target, message) {};

/**
 * The Chai expect targets.
 * @extends {Chai.LanguageChains}
 * @extends {Chai.NumericComparison}
 * @extends {Chai.TypeComparison}
 * @record
 */
Chai.Expect = function() {};
/** @type {!Chai.Expect} */
Chai.Expect.prototype.not;
/** @type {!Chai.Deep} */
Chai.Expect.prototype.deep;
/** @type {(!Chai.TypeComparison|!Chai.TypeComparator)} */
Chai.Expect.prototype.a;
/** @type {(!Chai.TypeComparison|!Chai.TypeComparator)} */
Chai.Expect.prototype.an;
/** @type {!Chai.Include} */
Chai.Expect.prototype.include;
/** @type {!Chai.Include} */
Chai.Expect.prototype.contain;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.ok;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.true;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.false;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.null;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.undefined;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.exist;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.empty;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.arguments;
/** @type {!Chai.Expect} */
Chai.Expect.prototype.Arguments;
/** @type {!Chai.Equal} */
Chai.Expect.prototype.equal;
/** @type {!Chai.Equal} */
Chai.Expect.prototype.equals;
/** @type {!Chai.Equal} */
Chai.Expect.prototype.eq;
/** @type {!Chai.Equal} */
Chai.Expect.prototype.eql;
/** @type {!Chai.Equal} */
Chai.Expect.prototype.eqls;
/** @type {!Chai.Throw} */
Chai.Expect.prototype.throw;
/** @type {!Chai.Property} */
Chai.Expect.prototype.property;
/** @type {!Chai.OwnProperty} */
Chai.Expect.prototype.ownProperty;
/** @type {!Chai.OwnProperty} */
Chai.Expect.prototype.haveOwnProperty;
/** @type {(!Chai.Length|!Chai.LengthComparator)} */
Chai.Expect.prototype.length;
/** @type {(!Chai.Length|!Chai.LengthComparator)} */
Chai.Expect.prototype.lengthOf;

/**
 * Language Chains.
 * @interface
 */
Chai.LanguageChains = function() {};
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.to;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.be;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.been;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.is;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.that;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.and;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.have;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.with;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.at;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.of;
/** @type {!Chai.Expect} */
Chai.LanguageChains.prototype.same;


/**
 * @param {number} value
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.NumberComparer = function(value, message) {};

/** @interface */
Chai.NumericComparison = function() {};
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.above;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.gt;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.greaterThan;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.least;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.gte;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.below;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.lt;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.lessThan;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.most;
/** @type {!Chai.NumberComparer} */
Chai.NumericComparison.prototype.lte;
/**
 * @param {number} start
 * @param {number} finish
 * @param {string=} message
 * @return {!Chai.Expect}
 */
Chai.NumericComparison.prototype.within = (start, finish, message) => {};

/**
 * @typedef {function(*, string=):void}
 */
Chai.Equal;

/** @record */
Chai.TypeComparison = function() {};

/** @type {!Chai.InstanceOf} */
Chai.TypeComparison.prototype.instanceof;
/** @type {!Chai.InstanceOf} */
Chai.TypeComparison.prototype.instanceOf;

/**
 * @param {string} type
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.TypeComparator = function(type, message) {};

/** @record */
Chai.Deep = function() {};
/** @type {!Chai.Equal} */
Chai.Deep.prototype.equal;
/** @type {!Chai.Property} */
Chai.Deep.prototype.property;

/**
 * @param {(!Object|string|number)} value
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.Include = function(value, message) {};

/**
 * @param {...*} keys
 * @return {!Chai.Expect}
 */
Chai.Include.prototype.keys = (keys) => {};

/**
 * @param {*} set
 * @param {string=} message
 * @return {!Chai.Expect}
 */
Chai.Include.prototype.members = (set, message) => {};

/**
 * @param {string} name
 * @param {*} value
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.Property = function(name, value, message) {};

/**
 * @param {string} name
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.OwnProperty = function(name, message) {};

/**
 * @extends {Chai.LanguageChains}
 * @extends {Chai.NumericComparison}
 * @record
 */
Chai.Length = function() {};

/**
 * @param {number} length
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.LengthComparator = function(length, message) {};

/**
 * @param {!Object} constructor
 * @param {string=} message
 * @return {!Chai.Expect}
 * @constructor
 */
Chai.InstanceOf = function(constructor, message) {};


/**
 * @typedef {function((string|!RegExp|!Function)):!Chai.Expect}
 */
Chai.Throw;
