'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorSection = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _slack = require('../../helpers/slack');

var _SlackSelectorSectionEmoji = require('./SlackSelectorSectionEmoji');

var _SlackSelectorSectionEmoji2 = _interopRequireDefault(_SlackSelectorSectionEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorSection = exports.SlackSelectorSection = function SlackSelectorSection(_ref) {
  var slug = _ref.slug,
      emojis = _ref.emojis,
      onSelect = _ref.onSelect,
      translations = _ref.translations;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var styles = (0, _reactcss2.default)({
    'default': {
      section: {},
      emojis: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      title: {
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '16px',
        lineHeight: '1.5rem',
        margin: '0 6px'
      }
    }
  });
  (0, _react.useEffect)(function () {
    setItems(_react2.default.createElement(
      'div',
      { style: styles.section, id: slug },
      _react2.default.createElement(
        'div',
        { style: styles.title },
        (0, _slack.sectionSlugToName)(slug, translations.sections)
      ),
      _react2.default.createElement(
        'div',
        { style: styles.emojis },
        emojis.map(function (emoji, i) {
          return _react2.default.createElement(_SlackSelectorSectionEmoji2.default, {
            key: i + emoji,
            hoverColor: _slack.emojiColors[i % _slack.emojiColors.length],
            emoji: emoji,
            onSelect: onSelect
          });
        })
      )
    ));
  }, []);

  if (!items) {
    return _react2.default.createElement(
      'div',
      { style: styles.section, id: slug },
      _react2.default.createElement(
        'div',
        { style: styles.title },
        (0, _slack.sectionSlugToName)(slug, translations.sections)
      ),
      _react2.default.createElement(
        'div',
        { style: styles.emojis },
        emojis.map(function (emoji, i) {
          return _react2.default.createElement(_SlackSelectorSectionEmoji2.default, {
            key: i + emoji,
            hoverColor: _slack.emojiColors[i % _slack.emojiColors.length],
            emoji: emoji,
            onSelect: onSelect
          });
        })
      )
    );
  }

  return items;
};

exports.default = (0, _react.memo)(SlackSelectorSection);