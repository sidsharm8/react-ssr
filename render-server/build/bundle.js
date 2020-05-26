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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _characterspage = __webpack_require__(14);

var _characterspage2 = _interopRequireDefault(_characterspage);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = [_extends({}, _App2.default, {
  routes: [_extends({}, _characterspage2.default, {
    path: "/"
  })]
})];

exports.default = Routes;

/***/ }),
/* 5 */
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
/* 6 */
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
var setNextPage = function setNextPage(nextPage) {
  return {
    type: "SET_NEXT_PAGE",
    payload: nextPage
  };
};

var API_URL = "https://rickandmortyapi.com/api/character/";
var nonOtherSpecies = ["Human", "Mytholog"];
var nonOtherOrigins = ["Uknown", "Post-Apocalyptic Earth", "Nuptia 4"];

var fetchCharacters = function fetchCharacters() {
  var characterList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api(API_URL);

            case 2:
              res = _context.sent;

              dispatch(setCharacters(res.data.results || []));
              dispatch(setNextPage(res.data.info.next || ""));

            case 5:
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(31);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(39);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/*app.use("/api", proxy("http://react-ssr-api.herokuapp.com", {
	proxyReqOptDecorator(opts){
		opts.headers["x-forwarded-host"] = "localhost:3000";
		return opts;
	}
}));*/

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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(3);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(30);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(7);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _filterPanel = __webpack_require__(15);

var _filterPanel2 = _interopRequireDefault(_filterPanel);

var _selectedFilters = __webpack_require__(18);

var _selectedFilters2 = _interopRequireDefault(_selectedFilters);

var _searchByName = __webpack_require__(21);

var _searchByName2 = _interopRequireDefault(_searchByName);

var _characterList = __webpack_require__(23);

var _characterList2 = _interopRequireDefault(_characterList);

var _sort = __webpack_require__(26);

var _sort2 = _interopRequireDefault(_sort);

var _characters = __webpack_require__(6);

var _characters2 = _interopRequireDefault(_characters);

var _characterspage = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharactersPage = function CharactersPage() {
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
      _react2.default.createElement(_characterList2.default, null)
    )
  );
};

var loadData = function loadData(_ref) {
  var dispatch = _ref.dispatch;

  return dispatch((0, _characters2.default)());
};
exports.default = { component: CharactersPage, loadData: loadData };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _filterSection = __webpack_require__(16);

var _filterSection2 = _interopRequireDefault(_filterSection);

var _filterPanel = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "./filter-panel.styles.scss";
var filters = [{
  title: "species",
  list: ["Human", "Mytholog", "Other Species..."]
}, {
  title: "gender",
  list: ["Male", "Female"]
}, {
  title: "origin",
  list: ["Unknown", "Post-Apocalyptic Earth", "Nuptia 4", "Other Origins..."]
}];
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _addFilter2 = __webpack_require__(17);

var _addFilter3 = _interopRequireDefault(_addFilter2);

var _removeFilter2 = __webpack_require__(5);

var _removeFilter3 = _interopRequireDefault(_removeFilter2);

