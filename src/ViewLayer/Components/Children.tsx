import React, { useEffect, useState } from 'react'

import { SectionWIthChildren } from './SectionWIthChildren'

import './Children.css'

export const Children = props => {
  const { children, level } = props

  const sectionLi = children.map(item => {
    const levelNext = level + 1
    const sectionWIthChildrenProps = { ...item, level: levelNext }

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

  return (
    <div className={`Children_ul Children_ul-level-${level}`}>{sectionLi}</div>
  )
}
