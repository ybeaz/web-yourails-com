import React, { FunctionComponent } from 'react'

import { Text } from '../../../ViewLayer/Components/Text/Text'

const styleDefault = {
  promptExampleView: {},
  promptExample: {},
}

export type PromptsExamplesElementPropsType = {
  promptExamples: string[]
  style?: { promptExampleView: any; promptExample: any }
}

/**
 * @description Function to PromptsExamplesElement
 * @import import { PromptsExamplesElement } from './PromptsExamplesElement'
 */

export const PromptsExamplesElement: FunctionComponent<
  PromptsExamplesElementPropsType
> = ({ promptExamples, style = styleDefault }) => (
  <>
    {promptExamples?.length
      ? promptExamples.map((promptExample: string, index: number) => {
          const brakeAdd = index !== promptExamples.length - 1 ? '\n\n' : ''
          return (
            <Text
              key={`promptExample-${index}`}
              style={[style?.promptExample]}
              testID='promptExampleText'
            >
              {promptExample.split('\\n').join('\n')}
              {brakeAdd}
            </Text>
          )
        })
      : ''}
  </>
)
