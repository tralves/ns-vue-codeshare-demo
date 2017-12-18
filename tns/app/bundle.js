module.exports =
webpackJsonp([0],{

/***/ 117:
/* exports provided: default */
/* exports used: default */
/*!**************************!*\
  !*** ./VueComponent.vue ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ns_vue_loader_lib_selector_type_script_index_0_bustCache_VueComponent_vue__ = __webpack_require__(/*! !babel-loader!../../ns-vue-loader/lib/selector?type=script&index=0&bustCache!./VueComponent.vue */ 123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ns_vue_loader_lib_template_compiler_index_id_data_v_0f0e8576_hasScoped_true_buble_transforms_build_native_platform_android_ns_vue_loader_lib_selector_type_template_index_0_bustCache_VueComponent_vue__ = __webpack_require__(/*! !../../ns-vue-loader/lib/template-compiler/index?{"id":"data-v-0f0e8576","hasScoped":true,"buble":{"transforms":{}},"build":"native","platform":"android"}!../../ns-vue-loader/lib/selector?type=template&index=0&bustCache!./VueComponent.vue */ 122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!vue-style-loader!css-loader?{"url":false}!../../ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0f0e8576","scoped":true,"hasInlineConfig":false}!sass-loader!../../ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./VueComponent.vue */ 128)
  __webpack_require__(/*! !../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!vue-style-loader!css-loader?{"url":false}!../../ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0f0e8576","scoped":false,"hasInlineConfig":false}!sass-loader!../../ns-vue-loader/lib/selector?type=styles&index=1&bustCache!./VueComponent.vue */ 127)
}
var normalizeComponent = __webpack_require__(/*! ../../ns-vue-loader/lib/component-normalizer */ 121)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f0e8576"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_ns_vue_loader_lib_selector_type_script_index_0_bustCache_VueComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__ns_vue_loader_lib_template_compiler_index_id_data_v_0f0e8576_hasScoped_true_buble_transforms_build_native_platform_android_ns_vue_loader_lib_selector_type_template_index_0_bustCache_VueComponent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "VueComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f0e8576", Component.options)
  } else {
    hotAPI.reload("data-v-0f0e8576", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 118:
/* exports provided: default */
/* exports used: default */
/*!************************!*\
  !*** ./JsComponent.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    template: "\n        <label>A JS component.</label>\n        "
});

/***/ }),

/***/ 120:
/* no static exports found */
/*!****************************!*\
  !*** ./styles.native.scss ***!
  \****************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/* no static exports found */
/* all exports used */
/*!****************************************************************************!*\
  !*** /Users/tralves/code/ns-vue/ns-vue-loader/lib/component-normalizer.js ***!
  \****************************************************************************/
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.template = compiledTemplate.template
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 122:
/* exports provided: default */
/* exports used: default */
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/tralves/code/ns-vue/ns-vue-loader/lib/template-compiler?{"id":"data-v-0f0e8576","hasScoped":true,"buble":{"transforms":{}},"build":"native","platform":"android"}!/Users/tralves/code/ns-vue/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./VueComponent.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <label>A {{val}} component.</label>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 123:
/* exports provided: default */
/* exports used: default */
/*!***************************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!/Users/tralves/code/ns-vue/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./VueComponent.vue ***!
  \***************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      val: 'Vue.js'
    };
  }
});

/***/ }),

/***/ 124:
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./app.native.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__JsComponent__ = __webpack_require__(/*! ./JsComponent */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VueComponent__ = __webpack_require__(/*! ./VueComponent */ 117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(/*! ./styles */ 120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles__);
var Vue = __webpack_require__(/*! nativescript-vue/dist/index */ 47);
var http = __webpack_require__(/*! http */ 26);






Vue.prototype.$http = http;

new Vue({
  components: {
    JsComponent: __WEBPACK_IMPORTED_MODULE_0__JsComponent__["a" /* default */],
    VueComponent: __WEBPACK_IMPORTED_MODULE_1__VueComponent__["a" /* default */]
  },

  template: '\n    <page ref="page">\n      <stack-layout>\n        <js-component></js-component>\n        <vue-component></vue-component>\n      </stack-layout>\n    </page>\n  ',
  methods: {}
}).$start();

/***/ }),

/***/ 127:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!../~/vue-style-loader!../~/css-loader?{"url":false}!/Users/tralves/code/ns-vue/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0f0e8576","scoped":false,"hasInlineConfig":false}!../~/sass-loader/lib/loader.js!/Users/tralves/code/ns-vue/ns-vue-loader/lib/selector.js?type=styles&index=1&bustCache!./VueComponent.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!../~/vue-style-loader!../~/css-loader?{"url":false}!/Users/tralves/code/ns-vue/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0f0e8576","scoped":true,"hasInlineConfig":false}!../~/sass-loader/lib/loader.js!/Users/tralves/code/ns-vue/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./VueComponent.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[124]);