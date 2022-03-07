"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("formik");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),i=n(t);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}f(".button{background:#fae159;border:none;border-radius:24px;color:#000;cursor:pointer;font-family:inherit;font-size:1rem;font-weight:500;padding:14px 20px;transition:all .3s ease;width:100%}.button:hover:enabled{opacity:.6}.button:disabled{background:#dce5eb;color:#9db0bd;cursor:not-allowed}.button:focus,.button:focus-visible{outline:none}");var b=["children","onClick","disabled"],h=function(e){var t=e.children,r=e.onClick,n=e.disabled,i=s(e,b);return o.default.createElement("button",u({className:"button",onClick:r},i,{disabled:n}),t)};h.propTypes={children:i.default.node.isRequired,onClick:i.default.func,disabled:i.default.bool};f(".buttonLink{background:transparent;border:none;color:#222d34;cursor:pointer;font-family:inherit;font-size:1rem;padding:11px 8px;text-decoration:none}.buttonLink:hover:enabled{font-weight:700}.buttonLink:active{color:#9db0bd;font-weight:700}.buttonLink:focus,.buttonLink:focus-visible{outline:none}.buttonLink:disabled{color:#9db0bd;cursor:not-allowed}");var m=["children","onClick","disabled"],y=function(e){var t=e.children,r=e.onClick,n=e.disabled,i=s(e,m);return o.default.createElement("button",u({className:"buttonLink",onClick:r},i,{disabled:n}),t)};y.propTypes={children:i.default.node.isRequired,onClick:i.default.func,disabled:i.default.bool};f('.checkboxContainer{align-items:center;cursor:pointer;display:flex;font-size:14px;height:22px;padding-left:35px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkboxContainer input{cursor:pointer;height:0;opacity:0;position:absolute;width:0}.checkmark{background-color:transparent;border:1px solid #222d34;border-radius:50%;height:20px;left:0;position:absolute;top:0;width:20px}.checkboxContainer input:checked~.checkmark{background-color:#222d34}.checkmark:after{content:"";display:none;position:absolute}.checkboxContainer input:checked~.checkmark:after{display:block}.checkboxContainer .checkmark:after{border:solid #fff;border-width:0 1.5px 1.5px 0;height:10px;left:7px;top:2px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);width:5px}');var g=["children"],x=function(e){var t=e.children,n=s(e,g),i=d(r.useField(l(l({},n),{},{type:"checkbox"})),2),a=i[0],c=i[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("label",u({className:"checkboxContainer"},n),t,o.default.createElement("input",u({type:"checkbox"},a,n)),o.default.createElement("span",{className:"checkmark"})),c.touched&&c.error?o.default.createElement("div",{className:"checkbox-error"},c.error):null)};x.propTypes={children:i.default.string},x.defaultProps={};f(".inputText{display:flex;flex-direction:column;position:relative}.clearButton{background:none;border:none;bottom:0;cursor:pointer;height:10px;margin:auto;position:absolute;right:0;top:0;width:10px}.clearButtonRtl{left:0;right:auto}.inputText label{color:#718897;font-size:11px;font-style:normal;font-weight:400;letter-spacing:1px;line-height:16px;margin-bottom:8px;text-transform:uppercase}.inputContainer{margin-bottom:8px;position:relative;width:100%}.inputContainer input{border:none;border-bottom:1px solid #718897;font-size:16px;line-height:24px;outline:none;padding:8px 0;width:100%}.inputError{color:#ff585f;font-size:14px}");var k=["label","style","clearButton","locale"],v=function(e){var t=e.label;e.style;var n=e.clearButton,i=void 0===n||n,a=e.locale,l=void 0===a?"en":a,c=s(e,k),p=d(r.useField(c.name,c),3),f=p[0],b=p[1],h=p[2];return o.default.createElement("div",{className:"inputText"},o.default.createElement("div",{className:"inputContainer"},o.default.createElement("label",null,t),o.default.createElement("input",u({name:c.name},f,c)),i&&o.default.createElement("div",{className:"clearButton ".concat("ar"===l?"clearButtonRtl":""),type:"button",hidden:!f.value,onClick:function(){return h.setValue("")}},o.default.createElement("img",{alt:"Clear",src:"/icons/cross.svg",layout:"fill"})),b.touched&&b.error?o.default.createElement("div",{className:"inputError"},b.error):null))};v.propTypes={label:i.default.string.isRequired,style:i.default.object,clearButton:i.default.bool,locale:i.default.string},v.defaultProps={label:"Text Input",style:{},clearButton:!0,locale:"en"};f(".loading{align-items:center;display:flex;height:90vh;justify-content:center}.loading__spinner{animation:spin 1s linear infinite;height:40px;width:40px}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}");exports.Button=h,exports.ButtonLink=y,exports.CheckBox=x,exports.Spinner=function(){return o.default.createElement("div",{className:"loading"},o.default.createElement("div",{className:"loading__spinner"},o.default.createElement("img",{src:"/images/spinner.svg",width:40,height:40})))},exports.TextInput=v;