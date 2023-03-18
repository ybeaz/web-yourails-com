import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
// import 'react-chat-elements/dist/main.css'
// import { ChatItem, Button } from 'react-chat-elements'
import { ButtonYrl, InputTextYrl, ImageYrl } from '../../../ViewLibrary/index'

import { useSelector } from 'react-redux'
import { PageChatsWholeScreenStyle as style } from './PageChatsWholeScreenStyle'

import { handleEvents } from '../../../DataLayer/index.handleEvents'
// import { URL_APP_BASE } from '../../../Constants/servers.const'
// import { TemplateBody } from '../../Components/TemplateBody'
// import { HeaderFrame } from '../../Frames/HeaderFrame'
// import { FooterFrame } from '../../Frames/FooterFrame'
// import { MainFrame } from '../../Frames/MainFrame'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'

export const PageChatsWholeScreen: PageChatsWholeScreenType = props => {
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

  console.info('PageChatsWholeScreen  [41]', {
    props,
    store,
  })

  // const canonicalUrl = `${URL_APP_BASE}${props?.routeProps.location.pathname}`

  const iconProps = {
    library: 'FontAwesome',
    name: 'rocket',
    size: 30,
    color: '#900',
  }

  const onPressButtonYrl = () => {
    console.info('App [14]', { action: 'It is pressed 3' })
  }

  const onChangeText = (value: string | undefined) => {
    console.info('App [24]', { value })
  }

  const propsOut = {}

  const value = ''

  return (
    <View testID='PageChatsWholeScreen' style={style.PageChatsWholeScreen}>
      <View testID='sidebarRight' style={style.sidebarRight}></View>
      <View testID='mainColumn' style={style.mainColumn}>
        <Text>Hello World! 7</Text>
        <ButtonYrl
          title={'This title 7'}
          iconProps={iconProps}
          onPress={onPressButtonYrl}
        />
        <InputTextYrl onChangeText={onChangeText} value={value} />
        <ImageYrl uri='https://reactnative.dev/img/tiny_logo.png' />
        <StatusBar style='auto' />
      </View>
    </View>

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
