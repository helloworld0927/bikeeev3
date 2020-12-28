module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+lHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncFetch; });
const asyncFetch = async (url, token) => {
  const response = await fetch(url, {
    method: "get",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + token
    }
  });
  return response;
};

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthState", function() { return useAuthState; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_theme_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YuJk");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K7M5");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QvEX");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_media__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wEaX");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Juyh");
/* harmony import */ var _authenticated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Fkz+");
/* harmony import */ var _handle_redirect_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("eaBa");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("hrT3");
/* harmony import */ var _components_fetchHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+lHJ");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("9d8Q");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_fonts_inter_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("5ShY");
/* harmony import */ var _assets_fonts_inter_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_inter_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("iOjB");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_16__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { motion, AnimatePresence } from "framer-motion";





 // import nextCookies from "next-cookies";






 // Import CSS




const config = {
  apiKey: "AIzaSyAT-v8o3B_cYtmaQOcOAaZypeXQC4W1lH8",
  authDomain: "banana-dd8f3.firebaseapp.com",
  databaseURL: "https://banana-dd8f3.firebaseio.com",
  projectId: "banana-dd8f3",
  storageBucket: "banana-dd8f3.appspot.com",
  messagingSenderId: "33006064885"
}; // function MyApp({ Component, pageProps }) {
// const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");
// const [cookies, setCookie] = useCookies([]);
//   let currentTime = Date.now() / 1000;
//   let access_token = cookies.access_token;
//   let expires_at = cookies.expires_at;
//   // let refresh_token = cookies.refresh_token;
//   React.useEffect(() => {
//     if (access_token && expires_at > currentTime) {
//       console.log("APP.JS: user is authenticated");
//       // If there is an access token and it hasn't expired, user is authenticated
//     } else {
//       // If none of the above, there is no authenticated user
//       console.log("APP.JS: There is no authenticated user");
//       Router.push("/");
//     }
//   }, []);
//   return (
// <ThemeProvider theme={mediaDarkMode ? DarkTheme : LightTheme}>
//   <Head>
//     <link
//       href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
//       rel="stylesheet"
//     />
//   </Head>
//   <AuthProvider>
//     <Component cookies={cookies} {...pageProps} />
//   </AuthProvider>
//   <GlobalStyle></GlobalStyle>
// </ThemeProvider>
//   );
// }
// // MyApp.getInitialProps = ctx => ({
// //   ctx: nextCookies(ctx)
// // });

const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext();

function useAuthState() {
  const state = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(AuthContext);
  const isPending = state.status === "pending";
  const isSuccess = state.status === "success";
  const user = state.user;
  const isAuthenticated = isSuccess;
  return _objectSpread(_objectSpread({}, state), {}, {
    isPending,
    isSuccess,
    isAuthenticated
  });
}

function AuthContextProvider({
  children
}) {
  const [cookies, setCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_8__["useCookies"])();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true);
  let currentTime = Date.now() / 1000;
  let access_token = cookies.access_token;
  let expires_at = cookies.expires_at;
  let refresh_token = cookies.refresh_token;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    setState({
      cookies: cookies,
      status: "pending"
    });
    let athleteFetchUrl = "https://www.strava.com/api/v3/athlete";

    if (access_token && expires_at > currentTime) {
      Object(_components_fetchHelper__WEBPACK_IMPORTED_MODULE_13__[/* asyncFetch */ "a"])(athleteFetchUrl, cookies.access_token).then(data => {
        return data.json();
      }).then(user => {
        setState({
          user: user,
          status: "success",
          cookies: cookies
        });
      });
    } else {
      setState({
        user: null,
        status: "error",
        cookies: cookies
      });
    }
  }, [cookies]);
  return __jsx(AuthContext.Provider, {
    value: state
  }, children);
}

function Home({
  Component,
  pageProps
}) {
  const {
    isSuccess,
    isPending
  } = useAuthState();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let isHandleRedirect = router.route == "/handle_redirect";
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]);

  if (isSuccess) {
    return __jsx(_authenticated__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(Component, pageProps));
  } else if (isPending) {
    return __jsx(Loading, null);
  } else if (isHandleRedirect) {
    return __jsx(_handle_redirect_index__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  } else {
    return __jsx(_about__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }
}

const LoadingScreen = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "_app__LoadingScreen",
  componentId: "sc-4kid5d-0"
})(["position:absolute;top:0;right:0;left:0;bottom:0;display:flex;justify-content:center;align-items:center;p{}"]);

