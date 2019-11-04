import React, { useState, useEffect, memo } from 'react'
import reactCSS from 'reactcss'
import { emojiColors, sectionSlugToName } from '../../helpers/slack'

import SlackSelectorSectionEmoji from './SlackSelectorSectionEmoji'

export const SlackSelectorSection = ({
  slug,
  emojis,
  onSelect,
  translations,
}) => {
  const [items, setItems] = useState(null)
  const styles = reactCSS({
    'default': {
      section: {},
      emojis: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      title: {
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '16px',
        lineHeight: '1.5rem',
        margin: '0 6px',
      },
    },
  })
  useEffect(() => {
    setItems(
      <div style={ styles.section } id={ slug }>
        <div style={ styles.title }>
          { sectionSlugToName(slug, translations.sections) }
        </div>
        <div style={ styles.emojis }>
          { emojis.map((emoji, i) => {
            return (
              <SlackSelectorSectionEmoji
                key={ i + emoji }
                hoverColor={ emojiColors[i % emojiColors.length] }
                emoji={ emoji }
                onSelect={ onSelect }
              />
            )
          }) }
        </div>
      </div>,
    )
  }, [])

  if (!items) {
    return (
      <div style={ styles.section } id={ slug }>
        <div style={ styles.title }>
          { sectionSlugToName(slug, translations.sections) }
        </div>
        <div style={ styles.emojis }>
          { emojis.map((emoji, i) => {
            return (
              <SlackSelectorSectionEmoji
                key={ i + emoji }
                hoverColor={ emojiColors[i % emojiColors.length] }
                emoji={ emoji }
                onSelect={ onSelect }
              />
            )
          }) }
        </div>
      </div>
    )
  }

  return items
}

export default memo(SlackSelectorSection)
