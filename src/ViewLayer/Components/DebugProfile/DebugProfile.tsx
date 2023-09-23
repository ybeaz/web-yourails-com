import React from 'react'
import { Button, SafeAreaView } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  DebugProfilePropsType,
  DebugProfilePropsOutType,
  DebugProfileComponentType,
  DebugProfileType,
} from './DebugProfileTypes'
import { styles } from './DebugProfileStyles'

/**
 * @description Component to render
 * @import import { DebugProfile, DebugProfilePropsType, DebugProfilePropsOutType, DebugProfileType } 
             from '../Components/DebugProfile/DebugProfile'
 */
const DebugProfileComponent: DebugProfileComponentType = props => {
  const {
    styleProps = { DebugProfile: {} },
    onLayout,
    navigation,
    titleText,
  } = props

  console.info('DebugProfile [27]', props)

  const propsOut: DebugProfilePropsOutType = {}

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Button
        title='Go back'
        onPress={() => {
          console.info('App [104]', 'to goBack')
          navigation.goBack()
        }}
      />
    </SafeAreaView>
  )
}

export const DebugProfile: DebugProfileType = React.memo(DebugProfileComponent)

export type {
  DebugProfilePropsType,
  DebugProfilePropsOutType,
  DebugProfileComponentType,
  DebugProfileType,
}
