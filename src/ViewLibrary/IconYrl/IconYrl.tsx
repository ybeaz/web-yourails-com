import * as React from 'react'
import { IconYrlType } from './IconYrlType'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ICON: Record<string, any> = {
  FontAwesome,
}

/**
 * @import import { IconYrl } from './ViewLibrary/IconYrl/IconYrl'
 * @import import { ButtonYrlPropsType } from './ViewLibrary/IconYrl/IconYrlType'
 * @propsOut 
  iconYrlProps: {
    styleProps: { ButtonYrl: {}, title: {} },
    titleText: ',
    testID: 'ButtonYrl',
    disabled: false,
    onPress: () => {},
    iconProps: {
      // || false
      library: '',
      name: '',
      size: 10,
      color: 'red',
      testID: ''
    },
  }
 * @link https://oblador.github.io/react-native-vector-icons/
 */
export const IconYrl: IconYrlType = props => {
  const { name, size, color, testID = 'IconYrl', library } = props
  const Icon = library ? ICON[library] : null

  return <Icon name={name} size={size} color={color} testID={testID} />
}
