import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  ButtonYrl,
  InputTextYrl,
  ImageYrl,
} from '../../../YrlNativeViewLibrary/index'

import { Text } from '../../Components/Text/Text'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { URL_APP_BASE } from '../../../Constants/servers.const'
import { HeaderFrame } from '../../Frames/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame'
import { RootStoreType } from '../../../@types/RootStoreType'
import { TemplateScreenType } from './TemplateScreenType'
import { TemplateScreenStyle as style } from './TemplateScreenStyle'

const TemplateScreenComponent: TemplateScreenType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const {
    globalVars: { language },
  } = store

  useEffect(() => {
    handleEvents(
      {},
      {
        typeEvent: 'TEMPLATE',
        data: { id: '3' },
      }
    )
  }, [])

  console.info('TemplateScreen  [41]', {
    store,
  })

  const canonicalUrl = `${URL_APP_BASE}${props?.routeProps.location.pathname}`

  const propsOut = {
    mainFrameProps: {},
    headerFrameProps: {},
    templateBodyProps: {},
    footerFrameProps: {},
    imageBottomProps: {
      className: 'Image_bottom',
      uri: 'https://yourails.com/images/bottomRightBackground.jpg',
    },
  }

  return (
    <SafeAreaView></SafeAreaView>

    // <HelmetProvider>
    //   <div className='TemplateScreen'>
    //     <Helmet>
    //       <html lang={language} />
    //       <meta charSet='utf-8' />
    //       <title>{'TemplateScreen'}</title>
    //       <link rel='canonical' href={canonicalUrl} />
    //       <meta name='description' content={'Description'} />
    //     </Helmet>
    //     <MainFrame {...propsOut.mainFrameProps}>
    //       {/* header */}
    //       <HeaderFrame {...propsOut.headerFrameProps}>
    //         {/* header-left */}
    //         {null}
    //         {/* header-main */}
    //         {null}
    //         {/* header-right */}
    //         {null}
    //       </HeaderFrame>
    //       {/* middle-left */}
    //       {null}
    //       {/* middle-main */}
    //       <TemplateBody {...propsOut.templateBodyProps} />
    //       {/* middle-right */}
    //       {null}
    //       {/* footer */}
    //       <FooterFrame {...propsOut.footerFrameProps}>
    //         {/* footer-left */}
    //         {null}
    //         {/* footer-main */}
    //         {null}
    //         {/* footer-right */}
    //         <ImageYrl {...propsOut.imageBottomProps} />
    //       </FooterFrame>
    //     </MainFrame>
    //   </div>
    // </HelmetProvider>
  )
}

export const TemplateScreen = React.memo(TemplateScreenComponent)
