/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _characterspage = __webpack_require__(17);

var _characterspage2 = _interopRequireDefault(_characterspage);

var _signInAndSignUp = __webpack_require__(42);

var _signInAndSignUp2 = _interopRequireDefault(_signInAndSignUp);

var _homepage = __webpack_require__(63);

var _homepage2 = _interopRequireDefault(_homepage);

var _App = __webpack_require__(51);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = [_extends({}, _App2.default, {
  routes: [_extends({}, _homepage2.default, {
    exact: true,
    path: "/"
  }), _extends({}, _characterspage2.default, {
    path: "/characters"
  }), {
    component: _signInAndSignUp2.default,
    path: "/signin"
  }]
})];

exports.default = Routes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var removeFilter = function removeFilter(filter) {
    return {
        type: "REMOVE_FILTER",
        payload: filter
    };
};

exports.default = removeFilter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var setCharacters = function setCharacters(characters) {
  return {
    type: "SET_CHARACTERS",
    payload: characters
  };
};

var fetchCharactersStart = function fetchCharactersStart() {
  return {
    type: "FETCH_CHARACTERS_START"
  };
};

var setNextPage = exports.setNextPage = function setNextPage(nextPage) {
  return {
    type: "SET_NEXT_PAGE",
    payload: nextPage
  };
};

var fetchCharacters = function fetchCharacters() {
  var characterList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var _getState, nextPage, _getState2, selectedFilters, searchText, sortType, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), nextPage = _getState.characters.nextPage;

              if (!nextPage) {
                _context.next = 7;
                break;
              }

              _getState2 = getState(), selectedFilters = _getState2.selectedFilters, searchText = _getState2.searchText, sortType = _getState2.sortType;
              _context.next = 5;
              return api.post("/character?page=" + nextPage, { selectedFilters: selectedFilters, searchText: searchText, sortType: sortType });

            case 5:
              res = _context.sent;

              dispatch(setCharacters(res.data.results || []));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchCharacters;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _formInput = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormInput = function FormInput(_ref) {
  var handleChange = _ref.handleChange,
      label = _ref.label,
      otherProps = _objectWithoutProperties(_ref, ['handleChange', 'label']);

  return _react2.default.createElement(
    _formInput.FormInputContainer,
    null,
    _react2.default.createElement('input', _extends({ className: 'form-input', onChange: handleChange }, otherProps)),
    label ? _react2.default.createElement(
      'label',
      {
        className: (otherProps.value.length ? 'shrink' : '') + ' form-input-label'
      },
      label
    ) : null
  );
};

exports.default = FormInput;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _customButton = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CustomButton = function CustomButton(_ref) {
  var children = _ref.children,
      isGoogleSignIn = _ref.isGoogleSignIn,
      inverted = _ref.inverted,
      otherProps = _objectWithoutProperties(_ref, ['children', 'isGoogleSignIn', 'inverted']);

  return _react2.default.createElement(
    _customButton.CustomButtonContainer,
    _extends({
      className: (inverted ? 'inverted' : '') + ' ' + (isGoogleSignIn ? 'google-sign-in' : '') + ' custom-button'
    }, otherProps),
    children
  );
};

exports.default = CustomButton;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(15);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(53);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(60);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var API_SERVER = "http://localhost:5000";
var RENDER_SERVER = "http://localhost:3000";
app.use("/api", (0, _expressHttpProxy2.default)(API_SERVER, {
	proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
		opts.headers["x-forwarded-host"] = RENDER_SERVER;
		return opts;
	}
}));

app.use(_express2.default.static("public"));

app.get('*', function (req, res) {
	var store = (0, _createStore2.default)(req);

	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	}).map(function (promise) {
		if (promise) {
			return new Promise(function (resolve, reject) {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _renderer2.default)(req, store, context);

		if (context.notFound) {
			res.status(404);
		}

		res.send(content);
	});
});

app.listen(3000, function () {
	console.log("Render server listening on port 3000");
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(52);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {

	var sheet = new _styledComponents.ServerStyleSheet();
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: context },
			_react2.default.createElement(
				_styledComponents.StyleSheetManager,
				{ sheet: sheet.instance },
				_react2.default.createElement(
					"div",
					null,
					(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
				)
			)
		)
	));

	return "\n\t\t<html>\n\t\t\t<head>\n\t\t\t<link rel=\"stylesheet\" href=\"index.css\">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id=\"root\">" + content + "</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n\t\t\t\t</script>\n\t\t\t\t<script src=\"bundle.js\"></script>\n\t\t\t</body>\n\t\t</html>\n\t";
};
//import StyleContext from 'isomorphic-style-loader/StyleContext';

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _filterPanel = __webpack_require__(18);

var _filterPanel2 = _interopRequireDefault(_filterPanel);

var _selectedFilters = __webpack_require__(24);

var _selectedFilters2 = _interopRequireDefault(_selectedFilters);

var _searchByName = __webpack_require__(28);

var _searchByName2 = _interopRequireDefault(_searchByName);

var _characterList = __webpack_require__(31);

var _characterList2 = _interopRequireDefault(_characterList);

var _sort = __webpack_require__(38);

var _sort2 = _interopRequireDefault(_sort);

var _requireAuth = __webpack_require__(61);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _characters = __webpack_require__(7);

var _characters2 = _interopRequireDefault(_characters);

