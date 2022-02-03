'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$g = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$f = fails$g; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$e = fails$g;
var functionBindNative = !fails$e(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var FunctionPrototype$3 = Function.prototype;
var bind$2 = FunctionPrototype$3.bind;
var call$8 = FunctionPrototype$3.call;
var uncurryThis$j = NATIVE_BIND$3 && bind$2.bind(call$8, call$8);
var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
  return fn && uncurryThis$j(fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$w = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var global$v = global$w;
var TypeError$a = global$v.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$a("Can't call method on " + it);
  return it;
};

var global$u = global$w;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var Object$4 = global$u.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$3 = function (argument) {
  return Object$4(requireObjectCoercible$3(argument));
};

var uncurryThis$i = functionUncurryThis;
var toObject$2 = toObject$3;
var hasOwnProperty = uncurryThis$i({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var DESCRIPTORS$7 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;
var EXISTS$1 = hasOwn$6(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS$1 && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$7 || DESCRIPTORS$7 && getDescriptor(FunctionPrototype$2, 'name').configurable);
var functionName = {
  EXISTS: EXISTS$1,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE$1
};

var objectDefineProperty = {};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$c = function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;

var isObject$9 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$t = global$w;
var isObject$8 = isObject$9;
var document$1 = global$t.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject$8(document$1) && isObject$8(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$d = fails$g;
var createElement = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$6 && !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var fails$c = fails$g; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$s = global$w;
var isObject$7 = isObject$9;
var String$3 = global$s.String;
var TypeError$9 = global$s.TypeError; // `Assert: Type(argument) is Object`

var anObject$8 = function (argument) {
  if (isObject$7(argument)) return argument;
  throw TypeError$9(String$3(argument) + ' is not an object');
};

var NATIVE_BIND$2 = functionBindNative;
var call$7 = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$7.bind(call$7) : function () {
  return call$7.apply(call$7, arguments);
};

var global$r = global$w;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$r[namespace]) : global$r[namespace] && global$r[namespace][method];
};

var uncurryThis$h = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;
var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$q = global$w;
var userAgent = engineUserAgent;
var process = global$q.process;
var Deno = global$q.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$b = fails$g; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$p = global$w;
var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$p.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$o = global$w;
var String$2 = global$o.String;

var tryToString$2 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$n = global$w;
var isCallable$8 = isCallable$c;
var tryToString$1 = tryToString$2;
var TypeError$8 = global$n.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw TypeError$8(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$m = global$w;
var call$6 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$6 = isObject$9;
var TypeError$7 = global$m.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$6(val = call$6(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
  throw TypeError$7("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$l = global$w; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$1 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$1(global$l, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$l[key] = value;
  }

  return value;
};

var global$k = global$w;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$k[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var uncurryThis$g = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$g(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$j = global$w;
var shared$3 = shared$4.exports;
var hasOwn$5 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$j.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$a = function (name) {
  if (!hasOwn$5(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$5(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$i = global$w;
var call$5 = functionCall;
var isObject$5 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;
var TypeError$6 = global$i.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$5(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$6("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$h = global$w;
var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$2 = toPropertyKey$3;
var TypeError$5 = global$h.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$2(P);
  anObject$7(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$2(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$5('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$f = functionUncurryThis;
var defineProperty = objectDefineProperty.f;
var FunctionPrototype$1 = Function.prototype;
var functionToString$1 = uncurryThis$f(FunctionPrototype$1.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$f(nameRE.exec);
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (DESCRIPTORS$3 && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype$1, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString$1(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$e = functionUncurryThis;
var toString$4 = uncurryThis$e({}.toString);
var stringSlice$3 = uncurryThis$e(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$4(it), 8, -1);
};

var global$g = global$w;
var uncurryThis$d = functionUncurryThis;
var fails$a = fails$g;
var classof$6 = classofRaw$1;
var Object$2 = global$g.Object;
var split = uncurryThis$d(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$a(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$2('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : Object$2(it);
} : Object$2;

var IndexedObject$2 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$4;

var toIndexedObject$6 = function (it) {
  return IndexedObject$2(requireObjectCoercible$2(it));
};

var DESCRIPTORS$2 = descriptors;
var call$4 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$4 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$4(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
};

var DESCRIPTORS$1 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$4 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$2 = {exports: {}};

var uncurryThis$c = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;
var functionToString = uncurryThis$c(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$f = global$w;
var isCallable$5 = isCallable$c;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$f.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$e = global$w;
var uncurryThis$b = functionUncurryThis;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$3 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$e.TypeError;
var WeakMap = global$e.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$b(store.get);
  var wmhas = uncurryThis$b(store.has);
  var wmset = uncurryThis$b(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var global$d = global$w;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$2.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$4(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$d) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$2(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$4(this) && getInternalState$1(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max$2 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$5 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$4 = lengthOfArrayLike$5; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$a = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$2 = uncurryThis$a([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;
var concat = uncurryThis$9([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$9 = fails$g;
var isCallable$3 = isCallable$c;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$3(detection) ? fails$9(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$c = global$w;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$1 = redefine$2.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$c;
  } else if (STATIC) {
    target = global$c[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$c[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    } // extend global


    redefine$1(target, key, sourceProperty, options);
  }
};

var classof$5 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$5(argument) == 'Array';
};

var wellKnownSymbol$8 = wellKnownSymbol$a;
var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$b = global$w;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$c;
var classofRaw = classofRaw$1;
var wellKnownSymbol$7 = wellKnownSymbol$a;
var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');
var Object$1 = global$b.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var uncurryThis$8 = functionUncurryThis;
var fails$8 = fails$g;
var isCallable$1 = isCallable$c;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$8(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$3 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var fails$7 = fails$g;
var wellKnownSymbol$6 = wellKnownSymbol$a;
var V8_VERSION$1 = engineV8Version;
var SPECIES$4 = wellKnownSymbol$6('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$7(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$4] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var uncurryThis$7 = functionUncurryThis;
var arraySlice$1 = uncurryThis$7([].slice);

var $$4 = _export;
var global$a = global$w;
var isArray$2 = isArray$3;
var isConstructor$2 = isConstructor$3;
var isObject$3 = isObject$9;
var toAbsoluteIndex$1 = toAbsoluteIndex$3;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var toIndexedObject$2 = toIndexedObject$6;
var createProperty$2 = createProperty$3;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
var un$Slice = arraySlice$1;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');
var SPECIES$3 = wellKnownSymbol$5('species');
var Array$3 = global$a.Array;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$4({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$2(this);
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$2(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor$2(Constructor) && (Constructor === Array$3 || isArray$2(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$3(Constructor)) {
        Constructor = Constructor[SPECIES$3];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$3 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$3 : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var global$9 = global$w;
var isArray$1 = isArray$3;
var isConstructor$1 = isConstructor$3;
var isObject$2 = isObject$9;
var wellKnownSymbol$4 = wellKnownSymbol$a;
var SPECIES$2 = wellKnownSymbol$4('species');
var Array$2 = global$9.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$1(C) && (C === Array$2 || isArray$1(C.prototype))) C = undefined;else if (isObject$2(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$2 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var $$3 = _export;
var global$8 = global$w;
var fails$6 = fails$g;
var isArray = isArray$3;
var isObject$1 = isObject$9;
var toObject$1 = toObject$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var createProperty$1 = createProperty$3;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol$3 = wellKnownSymbol$a;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$3('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$3 = global$8.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$3({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$1(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$2(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$1(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var fails$5 = fails$g;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$5(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $$2 = _export;
var uncurryThis$6 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toIndexedObject$1 = toIndexedObject$6;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var un$Join = uncurryThis$6([].join);
var ES3_STRINGS = IndexedObject$1 != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$2({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject$1(this), separator === undefined ? ',' : separator);
  }
});

var global$7 = global$w;
var classof$2 = classof$4;
var String$1 = global$7.String;

var toString$3 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var anObject$5 = anObject$8; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$5(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$4 = fails$g;
var global$6 = global$w; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$6.RegExp;
var UNSUPPORTED_Y$2 = fails$4(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$4(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$4(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$4 = anObject$8;
var toIndexedObject = toIndexedObject$6;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn = getBuiltIn$5;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$8;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$3 = fails$g;
var global$5 = global$w; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$5.RegExp;
var regexpUnsupportedDotAll = fails$3(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$2 = fails$g;
var global$4 = global$w; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$4.RegExp;
var regexpUnsupportedNcg = fails$2(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$3 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$2 = toString$3;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$1 = _export;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$1({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$4 = functionUncurryThis;
var redefine = redefine$2.exports;
var regexpExec$2 = regexpExec$3;
var fails$1 = fails$g;
var wellKnownSymbol$2 = wellKnownSymbol$a;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES$1 = wellKnownSymbol$2('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);
  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$1] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject = isObject$9;
var classof$1 = classofRaw$1;
var wellKnownSymbol$1 = wellKnownSymbol$a;
var MATCH = wellKnownSymbol$1('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$3 = global$w;
var isConstructor = isConstructor$3;
var tryToString = tryToString$2;
var TypeError$2 = global$3.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$8;
var aConstructor = aConstructor$1;
var wellKnownSymbol = wellKnownSymbol$a;
var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$3;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$1 = uncurryThis$3(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$2 = global$w;
var toAbsoluteIndex = toAbsoluteIndex$3;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var createProperty = createProperty$3;
var Array$1 = global$2.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$1(max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);

  result.length = n;
  return result;
};

var global$1 = global$w;
var call$1 = functionCall;
var anObject$1 = anObject$8;
var isCallable = isCallable$c;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$1 = global$1.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
  throw TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$8;
var requireObjectCoercible = requireObjectCoercible$4;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString = toString$3;
var getMethod = getMethod$2;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails = fails$g;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis$2(/./.exec);
var push$1 = uncurryThis$2($push);
var stringSlice = uncurryThis$2(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push$1(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push$1(output, '');
      } else push$1(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push$1(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push$1(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push$1(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

function fontFamilyHelper(fontFamily, fontWeight) {
  var wordlist = fontFamily.split(" ").join("+");

  if (fontWeight) {
    wordlist += ":wght@".concat(fontWeight);
  }

  return wordlist;
}

var SvgExplosion = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgExplosion, _HTMLClip);

  var _super = _createSuper(SvgExplosion);

  function SvgExplosion() {
    _classCallCheck(this, SvgExplosion);

    return _super.apply(this, arguments);
  }

  _createClass(SvgExplosion, [{
    key: "fonts",
    get: function get() {
      var family = fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight);
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
        var textAnimation = new motorcortex.CSSEffect({
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
        var polyMcGrou = new motorcortex.Group();
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
          var polyAnimationOp = new motorcortex.CSSEffect({
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
          var circAnimation = new motorcortex.CSSEffect({
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
          var polyAnimation = new motorcortex.CSSEffect({
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
        var textAnimation2 = new motorcortex.CSSEffect({
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
}(motorcortex.HTMLClip);

var SvgLines = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgLines, _HTMLClip);

  var _super = _createSuper(SvgLines);

  function SvgLines() {
    _classCallCheck(this, SvgLines);

    return _super.apply(this, arguments);
  }

  _createClass(SvgLines, [{
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
      var svgline = new motorcortex.CSSEffect({
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
}(motorcortex.HTMLClip);

var uncurryThis$1 = functionUncurryThis;
var aCallable = aCallable$2;
var NATIVE_BIND = functionBindNative;
var bind$1 = uncurryThis$1(uncurryThis$1.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject = toObject$3;
var lengthOfArrayLike = lengthOfArrayLike$5;
var arraySpeciesCreate = arraySpeciesCreate$2;
var push = uncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var $ = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var loadIncidents = (function (CSSEffect, colorsRGB, duration) {
  return [new CSSEffect({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",0), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
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
  new CSSEffect({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 1), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 1), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 1), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 1)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
    animatedAttrs: {
      textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    },
    initialValues: {
      textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
    }
  }, {
    duration: duration,
    selector: ".text"
  }), new CSSEffect({
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

var Shadow = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Shadow, _HTMLClip);

  var _super = _createSuper(Shadow);

  function Shadow() {
    _classCallCheck(this, Shadow);

    return _super.apply(this, arguments);
  }

  _createClass(Shadow, [{
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
      var incidents = loadIncidents(motorcortex.CSSEffect, this.colorsRGB, 500);
      var length = this.attrs.reverse ? incidents.length : incidents.length / 2;

      for (var i = 0; i < length; i++) {
        this.addIncident(incidents[i], i * 500);
      }
    }
  }]);

  return Shadow;
}(motorcortex.HTMLClip);

var FontWeight = /*#__PURE__*/function (_HTMLClip) {
  _inherits(FontWeight, _HTMLClip);

  var _super = _createSuper(FontWeight);

  function FontWeight() {
    _classCallCheck(this, FontWeight);

    return _super.apply(this, arguments);
  }

  _createClass(FontWeight, [{
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
      var fontWeight = new motorcortex.Combo({
        incidents: [{
          incidentClass: motorcortex.CSSEffect,
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
          incidentClass: motorcortex.CSSEffect,
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
}(motorcortex.HTMLClip);

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
var version = "0.1.10";
var description = "textfxs plugin for MotorCortex";
var main = "dist/motorcortex-textfxs.cjs.js";
var module$1 = "dist/motorcortex-textfxs.esm.js";
var browser = "dist/motorcortex-textfxs.umd.js";
var author = "Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>";
var repository = {
	type: "git",
	url: "https://github.com/donkeyclip/motorcortex-textfxs.git"
};
var license = "MIT";
var engines = {
	node: ">=8.3.2"
};
var scripts = {
	"update-force:packages": "./node_modules/npm-check-updates/bin/ncu -u && npm i",
	"update:packages": "npm update --save/--save-dev",
	concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
	"lint:styles": "stylelint  \"src/**.css\" \"src/**/*.scss\" --config .stylelintrc.json",
	"lint:js": "eslint -c .eslintrc src/**/*.js",
	lint: "npm run concurrently \"npm run lint:js\" \"npm run lint:styles\"",
	"lint:fix": "npm run concurrently  \"npm run lint:js -- --fix\" \"npm run lint:styles -- --fix\"",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	test: "HERE GOES YOUR TEST TASK",
	"test:prod": "npm run lint",
	"report-coverage": "cat ./coverage/lcov.info | coveralls",
	commit: "git-cz",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var release = {
	verifyConditions: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/github",
		"@semantic-release/git"
	],
	prepare: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git"
	]
};
var config = {
	commitizen: {
		path: "cz-conventional-changelog"
	}
};
var peerDependencies = {
	"@donkeyclip/motorcortex": "^7"
};
var devDependencies = {
	"@babel/cli": "7.17.0",
	"@babel/core": "7.17.0",
	"@babel/eslint-parser": "7.17.0",
	"@babel/plugin-syntax-jsx": "7.16.7",
	"@babel/plugin-transform-react-jsx": "7.16.7",
	"@babel/preset-env": "7.16.11",
	"@commitlint/cli": "16.1.0",
	"@commitlint/config-conventional": "16.0.0",
	"@donkeyclip/motorcortex": "7.8.0",
	"@donkeyclip/motorcortex-player": "2.5.0",
	"@rollup/plugin-babel": "5.3.0",
	"@rollup/plugin-commonjs": "21.0.1",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.1.3",
	"@semantic-release/changelog": "6.0.1",
	"@semantic-release/git": "10.0.1",
	"@semantic-release/github": "8.0.2",
	"@semantic-release/npm": "9.0.0",
	"@size-limit/preset-big-lib": "6.0.4",
	"babel-loader": "8.2.3",
	browserslist: "4.19.1",
	"caniuse-lite": "1.0.30001306",
	commitizen: "4.2.4",
	concurrently: "7.0.0",
	"core-js": "3.21.0",
	"cz-conventional-changelog": "3.3.0",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.3.0",
	"eslint-config-standard": "16.0.3",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.25.4",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-promise": "5.2.0",
	husky: "7.0.4",
	"lint-staged": "12.3.3",
	prettier: "2.5.1",
	rimraf: "3.0.2",
	rollup: "2.67.0",
	"rollup-plugin-terser": "7.0.2",
	"semantic-release": "19.0.2",
	"size-limit": "6.0.4",
	webpack: "5.68.0",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.7.4"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
	browser: browser,
	author: author,
	repository: repository,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,yml,yaml}": [
		"prettier --write"
	],
	"*.css": [
		"prettier --write",
		"stylelint  \"src/**.css\" --config .stylelintrc.json --fix"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	release: release,
	config: config,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies
};

var index = {
  npm_name: pkg.name,
  version: pkg.version,
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

module.exports = index;
