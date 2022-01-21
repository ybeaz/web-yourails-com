import React, { useEffect, useState } from 'react'

import { Children } from './Children'

import './SectionWIthChildren.css'

export const SectionWIthChildren = props => {
  const { name, children, level } = props

  const [isVisible, setIsVisible] = useState(true)

  const childrenProps = { children, level: level + 1 }

  const handleEvents = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={`SectionWIthChildren SectionWIthChildren-level-${level}`}>
      <div className='SectionWIthChildren-name'>
        <div onClick={event => handleEvents()}>▼ </div>
        {name}
      </div>
      {children && children.length && isVisible && (
        <div>
          <Children {...childrenProps} />
        </div>
      )}
    </div>
  )
}