var _characterspage = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharactersPage = function (_React$Component) {
  _inherits(CharactersPage, _React$Component);

  function CharactersPage(props) {
    _classCallCheck(this, CharactersPage);

    return _possibleConstructorReturn(this, (CharactersPage.__proto__ || Object.getPrototypeOf(CharactersPage)).call(this, props));
  }

  _createClass(CharactersPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          fetchData = _props.fetchData,
          list = _props.list;

      if (!list.length) fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.props.loading;

      return _react2.default.createElement(
        _characterspage.CharactersPageContainer,
        null,
        _react2.default.createElement(
          "section",
          { className: "characters-filter-panel" },
          _react2.default.createElement(_filterPanel2.default, null)
        ),
        _react2.default.createElement(
          "section",
          { className: "characters-selected-filters-list" },
          _react2.default.createElement(_selectedFilters2.default, null),
          _react2.default.createElement(
            "div",
            { className: "characters-search-sort" },
            _react2.default.createElement(_searchByName2.default, null),
            _react2.default.createElement(_sort2.default, null)
          ),
          _react2.default.createElement(_characterList2.default, { isLoading: loading })
        )
      );
    }
  }]);

  return CharactersPage;
}(_react2.default.Component);

var loadData = function loadData(_ref) {
  var dispatch = _ref.dispatch;

  return dispatch((0, _characters2.default)());
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$characters = _ref2.characters,
      list = _ref2$characters.list,
      loading = _ref2$characters.loading;
  return { list: list, loading: loading };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData() {
      return dispatch((0, _characters2.default)());
    }
  };
};
exports.default = { component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _requireAuth2.default)(CharactersPage)), loadData: loadData };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _filterSection = __webpack_require__(19);

var _filterSection2 = _interopRequireDefault(_filterSection);

var _filterPanel = __webpack_require__(22);

var _data = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filters = [{
  title: "species",
  list: [{
    value: "Human",
    label: "Human"
  }, {
    value: "Mytholog",
    label: "Mytholog"
  }, {
    value: _data.OTHER_SPECIES,
    label: "Other Species..."
  }]
}, {
  title: "gender",
  list: [{
    value: "Male",
    label: "Male"
  }, {
    value: "Female",
    label: "Female"
  }]
}, {
  title: "origin",
  list: [{
    value: "unknown",
    label: "Unknown"
  }, {
    value: "Post-Apocalyptic Earth",
    label: "Post-Apocalyptic Earth"
  }, {
    value: _data.OTHER_ORIGINS,
    label: "Other Origins..."
  }]
}];
//import "./filter-panel.styles.scss";

var FilterPanel = function FilterPanel() {
  return _react2.default.createElement(
    _filterPanel.FilterPanelContainer,
    null,
    _react2.default.createElement(
      _filterPanel.FilterPanelHeader,
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Filters"
      )
    ),
    filters.map(function (_ref) {
      var title = _ref.title,
          list = _ref.list;
      return _react2.default.createElement(_filterSection2.default, { key: title, title: title, list: list });
    })
  );
};

exports.default = FilterPanel;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _addFilter2 = __webpack_require__(20);

var _addFilter3 = _interopRequireDefault(_addFilter2);

var _removeFilter2 = __webpack_require__(6);

var _removeFilter3 = _interopRequireDefault(_removeFilter2);

