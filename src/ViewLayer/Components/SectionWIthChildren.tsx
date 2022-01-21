import React, { useState } from 'react'

import { Children } from './Children'

import './SectionWIthChildren.css'

export const SectionWIthChildren = props => {
  const { name, children } = props

  const [isVisible, setIsVisible] = useState(true)

  const childrenProps = { children }

  const handleEvents = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={`SectionWIthChildren`}>
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
