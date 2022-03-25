import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { config } from 'dotenv'
import { cwd } from 'process'
import { resolve } from 'path'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { URL_APP_BASE } from '../../Constants/servers.const'
import { TemplateBody } from '../Components/TemplateBody'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { FooterFrame } from '../Frames/FooterFrame'
import { MainFrame } from '../Frames/MainFrame'
import { Image } from '../Components/Image'
import { IRootStore } from '../../Interfaces/IRootStore'

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

  console.info('TemplateScreen  [41]', {
    store,
  })

  const gitData = {
    REACT_APP_GIT_BRANCH: process?.env?.REACT_APP_GIT_BRANCH || '',
    REACT_APP_GIT_SHA: process?.env?.REACT_APP_GIT_SHA || '',
    REACT_APP_GIT_COMMIT: process?.env?.REACT_APP_GIT_COMMIT || '',
  }

  const canonicalUrl = `${URL_APP_BASE}${props?.routeProps.location.pathname}`

  const propsOut = {
    mainFrameProps: {},
    headerFrameProps: {},
    templateBodyProps: {},
    footerFrameProps: {},
    imageBottomProps: {
      classAdded: 'Image_bottom',
      src: 'https://yourails.com/images/bottomRightBackground.jpg',
    },
  }

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
        <MainFrame {...propsOut.mainFrameProps}>
          {/* header */}
          <HeaderFrame {...propsOut.headerFrameProps} />
          {/* middle-left */}
          {null}
          {/* middle-main */}
          <TemplateBody {...propsOut.templateBodyProps} />
          {/* middle-right */}
          {null}
          {/* footer */}
          <FooterFrame {...propsOut.footerFrameProps}>
            <Image {...propsOut.imageBottomProps} />
          </FooterFrame>
        </MainFrame>
      </div>
    </HelmetProvider>
  )
}