var _filterSection = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterSection = function FilterSection(_ref) {
  var list = _ref.list,
      title = _ref.title,
      addFilter = _ref.addFilter,
      removeFilter = _ref.removeFilter,
      selectedFilters = _ref.selectedFilters;

  var handleChange = function handleChange(event, value) {
    var checked = event.target.checked;

    if (checked) {
      addFilter({ filterType: title, value: value });
    } else {
      removeFilter({ filterType: title, value: value });
    }
  };
  var isChecked = function isChecked(list, _ref2) {
    var labelToFind = _ref2.label;

    return list.find(function (_ref3) {
      var label = _ref3.label;
      return label === labelToFind;
    });
  };
  return _react2.default.createElement(
    _filterSection.FilterSectionContainer,
    null,
    _react2.default.createElement(
      _filterSection.FilterSectionTitle,
      null,
      title
    ),
    _react2.default.createElement(
      _filterSection.FilterSectionList,
      null,
      list.map(function (item) {
        return _react2.default.createElement(
          _filterSection.FilterSectionListItem,
          { key: item.label },
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement("input", {
              type: "checkbox",
              value: item,
              checked: isChecked(selectedFilters[title], item),
              onChange: function onChange(e) {
                handleChange(e, item);
              }
            }),
            item.label
          )
        );
      })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedFilters: state.selectedFilters
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addFilter: function addFilter(filter) {
      return dispatch((0, _addFilter3.default)(_extends({}, filter)));
    },
    removeFilter: function removeFilter(filter) {
      return dispatch((0, _removeFilter3.default)(_extends({}, filter)));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FilterSection);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addFilter = function addFilter(filter) {
  return {
    type: "ADD_FILTER",
    payload: filter
  };
};

exports.default = addFilter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSectionListItem = exports.FilterSectionTitle = exports.FilterSectionList = exports.FilterSectionContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterSectionContainer = exports.FilterSectionContainer = _styledComponents2.default.div.withConfig({
  displayName: "filter-sectionstyles__FilterSectionContainer",
  componentId: "t8lpfg-0"
})(["display:flex;flex-direction:column;border:1px solid black;margin-bottom:20px;"]);

var FilterSectionList = exports.FilterSectionList = _styledComponents2.default.div.withConfig({
  displayName: "filter-sectionstyles__FilterSectionList",
  componentId: "t8lpfg-1"
})(["display:flex;text-transform:capitalize;flex-direction:column;"]);

var FilterSectionTitle = exports.FilterSectionTitle = _styledComponents2.default.h2.withConfig({
  displayName: "filter-sectionstyles__FilterSectionTitle",
  componentId: "t8lpfg-2"
})(["display:flex;text-transform:capitalize;"]);

var FilterSectionListItem = exports.FilterSectionListItem = _styledComponents2.default.div.withConfig({
  displayName: "filter-sectionstyles__FilterSectionListItem",
  componentId: "t8lpfg-3"
})(["display:flex;& label{text-align:left;}"]);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPanelHeader = exports.FilterPanelContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterPanelContainer = exports.FilterPanelContainer = _styledComponents2.default.div.withConfig({
  displayName: "filter-panelstyles__FilterPanelContainer",
  componentId: "sc-1qf8hvn-0"
})(["display:flex;flex-direction:column;padding:0 15px;"]);

var FilterPanelHeader = exports.FilterPanelHeader = _styledComponents2.default.div.withConfig({
  displayName: "filter-panelstyles__FilterPanelHeader",
  componentId: "sc-1qf8hvn-1"
})(["display:flex;"]);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OTHER_ORIGINS = exports.OTHER_ORIGINS = ['Earth (C-137)', 'Earth (Replacement Dimension)', 'Abadango', 'Signus 5 Expanse', 'Purge Planet', 'Venzenulon 7', 'Bepis 9', 'Earth (C-500A)', "Earth (Evil Rick's Target Dimension)", 'Nuptia 4', 'Fantasy World', 'Bird World', 'Gromflom Prime', "Rick's Battery Microverse", 'The Menagerie', 'Earth (K-83)', 'Hideout Planet', 'Cronenberg Earth', "Unity's Planet", "Giant's Town", 'Earth (Unknown dimension)', 'Anatomy Park', 'Earth (J19ζ7)', 'Roy: A Life Well Lived', 'Eric Stoltz Mask Earth', 'Glaagablaaga', 'Gazorpazorp', 'Resort Planet', 'Hamster in Butt World', 'Earth (Giant Telepathic Spiders Dimension)', 'Alphabetrium', 'Earth (5-126)', 'Krootabulon', 'Pluto', "Zeep Xanflorp's Miniverse", "Larva Alien's Planet", "Mr. Goldenfold's dream", 'Earth (K-22)', 'Mr. Meeseeks Box', 'Mega Gargantuan Kingdom', 'Gear World', 'Earth (D-99)', 'Earth (D716)', 'Earth (D716-B)', 'Earth (D716-C)', 'Earth (J-22)', 'Planet Squanch', 'Detoxifier', "Kyle's Teenyverse", 'Trunk World', 'Plopstar', 'Girvonesk', "Snuffles' Dream", 'Interdimensional Cable', 'Earth (Phone Dimension)', 'Earth (Pizza Dimension)', 'Greasy Grandma World', 'Earth (Chair Dimension)', 'Testicle Monster Dimension', 'Árboles Mentirosos', 'Citadel of Ricks', 'Earth (Fascist Dimension)', 'Earth (Fascist Shrimp Dimension)', 'Earth (Fascist Teddy Bear Dimension)', 'Earth (Wasp Dimension)', 'Midland Quasar', 'Globaflyn', 'Mount Olympus', 'Plitzville Montana', 'Earth (Tusk Dimension)', 'Gramuflack', 'Draygon', 'Snake Planet'];

var OTHER_SPECIES = exports.OTHER_SPECIES = ['Alien', 'Humanoid', 'unknown', 'Poopybutthole', 'Animal', 'Vampire', 'Robot', 'Cronenberg', 'Disease', 'Parasite'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _removeFilter2 = __webpack_require__(6);

var _removeFilter3 = _interopRequireDefault(_removeFilter2);

var _selectedFilters = __webpack_require__(25);

var _selectedFilters2 = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedFilters = function SelectedFilters(_ref) {
  var filters = _ref.filters,
      removeFilter = _ref.removeFilter;

  var filterTypes = Object.keys(filters);
  return _react2.default.createElement(
    _selectedFilters2.SelectedFilterContainer,
    null,
    _react2.default.createElement(
      _selectedFilters2.SelectedFilterTitle,
      null,
      "Selected Filters"
    ),
    _react2.default.createElement(
      _selectedFilters2.SelectedFiltersChild,
      null,
      filters && filterTypes.map(function (filterType) {
        return filters[filterType].map(function (filter) {
          return _react2.default.createElement(
            _selectedFilters2.SelectedFilterLabel,
            { key: filter.label },
            filter.label,
            " ",
            _react2.default.createElement(_selectedFilters2.RemoveFilter, {
              onClick: function onClick() {
                removeFilter({ filterType: filterType, value: filter });
              }
            })
          );
        });
      })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    filters: (0, _selectedFilters.selectedFiltersSelector)(state)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeFilter: function removeFilter(filter) {
      return dispatch((0, _removeFilter3.default)(_extends({}, filter)));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectedFilters);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedFiltersSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(26);

var selectedFilters = function selectedFilters(state) {
  return state.selectedFilters;
};

var selectedFiltersSelector = exports.selectedFiltersSelector = (0, _reselect.createSelector)([selectedFilters], function (selectedFilters) {
  return _extends({}, selectedFilters);
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveFilter = exports.SelectedFilterLabel = exports.SelectedFiltersChild = exports.SelectedFilterTitle = exports.SelectedFilterContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedFilterContainer = exports.SelectedFilterContainer = _styledComponents2.default.label.withConfig({
  displayName: "selected-filtersstyles__SelectedFilterContainer",
  componentId: "sc-14psw5g-0"
})(["display:flex;padding:0 15px;flex-direction:column;margin-bottom:20px;"]);

var SelectedFilterTitle = exports.SelectedFilterTitle = _styledComponents2.default.h2.withConfig({
  displayName: "selected-filtersstyles__SelectedFilterTitle",
  componentId: "sc-14psw5g-1"
})(["align-self:flex-start;"]);

var SelectedFiltersChild = exports.SelectedFiltersChild = _styledComponents2.default.div.withConfig({
  displayName: "selected-filtersstyles__SelectedFiltersChild",
  componentId: "sc-14psw5g-2"
})(["display:flex;flex-wrap:wrap;"]);

var SelectedFilterLabel = exports.SelectedFilterLabel = _styledComponents2.default.div.withConfig({
  displayName: "selected-filtersstyles__SelectedFilterLabel",
  componentId: "sc-14psw5g-3"
})(["height:30px;border-radius:10%;padding:5px;background-color:#9e9999;color:white;margin-right:7px;"]);

var RemoveFilter = exports.RemoveFilter = _styledComponents2.default.span.withConfig({
  displayName: "selected-filtersstyles__RemoveFilter",
  componentId: "sc-14psw5g-4"
})(["&::before{content:\"x\";margin-left:5px;cursor:pointer;}"]);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _searchText = __webpack_require__(29);

var _searchText2 = _interopRequireDefault(_searchText);

var _searchByName = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchByName = function SearchByName(_ref) {
  var setSearchText = _ref.setSearchText;

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    setSearchText(value);
  };
  return _react2.default.createElement(
    _searchByName.SearchContainer,
    null,
    _react2.default.createElement(
      _searchByName.SearchLabel,
      null,
      "Search by Name"
    ),
    _react2.default.createElement("input", { type: "text", onChange: handleChange })
  );
};
//import "./search-by-name.styles.scss";


var mapDispactchToProps = function mapDispactchToProps(dispatch) {
  return {
    setSearchText: function setSearchText(search) {
      return dispatch((0, _searchText2.default)(search));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispactchToProps)(SearchByName);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setSearchText = function setSearchText(search) {
  return {
    type: "SET_SEARCH_TEXT",
    payload: search
  };
};

exports.default = setSearchText;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchLabel = exports.SearchContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchContainer = exports.SearchContainer = _styledComponents2.default.label.withConfig({
  displayName: "search-by-namestyles__SearchContainer",
  componentId: "sc-1ivk843-0"
})(["display:flex;flex-direction:column;padding:0 15px;@media (min-width:1024px){width:30%;}& input{height:25px;}"]);

var SearchLabel = exports.SearchLabel = _styledComponents2.default.span.withConfig({
  displayName: "search-by-namestyles__SearchLabel",
  componentId: "sc-1ivk843-1"
})(["text-align:left;font-weight:500;margin-bottom:10px;"]);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(32);

var _reactRedux = __webpack_require__(2);

var _characterCard = __webpack_require__(33);

var _characterCard2 = _interopRequireDefault(_characterCard);

var _characters = __webpack_require__(7);

var _characters2 = _interopRequireDefault(_characters);

var _characterList = __webpack_require__(35);

var _withspinner = __webpack_require__(36);

var _withspinner2 = _interopRequireDefault(_withspinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkIfSelectedFiltersChanged = function checkIfSelectedFiltersChanged(oldFilters, newFilters) {
  var len1 = 0,
      len2 = 0;
  Object.keys(oldFilters).map(function (key) {
    return len1 += oldFilters[key].length;
  });
  Object.keys(newFilters).map(function (key) {
    return len2 += newFilters[key].length;
  });
  return len1 !== len2;
};

var CharacterList = function (_React$Component) {
  _inherits(CharacterList, _React$Component);

  function CharacterList(props) {
    _classCallCheck(this, CharacterList);

    return _possibleConstructorReturn(this, (CharacterList.__proto__ || Object.getPrototypeOf(CharacterList)).call(this, props));
  }

  _createClass(CharacterList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      /* debounce this function to prevent unnecessary function calls on search and filter change */
      var fetchData = this.props.fetchData;

      this.debouncedFetchData = (0, _lodash.debounce)(fetchData.bind(this), 500);
      /* throttle scroll event for lazy loading list */
      this.throttledHandleOnScroll = (0, _lodash.throttle)(this.handleOnScroll.bind(this), 500);
      setTimeout(function () {
        window.addEventListener("scroll", _this2.throttledHandleOnScroll);
      }, 1000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var selectedFilters = _ref.selectedFilters,
          searchText = _ref.searchText,
          sortOrder = _ref.sortOrder;

      // Typical usage (don't forget to compare props):
      var _props = this.props,
          currentSelectedFilters = _props.selectedFilters,
          currentSearchText = _props.searchText,
          currentSortOrder = _props.sortOrder;

      if (currentSearchText !== searchText || currentSortOrder !== sortOrder || checkIfSelectedFiltersChanged(selectedFilters, currentSelectedFilters)) {
        this.debouncedFetchData();
      }
    }
  }, {
    key: "handleOnScroll",
    value: function handleOnScroll() {
      /* user has scrolled to the bottom of the page */
      if (document.body.scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        var _props2 = this.props,
            fetchData = _props2.fetchData,
            _setNextPage = _props2.setNextPage,
            nextPage = _props2.nextPage;

        _setNextPage(nextPage + 1);
        fetchData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.throttledHandleOnScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          characterList = _props3.characterList,
          loading = _props3.loading;

      return _react2.default.createElement(
        _characterList.CharacterListContainer,
        null,
        characterList ? characterList.map(function (character) {
          return _react2.default.createElement(_characterCard2.default, { key: character.id, character: character });
        }) : ""
      );
    }
  }]);

  return CharacterList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedFilters = _ref2.selectedFilters,
      searchText = _ref2.searchText,
      sortType = _ref2.sortType,
      _ref2$characters = _ref2.characters,
      list = _ref2$characters.list,
      nextPage = _ref2$characters.nextPage;
  return {
    selectedFilters: selectedFilters,
    searchText: searchText,
    sortOrder: sortType,
    characterList: list,
    nextPage: nextPage
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData() {
      return dispatch((0, _characters2.default)());
    },
    setNextPage: function setNextPage(nextPage) {
      return dispatch((0, _characters.setNextPage)(nextPage));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withspinner2.default)(CharacterList));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _characterCard = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterCard = function CharacterCard(_ref) {
  var character = _ref.character;

  var diffYears = function diffYears(date) {
    return Math.abs(new Date().getUTCFullYear() - new Date(date).getUTCFullYear());
  };
  return _react2.default.createElement(
    _characterCard.CardContainer,
    null,
    _react2.default.createElement(
      _characterCard.CardProfile,
      null,
      _react2.default.createElement(_characterCard.CardProfileImage, { src: character.image, alt: "[TODO ALT TEXT]" }),
      _react2.default.createElement(
        _characterCard.CardProfileName,
        null,
        _react2.default.createElement(
          _characterCard.CardProfileNameText,
          null,
          character.name
        ),
        _react2.default.createElement(
          _characterCard.CardProfileMeta,
          null,
          _react2.default.createElement(
            "span",
            null,
            "id: ",
            character.id,
            " - "
          ),
          _react2.default.createElement(
            "span",
            null,
            "created ",
            diffYears(character.created),
            " years ago"
          )
        )
      )
    ),
    _react2.default.createElement(
      _characterCard.CardInfo,
      null,
      _react2.default.createElement(
        _characterCard.CardInfoRow,
        null,
        _react2.default.createElement(
          _characterCard.CardInfoColumn1,
          null,
          "Status"
        ),
        _react2.default.createElement(
          _characterCard.CardInfoColumn2,
          null,
          character.status
        )
      ),
      _react2.default.createElement(
        _characterCard.CardInfoRow,
        null,
        _react2.default.createElement(
          _characterCard.CardInfoColumn1,
          null,
          "Species"
        ),
        _react2.default.createElement(
          _characterCard.CardInfoColumn2,
          null,
          character.species
        )
      ),
      _react2.default.createElement(
        _characterCard.CardInfoRow,
        null,
        _react2.default.createElement(
          _characterCard.CardInfoColumn1,
          null,
          "Gender"
        ),
        _react2.default.createElement(
          _characterCard.CardInfoColumn2,
          null,
          character.gender
        )
      ),
      _react2.default.createElement(
        _characterCard.CardInfoRow,
        null,
        _react2.default.createElement(
          _characterCard.CardInfoColumn1,
          null,
          "Origin"
        ),
        _react2.default.createElement(
          _characterCard.CardInfoColumn2,
          null,
          character.origin.name
        )
      ),
      _react2.default.createElement(
        _characterCard.CardInfoRow,
        null,
        _react2.default.createElement(
          _characterCard.CardInfoColumn1,
          null,
          "Last Location"
        ),
        _react2.default.createElement(
          _characterCard.CardInfoColumn2,
          null,
          character.location.name
        )
      )
    )
  );
};
//import "./character-card.styles.scss";
exports.default = CharacterCard;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardInfoColumn2 = exports.CardInfoColumn1 = exports.CardInfoRow = exports.CardInfo = exports.CardProfileMeta = exports.CardProfileNameText = exports.CardProfileName = exports.CardProfileImage = exports.CardProfile = exports.CardContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardContainer = exports.CardContainer = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardContainer',
  componentId: 'sc-1twqayx-0'
})(['display:flex;flex-direction:column;padding:10px 10px;background-color:#25252e;width:44%;@media (min-width:1024px){width:22%;}']);

var CardProfile = exports.CardProfile = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardProfile',
  componentId: 'sc-1twqayx-1'
})(['position:relative;height:200px;']);

var CardProfileImage = exports.CardProfileImage = _styledComponents2.default.img.withConfig({
  displayName: 'character-cardstyles__CardProfileImage',
  componentId: 'sc-1twqayx-2'
})(['width:100%;height:100%;']);

var CardProfileName = exports.CardProfileName = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardProfileName',
  componentId: 'sc-1twqayx-3'
})(['position:absolute;display:flex;flex-direction:column;bottom:0px;width:100%;color:white;background-color:black;opacity:0.6;height:auto;']);

var CardProfileNameText = exports.CardProfileNameText = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardProfileNameText',
  componentId: 'sc-1twqayx-4'
})(['font-size:large;padding:5px;align-self:flex-start;']);

var CardProfileMeta = exports.CardProfileMeta = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardProfileMeta',
  componentId: 'sc-1twqayx-5'
})(['align-self:flex-start;padding:0 5px;font-size:12px;']);

