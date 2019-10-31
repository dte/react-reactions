import Reactfrom 'react'

import SlackSelectorCSS from './SlackSelectorCSS'
import SlackSelectorHeader from './SlackSelectorHeader'

import SlackSelectorFooter from './SlackSelectorFooter'

import SlackSelectorItems from './SlackSelectorItems'
import emoji from 'emoji-as-array'

export const SlackSelector = ({
  active,
  scrollHeight,
  frequent,
  removeEmojis,
  onSelect,
  translations,
  tabs,
}) => {
  return (
    <div
      style={{
        fontFamily:
          '"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif',
        width: '358px',
        color: '#555459',
        fontSize: '.95rem',
        background: '#f7f7f7',
        lineHeight: '1rem',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
        borderRadius: '6px',
        border: '1px solid rgba(0,0,0,.15)',
      }}
    >
      <SlackSelectorCSS translations={ translations } />
      <SlackSelectorHeader
        tabs={ tabs }
        active={ active }
        translations={ translations }
      />

      <SlackSelectorItems
        scrollHeight={ scrollHeight }
        removeEmojis={ removeEmojis }
        frequent={ frequent }
        onSelect={ onSelect }
        translations={ translations }
        items={ emoji }
      />

      <SlackSelectorFooter onSelect={ onSelect } translations={ translations } />
    </div>
  )
}

SlackSelector.defaultProps = {
  active: 'mine',
  scrollHeight: '270px',
  removeEmojis: [
    '🙂',
    '🙃',
    '☺️',
    '🤑',
    '🤓',
    '🤗',
    '🙄',
    '🤔',
    '🙁',
    '☹️',
    '🤐',
    '🤒',
    '🤕',
    '🤖',
  ],
  frequent: [
    '👍',
    '🐉',
    '🙌',
    '🗿',
    '😊',
    '🐬',
    '😹',
    '👻',
    '🚀',
    '🚁',
    '🏇',
    '🇨🇦',
  ],
  translations: {
    footer: 'Handy Reactions',
    sections: {
      'mine': 'Frequently Used',
      'people': 'People',
      'nature': 'Nature',
      'food-and-drink': 'Food & Drink',
      'activity': 'Activity',
      'travel-and-places': 'Travel & Places',
      'objects': 'Objects',
      'symbols': 'Symbols',
      'flags': 'Flags',
    },
  },
  tabs: [
    {
      icon: '',
      id: 'mine',
    },
    {
      icon: '',
      id: 'people',
    },
    {
      icon: '',
      id: 'nature',
    },
    {
      icon: '',
      id: 'food-and-drink',
    },
    {
      icon: '',
      id: 'activity',
    },
    {
      icon: '',
      id: 'travel-and-places',
    },
    {
      icon: '',
      id: 'objects',
    },
    {
      icon: '',
      id: 'symbols',
    },
    {
      icon: '',
      id: 'flags',
    },
  ],
}

export default SlackSelector
