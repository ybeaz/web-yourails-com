import React from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import {
  CopyThisPropsType,
  CopyThisPropsOutType,
  CopyThisComponentType,
  CopyThisType,
} from './CopyThisTypes'
import { styles } from './CopyThisStyles'

/**
 * @description Component to render
 * @import import { CopyThis, CopyThisPropsType, CopyThisPropsOutType, CopyThisType } 
             from '../Components/CopyThis/CopyThis'
 */
const CopyThisComponent: CopyThisComponentType = props => {
  const {
    messageContent,
    styleProps = { CopyThis: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const propsOut: CopyThisPropsOutType = {
    buttonCopyProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'copyThisButtonYrl',
      disabled: false,
      onPress: () => {
        navigator.clipboard.writeText(messageContent)
        // console.info('CopyThis []', 'click test')
      },
      iconProps: {
        library: 'Ionicons',
        name: 'copy-outline',
        styleProps: { IconYrl: {} },
        size: 18,
        color: '#adb1b5',
        testID: 'copyThisIconYrl',
      },
    },
  }

  return (
    <View style={[style.CopyThis, styleProps.CopyThis]} testID='CopyThis'>
      <ButtonYrl {...propsOut.buttonCopyProps} />
    </View>
  )
}

export const CopyThis: CopyThisType = withParamsMediaYrl(
  React.memo(CopyThisComponent)
)

export type {
  CopyThisPropsType,
  CopyThisPropsOutType,
  CopyThisComponentType,
  CopyThisType,
}