var CardInfo = exports.CardInfo = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardInfo',
  componentId: 'sc-1twqayx-6'
})(['display:flex;flex-direction:column;padding:15px 15px;background-color:#353030;']);

var CardInfoRow = exports.CardInfoRow = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardInfoRow',
  componentId: 'sc-1twqayx-7'
})(['display:flex;padding:10px 0;justify-content:space-between;height:15px;border-bottom:1px solid rgb(68,68,68);']);

var CardInfoColumn1 = exports.CardInfoColumn1 = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardInfoColumn1',
  componentId: 'sc-1twqayx-8'
})(['color:lightgray;text-transform:uppercase;font-size:10px;text-align:left;']);

var CardInfoColumn2 = exports.CardInfoColumn2 = _styledComponents2.default.div.withConfig({
  displayName: 'character-cardstyles__CardInfoColumn2',
  componentId: 'sc-1twqayx-9'
})(['color:orange;font-size:10px;text-align:right;']);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterListContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterListContainer = exports.CharacterListContainer = _styledComponents2.default.div.withConfig({
  displayName: "character-liststyles__CharacterListContainer",
  componentId: "jdho28-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding:0 15px;margin-top:15px;@media (min-width:1024px){justify-content:flex-start;}"]);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _WithSpinner = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WithSpinner = function WithSpinner(WrappedComponent) {
  return function (_ref) {
    var isLoading = _ref.isLoading,
        otherProps = _objectWithoutProperties(_ref, ["isLoading"]);

    if (isLoading) {
      return _react2.default.createElement(
        _WithSpinner.SpinnerOverlay,
        null,
        _react2.default.createElement(_WithSpinner.SpinnerContainer, null)
      );
    } else {
      return _react2.default.createElement(WrappedComponent, otherProps);
    }
  };
};

