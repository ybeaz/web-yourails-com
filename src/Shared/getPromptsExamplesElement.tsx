import React from 'react'

import { View } from 'react-native'
import { Text } from '../ViewLayer/Components/Text/Text'

/**
 * @description Function to getPromptsExamplesElement
 * @import import { getPromptsExamplesElement } from '../../../Shared/getPromptsExamplesElement'
 */

export const getPromptsExamplesElement = (
  promptExamples: string[],
  style: { promptExampleView: any; promptExample: any } = {
    promptExampleView: {},
    promptExample: {},
  }
) => (
  <>
    {promptExamples.map((promptExample: string, index: number) => {
      const brakeAdd = index === 0 ? '\n\n' : ''
      return (
        <Text
          key={`promptExample-${index}`}
          style={[style?.promptExample]}
          testID='promptExampleText'
        >
          {promptExample}
          {brakeAdd}
        </Text>
      )
    })}
  </>
)
