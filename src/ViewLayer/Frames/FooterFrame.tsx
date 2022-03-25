import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface FooterFrameArgs {
  children: React.ReactElement
}

export const FooterFrame: React.FunctionComponent<FooterFrameArgs> = (
  props: FooterFrameArgs
): ReactElement => {
  const gitData = {
    REACT_APP_GIT_BRANCH: process?.env?.REACT_APP_GIT_BRANCH || '',
    REACT_APP_GIT_SHA: process?.env?.REACT_APP_GIT_SHA || '',
    REACT_APP_GIT_COMMIT: process?.env?.REACT_APP_GIT_COMMIT || '',
  }

  return (
    <div className='FooterFrame'>
      <div className='_left'>
        {gitData.REACT_APP_GIT_BRANCH ? (
          <div>
            <div>
              <span>branch {gitData.REACT_APP_GIT_BRANCH} </span>
              <span>sha {gitData.REACT_APP_GIT_SHA}</span>
            </div>
            <div>{gitData.REACT_APP_GIT_COMMIT}</div>
          </div>
        ) : null}
      </div>
      <div className='_main'></div>
      <div className='_right'>{props.children}</div>
    </div>
  )
}
