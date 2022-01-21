import React, { useEffect, useState } from 'react'

import { Children } from '../Components/Children'
import { SectionWIthChildren } from '../Components/SectionWIthChildren'
import fetchData from '../../CommunicationLayer/dataSrc'

import './App.css'

export const App = () => {
  const [dataState, setDataState] = useState([])

  useEffect(() => {
    fetchData().then((res: any[]) => {
      setDataState(res)
    })
  }, [])

  const childrenProps = { children: dataState, level: 0 }

  return (
    <div className='App'>
      <Children {...childrenProps} />
    </div>
  )
}
