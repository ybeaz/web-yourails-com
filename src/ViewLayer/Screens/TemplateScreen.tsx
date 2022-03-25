import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootStore } from '../../Interfaces/IRootStore'
import { config } from 'dotenv'
import { cwd } from 'process'
import { resolve } from 'path'
import { Helmet, HelmetProvider } from 'react-helmet-async'

config({
  path: resolve(cwd(), `.env.${process.env.NODE_ENV}`),
})

interface IAppProps {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export const TemplateScreen: React.FunctionComponent<IAppProps> = (
  props: IAppProps
) => {
  const store = useSelector((store2: IRootStore) => store2)

  const {
    globalVars: { language },
  } = store

  const [dataState, setDataState] = useState([])

  const gitData = {
    REACT_APP_GIT_BRANCH: process?.env?.REACT_APP_GIT_BRANCH || '',
    REACT_APP_GIT_SHA: process?.env?.REACT_APP_GIT_SHA || '',
    REACT_APP_GIT_COMMIT: process?.env?.REACT_APP_GIT_COMMIT || '',
  }

  useEffect(() => {
    setDataState(['here', 'is', 'some', 'content'])
  }, [])

  console.info('TemplateScreen [41]', {
    store,
  })
  const canonicalUrl = `https://futuralis.com${props?.routeProps.location.pathname}`

  return (
    <HelmetProvider>
      <div className='TemplateScreen'>
        <Helmet>
          <html lang={language} />
          <meta charSet='utf-8' />
          <title>{'TemplateScreen'}</title>
          <link rel='canonical' href={canonicalUrl} />
          <meta
            name='ui-git-branch'
            content={gitData.REACT_APP_GIT_BRANCH}
          ></meta>
          <meta name='ui-git-sha' content={gitData.REACT_APP_GIT_SHA}></meta>
          <meta
            name='ui-git-commit'
            content={gitData.REACT_APP_GIT_COMMIT}
          ></meta>
          <meta name='description' content={'Description'} />
        </Helmet>
        <h1 className='_h1'>React Typescript Template</h1>
        <div>created 2021, updated 2022-03-24</div>

        <div>{dataState.join(' ')}</div>
      </div>
    </HelmetProvider>
  )
}
