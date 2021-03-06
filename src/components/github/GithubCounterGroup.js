/* eslint-disable no-shadow */

import React from 'react'
import reactCSS, { hover } from 'reactcss'
import { listOfNames } from '../../helpers/strings'

export const GithubCounterGroup = ({ hover, active, emoji, count, onSelect, names }) => {
  const styles = reactCSS({
    'default': {
      group: {
        width: '35px',
        height: '20px',
        padding: '8px 15px',
        borderRight: '1px solid #191f2c',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
        fontSize: '12px',
        color: '#3D76C2',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '3px 0 0 3px',
      },
      emoji: {
        fontSize: '21px',
        marginTop: '1px',
      },
      tooltip: {
        maxWidth: '250px',
        wordBreak: 'break-word',
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
        font: `normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '3px',
        padding: '5px 8px',
        position: 'absolute',
        top: '100%',
        left: '15px',
        marginTop: '4px',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out',
      },
    },
    'hover': {
      tooltip: {
        opacity: '1',
      },
    },
    'active': {
      group: {
        background: '#f2f8fa',
      },
    },
  }, { hover, active })

  const handleClick = () => {
    onSelect(emoji)
  }

  return (
    <div style={ styles.group } className="github-counter-group" onClick={ handleClick }>
      <span style={ styles.emoji } className="github-counter-group__emoji" >
        { emoji }
      </span>
      { count }
      <div style={ styles.tooltip } className="github-counter-group__tooltip">
      { listOfNames(names) }
      </div>
    </div>
  )
}

export default hover(GithubCounterGroup)
