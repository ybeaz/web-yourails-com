import React from 'react'
import { View } from 'react-native'

import {
  InputTextYrl,
  withPropsYrl,
  withStoreStateSliceYrl,
} from '../../../YrlNativeViewLibrary'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { Text } from '../../Components/Text/Text'
import { InputTestType, InputTestPropsOutType } from './InputTestTypes'
import { styles } from './InputTestStyles'

/**
 * @import import { InputTest } from '../Components/InputTest/InputTest'
 */
const InputTestComponent: InputTestType = props => {
  const {
    styleProps = {
      InputTest: { height: 'min-content' },
      InputTextYrl: { border: '1px solid green' },
    },
    handleEvents,
    storeStateSlice,
  } = props
  // const { deviceType, screenCase, width, height } = mediaParams
  // const style = styles[deviceType]

  const propsOut: InputTestPropsOutType = {
    inputTextYrlProps: {
      styleProps: { InputTextYrl: styleProps.InputTextYrl, inputText: {} },
      multiline: false,
      numberOfLines: 1,
      onChangeText: (text: string) => {
        console.info('InputTest [27]', { text })
        handleEvents.ON_CHANGE_INPUT_SEARCH({}, { text })
      },
      placeholder: '',
      placeholderTextColor: '',
      testID: 'InputTextYrl',
      value: storeStateSlice.inputSearch,
    },
  }

  return (
    <View style={[styleProps.InputTest]} testID='InputTest'>
      <InputTextYrl {...propsOut.inputTextYrlProps} />
    </View>
  )
}

export const InputTest = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateSliceYrl(['inputSearch'], InputTestComponent)
  )
)
