import React from 'react';
import propTypes from 'prop-types';
import { useField } from 'formik';

function ownKeys(object, enumerableOnly) {
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
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".button{background:#fae159;border:none;border-radius:24px;color:#000;cursor:pointer;font-family:inherit;font-size:1rem;font-weight:500;padding:14px 20px;transition:all .3s ease;width:100%}.button:hover:enabled{opacity:.6}.button:disabled{background:#dce5eb;color:#9db0bd;cursor:not-allowed}.button:focus,.button:focus-visible{outline:none}";
styleInject(css_248z$5);

var _excluded$3 = ["children", "onClick", "disabled"];
var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button",
    onClick: onClick
  }, props, {
    disabled: disabled
  }), children);
};
Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

var css_248z$4 = ".buttonLink{background:transparent;border:none;color:#222d34;cursor:pointer;font-family:inherit;font-size:1rem;padding:11px 8px;text-decoration:none}.buttonLink:hover:enabled{font-weight:700}.buttonLink:active{color:#9db0bd;font-weight:700}.buttonLink:focus,.buttonLink:focus-visible{outline:none}.buttonLink:disabled{color:#9db0bd;cursor:not-allowed}";
styleInject(css_248z$4);

var _excluded$2 = ["children", "onClick", "disabled"];
var ButtonLink = function ButtonLink(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement("button", _extends({
    className: "buttonLink",
    onClick: onClick
  }, props, {
    disabled: disabled
  }), children);
};
ButtonLink.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

var css_248z$3 = ".checkboxContainer{align-items:center;cursor:pointer;display:flex;font-size:14px;height:22px;padding-left:35px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkboxContainer input{cursor:pointer;height:0;opacity:0;position:absolute;width:0}.checkmark{background-color:transparent;border:1px solid #222d34;border-radius:50%;height:20px;left:0;position:absolute;top:0;width:20px}.checkboxContainer input:checked~.checkmark{background-color:#222d34}.checkmark:after{content:\"\";display:none;position:absolute}.checkboxContainer input:checked~.checkmark:after{display:block}.checkboxContainer .checkmark:after{border:solid #fff;border-width:0 1.5px 1.5px 0;height:10px;left:7px;top:2px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);width:5px}";
styleInject(css_248z$3);

var _excluded$1 = ["children"];
var CheckBox = function CheckBox(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var _useField = useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'checkbox'
  })),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", _extends({
    className: "checkboxContainer"
  }, props), children, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, field, props)), /*#__PURE__*/React.createElement("span", {
    className: "checkmark"
  })), meta.touched && meta.error ? /*#__PURE__*/React.createElement("div", {
    className: "checkbox-error"
  }, meta.error) : null);
};
CheckBox.propTypes = {
  children: propTypes.string
};
CheckBox.defaultProps = {};

var css_248z$2 = ".inputText{display:flex;flex-direction:column;position:relative}.clearButton{background:none;border:none;bottom:0;cursor:pointer;height:10px;margin:auto;position:absolute;right:0;top:0;width:10px}.clearButtonRtl{left:0;right:auto}.inputText label{color:#718897;font-size:11px;font-style:normal;font-weight:400;letter-spacing:1px;line-height:16px;margin-bottom:8px;text-transform:uppercase}.inputContainer{margin-bottom:8px;position:relative;width:100%}.inputContainer input{border:none;border-bottom:1px solid #718897;font-size:16px;line-height:24px;outline:none;padding:8px 0;width:100%}.inputError{color:#ff585f;font-size:14px}";
styleInject(css_248z$2);

var _excluded = ["label", "style", "clearButton", "locale"];
var TextInput = function TextInput(_ref) {
  var label = _ref.label;
      _ref.style;
      var _ref$clearButton = _ref.clearButton,
      clearButton = _ref$clearButton === void 0 ? true : _ref$clearButton,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useField = useField(props.name, props),
      _useField2 = _slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  return /*#__PURE__*/React.createElement("div", {
    className: "inputText"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inputContainer"
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("input", _extends({
    name: props.name
  }, field, props)), clearButton && /*#__PURE__*/React.createElement("div", {
    className: "clearButton ".concat(locale === 'ar' ? 'clearButtonRtl' : ''),
    type: "button",
    hidden: !field.value,
    onClick: function onClick() {
      return helpers.setValue('');
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Clear",
    src: '/icons/cross.svg',
    layout: "fill"
  })), meta.touched && meta.error ? /*#__PURE__*/React.createElement("div", {
    className: "inputError"
  }, meta.error) : null));
};
TextInput.propTypes = {
  label: propTypes.string.isRequired,
  style: propTypes.object,
  clearButton: propTypes.bool,
  locale: propTypes.string
};
TextInput.defaultProps = {
  label: 'Text Input',
  style: {},
  clearButton: true,
  locale: 'en'
};

var css_248z$1 = ".loading{align-items:center;display:flex;height:90vh;justify-content:center}.loading__spinner{animation:spin 1s linear infinite;height:40px;width:40px}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
styleInject(css_248z$1);

// react function spinner component
var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading__spinner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/spinner.svg",
    width: 40,
    height: 40
  })));
};

var css_248z = ".header{background-color:#fae159;justify-content:center}.header,.header__container{align-items:center;display:flex}.header__container{justify-content:space-between;max-width:552px;padding:8px;width:100%}.header__btnLanguage{position:relative}.header__btnLanguage__img{width:32px}.header__btnLanguage:hover{cursor:pointer}@media (min-width:768px){.header__container{padding:8px 0}}";
styleInject(css_248z);

var Header = function Header(_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__container"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/logo-lucky.png",
    alt: "lucky",
    width: 112,
    height: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "header__btnLanguage",
    onClick: onClick
  }, locale === 'ar' ? 'English' : /*#__PURE__*/React.createElement("div", {
    className: "header__btnLanguage__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/icons/arabe.svg",
    alt: "lucky",
    layout: "fill"
  }))))));
};

export { Button, ButtonLink, CheckBox, Header, Spinner, TextInput };
