import React from 'react'
import { View } from 'react-native'
import { nanoid } from 'nanoid'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  PromptExamplesType,
  PromptExamplesComponentType,
  PromptExamplesPropsType,
  PromptExamplesPropsOutType,
} from './PromptExamplesTypes'
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
      promptExampleView: {},
      promptExampleText: {},
    },
    mediaParams = mediaParamsDefault,
    promptExamples,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: PromptExamplesPropsOutType = {}

  return (
    <View
      style={[style.PromptExamples, styleProps.PromptExamples]}
      testID='PromptExamples'
    >
      {promptExamples?.map((promptExample: string) => {
        const key = nanoid()
        return (
          <View
            key={key}
            style={[style.promptExampleView, styleProps.promptExampleView]}
            testID='PromptExampleView'
          >
            <Text
              style={[style.promptExampleText, styleProps.promptExampleText]}
              ellipsizeMode='tail'
              numberOfLines={2}
              testID='PromptExampleText'
            >
              {promptExample}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export const PromptExamples: PromptExamplesType = React.memo(
  withParamsMediaYrl(PromptExamplesComponent)
)
export type {
  PromptExamplesPropsType,
  PromptExamplesPropsOutType,
  PromptExamplesType,
}
