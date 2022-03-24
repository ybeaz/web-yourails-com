import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootStore } from '../../Interfaces/IRootStore'

export const App = () => {
  const store = useSelector((store2: IRootStore) => store2)

  const [dataState, setDataState] = useState([])

  useEffect(() => {
    setDataState(['here', 'is', 'some', 'content'])
  }, [])

  console.info('App [16]', {
    store,
    'process.env': process?.env?.REACT_APP_GIT_SHA,
  })

  return (
    <div className='App'>
      <h1 className='_h1'>React Typescript Template</h1>
      <div>created 2021, updated 2022-03-24</div>

      <div>{dataState.join(' ')}</div>
    </div>
  )
}