function Loading() {
  return __jsx(LoadingScreen, null, __jsx("p", null, "Loading..."));
}

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(AuthContextProvider, null, __jsx(Home, {
    Component: Component,
    pageProps: pageProps
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5ShY":
/***/ (function(module, exports) {



/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "9d8Q":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Fkz+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YuJk");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K7M5");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QvEX");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_media__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hrT3");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function AuthenticatedApp({
  children
}) {
  const mediaDarkMode = use_media__WEBPACK_IMPORTED_MODULE_4___default()("(prefers-color-scheme: dark)");
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: mediaDarkMode ? _styles_theme_dark__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] : _styles_theme_light__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("link", {
    href: "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css",
    rel: "stylesheet"
  })), children, __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (AuthenticatedApp);

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RT7K");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let LoginPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "about__LoginPage",
  componentId: "sc-1iopdz2-0"
})(["display:grid;position:absolute;width:100vw;height:100vh;"]);
let LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "about__LoginButton",
  componentId: "sc-1iopdz2-1"
})(["place-self:center;align-self:center;justify-self:center;cursor:pointer;"]);
const style = {};

function About() {
  return __jsx(LoginPage, null, __jsx(LoginButton, null, __jsx("a", {
    href: "https://strava-auth.herokuapp.com/"
  }, __jsx(_components_icons_icons__WEBPACK_IMPORTED_MODULE_2__[/* IconStravaConnect */ "b"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "K7M5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("trJJ");

/* harmony default export */ __webpack_exports__["a"] = ({
  colors: {
    background: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.black.value,
    text: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.white.value,
    cardBackground: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.mineShaft.value,
    statCardBackgroundYellow: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.goldenTainoiapprox.value,
    statCardBackgroundRed: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.flamePeaapprox.value,
    statCardBackgroundBlack: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.black.value,
    statCardBackgroundGreen: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.shadowGreen.value,
    statCardBackgroundPurple: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.wildBlueYonder.value,
    statCardBackgroundBeige: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.quaterSpanishWhite.value,
    buttonBackground: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.mineShaft.value,
    buttonLabel: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.white.value
  },
  tokens: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
});

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QvEX":
/***/ (function(module, exports) {

module.exports = require("use-media");

/***/ }),

/***/ "RT7K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconAllActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IconYearInReview; });
/* unused harmony export IconFavourites */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IconStravaConnect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const IconAllActivities = props => {
  let fillColor, strokeColor;

  if (props.theme == "dark") {
    fillColor = "white", strokeColor = "white";
  } else {
    fillColor = "black", strokeColor = "black";
  }

  return __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M3 3H10V10H3V3Z",
    fill: fillColor,
    fillOpacity: "0.4",
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M14 3H21V10H14V3Z",
    fill: fillColor,
    fillOpacity: "0.4",
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M14 14H21V21H14V14Z",
    fill: fillColor,
    fillOpacity: "0.4",
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M3 14H10V21H3V14Z",
    fill: fillColor,
    fillOpacity: "0.4",
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
const IconYearInReview = props => {
  let fillColor, strokeColor;

  if (props.theme == "dark") {
    fillColor = "#E0BC3E", strokeColor = "#E0BC3E";
  } else {
    fillColor = "#E0BC3E", strokeColor = "#E0BC3E";
  }

  return __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M22 12H18L15 21L9 3L6 12H2",
    fill: fillColor,
    fillOpacity: "0.4"
  }), __jsx("path", {
    d: "M22 12H18L15 21L9 3L6 12H2",
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
const IconFavourites = props => {
  let fillColor, strokeColor;

  if (props.theme == "dark") {
    fillColor = "#E0BC3E", strokeColor = "#E0BC3E";
  } else {
    fillColor = "#E0BC3E", strokeColor = "#E0BC3E";
  }

  return __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M19 21L12 16L5 21V5V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z",
    fill: "#C95F5F",
    fillOpacity: "0.4",
    stroke: "#C95F5F",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
const IconStravaConnect = props => {
  return __jsx("svg", {
    width: "193",
    height: "48",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("rect", {
    fill: "#FC4C02",
    x: "4",
    y: "4",
    width: "185",
    height: "40",
    rx: "2"
  }), __jsx("path", {
    d: "M27 25.164l1.736.35c-.112 1.101-.513 1.993-1.204 2.674-.69.681-1.582 1.022-2.674 1.022-1.241 0-2.256-.434-3.045-1.302-.789-.868-1.183-2.165-1.183-3.892 0-1.605.413-2.844 1.239-3.717.826-.873 1.818-1.309 2.975-1.309 1.017 0 1.876.32 2.576.959.7.64 1.11 1.482 1.232 2.527l-1.708.266c-.243-1.484-.938-2.226-2.086-2.226-.719 0-1.318.29-1.799.868-.48.579-.721 1.465-.721 2.66 0 1.223.236 2.135.707 2.737.471.602 1.076.903 1.813.903 1.223 0 1.937-.84 2.142-2.52zm6.519 2.604c.55 0 .996-.217 1.337-.651.34-.434.51-1.043.51-1.827s-.17-1.393-.51-1.827a1.62 1.62 0 00-1.337-.651c-.56 0-1.01.215-1.351.644-.34.43-.511 1.04-.511 1.834 0 .803.17 1.416.51 1.841.341.425.792.637 1.352.637zm0 1.442c-.999 0-1.823-.345-2.471-1.036-.649-.69-.973-1.652-.973-2.884 0-1.213.333-2.17 1-2.87.668-.7 1.482-1.05 2.444-1.05.961 0 1.77.35 2.429 1.05.658.7.987 1.657.987 2.87 0 1.232-.32 2.193-.96 2.884-.639.69-1.458 1.036-2.456 1.036zm5.245-.21v-7.42h1.54v.714h.027c.206-.261.49-.48.854-.658a2.589 2.589 0 011.148-.266c.822 0 1.468.245 1.94.735.47.49.706 1.169.706 2.037V29h-1.581v-4.438c0-1.148-.481-1.722-1.443-1.722-.485 0-.872.14-1.161.42-.29.28-.434.658-.434 1.134V29h-1.596zm8.464 0v-7.42h1.54v.714h.028c.206-.261.49-.48.854-.658a2.589 2.589 0 011.148-.266c.822 0 1.468.245 1.94.735.47.49.706 1.169.706 2.037V29h-1.582v-4.438c0-1.148-.48-1.722-1.442-1.722-.485 0-.872.14-1.162.42-.29.28-.434.658-.434 1.134V29h-1.596zm13.393-2.464l1.148.938c-.719 1.157-1.745 1.736-3.08 1.736-1.027 0-1.864-.357-2.513-1.071-.649-.714-.973-1.664-.973-2.849 0-1.185.322-2.135.966-2.849.644-.714 1.46-1.071 2.45-1.071.99 0 1.799.355 2.429 1.064.63.71.945 1.661.945 2.856v.476h-5.18c.019.616.189 1.108.511 1.477s.768.553 1.337.553c.27 0 .513-.037.728-.112.215-.075.404-.187.567-.336.163-.15.287-.28.371-.392.084-.112.182-.252.294-.42zm-3.794-1.974h3.612c-.028-.523-.196-.95-.504-1.281-.308-.331-.747-.497-1.316-.497-.532 0-.957.177-1.274.532-.317.355-.49.77-.518 1.246zm11.503 1.484l1.582.336c-.15.896-.49 1.591-1.022 2.086-.532.495-1.237.742-2.114.742-1.008 0-1.834-.345-2.478-1.036-.644-.69-.966-1.652-.966-2.884 0-1.185.324-2.135.973-2.849.648-.714 1.467-1.071 2.457-1.071.85 0 1.55.254 2.1.763s.872 1.169.966 1.981l-1.498.252c-.159-1.036-.677-1.554-1.554-1.554-.57 0-1.022.217-1.358.651-.336.434-.504 1.043-.504 1.827s.163 1.393.49 1.827c.326.434.784.651 1.372.651.868 0 1.386-.574 1.554-1.722zm3.69.476v-3.57H70.9V21.58h1.162v-1.82h1.513v1.82h1.861v1.372h-1.848v3.402c0 .41.063.698.19.861.126.163.384.245.776.245h.588V29h-.713c-.897 0-1.522-.198-1.877-.595-.354-.397-.532-1.024-.532-1.883zM81.992 29l-1.638-7.42h1.568l1.05 5.166H83l1.764-5.166h1.442l1.652 5.152h.028l1.19-5.152h1.54L88.838 29h-1.54l-1.806-5.572h-.028L83.518 29h-1.526zm10.41 0v-7.42H94V29h-1.596zm-.027-8.638V18.78h1.652v1.582h-1.652zm4.32 6.16v-3.57h-1.12V21.58h1.162v-1.82h1.513v1.82h1.862v1.372h-1.849v3.402c0 .41.063.698.19.861.126.163.384.245.776.245h.588V29h-.713c-.897 0-1.522-.198-1.876-.595-.355-.397-.532-1.024-.532-1.883zM101.87 29V18.78h1.596v3.528h.028c.168-.252.444-.471.826-.658.383-.187.77-.28 1.162-.28.794 0 1.438.243 1.932.728.495.485.742 1.148.742 1.988V29h-1.582v-4.536c0-.485-.13-.877-.392-1.176-.261-.299-.64-.448-1.134-.448-.476 0-.858.14-1.148.42-.29.28-.434.64-.434 1.078V29h-1.596zM160.016 18.724l-2.442 4.97-2.444-4.97h-3.591L157.574 31l6.03-12.276h-3.588zm-19.849 4.34c0-.374-.129-.653-.385-.833-.255-.181-.603-.272-1.04-.272h-1.634v2.261h1.618c.449 0 .801-.1 1.056-.297.256-.199.385-.475.385-.826v-.034zM149.175 18l6.034 12.276h-3.592l-2.442-4.97-2.44 4.97h-6.712l-2.115-3.3h-.8v3.3h-3.747V18.724h5.477c1.004 0 1.828.119 2.474.355.647.237 1.166.56 1.561.966.342.351.598.748.77 1.187.17.44.256.959.256 1.55v.035c0 .847-.198 1.562-.594 2.145-.394.583-.933 1.046-1.617 1.386l1.947 2.93L149.175 18zm16.792 0l-6.032 12.276h3.591l2.44-4.97 2.444 4.97H172L165.967 18zm-43.48 3.99h3.3v8.286h3.747V21.99h3.3v-3.266h-10.346v3.266zm-.134 3.07c.229.408.344.904.344 1.486v.033c0 .605-.117 1.15-.353 1.634a3.472 3.472 0 01-.993 1.23c-.427.335-.946.593-1.554.775-.607.183-1.292.274-2.049.274-1.141 0-2.207-.164-3.195-.487-.987-.326-1.838-.813-2.553-1.46l2.001-2.458a5.9 5.9 0 001.921 1.038c.673.21 1.34.314 2.002.314.343 0 .587-.044.737-.131.15-.089.224-.21.224-.363v-.033c0-.167-.11-.306-.328-.414-.218-.11-.628-.225-1.226-.345a20.64 20.64 0 01-1.8-.464 6.1 6.1 0 01-1.505-.676 3.215 3.215 0 01-1.034-1.04c-.256-.419-.384-.93-.384-1.535v-.033c0-.551.104-1.063.312-1.536.207-.473.512-.886.912-1.237.4-.352.898-.627 1.491-.826.59-.198 1.272-.297 2.041-.297 1.088 0 2.04.132 2.858.397.816.262 1.55.659 2.202 1.187l-1.825 2.608a5.55 5.55 0 00-1.69-.868 5.717 5.717 0 00-1.673-.273c-.277 0-.483.044-.616.133a.395.395 0 00-.2.346v.033c0 .155.1.287.304.398.203.11.598.225 1.184.346.716.131 1.366.291 1.955.477.586.19 1.092.427 1.512.72.422.291.749.64.978 1.048z",
    fill: "#FFF"
  })));
};

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YuJk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("trJJ");

/* harmony default export */ __webpack_exports__["a"] = ({
  colors: {
    background: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.white.value,
    text: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.black.value,
    cardBackground: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.porcelain.value,
    statCardBackgroundYellow: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.goldenTainoiapprox.value,
    statCardBackgroundRed: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.flamePeaapprox.value,
    statCardBackgroundBlack: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.black.value,
    statCardBackgroundGreen: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.shadowGreen.value,
    statCardBackgroundPurple: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.wildBlueYonder.value,
    statCardBackgroundBeige: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.quaterSpanishWhite.value,
    buttonBackground: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.porcelain.value,
    buttonLabel: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].color.black.value
  },
  tokens: _tokens__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eaBa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wEaX");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





let accessToken;
let firebaseToken;
let refreshToken;
let expiresAt;

let setTokensFromUrl = async () => {
  const search = window.location.search.substring(1);
  const query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  let tokens = {
    accessToken: query.access_token,
    firebaseToken: query.firebase_token,
    refreshToken: query.refresh_token,
    expiresAt: query.expires_at
  };
  return tokens;
};

const HandleRedirect = () => {
  const [cookies, setCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_2__["useCookies"])([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTokensFromUrl().then(value => {
      setCookie("access_token", value.accessToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("firebase_token", value.firebaseToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("refresh_token", value.refreshToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("expires_at", value.expiresAt, {
        path: "/",
        maxAge: 604800
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/activities");
    });
  }, []);
  return __jsx("div", null, "success");
};

/* harmony default export */ __webpack_exports__["default"] = (HandleRedirect);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hrT3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  * {box-sizing: border-box; -webkit-font-smoothing: antialiased;}

  h1 {
    margin-top:  ${props => props.theme.tokens.typography.large.heading1.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.heading1.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.heading1.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.heading1.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.heading1.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.heading1.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.heading1.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.heading1.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.heading1.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.heading1.lineHeight.value};
    }
  }

  h2 {
    margin-top:  ${props => props.theme.tokens.typography.large.heading2.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.heading2.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.heading2.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.heading2.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.heading2.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.heading2.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.heading2.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.heading2.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.heading2.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.heading2.lineHeight.value};
    }
  }

  h3 {
    margin-top:  ${props => props.theme.tokens.typography.large.heading3.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.heading3.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.heading3.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.heading3.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.heading3.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.heading3.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.heading3.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.heading3.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.heading3.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.heading3.lineHeight.value};
    }
  }

  h4 {
    margin-top:  ${props => props.theme.tokens.typography.large.heading4.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.heading4.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.heading4.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.heading4.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.heading4.lineHeight.value};
    font-weight: normal;
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.heading4.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.heading4.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.heading4.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.heading4.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.heading4.lineHeight.value};
      font-weight: normal;
    }
  }

  h5 {
    margin-top:  ${props => props.theme.tokens.typography.large.eyebrow.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.eyebrow.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.eyebrow.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.eyebrow.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.eyebrow.lineHeight.value};
    text-transform: ${props => props.theme.tokens.typography.large.eyebrow.textTransform.value};
    font-weight: normal;
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.eyebrow.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.eyebrow.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.eyebrow.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.eyebrow.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.eyebrow.lineHeight.value};
      text-transform: ${props => props.theme.tokens.typography.large.eyebrow.textTransform.value};
      font-weight: normal;
    }
  }

  p {
    margin-top:  ${props => props.theme.tokens.typography.large.paragraph.marginTop.value};
    margin-bottom: ${props => props.theme.tokens.typography.large.paragraph.marginBottom.value};
    font-size: ${props => props.theme.tokens.typography.large.paragraph.size.value};
    letter-spacing: ${props => props.theme.tokens.typography.large.paragraph.letterSpacing.value};
    line-height: ${props => props.theme.tokens.typography.large.paragraph.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props => props.theme.tokens.typography.small.paragraph.marginTop.value};
      margin-bottom: ${props => props.theme.tokens.typography.small.paragraph.marginBottom.value};
      font-size: ${props => props.theme.tokens.typography.small.paragraph.size.value};
      letter-spacing: ${props => props.theme.tokens.typography.small.paragraph.letterSpacing.value};
      line-height: ${props => props.theme.tokens.typography.small.paragraph.lineHeight.value};
    }
  }

`;
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),

/***/ "iOjB":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "trJJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  mediaQueries: {
    large: "1024px",
    small: "768px"
  },
  borderRadius: {
    value: "8px"
  },
  spacing: {
    XS: {
      value: "4px"
    },
    S: {
      value: "8px"
    },
    M: {
      value: "16px"
    },
    L: {
      value: "24px"
    },
    XL: {
      value: "32px"
    },
    XXL: {
      value: "64px"
    }
  },
  color: {
    mineShaft: {
      value: "#282828"
    },
    white: {
      value: "#FFFFFF"
    },
    black: {
      value: "#000000"
    },
    porcelain: {
      value: "#F1F4F5"
    },
    goldenTainoiapprox: {
      value: "#FFC55F"
    },
    flamePeaapprox: {
      value: "#DC524D"
    },
    shadowGreen: {
      value: "#93C4C7"
    },
    wildBlueYonder: {
      value: "#7D88BC"
    },
    azureRadiance: {
      value: "#0085FF"
    },
    quaterSpanishWhite: {
      value: "#F6F1E1"
    }
  },
  typography: {
    large: {
      heading1: {
        size: {
          value: "72px"
        },
        letterSpacing: {
          value: "-0.02em"
        },
        weight: {
          value: 800
        },
        lineHeight: {
          value: "84px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "42px"
        }
      },
      heading2: {
        size: {
          value: "43px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        weight: {
          value: 800
        },
        lineHeight: {
          value: "63px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "21px"
        }
      },
      heading3: {
        weight: {
          value: 800
        },
        size: {
          value: "26px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        lineHeight: {
          value: "42px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      heading4: {
        weight: {
          value: 400
        },
        size: {
          value: "18px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        lineHeight: {
          value: "21px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      eyebrow: {
        weight: {
          value: 400
        },
        size: {
          value: "18px"
        },
        letterSpacing: {
          value: "0.04em"
        },
        lineHeight: {
          value: "21px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "0px"
        },
        textTransform: {
          value: "uppercase"
        }
      },
      paragraph: {
        weight: {
          value: 400
        },
        size: {
          value: "16px"
        },
        letterSpacing: {
          value: "0em"
        },
        lineHeight: {
          value: "21px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      caption: {
        weight: {
          value: 400
        },
        size: {
          value: "14px"
        },
        letterSpacing: {
          value: "0.02em"
        },
        lineHeight: {
          value: "21px"
        },
        marginTop: {
          value: "21px"
        },
        marginBottom: {
          value: "0px"
        }
      }
    },
    small: {
      heading1: {
        size: {
          value: "63px"
        },
        letterSpacing: {
          value: "-0.02em"
        },
        weight: {
          value: 800
        },
        lineHeight: {
          value: "72px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "36px"
        }
      },
      heading2: {
        size: {
          value: "38px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        weight: {
          value: 800
        },
        lineHeight: {
          value: "54px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "18px"
        }
      },
      heading3: {
        weight: {
          value: 800
        },
        size: {
          value: "23px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        lineHeight: {
          value: "36px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      heading4: {
        weight: {
          value: 400
        },
        size: {
          value: "16px"
        },
        letterSpacing: {
          value: "-0.01em"
        },
        lineHeight: {
          value: "18px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      eyebrow: {
        weight: {
          value: 400
        },
        size: {
          value: "14px"
        },
        letterSpacing: {
          value: "0.04em"
        },
        lineHeight: {
          value: "18px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "0px"
        },
        textTransform: {
          value: "uppercase"
        }
      },
      paragraph: {
        weight: {
          value: 400
        },
        size: {
          value: "14px"
        },
        letterSpacing: {
          value: "0em"
        },
        lineHeight: {
          value: "18px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "0px"
        }
      },
      caption: {
        weight: {
          value: 400
        },
        size: {
          value: "13px"
        },
        letterSpacing: {
          value: "0.02em"
        },
        lineHeight: {
          value: "18px"
        },
        marginTop: {
          value: "18px"
        },
        marginBottom: {
          value: "0px"
        }
      }
    }
  }
});

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });