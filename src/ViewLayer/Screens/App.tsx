import React, { useEffect, useState } from 'react'

import { Children } from '../Components/Children'
import fetchData from '../../CommunicationLayer/dataSrc'

import './App.css'

export const App = () => {
  const [dataState, setDataState] = useState([])

  useEffect(() => {
    fetchData().then((res: any[]) => {
      setDataState(res)
    })
  }, [])

  const childrenProps = { children: dataState }

  return (
    <div className='App'>
      <h1>A dynamic tree component</h1>
      <Children {...childrenProps} />

      <div className='App_json_section'>
        <h2>The source json data</h2>
        <pre>{JSON.stringify(dataState, null, 2)}</pre>
      </div>

      <div className='App_notes'>
        Source: git@github.com:ybeaz/react-ui-template-2021.git branch B-003
      </div>
    </div>
  )
}