var _filterSection = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterSection = function FilterSection(_ref) {
  var list = _ref.list,
      title = _ref.title,
      addFilter = _ref.addFilter,
      removeFilter = _ref.removeFilter,
      selectedFilters = _ref.selectedFilters;

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        checked = _event$target.checked,
        value = _event$target.value;

    if (checked) {
      addFilter({ filterType: title, value: value });
    } else {
      removeFilter({ filterType: title, value: value });
    }
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
          { key: item },
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement("input", {
              type: "checkbox",
              value: item,
              checked: selectedFilters[title].indexOf(item) !== -1,
              onChange: function onChange(e) {
                handleChange(e);
              }
            }),
            item
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _removeFilter2 = __webpack_require__(5);

var _removeFilter3 = _interopRequireDefault(_removeFilter2);

var _selectedFilters = __webpack_require__(19);

var _selectedFilters2 = __webpack_require__(45);

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
            { key: filter },
            filter,
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedFiltersSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(20);

var selectedFilters = function selectedFilters(state) {
  return state.selectedFilters;
};

var selectedFiltersSelector = exports.selectedFiltersSelector = (0, _reselect.createSelector)([selectedFilters], function (selectedFilters) {
  return _extends({}, selectedFilters);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _searchText = __webpack_require__(22);

var _searchText2 = _interopRequireDefault(_searchText);

var _searchByName = __webpack_require__(44);

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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(24);

var _reactRedux = __webpack_require__(1);

var _characterCard = __webpack_require__(25);

var _characterCard2 = _interopRequireDefault(_characterCard);

var _characters = __webpack_require__(6);

var _characters2 = _interopRequireDefault(_characters);

var _characterList = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      this.debouncedFetchData();
      /* throttle scroll event for lazy loading list */
      this.throttledHandleOnScroll = (0, _lodash.throttle)(this.handleOnScroll.bind(this), 500);
      setTimeout(function () {
        window.addEventListener("scroll", _this2.throttledHandleOnScroll);
      }, 1000);
    }
  }, {
    key: "handleOnScroll",
    value: function handleOnScroll() {
      /* user has scrolled to the bottom of the page */
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        if (this.nextUrl) this.debouncedFetchData(this.nextUrl);
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
      var characterList = this.props.characterList;

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

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedFilters: state.selectedFilters,
    searchText: state.searchText,
    sortOrder: state.sortType,
    characterList: state.characters.list
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(characterList) {
      return dispatch((0, _characters2.default)(characterList));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CharacterList);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _characterCard = __webpack_require__(40);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _sort = __webpack_require__(27);

var _sort2 = _interopRequireDefault(_sort);

var _sort3 = __webpack_require__(46);

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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharactersPageContainer = undefined;

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharactersPageContainer = exports.CharactersPageContainer = _styledComponents2.default.div.withConfig({
  displayName: 'characterspagestyles__CharactersPageContainer',
  componentId: 'sc-100qkox-0'
})(['text-align:center;@media (min-width:1024px){display:flex;flex-wrap:wrap;.characters-filter-panel{width:20%;}.characters-selected-filters-list{width:80%;}.characters-search-sort{display:flex;justify-content:space-between;}}']);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "./App.css";


var App = function App(_ref) {
  var routes = _ref.route.routes;

  return _react2.default.createElement(
    "div",
    { className: "App" },
    "Hiiii this is app header",
    (0, _reactRouterConfig.renderRoutes)(routes)
  );
};

exports.default = { component: App };

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(32);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = __webpack_require__(33);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _axios = __webpack_require__(38);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  var middlewares = [_reduxThunk2.default.withExtraArgument(axiosInstance)];

  return (0, _redux.createStore)(_rootReducer2.default, _redux.applyMiddleware.apply(undefined, middlewares));
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _selectedFilters = __webpack_require__(34);

var _selectedFilters2 = _interopRequireDefault(_selectedFilters);

var _searchText = __webpack_require__(35);

var _searchText2 = _interopRequireDefault(_searchText);

var _sort = __webpack_require__(36);

var _sort2 = _interopRequireDefault(_sort);

var _characters = __webpack_require__(37);

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  selectedFilters: _selectedFilters2.default,
  searchText: _searchText2.default,
  sortType: _sort2.default,
  characters: _characters2.default
});

exports.default = rootReducer;

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  list: [],
  nextPage: ""
};

var charactersReducer = function charactersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case "SET_CHARACTERS":
      return _extends({}, state, {
        list: action.payload
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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardInfoColumn2 = exports.CardInfoColumn1 = exports.CardInfoRow = exports.CardInfo = exports.CardProfileMeta = exports.CardProfileNameText = exports.CardProfileName = exports.CardProfileImage = exports.CardProfile = exports.CardContainer = undefined;

var _styledComponents = __webpack_require__(7);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterListContainer = undefined;

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterListContainer = exports.CharacterListContainer = _styledComponents2.default.div.withConfig({
  displayName: "character-liststyles__CharacterListContainer",
  componentId: "jdho28-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding:0 15px;margin-top:15px;@media (min-width:1024px){justify-content:flex-start;}"]);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPanelHeader = exports.FilterPanelContainer = undefined;

var _styledComponents = __webpack_require__(7);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSectionListItem = exports.FilterSectionTitle = exports.FilterSectionList = exports.FilterSectionContainer = undefined;

var _styledComponents = __webpack_require__(7);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchLabel = exports.SearchContainer = undefined;

var _styledComponents = __webpack_require__(7);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveFilter = exports.SelectedFilterLabel = exports.SelectedFiltersChild = exports.SelectedFilterTitle = exports.SelectedFilterContainer = undefined;

var _styledComponents = __webpack_require__(7);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortLabel = exports.SortContainer = undefined;

var _styledComponents = __webpack_require__(7);

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

/***/ })
/******/ ]);