exports.default = WithSpinner;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerContainer = exports.SpinnerOverlay = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerOverlay = exports.SpinnerOverlay = _styledComponents2.default.div.withConfig({
  displayName: "WithSpinnerstyles__SpinnerOverlay",
  componentId: "sc-3ktm6k-0"
})(["width:100%;height:100%;position:relative;"]);
var SpinnerContainer = exports.SpinnerContainer = _styledComponents2.default.div.withConfig({
  displayName: "WithSpinnerstyles__SpinnerContainer",
  componentId: "sc-3ktm6k-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;width:10em;height:10em;&:after{border-radius:50%;width:10em;height:10em;}margin:60px auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(0,0,0,0.2);border-right:1.1em solid rgba(0,0,0,0.2);border-bottom:1.1em solid rgba(0,0,0,0.2);border-left:1.1em solid #000000;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear;@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"]);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _sort = __webpack_require__(39);

var _sort2 = _interopRequireDefault(_sort);

var _sort3 = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sort = function Sort(_ref) {
  var sortType = _ref.sortType,
      setSortType = _ref.setSortType;

  return _react2.default.createElement(
    _sort3.SortContainer,
    null,
    _react2.default.createElement(
      _sort3.SortLabel,
      null,
      _react2.default.createElement(
        "select",
        {
          value: sortType,
          onChange: function onChange(event) {
            setSortType(event.target.value);
          }
        },
        _react2.default.createElement(
          "option",
          { value: "" },
          "Sort By ID"
        ),
        _react2.default.createElement(
          "option",
          { value: "ascending" },
          "Ascending"
        ),
        _react2.default.createElement(
          "option",
          { value: "descending" },
          "Descending"
        )
      )
    )
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSortType: function setSortType(sortType) {
      return dispatch((0, _sort2.default)(sortType));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sortType: state.sortType
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Sort);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setSortType = function setSortType(sortType) {
  return {
    type: "SET_SORT_TYPE",
    payload: sortType
  };
};

exports.default = setSortType;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortLabel = exports.SortContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortContainer = exports.SortContainer = _styledComponents2.default.div.withConfig({
  displayName: "sortstyles__SortContainer",
  componentId: "sc-18pn1j9-0"
})(["display:flex;margin-top:15px;padding:0 15px;@media (min-width:1024px){width:25%;align-self:flex-end;}"]);

var SortLabel = exports.SortLabel = _styledComponents2.default.label.withConfig({
  displayName: "sortstyles__SortLabel",
  componentId: "sc-18pn1j9-1"
})(["width:100%;& select{width:100%;}"]);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharactersPageContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharactersPageContainer = exports.CharactersPageContainer = _styledComponents2.default.div.withConfig({
  displayName: 'characterspagestyles__CharactersPageContainer',
  componentId: 'sc-100qkox-0'
})(['text-align:center;@media (min-width:1024px){display:flex;flex-wrap:wrap;.characters-filter-panel{width:20%;}.characters-selected-filters-list{width:80%;}.characters-search-sort{display:flex;justify-content:space-between;}}']);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _signIn = __webpack_require__(43);

var _signIn2 = _interopRequireDefault(_signIn);

var _signUp = __webpack_require__(48);

var _signUp2 = _interopRequireDefault(_signUp);

var _signInAndSignUp = __webpack_require__(50);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInAndSignUpPage = function SignInAndSignUpPage(_ref) {
  var auth = _ref.auth;

  return auth.current_user ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/characters' }) : _react2.default.createElement(
    _signInAndSignUp.SignInAndSignUpContainer,
    null,
    _react2.default.createElement(_signIn2.default, null),
    _react2.default.createElement(_signUp2.default, null)
  );
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignInAndSignUpPage);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _formInput = __webpack_require__(8);

var _formInput2 = _interopRequireDefault(_formInput);

var _customButton = __webpack_require__(9);

var _customButton2 = _interopRequireDefault(_customButton);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

var _user = __webpack_require__(46);

var _user2 = _interopRequireDefault(_user);

var _signIn = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SignIn, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _state, email, password, fetchCurrentUser, axiosInstance, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _state = this.state, email = _state.email, password = _state.password;
                fetchCurrentUser = this.props.fetchCurrentUser;
                axiosInstance = _axios2.default.create({
                  withCredentials: true,
                  baseURL: "/api"
                });
                _context.next = 6;
                return axiosInstance.post("/auth/login", { email: email, password: password });

              case 6:
                res = _context.sent;

                debugger;
                fetchCurrentUser();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          value = _event$target.value,
          name = _event$target.name;


      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _signIn.SignInContainer,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'I already have an account'
        ),
        _react2.default.createElement(
          'span',
          null,
          'Sign in with your email and password'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(_formInput2.default, {
            name: 'email',
            type: 'email',
            handleChange: this.handleChange,
            value: this.state.email,
            label: 'email',
            required: true
          }),
          _react2.default.createElement(_formInput2.default, {
            name: 'password',
            type: 'password',
            value: this.state.password,
            handleChange: this.handleChange,
            label: 'password',
            required: true
          }),
          _react2.default.createElement(
            'div',
            { className: 'buttons' },
            _react2.default.createElement(
              _customButton2.default,
              { type: 'submit' },
              ' Sign in '
            )
          )
        )
      );
    }
  }]);

  return SignIn;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      return dispatch((0, _user2.default)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignIn);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInputContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputContainer = exports.FormInputContainer = _styledComponents2.default.div.withConfig({
  displayName: "form-inputstyles__FormInputContainer",
  componentId: "sc-1bz3qox-0"
})(["position:relative;margin:45px 0;.form-input{background:none;background-color:white;color:grey;font-size:18px;padding:10px 10px 10px 5px;display:block;width:100%;border:none;border-radius:0;border-bottom:1px solid grey;margin:25px 0;&:focus{outline:none;}&:focus ~ .form-input-label{top:-14px;font-size:12px;color:black;}}input[type='password']{letter-spacing:0.3em;}.form-input-label{color:grey;font-size:16px;font-weight:normal;position:absolute;pointer-events:none;left:5px;top:10px;transition:300ms ease all &.shrink{top:-14px;font-size:12px;color:black;}}"]);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButtonContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyles = (0, _styledComponents.css)(["background-color:black;color:white;"]);

