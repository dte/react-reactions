/* eslint-disable no-shadow */

import React from 'react'

export const SlackSelectorSectionEmoji = ({ onSelect, emoji, hoverColor }) => {
  const handleClick = () => {
    onSelect(emoji)
  }

  return (
    <div
      className="emoji"
      id={ emoji }
      style={{
        ...{
          width: '36px',
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 1px 1px 0',
          borderRadius: '6px',
          cursor: 'pointer',

          transition: 'background .15s ease-out 50ms',
        },
      }}
      onClick={ handleClick }
    >
      <style>{ `#${ emoji }:hover{background: ${ hoverColor }}  ` }</style>
      <div
        style={{
          fontSize: '22px',
          width: '22px',
          height: '22px',
          lineHeight: '26px',
        }}
      >
        { emoji }
      </div>
    </div>
  )
}

export default SlackSelectorSectionEmoji
