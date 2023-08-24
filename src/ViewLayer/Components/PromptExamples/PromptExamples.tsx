import React, { ReactElement } from 'react'
import { View, ScrollView } from 'react-native'
import { nanoid } from 'nanoid'

import {
  withPropsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  ButtonYrl,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  PromptExamplesType,
  PromptExamplesComponentType,
  PromptExamplesPropsType,
  PromptExamplesPropsOutType,
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

  return (
    <View
      style={[style.PromptExamples, styleProps.PromptExamples]}
      onLayout={(event: any) => handleLayout(event)}
      testID='PromptExamples'
    >
      <ScrollView
        style={[style.scrollView, styleProps.scrollView]}
        testID='scrollView'
      >
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
              {`Example ${index + 1}. ${promptExample}`}
            </Text>
          )

          const propsOut: PromptExamplesPropsOutType = {
            tooltipsLinkingButtonYrlProps: {
              key,
              styleProps: {
                ButtonYrl: {},
                title: {
                  color: themes['themeA'].colors08.color,
                  paddingBottom: '0.25rem',
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

          return <ButtonYrl {...propsOut.tooltipsLinkingButtonYrlProps} />
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
