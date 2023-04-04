import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
// import { LoaderOverlayYrl } from '../../YrlNativeViewLibrary/LoaderOverlayYrl'

import { RootStoreType } from '../../@types/RootStoreType'
import { ModalFrames } from '../Frames/ModalFrames'
interface HeaderFrameArgs {
  screenType?: string
  children: (ReactElement | null)[]
}

export const HeaderFrame: React.FunctionComponent<HeaderFrameArgs> = props => {
  const {} = props

  const {
    componentsState: { isLoaderOverlayVisible },
  } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    loaderOverlayUsertoProps: {
      isLoaderOverlayVisible,
    },
  }

  return (
    <div className={`HeaderFrame`}>
      <div className='_content'>
        <div className='_left'>{props.children[0]}</div>
        <div className='_main'>{props.children[1]}</div>
        <div className='_right'>{props.children[2]}</div>
      </div>
      <ModalFrames />
      {/* <LoaderOverlay {...propsOut.loaderOverlayUsertoProps} /> */}
    </div>
  )
}
