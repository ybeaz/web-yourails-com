import React from 'react'

import { SectionWIthChildren } from './SectionWIthChildren'

import './Children.css'

export const Children = props => {
  const { children } = props

  const sectionLi = children.map(item => {
    const sectionWIthChildrenProps = { ...item }

    return (
      <div className={`Children_li`} key={item.id}>
        {item.children && item.children.length ? (
          <SectionWIthChildren {...sectionWIthChildrenProps} />
        ) : (
          <div>• {item.name}</div>
        )}
      </div>
    )
  })

  return <div className={`Children_ul`}>{sectionLi}</div>
}
