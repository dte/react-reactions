'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorSectionEmoji = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-shadow */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorSectionEmoji = exports.SlackSelectorSectionEmoji = function SlackSelectorSectionEmoji(_ref) {
  var onSelect = _ref.onSelect,
      emoji = _ref.emoji,
      hoverColor = _ref.hoverColor;

  var handleClick = function handleClick() {
    onSelect(emoji);
  };

  return _react2.default.createElement(
    'div',
    {
      className: 'emoji',
      id: emoji,
      style: _extends({
        width: '36px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 1px 1px 0',
        borderRadius: '6px',
        cursor: 'pointer',

        transition: 'background .15s ease-out 50ms'
      }),
      onClick: handleClick
    },
    _react2.default.createElement(
      'style',
      null,
      '#' + emoji + ':hover{background: ' + hoverColor + '}  '
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          fontSize: '22px',
          width: '22px',
          height: '22px',
          lineHeight: '26px'
        }
      },
      emoji
    )
  );
};

exports.default = SlackSelectorSectionEmoji;