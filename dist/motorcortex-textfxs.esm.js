import MotorCortex from '@donkeyclip/motorcortex';

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/*
 * anime.js v3.1.5
 * (c) 2021 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults


var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) {
    params = {};
  }

  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = 1; //isPathTargetInsideSVG ? 1 : svg.w / svg.vW;

  var scaleY = 1; //isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;
var transform = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];
var compositeAttributes = {
  transform: transform
};

function getMatrix2D(win, element) {
  var transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {};
  }

  var values = transform.split("(")[1].split(")")[0].split(",");

  var qrDecompone = function qrDecompone(a) {
    var angle = Math.atan2(a[1], a[0]),
        denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
        denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
        scaleX = Math.sqrt(denom),
        scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
        skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
        skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

var Anime$4 = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(Anime, _MotorCortex$Effect);

  var _super = _createSuper(Anime);

  function Anime() {
    _classCallCheck(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.initialValue[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.initialValue, this.targetValue];
      }

      this.target = anime_es(_objectSpread2(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}), options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey !== "transform") {
        return anime_es.get(this.element, this.attributeKey);
      }

      var obj = {};
      var transform = compositeAttributes[this.attributeKey];
      var currentTransform = getMatrix2D(this.context.window, this.element);

      for (var i = 0; i < transform.length; i++) {
        obj[transform[i]] = Object.prototype.hasOwnProperty.call(currentTransform, transform[i]) ? currentTransform[transform[i]] : anime_es.get(this.element, transform[i]);
      }

      return obj;
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MotorCortex.Effect);
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/


var MotionPath = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(MotionPath, _MotorCortex$Effect);

  var _super = _createSuper(MotionPath);

  function MotionPath() {
    _classCallCheck(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
      this.calculatedPoints = [];
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var toSet;
      var distance = Math.round(this.path.totalLength / this.pixelsAccuracy * f) * this.pixelsAccuracy;

      if (this.calculatedPoints[distance] !== null && this.calculatedPoints[distance] !== undefined) {
        toSet = this.calculatedPoints[distance];
      } else {
        var position = anime_es.getPathProgress(this.path, distance / this.path.totalLength, this.isPathTargetInsideSVG); // console.log(position);

        toSet = "\n            translateX(".concat(position.x, "px)\n            translateY(").concat(position.y, "px)\n            rotate(").concat(position.angle, "deg)\n        ");
        this.calculatedPoints[distance] = toSet;
      }

      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(MotorCortex.Effect);

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR
    },
    backgroundColor: {
      optional: true,
      type: _COLOR
    },
    backgroundPosition: {
      optional: true,
      type: "string"
    },
    backgroundSize: {
      optional: true,
      type: "string"
    },
    border: {
      optional: true,
      type: "string"
    },
    borderBottom: {
      optional: true,
      type: "string"
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderColor: {
      optional: true,
      type: _COLOR
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR
    },
    color: {
      optional: true,
      type: _COLOR
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    font: {
      optional: true,
      type: "string"
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"]
    },
    fontWeight: {
      optional: true,
      type: "string"
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maskPosition: {
      optional: true,
      type: "string"
    },
    maskSize: {
      optional: true,
      type: "string"
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetPath: {
      optional: true,
      type: "string"
    },
    offsetPosition: {
      optional: true,
      type: "string"
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1
    },
    order: {
      optional: true,
      type: "number",
      integer: true
    },
    outline: {
      optional: true,
      type: "string"
    },
    outlineColor: {
      optional: true,
      type: _COLOR
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeOutside: {
      optional: true,
      type: "string"
    },
    tabSize: {
      optional: true,
      type: "string"
    },
    textDecoration: {
      optional: true,
      type: "string"
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR
    },
    textFillColor: {
      optional: true,
      type: _COLOR
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textShadow: {
      optional: true,
      type: "string"
    },
    textStroke: {
      optional: true,
      type: "string"
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        rotate: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateZ: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        scale: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleX: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleY: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleZ: {
          type: "number",
          min: 0,
          optional: true
        },
        skewX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        skewY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        perspective: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        }
      }
    },
    transformOrigin: {
      optional: true,
      type: "string"
    },
    verticalAlign: {
      optional: true,
      type: "string"
    },
    visibility: {
      optional: true,
      type: "string"
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0
    }
  },
  transformOrigin: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  visibility: {
    type: "string"
  },
  width: {
    type: _MEASUREMENT,
    units: nu
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu
  },
  zIndex: {
    type: "number",
    integer: true
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0
  }
};
var name$1 = "@donkeyclip/motorcortex-anime";
var version$1 = "2.1.16";
var index$1 = {
  npm_name: name$1,
  version: version$1,
  incidents: [{
    exportable: Anime$4,
    name: "Anime",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }, {
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes: compositeAttributes
};

var Anime$3 = MotorCortex.loadPlugin(index$1);

var _require$2 = require("./helpers"),
    fontFamilyHelper$2 = _require$2.fontFamilyHelper;

var SvgExplosion = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(SvgExplosion, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(SvgExplosion);

  function SvgExplosion() {
    _classCallCheck$1(this, SvgExplosion);

    return _super.apply(this, arguments);
  }

  _createClass$1(SvgExplosion, [{
    key: "fonts",
    get: function get() {
      var family = fontFamilyHelper$2(this.attrs.fontFamily, this.attrs.fontWeight);
      var font = [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=".concat(family, "&display=swap")
      }];
      return font;
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs = this.attrs,
          text = _this$attrs.text,
          colors = _this$attrs.colors,
          width = _this$attrs.width;
      this.textSize = width / text.length;
      var allCharElements = "";
      var polygons = "";
      var circles = "";

      for (var i = 0; i < text.length; i++) {
        var style = "color : ".concat(colors[i % colors.length], ";");
        var singleChar = text.slice(i, i + 1);
        var singleCharElement = "<span \n          id=\"text\"\n          style=\"".concat(style, "\"\n          class=\"letter letter-").concat(i, "\"\n        >\n            ").concat(singleChar, "\n        </span>");
        allCharElements += singleCharElement;

        for (var j = 0; j < 8; j++) {
          var point1 = this.textSize * 0.1 * 2;
          var point2 = this.textSize * 0.1;
          var point3 = this.textSize * 0.1 * 2;
          polygons += "\n          <polygon \n            class=\"poligon-".concat(i, "-").concat(j, " poligon\"\n            points=\"0,0 ").concat(point1, ",0 ").concat(point2, ",").concat(point3, "\"\n            style=\"fill: ").concat(colors[i % colors.length], ";\"\n          ></polygon>");
          circles += "\n          <circle \n            r=\"".concat(this.textSize * 0.052, "\"\n            class=\"circ circ-").concat(i, "-").concat(j, "\"\n            style=\"fill:rgb(238, 238, 238);\"\n          ></circle>");
        }
      }

      var html = "\n      <div class=\"wrapper\">\n        <div class=\"container\">\n          <p \n            id=\"text\"\n            style=\"font-size:".concat(this.textSize, "px\"\n            class=\"text\"\n          >").concat(allCharElements, "</p>\n          <svg id=\"svg\">\n          ").concat(polygons, "\n          ").concat(circles, "\n          </svg>\n        </div>\n      </div>\n      ");
      return html;
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      svg {\n        width: 100%;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        z-index: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        overflow: overlay;\n      }\n      \n      .text, .offscreen-text {\n        width: 100%;\n        top: 50%;\n        transform: translateY(-50%);\n        display: block;\n        margin: 0;\n        text-align: center;\n        font-family: ".concat(this.attrs.fontFamily, "\n      }\n      \n      .offscreen-text {\n        text-align: center;\n        top: -9999px;\n      }\n      \n      .letter{\n        display:inline-block;\n        font-weight: 800;\n      }\n\n      .poligon{\n        opacity:0\n      }\n\n      .container{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        overflow: hidden;\n        background: ").concat(this.attrs.background, ";\n        display: flex;\n        align-content: center;\n        align-items: center;\n        position: relative;\n      }\n\n      .wrapper{\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        align-items: center;\n      }\n  ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var polyPosition = this.textSize * this.attrs.text.length / 2;

      for (var i = 0; i < this.attrs.text.length; i++) {
        var rotation = -50 + Math.random() * 100;
        var textAnimation = new Anime$3.Anime({
          animatedAttrs: {
            width: "".concat(this.textSize, "px"),
            opacity: 1,
            transform: {
              translateY: "0%",
              scale: 1,
              rotate: rotation + "deg"
            }
          },
          initialValues: {
            width: "0px",
            opacity: 0,
            transform: {
              translateY: "100%",
              scale: 0
            }
          }
        }, {
          duration: 200,
          selector: ".letter-" + i,
          easing: "easeOutExpo"
        });
        var polyMcGrou = new MotorCortex.Group();
        var waitTIme = 0;

        for (var j = 0; j < 8; j++) {
          var a = Math.random();
          var a2 = a + (-0.2 + Math.random() * 0.4);
          var r = this.textSize * 0.52;
          var r2 = r + this.textSize * Math.random() * 0.2;
          var x = polyPosition + r * Math.cos(2 * Math.PI * a);
          var y = 50 + r * Math.sin(2 * Math.PI * a);
          var x2 = polyPosition + r2 * Math.cos(2 * Math.PI * a2);
          var y2 = 50 + r2 * Math.sin(2 * Math.PI * a2);
          var triSize = this.textSize * 0.1;
          var scale = 0.3 + Math.random() * 0.7;
          var offset = triSize * scale;
          var circSize = this.textSize * 0.05 * Math.random();
          var polyAnimationOp = new Anime$3.Anime({
            animatedAttrs: {
              opacity: 1
            },
            initialValues: {
              opacity: 0
            }
          }, {
            duration: 1,
            selector: ".poligon-".concat(i, "-").concat(j, ",.circ-").concat(i, "-").concat(j),
            easing: "easeOutExpo"
          });
          var circAnimation = new Anime$3.Anime({
            animatedAttrs: {
              transform: {
                rotate: Math.random() * 360 + "deg",
                translateX: x2 - circSize + "px",
                translateY: y2 - circSize + "px"
              },
              opacity: 0
            },
            initialValues: {
              transform: {
                scale: circSize * 0.15,
                rotate: Math.random() * 360 + "deg",
                translateX: x - offset + "px",
                translateY: y - offset + "px"
              },
              opacity: 1
            }
          }, {
            duration: 600,
            selector: ".circ-".concat(i, "-").concat(j),
            easing: "easeOutQuint"
          });
          var polyAnimation = new Anime$3.Anime({
            animatedAttrs: {
              transform: {
                rotate: Math.random() * 360 + "deg",
                translateX: x2 - offset + "px",
                translateY: y2 - offset + "px"
              },
              opacity: 0
            },
            initialValues: {
              transform: {
                scale: scale,
                rotate: Math.random() * 360 + "deg",
                translateX: x - offset + "px",
                translateY: y - offset + "px"
              },
              opacity: 1
            }
          }, {
            duration: 600,
            selector: ".poligon-".concat(i, "-").concat(j),
            easing: "easeOutQuint"
          });
          polyMcGrou.addIncident(polyAnimationOp, 0);
          polyMcGrou.addIncident(polyAnimation, 1);
          polyMcGrou.addIncident(circAnimation, 1);
        }

        polyPosition += this.textSize / 2;
        var textAnimation2 = new Anime$3.Anime({
          animatedAttrs: {
            transform: {
              translateY: "50%",
              rotate: "0deg"
            }
          },
          initialValues: {
            transform: {
              translateY: "0%" // rotate: rotation+"deg"

            }
          }
        }, {
          duration: 200,
          selector: ".letter-" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(textAnimation, 200 * (i + 1) + waitTIme);
        this.addIncident(polyMcGrou, 200 * (i + 1) + waitTIme);
        this.addIncident(textAnimation2, 200 + 200 * (i + 1) + waitTIme);
        waitTIme = 200 * (i + 1);
      }
    }
  }]);

  return SvgExplosion;
}(MotorCortex.HTMLClip);

var Anime$2 = MotorCortex.loadPlugin(index$1);

var _require$1 = require("./helpers"),
    fontFamilyHelper$1 = _require$1.fontFamilyHelper;

var SvgLines = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(SvgLines, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(SvgLines);

  function SvgLines() {
    _classCallCheck$1(this, SvgLines);

    return _super.apply(this, arguments);
  }

  _createClass$1(SvgLines, [{
    key: "fonts",
    get: function get() {
      var font = [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=".concat(fontFamilyHelper$1(this.attrs.fontFamily, this.attrs.fontWeight), "&display=swap")
      }];
      return font;
    }
  }, {
    key: "html",
    get: function get() {
      var y = this.attrs.verticalAlign || "50%";
      return "\n        <div class=\"container\">\n          <svg>\n            <symbol id=\"s-text\">\n              <text text-anchor=\"middle\" x=\"50%\" y=\"".concat(y, "\" class=\"text--line\">").concat(this.attrs.text, "</text>\n            </symbol>\n            <g class=\"g-ants\">\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n            </g>\n          </svg> \n        </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .container{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      overflow: hidden;\n      background: ").concat(this.attrs.background, ";\n      display: flex;\n      align-content: center;\n      align-items: center;\n      position: relative;\n    }\n    .g-ants{\n      position: relative;\n    }\n    .text--line {\n      font-size: ").concat(this.attrs.fontSize, "px;\n      font-family: ").concat(this.attrs.fontFamily, "\n    }\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n    .text-copy {\n      fill: none;\n      stroke: white;\n      stroke-dasharray: 100% 28%;\n      stroke-width: ").concat(this.attrs.strokeWidth, "px;\n    }\n    .text-copy:nth-child(1) {\n      stroke: ").concat(this.attrs.colors[0], ";\n      stroke-dashoffset: 7%;\n    }\n    .text-copy:nth-child(2) {\n      stroke: ").concat(this.attrs.colors[1], ";\n      stroke-dashoffset: 14%;\n    }\n    .text-copy:nth-child(3) {\n      stroke: ").concat(this.attrs.colors[2], ";\n      stroke-dashoffset: 21%;\n    }\n    .text-copy:nth-child(4) {\n      stroke: ").concat(this.attrs.colors[3], ";\n      stroke-dashoffset: 28%;\n    }\n    .text-copy:nth-child(5) {\n      stroke: ").concat(this.attrs.colors[4], ";\n      stroke-dashoffset: 35%;\n    }\n  ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var svgline = new Anime$2.Anime({
        animatedAttrs: {
          strokeDashoffset: "35%",
          strokeDasharray: " 0 87.5%"
        }
      }, {
        duration: 4000,
        selector: ".text-copy"
      });
      this.addIncident(svgline, 0);
    }
  }]);

  return SvgLines;
}(MotorCortex.HTMLClip);

var loadIncidents = (function (Anime, colorsRGB, duration) {
  return [new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",0), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 1), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 1), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 1), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 1)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), ///REVERSE
  new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 1), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 1), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 1), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 1)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new Anime.Anime({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",0), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  })];
});

var Anime$1 = MotorCortex.loadPlugin(index$1);

var _require = require("../helpers"),
    fontFamilyHelper = _require.fontFamilyHelper;

var Shadow = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(Shadow, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(Shadow);

  function Shadow() {
    _classCallCheck$1(this, Shadow);

    return _super.apply(this, arguments);
  }

  _createClass$1(Shadow, [{
    key: "fonts",
    get: function get() {
      var font = [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=".concat(fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight), "&display=swap")
      }];
      return font;
    }
  }, {
    key: "html",
    get: function get() {
      return "\n        <div class=\"container\">\n          <div class=\"text\">".concat(this.attrs.text, "</div>\n        </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      function hexToRGB(h) {
        var r = 0,
            g = 0,
            b = 0; // 3 digits

        if (h.length === 4) {
          r = "0x" + h[1] + h[1];
          g = "0x" + h[2] + h[2];
          b = "0x" + h[3] + h[3]; // 6 digits
        } else if (h.length === 7) {
          r = "0x" + h[1] + h[2];
          g = "0x" + h[3] + h[4];
          b = "0x" + h[5] + h[6];
        }

        return "".concat(+r, ",").concat(+g, ",").concat(+b);
      }

      this.colorsRGB = this.attrs.colors.map(function (c) {
        return hexToRGB(c);
      });
      return "\n      .container {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        color: ").concat(this.attrs.textColor, ";\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize, "px;\n        text-align: center;\n        width: 100%;\n        color: ").concat(this.attrs.textColor, ";\n        background: ").concat(this.attrs.background, ";\n        font-family: ").concat(this.attrs.fontFamily, ", cursive;\n        font-weight: 700;\n        height:100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var incidents = loadIncidents(Anime$1, this.colorsRGB, 500);
      var length = this.attrs.reverse ? incidents.length : incidents.length / 2;

      for (var i = 0; i < length; i++) {
        this.addIncident(incidents[i], i * 500);
      }
    }
  }]);

  return Shadow;
}(MotorCortex.HTMLClip);

var Anime = MotorCortex.loadPlugin(index$1);

var FontWeight = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(FontWeight, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(FontWeight);

  function FontWeight() {
    _classCallCheck$1(this, FontWeight);

    return _super.apply(this, arguments);
  }

  _createClass$1(FontWeight, [{
    key: "fonts",
    get: function get() {
      var wordlist = this.attrs.fontFamily.split(" ").join("+");
      wordlist += ":wght@".concat(this.attrs.fontWeightList.join(";"));
      var font = [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=".concat(wordlist, "&display=swap")
      }];
      return font;
    }
  }, {
    key: "html",
    get: function get() {
      var textList = [];

      for (var i = 1; i <= this.attrs.repeats; i++) {
        textList.push("<div class=\"text-item\">".concat(this.attrs.text, "</div>"));
      }

      return "\n    <div class=\"wrapper\">\n      <div class=\"text\">\n      ".concat(textList.join(""), "\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display: flex;\n      align-content: center;\n      justify-content: center;\n      align-items: center;\n    }\n    .text{\n      font-size:").concat(this.attrs.fontSize, "px;\n      color:").concat(this.attrs.textColor, ";\n      text-transform:uppercase;\n      font-family: ").concat(this.attrs.fontFamily, ";\n      position: absolute;\n      font-weight: 100;\n      transform:rotate(").concat(this.attrs.rotate || 0, "deg);\n    }\n   \n  ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var fontWeight = new MotorCortex.Combo({
        incidents: [{
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              fontWeight: "900"
            }
          },
          props: {
            duration: 300
          },
          position: 0
        }, {
          incidentClass: Anime.Anime,
          attrs: {
            animatedAttrs: {
              fontWeight: "100"
            }
          },
          props: {
            duration: 300
          },
          position: 300
        }]
      }, {
        selector: ".text-item",
        delay: "@expression(index * 20)"
      });
      this.addIncident(fontWeight, 0);
    }
  }]);

  return FontWeight;
}(MotorCortex.HTMLClip);

var SvgExplosionValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  fontFamily: {
    type: "string"
  }
};
var SvgLineValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  strokeWidth: {
    type: "number"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  fontFamily: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  }
};
var ShadowValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  reverse: {
    type: "boolean"
  }
};
var FontWeightValidation = {
  text: {
    type: "string"
  },
  fontWeightList: {
    type: "array",
    items: {
      type: "number"
    }
  },
  repeats: {
    type: "number",
    min: 1
  },
  width: {
    type: "number"
  },
  height: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "color"
  }
};

var name = "@donkeyclip/motorcortex-textfxs";
var version = "0.1.7";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: SvgExplosion,
    name: "SvgExplosion",
    attributesValidationRules: SvgExplosionValidation
  }, {
    exportable: SvgLines,
    name: "SvgLines",
    attributesValidationRules: SvgLineValidation
  }, {
    exportable: Shadow,
    name: "Shadow",
    attributesValidationRules: ShadowValidation
  }, {
    exportable: FontWeight,
    name: "FontWeight",
    attributesValidationRules: FontWeightValidation
  }]
};

export { index as default };
