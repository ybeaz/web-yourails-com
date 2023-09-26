import React, { ReactElement } from 'react'
import { View, ScrollView } from 'react-native'
import { nanoid } from 'nanoid'
import { getPx } from '../../Styles/styleGlobal'

import {
  withPropsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  ButtonYrl,
} from '../../../YrlNativeViewLibrary'
import { Header } from '../Header/Header'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  PromptExamplesType,
  PromptExamplesComponentType,
  PromptExamplesPropsType,
  PromptExamplesPropsOutType,
  PromptExamplesListPropsOutType,
} from './PromptExamplesTypes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles } from './PromptExamplesStyles'

/**
 * @description Component to render
 * @import import { PromptExamples, PromptExamplesPropsType, PromptExamplesPropsOutType, PromptExamplesType } 
             from '../Components/PromptExamples/PromptExamples'
 */
const PromptExamplesComponent: PromptExamplesComponentType = props => {
  const {
    styleProps = {
      PromptExamples: {},
      scrollView: {},
      contentContainerStyle: {},
      promptExampleText: {},
    },
    mediaParams = mediaParamsDefault,
    promptExamples,
    onHeightChange,
    onPromptExampleClick,
    handleEvents,
    idProfileActive,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const handleLayout = (event: any) => {
    const { height } = event.nativeEvent.layout
    onHeightChange(height)
  }

  const propsOut: PromptExamplesPropsOutType = {
    headerProps: {
      styleProps: {
        Header: style.header,
        headerText: { ...style.headerText, color: themes['themeB'].color01 },
      },
      headerText: 'Prompt Examples:',
      testID: 'header',
    },
  }

  return (
    <View
      style={[style.PromptExamples, styleProps.PromptExamples]}
      onLayout={(event: any) => handleLayout(event)}
      testID='PromptExamples'
    >
      <ScrollView
        style={[style.scrollView, styleProps.scrollView]}
        contentContainerStyle={[
          style.contentContainerStyle,
          styleProps.contentContainerStyle,
        ]}
        testID='scrollView'
      >
        <Header {...propsOut.headerProps} />
        {promptExamples?.map((promptExample: string, index: number) => {
          const key = nanoid()

          const titleText: ReactElement = (
            <Text
              key={key}
              style={[style.promptExampleText, styleProps.promptExampleText]}
              ellipsizeMode='tail'
              numberOfLines={2}
              testID='text'
            >
              {`${index + 1}. ${promptExample}`}
            </Text>
          )

          const listPropsOut: PromptExamplesListPropsOutType = {
            tooltipsLinkingButtonYrlProps: {
              key,
              styleProps: {
                ButtonYrl: {},
                title: {
                  color: themes['themeA'].colors08.color,
                  paddingBottom: '0.25rem'.getPx(),
                },
              },
              titleText,
              testID: 'tooltipButtonYrl',
              disabled: false,
              onPress: () => {
                onPromptExampleClick()
                handleEvents.CLICK_ON_PROMPT_EXAMPLE(
                  {},
                  { idProfileActive, text: promptExample }
                )
              },
              iconProps: undefined,
            },
          }

          return <ButtonYrl {...listPropsOut.tooltipsLinkingButtonYrlProps} />
        })}
      </ScrollView>
    </View>
  )
}

export const PromptExamples: PromptExamplesType = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withParamsMediaYrl(PromptExamplesComponent)
  )
)
export type {
  PromptExamplesPropsType,
  PromptExamplesPropsOutType,
  PromptExamplesType,
}