var googleSignInStyles = (0, _styledComponents.css)(["background-color:#4285f4;color:white;&:hover{background-color:#357ae8;border:none;}"]);
var invertedStyles = (0, _styledComponents.css)(["background-color:white;color:black;border:1px solid black;&:hover{background-color:black;color:white;border:none;}"]);
var getButtonStyles = function getButtonStyles(props) {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedStyles : buttonStyles;
};
var CustomButtonContainer = exports.CustomButtonContainer = _styledComponents2.default.button.withConfig({
  displayName: "custom-buttonstyles__CustomButtonContainer",
  componentId: "snjbl0-0"
})(["min-width:165px;width:auto;height:50px;letter-spacing:0.5px;line-height:50px;padding:0 35px 0 35px;font-size:15px;text-transform:uppercase;font-family:\"Open Sans Condensed\";font-weight:bolder;border:none;cursor:pointer;display:flex;justify-content:center;&:hover{background-color:white;color:black;border:1px solid black;}", ""], getButtonStyles);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var setCurrentUserSuccess = function setCurrentUserSuccess(user) {
  return {
    type: "SET_CURRENT_USER_SUCCESS",
    payload: user
  };
};
var setCurrentUserFail = function setCurrentUserFail() {
  return {
    type: "SET_CURRENT_USER_FAIL"
  };
};
var setCurrentUserStart = function setCurrentUserStart() {
  return {
    type: "SET_CURRENT_USER_START"
  };
};

var fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/auth/current_user");

            case 2:
              res = _context.sent;

              if (res.data.id) {
                dispatch(setCurrentUserSuccess(res.data));
              } else {
                dispatch(setCurrentUserFail());
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchCurrentUser;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInContainer = exports.SignInContainer = _styledComponents2.default.div.withConfig({
  displayName: "sign-instyles__SignInContainer",
  componentId: "ci88m6-0"
})(["width:380px;display:flex;flex-direction:column;.title{margin:10px 0;}.buttons{display:flex;justify-content:space-between;}"]);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _formInput = __webpack_require__(8);

var _formInput2 = _interopRequireDefault(_formInput);

var _customButton = __webpack_require__(9);

var _customButton2 = _interopRequireDefault(_customButton);

var _signUp = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

    _this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SignUp, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _state, displayName, email, password, confirmPassword;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _state = this.state, displayName = _state.displayName, email = _state.email, password = _state.password, confirmPassword = _state.confirmPassword;

                if (!(password !== confirmPassword)) {
                  _context.next = 5;
                  break;
                }

                alert("passwords don't match");
                return _context.abrupt('return');

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          displayName = _state2.displayName,
          email = _state2.email,
          password = _state2.password,
          confirmPassword = _state2.confirmPassword;

      return _react2.default.createElement(
        _signUp.SignUpContainer,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'title' },
          'I do not have a account'
        ),
        _react2.default.createElement(
          'span',
          null,
          'Sign up with your email and password'
        ),
        _react2.default.createElement(
          'form',
          { className: 'sign-up-form', onSubmit: this.handleSubmit },
          _react2.default.createElement(_formInput2.default, {
            type: 'text',
            name: 'displayName',
            value: displayName,
            onChange: this.handleChange,
            label: 'Display Name',
            required: true
          }),
          _react2.default.createElement(_formInput2.default, {
            type: 'email',
            name: 'email',
            value: email,
            onChange: this.handleChange,
            label: 'Email',
            required: true
          }),
          _react2.default.createElement(_formInput2.default, {
            type: 'password',
            name: 'password',
            value: password,
            onChange: this.handleChange,
            label: 'Password',
            required: true
          }),
          _react2.default.createElement(_formInput2.default, {
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: this.handleChange,
            label: 'Confirm Password',
            required: true
          }),
          _react2.default.createElement(
            _customButton2.default,
            { type: 'submit' },
            'SIGN UP'
          )
        )
      );
    }
  }]);

  return SignUp;
}(_react2.default.Component);

