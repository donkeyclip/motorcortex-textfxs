import MotorCortex, { Effect } from '@donkeyclip/motorcortex';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$m = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$l = fails$m; // Detect IE8's incomplete defineProperty implementation

var descriptors$1 = !fails$l(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$k = fails$m;
var functionBindNative$1 = !fails$k(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative$1;
var FunctionPrototype$5 = Function.prototype;
var bind$3 = FunctionPrototype$5.bind;
var call$a = FunctionPrototype$5.call;
var uncurryThis$o = NATIVE_BIND$4 && bind$3.bind(call$a, call$a);
var functionUncurryThis$1 = NATIVE_BIND$4 ? function (fn) {
  return fn && uncurryThis$o(fn);
} : function (fn) {
  return fn && function () {
    return call$a.apply(fn, arguments);
  };
};

var check$1 = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$N = // eslint-disable-next-line es/no-global-this -- safe
check$1(typeof globalThis == 'object' && globalThis) || check$1(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check$1(typeof self == 'object' && self) || check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var global$M = global$N;
var TypeError$g = global$M.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$6 = function (it) {
  if (it == undefined) throw TypeError$g("Can't call method on " + it);
  return it;
};

var global$L = global$N;
var requireObjectCoercible$5 = requireObjectCoercible$6;
var Object$8 = global$L.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$6 = function (argument) {
  return Object$8(requireObjectCoercible$5(argument));
};

var uncurryThis$n = functionUncurryThis$1;
var toObject$5 = toObject$6;
var hasOwnProperty$1 = uncurryThis$n({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$5(it), key);
};

var DESCRIPTORS$d = descriptors$1;
var hasOwn$d = hasOwnProperty_1$1;
var FunctionPrototype$4 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor$1 = DESCRIPTORS$d && Object.getOwnPropertyDescriptor;
var EXISTS$3 = hasOwn$d(FunctionPrototype$4, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER$1 = EXISTS$3 && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE$3 = EXISTS$3 && (!DESCRIPTORS$d || DESCRIPTORS$d && getDescriptor$1(FunctionPrototype$4, 'name').configurable);
var functionName$1 = {
  EXISTS: EXISTS$3,
  PROPER: PROPER$1,
  CONFIGURABLE: CONFIGURABLE$3
};

var objectDefineProperty$1 = {};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$o = function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;

var isObject$h = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var global$K = global$N;
var isObject$g = isObject$h;
var document$2 = global$K.document; // typeof document.createElement is 'object' in old IE

var EXISTS$2 = isObject$g(document$2) && isObject$g(document$2.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$2 ? document$2.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors$1;
var fails$j = fails$m;
var createElement$1 = documentCreateElement$2; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine$1 = !DESCRIPTORS$c && !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors$1;
var fails$i = fails$m; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug$1 = DESCRIPTORS$b && fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$J = global$N;
var isObject$f = isObject$h;
var String$4 = global$J.String;
var TypeError$f = global$J.TypeError; // `Assert: Type(argument) is Object`

var anObject$9 = function (argument) {
  if (isObject$f(argument)) return argument;
  throw TypeError$f(String$4(argument) + ' is not an object');
};

var NATIVE_BIND$3 = functionBindNative$1;
var call$9 = Function.prototype.call;
var functionCall$1 = NATIVE_BIND$3 ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
};

var global$I = global$N;
var isCallable$m = isCallable$o;

var aFunction$1 = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$a = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(global$I[namespace]) : global$I[namespace] && global$I[namespace][method];
};

var uncurryThis$m = functionUncurryThis$1;
var objectIsPrototypeOf$1 = uncurryThis$m({}.isPrototypeOf);

var getBuiltIn$9 = getBuiltIn$a;
var engineUserAgent$1 = getBuiltIn$9('navigator', 'userAgent') || '';

var global$H = global$N;
var userAgent$1 = engineUserAgent$1;
var process$1 = global$H.process;
var Deno$1 = global$H.Deno;
var versions$1 = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$3;

if (v8$1) {
  match$1 = v8$1.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$3 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$3 && userAgent$1) {
  match$1 = userAgent$1.match(/Edge\/(\d+)/);

  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$1.match(/Chrome\/(\d+)/);
    if (match$1) version$3 = +match$1[1];
  }
}

var engineV8Version$1 = version$3;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$5 = engineV8Version$1;
var fails$h = fails$m; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$h(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$5 && V8_VERSION$5 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$3 = nativeSymbol$1;
var useSymbolAsUid$1 = NATIVE_SYMBOL$3 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$G = global$N;
var getBuiltIn$8 = getBuiltIn$a;
var isCallable$l = isCallable$o;
var isPrototypeOf$1 = objectIsPrototypeOf$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
var Object$7 = global$G.Object;
var isSymbol$5 = USE_SYMBOL_AS_UID$3 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$8('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$1($Symbol.prototype, Object$7(it));
};

var global$F = global$N;
var String$3 = global$F.String;

var tryToString$4 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$E = global$N;
var isCallable$k = isCallable$o;
var tryToString$3 = tryToString$4;
var TypeError$e = global$E.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$4 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw TypeError$e(tryToString$3(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$4 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$3(func);
};

var global$D = global$N;
var call$8 = functionCall$1;
var isCallable$j = isCallable$o;
var isObject$e = isObject$h;
var TypeError$d = global$D.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$3 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$e(val = call$8(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$e(val = call$8(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$e(val = call$8(fn, input))) return val;
  throw TypeError$d("Can't convert object to primitive value");
};

var shared$8 = {exports: {}};

var global$C = global$N; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$2 = Object.defineProperty;

var setGlobal$7 = function (key, value) {
  try {
    defineProperty$2(global$C, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$C[key] = value;
  }

  return value;
};

var global$B = global$N;
var setGlobal$6 = setGlobal$7;
var SHARED$1 = '__core-js_shared__';
var store$7 = global$B[SHARED$1] || setGlobal$6(SHARED$1, {});
var sharedStore$1 = store$7;

var store$6 = sharedStore$1;
(shared$8.exports = function (key, value) {
  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var uncurryThis$l = functionUncurryThis$1;
var id$1 = 0;
var postfix$1 = Math.random();
var toString$6 = uncurryThis$l(1.0.toString);

var uid$5 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id$1 + postfix$1, 36);
};

var global$A = global$N;
var shared$7 = shared$8.exports;
var hasOwn$c = hasOwnProperty_1$1;
var uid$4 = uid$5;
var NATIVE_SYMBOL$2 = nativeSymbol$1;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
var WellKnownSymbolsStore$1 = shared$7('wks');
var Symbol$2 = global$A.Symbol;
var symbolFor$1 = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$4;

var wellKnownSymbol$f = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL$2 && hasOwn$c(Symbol$2, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID$2 && symbolFor$1) {
      WellKnownSymbolsStore$1[name] = symbolFor$1(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1(description);
    }
  }

  return WellKnownSymbolsStore$1[name];
};

var global$z = global$N;
var call$7 = functionCall$1;
var isObject$d = isObject$h;
var isSymbol$4 = isSymbol$5;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
var wellKnownSymbol$e = wellKnownSymbol$f;
var TypeError$c = global$z.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$e('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$3 = function (input, pref) {
  if (!isObject$d(input) || isSymbol$4(input)) return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE$1);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$7(exoticToPrim, input, pref);
    if (!isObject$d(result) || isSymbol$4(result)) return result;
    throw TypeError$c("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$2(input, pref);
};

var toPrimitive$2 = toPrimitive$3;
var isSymbol$3 = isSymbol$5; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$7 = function (argument) {
  var key = toPrimitive$2(argument, 'string');
  return isSymbol$3(key) ? key : key + '';
};

var global$y = global$N;
var DESCRIPTORS$a = descriptors$1;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
var anObject$8 = anObject$9;
var toPropertyKey$6 = toPropertyKey$7;
var TypeError$b = global$y.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
var ENUMERABLE$1 = 'enumerable';
var CONFIGURABLE$2 = 'configurable';
var WRITABLE$1 = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty$1.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$2 ? function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$6(P);
  anObject$8(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
    var current = $getOwnPropertyDescriptor$3(O, P);

    if (current && current[WRITABLE$1]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$2 in Attributes ? Attributes[CONFIGURABLE$2] : current[CONFIGURABLE$2],
        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
        writable: false
      };
    }
  }

  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$6(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE$3) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$b('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$9 = descriptors$1;
var FUNCTION_NAME_EXISTS = functionName$1.EXISTS;
var uncurryThis$k = functionUncurryThis$1;
var defineProperty$1 = objectDefineProperty$1.f;
var FunctionPrototype$3 = Function.prototype;
var functionToString$2 = uncurryThis$k(FunctionPrototype$3.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$k(nameRE.exec);
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (DESCRIPTORS$9 && !FUNCTION_NAME_EXISTS) {
  defineProperty$1(FunctionPrototype$3, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString$2(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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

var objectGetOwnPropertyDescriptor$1 = {};

var objectPropertyIsEnumerable$1 = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG$1 = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$j = functionUncurryThis$1;
var toString$5 = uncurryThis$j({}.toString);
var stringSlice$4 = uncurryThis$j(''.slice);

var classofRaw$3 = function (it) {
  return stringSlice$4(toString$5(it), 8, -1);
};

var global$x = global$N;
var uncurryThis$i = functionUncurryThis$1;
var fails$g = fails$m;
var classof$8 = classofRaw$3;
var Object$6 = global$x.Object;
var split$1 = uncurryThis$i(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject$1 = fails$g(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$6('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split$1(it, '') : Object$6(it);
} : Object$6;

var IndexedObject$3 = indexedObject$1;
var requireObjectCoercible$4 = requireObjectCoercible$6;

var toIndexedObject$9 = function (it) {
  return IndexedObject$3(requireObjectCoercible$4(it));
};

var DESCRIPTORS$8 = descriptors$1;
var call$6 = functionCall$1;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$8 = toIndexedObject$9;
var toPropertyKey$5 = toPropertyKey$7;
var hasOwn$b = hasOwnProperty_1$1;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$8(O);
  P = toPropertyKey$5(P);
  if (IE8_DOM_DEFINE$2) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$b(O, P)) return createPropertyDescriptor$6(!call$6(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var DESCRIPTORS$7 = descriptors$1;
var definePropertyModule$6 = objectDefineProperty$1;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var createNonEnumerableProperty$8 = DESCRIPTORS$7 ? function (object, key, value) {
  return definePropertyModule$6.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$4 = {exports: {}};

var uncurryThis$h = functionUncurryThis$1;
var isCallable$i = isCallable$o;
var store$5 = sharedStore$1;
var functionToString$1 = uncurryThis$h(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$i(store$5.inspectSource)) {
  store$5.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$7 = store$5.inspectSource;

var global$w = global$N;
var isCallable$h = isCallable$o;
var inspectSource$6 = inspectSource$7;
var WeakMap$3 = global$w.WeakMap;
var nativeWeakMap$1 = isCallable$h(WeakMap$3) && /native code/.test(inspectSource$6(WeakMap$3));

var shared$6 = shared$8.exports;
var uid$3 = uid$5;
var keys$1 = shared$6('keys');

var sharedKey$4 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$3(key));
};

var hiddenKeys$8 = {};

var NATIVE_WEAK_MAP$1 = nativeWeakMap$1;
var global$v = global$N;
var uncurryThis$g = functionUncurryThis$1;
var isObject$c = isObject$h;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
var hasOwn$a = hasOwnProperty_1$1;
var shared$5 = sharedStore$1;
var sharedKey$3 = sharedKey$4;
var hiddenKeys$7 = hiddenKeys$8;
var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var TypeError$a = global$v.TypeError;
var WeakMap$2 = global$v.WeakMap;
var set$1, get$1, has$1;

var enforce$1 = function (it) {
  return has$1(it) ? get$1(it) : set$1(it, {});
};

var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$c(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$a('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$5.state) {
  var store$4 = shared$5.state || (shared$5.state = new WeakMap$2());
  var wmget$1 = uncurryThis$g(store$4.get);
  var wmhas$1 = uncurryThis$g(store$4.has);
  var wmset$1 = uncurryThis$g(store$4.set);

  set$1 = function (it, metadata) {
    if (wmhas$1(store$4, it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    wmset$1(store$4, it, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return wmget$1(store$4, it) || {};
  };

  has$1 = function (it) {
    return wmhas$1(store$4, it);
  };
} else {
  var STATE$1 = sharedKey$3('state');
  hiddenKeys$7[STATE$1] = true;

  set$1 = function (it, metadata) {
    if (hasOwn$a(it, STATE$1)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE$1, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return hasOwn$a(it, STATE$1) ? it[STATE$1] : {};
  };

  has$1 = function (it) {
    return hasOwn$a(it, STATE$1);
  };
}

var internalState$1 = {
  set: set$1,
  get: get$1,
  has: has$1,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var global$u = global$N;
var isCallable$g = isCallable$o;
var hasOwn$9 = hasOwnProperty_1$1;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
var setGlobal$5 = setGlobal$7;
var inspectSource$5 = inspectSource$7;
var InternalStateModule$1 = internalState$1;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName$1.CONFIGURABLE;
var getInternalState$2 = InternalStateModule$1.get;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var TEMPLATE$1 = String(String).split('String');
(redefine$4.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$g(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$9(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
      createNonEnumerableProperty$6(value, 'name', name);
    }

    state = enforceInternalState$1(value);

    if (!state.source) {
      state.source = TEMPLATE$1.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$u) {
    if (simple) O[key] = value;else setGlobal$5(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$6(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$5(this);
});

var objectGetOwnPropertyNames$1 = {};

var ceil$1 = Math.ceil;
var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil$1)(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
var max$3 = Math.max;
var min$4 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$5 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$3(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
var min$3 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$4 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$7 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$7 = toIndexedObject$9;
var toAbsoluteIndex$4 = toAbsoluteIndex$5;
var lengthOfArrayLike$6 = lengthOfArrayLike$7; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$7($this);
    var length = lengthOfArrayLike$6(O);
    var index = toAbsoluteIndex$4(fromIndex, length);
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

var arrayIncludes$1 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$f = functionUncurryThis$1;
var hasOwn$8 = hasOwnProperty_1$1;
var toIndexedObject$6 = toIndexedObject$9;
var indexOf$2 = arrayIncludes$1.indexOf;
var hiddenKeys$6 = hiddenKeys$8;
var push$3 = uncurryThis$f([].push);

var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$6(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$8(hiddenKeys$6, key) && hasOwn$8(O, key) && push$3(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$3(result, key);
  }

  return result;
};

var enumBugKeys$4 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$2 = objectKeysInternal$1;
var enumBugKeys$3 = enumBugKeys$4;
var hiddenKeys$5 = enumBugKeys$3.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$2(O, hiddenKeys$5);
};

var objectGetOwnPropertySymbols$1 = {};

objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

var getBuiltIn$7 = getBuiltIn$a;
var uncurryThis$e = functionUncurryThis$1;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols$1;
var anObject$7 = anObject$9;
var concat$1 = uncurryThis$e([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$4 = getBuiltIn$7('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$7 = hasOwnProperty_1$1;
var ownKeys$3 = ownKeys$4;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$5 = objectDefineProperty$1;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys$3(source);
  var defineProperty = definePropertyModule$5.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn$7(target, key) && !(exceptions && hasOwn$7(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$f = fails$m;
var isCallable$f = isCallable$o;
var replacement$1 = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value == POLYFILL$1 ? true : value == NATIVE$1 ? false : isCallable$f(detection) ? fails$f(detection) : !!detection;
};

var normalize$1 = isForced$3.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};

var data$1 = isForced$3.data = {};
var NATIVE$1 = isForced$3.NATIVE = 'N';
var POLYFILL$1 = isForced$3.POLYFILL = 'P';
var isForced_1$1 = isForced$3;

var global$t = global$N;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
var redefine$3 = redefine$4.exports;
var setGlobal$4 = setGlobal$7;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$2 = isForced_1$1;
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

var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$t;
  } else if (STATIC) {
    target = global$t[TARGET] || setGlobal$4(TARGET, {});
  } else {
    target = (global$t[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
    } // extend global


    redefine$3(target, key, sourceProperty, options);
  }
};

var classof$7 = classofRaw$3; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$6 = Array.isArray || function isArray(argument) {
  return classof$7(argument) == 'Array';
};

var wellKnownSymbol$d = wellKnownSymbol$f;
var TO_STRING_TAG$3 = wellKnownSymbol$d('toStringTag');
var test$1 = {};
test$1[TO_STRING_TAG$3] = 'z';
var toStringTagSupport$1 = String(test$1) === '[object z]';

var global$s = global$N;
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport$1;
var isCallable$e = isCallable$o;
var classofRaw$2 = classofRaw$3;
var wellKnownSymbol$c = wellKnownSymbol$f;
var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
var Object$5 = global$s.Object; // ES3 wrong here

var CORRECT_ARGUMENTS$1 = classofRaw$2(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$6 = TO_STRING_TAG_SUPPORT$1 ? classofRaw$2 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet$1(O = Object$5(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS$1 ? classofRaw$2(O) // ES3 arguments fallback
  : (result = classofRaw$2(O)) == 'Object' && isCallable$e(O.callee) ? 'Arguments' : result;
};

var uncurryThis$d = functionUncurryThis$1;
var fails$e = fails$m;
var isCallable$d = isCallable$o;
var classof$5 = classof$6;
var getBuiltIn$6 = getBuiltIn$a;
var inspectSource$4 = inspectSource$7;

var noop$1 = function () {
  /* empty */
};

var empty$1 = [];
var construct$1 = getBuiltIn$6('Reflect', 'construct');
var constructorRegExp$1 = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$d(constructorRegExp$1.exec);
var INCORRECT_TO_STRING$1 = !constructorRegExp$1.exec(noop$1);

var isConstructorModern$1 = function isConstructor(argument) {
  if (!isCallable$d(argument)) return false;

  try {
    construct$1(noop$1, empty$1, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy$1 = function isConstructor(argument) {
  if (!isCallable$d(argument)) return false;

  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING$1 || !!exec$3(constructorRegExp$1, inspectSource$4(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy$1.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$5 = !construct$1 || fails$e(function () {
  var called;
  return isConstructorModern$1(isConstructorModern$1.call) || !isConstructorModern$1(Object) || !isConstructorModern$1(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy$1 : isConstructorModern$1;

var toPropertyKey$4 = toPropertyKey$7;
var definePropertyModule$4 = objectDefineProperty$1;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;

var createProperty$5 = function (object, key, value) {
  var propertyKey = toPropertyKey$4(key);
  if (propertyKey in object) definePropertyModule$4.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
};

var fails$d = fails$m;
var wellKnownSymbol$b = wellKnownSymbol$f;
var V8_VERSION$4 = engineV8Version$1;
var SPECIES$5 = wellKnownSymbol$b('species');

var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$4 >= 51 || !fails$d(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$5] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var uncurryThis$c = functionUncurryThis$1;
var arraySlice$1 = uncurryThis$c([].slice);

var $$5 = _export$1;
var global$r = global$N;
var isArray$5 = isArray$6;
var isConstructor$4 = isConstructor$5;
var isObject$b = isObject$h;
var toAbsoluteIndex$3 = toAbsoluteIndex$5;
var lengthOfArrayLike$5 = lengthOfArrayLike$7;
var toIndexedObject$5 = toIndexedObject$9;
var createProperty$4 = createProperty$5;
var wellKnownSymbol$a = wellKnownSymbol$f;
var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
var un$Slice = arraySlice$1;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$4('slice');
var SPECIES$4 = wellKnownSymbol$a('species');
var Array$3 = global$r.Array;
var max$2 = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$5({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$5(this);
    var length = lengthOfArrayLike$5(O);
    var k = toAbsoluteIndex$3(start, length);
    var fin = toAbsoluteIndex$3(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$5(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor$4(Constructor) && (Constructor === Array$3 || isArray$5(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$b(Constructor)) {
        Constructor = Constructor[SPECIES$4];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$3 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$3 : Constructor)(max$2(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$4(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var global$q = global$N;
var isArray$4 = isArray$6;
var isConstructor$3 = isConstructor$5;
var isObject$a = isObject$h;
var wellKnownSymbol$9 = wellKnownSymbol$f;
var SPECIES$3 = wellKnownSymbol$9('species');
var Array$2 = global$q.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$3 = function (originalArray) {
  var C;

  if (isArray$4(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$3(C) && (C === Array$2 || isArray$4(C.prototype))) C = undefined;else if (isObject$a(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$2 : C;
};

var arraySpeciesConstructor$2 = arraySpeciesConstructor$3; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$4 = function (originalArray, length) {
  return new (arraySpeciesConstructor$2(originalArray))(length === 0 ? 0 : length);
};

var $$4 = _export$1;
var global$p = global$N;
var fails$c = fails$m;
var isArray$3 = isArray$6;
var isObject$9 = isObject$h;
var toObject$4 = toObject$6;
var lengthOfArrayLike$4 = lengthOfArrayLike$7;
var createProperty$3 = createProperty$5;
var arraySpeciesCreate$3 = arraySpeciesCreate$4;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
var wellKnownSymbol$8 = wellKnownSymbol$f;
var V8_VERSION$3 = engineV8Version$1;
var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$8('isConcatSpreadable');
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED$1 = 'Maximum allowed index exceeded';
var TypeError$9 = global$p.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT$1 = V8_VERSION$3 >= 51 || !fails$c(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE$1] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$3('concat');

var isConcatSpreadable$1 = function (O) {
  if (!isObject$9(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE$1];
  return spreadable !== undefined ? !!spreadable : isArray$3(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$4({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$4(this);
    var A = arraySpeciesCreate$3(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable$1(E)) {
        len = lengthOfArrayLike$4(E);
        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$9(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$9(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
        createProperty$3(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
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

var Anime$4 = /*#__PURE__*/function (_MotorCortex$Extendab) {
  _inherits(Anime, _MotorCortex$Extendab);

  var _super = _createSuper(Anime);

  function Anime() {
    _classCallCheck(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(this.compoAttributes, this.attributeKey)) {
        var compoAttribute = this.compoAttributes[this.attributeKey];

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
}(MotorCortex.ExtendableCSSEffect);

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$o = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$a = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$9 = fails$a; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});
var fails$8 = fails$a;
var functionBindNative = !fails$8(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});
var NATIVE_BIND$1$1 = functionBindNative;
var call$4 = Function.prototype.call;
var functionCall = NATIVE_BIND$1$1 ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};
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

var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind$2 = FunctionPrototype$1.bind;
var call$3$1 = FunctionPrototype$1.call;
var uncurryThis$a = NATIVE_BIND$2 && bind$2.bind(call$3$1, call$3$1);
var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$a(fn);
} : function (fn) {
  return fn && function () {
    return call$3$1.apply(fn, arguments);
  };
};
var uncurryThis$9 = functionUncurryThis;
var toString$1$1 = uncurryThis$9({}.toString);
var stringSlice$3 = uncurryThis$9(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$1$1(it), 8, -1);
};

var global$n = global$o;
var uncurryThis$8 = functionUncurryThis;
var fails$7 = fails$a;
var classof$3 = classofRaw$1;
var Object$4 = global$n.Object;
var split = uncurryThis$8(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$7(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;
var global$m = global$o;
var TypeError$8 = global$m.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError$8("Can't call method on " + it);
  return it;
};

var IndexedObject$2 = indexedObject;
var requireObjectCoercible$1$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject$2(requireObjectCoercible$1$1(it));
}; // https://tc39.es/ecma262/#sec-iscallable


var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$l = global$o;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
};

var uncurryThis$7 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);
var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';
var global$k = global$o;
var userAgent = engineUserAgent;
var process = global$k.process;
var Deno = global$k.Deno;
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
var fails$6 = fails$a; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});
/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';
var global$j = global$o;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$j.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};
var global$i = global$o;
var String$2 = global$i.String;

var tryToString$1 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$h = global$o;
var isCallable$7 = isCallable$b;
var tryToString$2 = tryToString$1;
var TypeError$7 = global$h.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$7(tryToString$2(argument) + ' is not a function');
};

var aCallable$2 = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$2(func);
};

var global$g = global$o;
var call$2$1 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$6 = global$g.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2$1(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$2$1(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2$1(fn, input))) return val;
  throw TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {
  exports: {}
};
var global$f = global$o; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$f, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$f[key] = value;
  }

  return value;
};

var global$e = global$o;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$e[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var global$d = global$o;
var requireObjectCoercible$3 = requireObjectCoercible$2;
var Object$2 = global$d.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object$2(requireObjectCoercible$3(argument));
};

var uncurryThis$6$1 = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$6$1({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$5$1 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$5$1(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var global$c = global$o;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$c.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$b = global$o;
var call$1$1 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TypeError$5 = global$b.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1$1(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$5("Can't convert object to primitive value");
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

var global$a = global$o;
var isObject$4 = isObject$7;
var document$1 = global$a.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$5 = descriptors;
var fails$5$1 = fails$a;
var createElement = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$5 && !fails$5$1(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});
var DESCRIPTORS$4 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$3 = descriptors;
var fails$4$1 = fails$a; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$3 && fails$4$1(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});
var global$9 = global$o;
var isObject$3 = isObject$7;
var String$1$1 = global$9.String;
var TypeError$4 = global$9.TypeError; // `Assert: Type(argument) is Object`

var anObject$2$1 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$4(String$1$1(argument) + ' is not an object');
};

var global$8 = global$o;
var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$1$1 = anObject$2$1;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$3 = global$8.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$1$1(O);
  P = toPropertyKey$1(P);
  anObject$1$1(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1$1(O);
  P = toPropertyKey$1(P);
  anObject$1$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$1 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
var redefine$1 = {
  exports: {}
};
var uncurryThis$4$1 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$4$1(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;
var global$7$1 = global$o;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$7$1.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));
var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};
var NATIVE_WEAK_MAP = nativeWeakMap;
var global$6$1 = global$o;
var uncurryThis$3$1 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$2 = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2$1 = global$6$1.TypeError;
var WeakMap = global$6$1.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2$1('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$4.state) {
  var store = shared$4.state || (shared$4.state = new WeakMap());
  var wmget = uncurryThis$3$1(store.get);
  var wmhas = uncurryThis$3$1(store.has);
  var wmset = uncurryThis$3$1(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2$1(OBJECT_ALREADY_INITIALIZED);
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
  var STATE = sharedKey$2('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$2$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};
var DESCRIPTORS$6 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || DESCRIPTORS$6 && getDescriptor(FunctionPrototype$2, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};
var global$5$1 = global$o;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$5$1) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState$1(this).source || inspectSource$1(this);
});
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max$1 = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$2;
var min$2 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$1$1 = toIndexedObject$3;
var toAbsoluteIndex$2 = toAbsoluteIndex$1;
var lengthOfArrayLike$1$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1$1($this);
    var length = lengthOfArrayLike$1$1(O);
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
var uncurryThis$2$1 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$3;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push$2 = uncurryThis$2$1([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }

  return result;
};

var enumBugKeys$1$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$1$1;
var hiddenKeys$4 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$4);
};

var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$1$1 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$2$1;
var concat = uncurryThis$1$1([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3$1 = fails$a;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$3$1(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;
var global$4$1 = global$o;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$3;
var redefine$2 = redefine$1.exports;
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
    target = global$4$1;
  } else if (STATIC) {
    target = global$4$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$4$1[TARGET] || {}).prototype;
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
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    } // extend global


    redefine$2(target, key, sourceProperty, options);
  }
};

var classof$2$1 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$2$1(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';
var global$3$1 = global$o;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var Object$1 = global$3$1.Object; // ES3 wrong here

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


var classof$1$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};
var uncurryThis$b = functionUncurryThis;
var fails$2$1 = fails$a;
var isCallable$c = isCallable$b;
var classof$4 = classof$1$1;
var getBuiltIn$5 = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$5('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$b(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$c(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$c(argument)) return false;

  switch (classof$4(argument)) {
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

var isConstructor$1 = !construct || fails$2$1(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var global$2$1 = global$o;
var isArray$1 = isArray$2;
var isConstructor$2 = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2$1 = wellKnownSymbol$6;
var SPECIES$1$1 = wellKnownSymbol$2$1('species');
var Array$1$1 = global$2$1.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$2(C) && (C === Array$1$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$1$1 = fails$a;
var wellKnownSymbol$1$1 = wellKnownSymbol$6;
var V8_VERSION$1 = engineV8Version;
var SPECIES$2 = wellKnownSymbol$1$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$1$1(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$2] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$3 = _export;
var global$1$1 = global$o;
var fails$b = fails$a;
var isArray = isArray$2;
var isObject$8 = isObject$7;
var toObject$3 = toObject$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$2;
var createProperty$2 = createProperty$1;
var arraySpeciesCreate$2 = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$7 = wellKnownSymbol$6;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1$1 = global$1$1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$b(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$8(O)) return false;
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
    var O = toObject$3(this);
    var A = arraySpeciesCreate$2(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$3(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$2(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});
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

var MotionPath = /*#__PURE__*/function (_Effect) {
  _inherits(MotionPath, _Effect);

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
}(Effect);

var name$1 = "@donkeyclip/motorcortex-anime";
var version$2 = "2.1.17";
var index$1 = {
  npm_name: name$1,
  version: version$2,
  CSSEffect: Anime$4,
  incidents: [{
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
  }]
};

var fails$5 = fails$m;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$5(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $$2 = _export$1;
var uncurryThis$6 = functionUncurryThis$1;
var IndexedObject$1 = indexedObject$1;
var toIndexedObject$1 = toIndexedObject$9;
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

var global$7 = global$N;
var classof$2 = classof$6;
var String$1 = global$7.String;

var toString$3 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var anObject$5 = anObject$9; // `RegExp.prototype.flags` getter implementation
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

var fails$4 = fails$m;
var global$6 = global$N; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

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

var internalObjectKeys = objectKeysInternal$1;
var enumBugKeys$1 = enumBugKeys$4; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors$1;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug$1;
var definePropertyModule = objectDefineProperty$1;
var anObject$4 = anObject$9;
var toIndexedObject = toIndexedObject$9;
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

var getBuiltIn = getBuiltIn$a;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$9;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$4;
var hiddenKeys = hiddenKeys$8;
var html = html$1;
var documentCreateElement = documentCreateElement$2;
var sharedKey = sharedKey$4;
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

var fails$3 = fails$m;
var global$5 = global$N; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$5.RegExp;
var regexpUnsupportedDotAll = fails$3(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$2 = fails$m;
var global$4 = global$N; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$4.RegExp;
var regexpUnsupportedNcg = fails$2(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$3 = functionCall$1;
var uncurryThis$5 = functionUncurryThis$1;
var toString$2 = toString$3;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$8.exports;
var create = objectCreate;
var getInternalState = internalState$1.get;
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

var $$1 = _export$1;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$1({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var NATIVE_BIND$1 = functionBindNative$1;
var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$4 = functionUncurryThis$1;
var redefine = redefine$4.exports;
var regexpExec$2 = regexpExec$3;
var fails$1 = fails$m;
var wellKnownSymbol$2 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$8;
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

var isObject = isObject$h;
var classof$1 = classofRaw$3;
var wellKnownSymbol$1 = wellKnownSymbol$f;
var MATCH = wellKnownSymbol$1('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$3 = global$N;
var isConstructor = isConstructor$5;
var tryToString = tryToString$4;
var TypeError$2 = global$3.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$9;
var aConstructor = aConstructor$1;
var wellKnownSymbol = wellKnownSymbol$f;
var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$3 = functionUncurryThis$1;
var toIntegerOrInfinity = toIntegerOrInfinity$6;
var toString$1 = toString$3;
var requireObjectCoercible$1 = requireObjectCoercible$6;
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

var global$2 = global$N;
var toAbsoluteIndex = toAbsoluteIndex$5;
var lengthOfArrayLike$1 = lengthOfArrayLike$7;
var createProperty = createProperty$5;
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

var global$1 = global$N;
var call$1 = functionCall$1;
var anObject$1 = anObject$9;
var isCallable = isCallable$o;
var classof = classofRaw$3;
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
var call = functionCall$1;
var uncurryThis$2 = functionUncurryThis$1;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$9;
var requireObjectCoercible = requireObjectCoercible$6;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$4;
var toString = toString$3;
var getMethod = getMethod$4;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails = fails$m;
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

var Anime$3 = MotorCortex.loadPlugin(index$1);

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

var uncurryThis$1 = functionUncurryThis$1;
var aCallable = aCallable$4;
var NATIVE_BIND = functionBindNative$1;
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
var uncurryThis = functionUncurryThis$1;
var IndexedObject = indexedObject$1;
var toObject = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$7;
var arraySpeciesCreate = arraySpeciesCreate$4;
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

var $ = _export$1;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
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
var version = "0.1.9";
var description = "textfxs plugin for MotorCortex";
var main = "dist/motorcortex-textfxs.cjs.js";
var module = "dist/motorcortex-textfxs.esm.js";
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
	"@donkeyclip/motorcortex": "^7",
	"@donkeyclip/motorcortex-anime": ">= 2.1.16 < 3"
};
var devDependencies = {
	"@babel/cli": "7.16.8",
	"@babel/core": "7.16.12",
	"@babel/eslint-parser": "7.16.5",
	"@babel/plugin-syntax-jsx": "7.16.7",
	"@babel/plugin-transform-react-jsx": "7.16.7",
	"@babel/preset-env": "7.16.11",
	"@commitlint/cli": "13.2.1",
	"@commitlint/config-conventional": "13.2.0",
	"@donkeyclip/motorcortex": "7.8.0",
	"@donkeyclip/motorcortex-anime": "2.1.17",
	"@donkeyclip/motorcortex-player": "2.4.4",
	"@rollup/plugin-babel": "5.3.0",
	"@rollup/plugin-commonjs": "21.0.1",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.1.3",
	"@semantic-release/changelog": "6.0.1",
	"@semantic-release/git": "10.0.1",
	"@semantic-release/github": "8.0.2",
	"@semantic-release/npm": "8.0.3",
	"@size-limit/preset-big-lib": "6.0.4",
	"babel-loader": "8.2.3",
	browserslist: "4.19.1",
	"caniuse-lite": "1.0.30001302",
	commitizen: "4.2.4",
	concurrently: "6.5.1",
	"core-js": "3.20.3",
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
	"lint-staged": "12.3.1",
	prettier: "2.5.1",
	rimraf: "3.0.2",
	rollup: "2.66.1",
	"rollup-plugin-terser": "7.0.2",
	"semantic-release": "18.0.1",
	"size-limit": "6.0.4",
	webpack: "5.67.0",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.7.3"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module,
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

export { index as default };
