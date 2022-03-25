import React, { ReactElement } from 'react'

export const Error404Body: React.FunctionComponent = (): ReactElement => {
  return (
    <div className='Error404Body'>
      <div className='_content'>
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div className=''>
          Sorry, an error has occured, Requested page not found!
        </div>
        <div className='_actions'>
          <a href='/' className=''>
            <span className='' />
            Take Me Home
          </a>
          <a href='/' className=''>
            <span className='' />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