exports.default = SignUp;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpContainer = exports.SignUpContainer = _styledComponents2.default.div.withConfig({
  displayName: "sign-upstyles__SignUpContainer",
  componentId: "sc-1k15gtq-0"
})(["display:flex;flex-direction:column;width:380px;.title{margin:10px 0;}"]);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInAndSignUpContainer = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInAndSignUpContainer = exports.SignInAndSignUpContainer = _styledComponents2.default.div.withConfig({
  displayName: "sign-in-and-sign-upstyles__SignInAndSignUpContainer",
  componentId: "g00k4n-0"
})(["width:850px;display:flex;justify-content:space-between;margin:30px auto;"]);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _user = __webpack_require__(46);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var routes = _ref.route.routes;

  return _react2.default.createElement(
    "div",
    { className: "App" },
    (0, _reactRouterConfig.renderRoutes)(routes)
  );
};

var loadData = function loadData(_ref2) {
  var dispatch = _ref2.dispatch;

  return dispatch((0, _user2.default)());
};

exports.default = { component: App, loadData: loadData };

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(54);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = __webpack_require__(55);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_SERVER = "http://localhost:5000";

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: API_SERVER,
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  var middlewares = [_reduxThunk2.default.withExtraArgument(axiosInstance)];

  return (0, _redux.createStore)(_rootReducer2.default, _redux.applyMiddleware.apply(undefined, middlewares));
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _selectedFilters = __webpack_require__(56);

var _selectedFilters2 = _interopRequireDefault(_selectedFilters);

var _searchText = __webpack_require__(57);

var _searchText2 = _interopRequireDefault(_searchText);

var _sort = __webpack_require__(58);

var _sort2 = _interopRequireDefault(_sort);

var _characters = __webpack_require__(59);

var _characters2 = _interopRequireDefault(_characters);

var _user = __webpack_require__(62);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  selectedFilters: _selectedFilters2.default,
  searchText: _searchText2.default,
  sortType: _sort2.default,
  characters: _characters2.default,
  auth: _user2.default
});

exports.default = rootReducer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  species: [],
  gender: [],
  origin: []
};
var selectedFiltersReducer = function selectedFiltersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "ADD_FILTER":
      return _extends({}, state, _defineProperty({}, action.payload.filterType, state[action.payload.filterType].concat([action.payload.value])));
    case "REMOVE_FILTER":
      return _extends({}, state, _defineProperty({}, action.payload.filterType, state[action.payload.filterType].filter(function (value) {
        return value !== action.payload.value;
      })));
    default:
      return state;
  }
};

exports.default = selectedFiltersReducer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = "";
var searchTextReducer = function searchTextReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.payload;
    default:
      return state;
  }
};

exports.default = searchTextReducer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = "";

var sortReducer = function sortReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "SET_SORT_TYPE":
      return action.payload;
    default:
      return state;
  }
};

exports.default = sortReducer;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  list: [],
  nextPage: 1,
  loading: false
};

var charactersReducer = function charactersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "FETCH_CHARACTERS_START":
      return _extends({}, state, {
        loading: true
      });
    case "SET_CHARACTERS":
      return _extends({}, state, {
        list: action.payload,
        loading: false
      });
    case "SET_NEXT_PAGE":
      return _extends({}, state, {
        nextPage: action.payload
      });
    default:
      return state;
  }
};

exports.default = charactersReducer;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (WrappedComponent) {
  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return { auth: auth };
  };
  var RequireAuth = function RequireAuth(_ref2) {
    var auth = _ref2.auth,
        otherProps = _objectWithoutProperties(_ref2, ['auth']);

    if (auth.current_user) {
      return _react2.default.createElement(WrappedComponent, otherProps);
    } else {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });
    }
  };

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  current_user: null
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "SET_CURRENT_USER_FAIL":
      return _extends({}, state, {
        current_user: null
      });
    case "SET_CURRENT_USER_SUCCESS":
      return _extends({}, state, {
        current_user: action.payload
      });
    default:
      return state;
  }
};

exports.default = userReducer;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
  var auth = _ref.auth;

  return _react2.default.createElement(
    "div",
    { className: "center-align" },
    _react2.default.createElement(
      "h3",
      null,
      "Rick and Morty App with React SSR"
    ),
    auth.current_user ? _react2.default.createElement(
      "div",
      null,
      "Go to ",
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/characters" },
        "Characters Page"
      )
    ) : _react2.default.createElement(
      "div",
      null,
      "Go to ",
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/signin" },
        "Sign In Page"
      )
    )
  );
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return { auth: auth };
};
exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps)(Home)
};

/***/ })
/******/ ]);