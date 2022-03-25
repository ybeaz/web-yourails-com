import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { ModalFrames } from '../Frames/ModalFrames'
interface HeaderFrameArgs {}

export const HeaderFrame: React.FunctionComponent<HeaderFrameArgs> = props => {
  const {} = props

  return (
    <div className={`HeaderFrame`}>
      <div className='_content'>
        <div className='__left'></div>
        <div className='__main'></div>
        <div className='__right'></div>
      </div>
      <ModalFrames />
    </div>
  )
}
