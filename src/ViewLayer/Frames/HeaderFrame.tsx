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
        <div className='_left'></div>
        <div className='_main'></div>
        <div className='_right'></div>
      </div>
      <ModalFrames />
    </div>
  )
}
