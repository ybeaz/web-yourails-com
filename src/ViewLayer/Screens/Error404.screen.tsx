import React from 'react'

import './Error404.style.less'

export const Error404Screen: Function = (): JSX.Element => {
  return (
    <div className='Error404'>
      <div className=''>
        <div className=''>
          <div className='error-template'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className='error-actions'>
              <a href='/' className='btn btn-primary btn-lg'>
                <span className='glyphicon glyphicon-home' />
                Take Me Home
              </a>
              <a href='/' className='btn btn-default btn-lg'>
                <span className='glyphicon glyphicon-envelope' />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
