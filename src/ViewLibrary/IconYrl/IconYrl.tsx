import * as React from 'react'
import { IconYrlType } from './IconYrlType'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ICON: Record<string, any> = {
  FontAwesome,
  Ionicons,
}

/**
 * @import import { IconYrl } from './ViewLibrary/IconYrl/IconYrl'
 * @import import { ButtonYrlPropsType } from './ViewLibrary/IconYrl/IconYrlType'
 * @propsOut 
  iconYrlProps: {
    // || undefined
    library: '',
    name: '',
    size: 10,
    color: 'red',
    testID: ''
  }
 * @link https://oblador.github.io/react-native-vector-icons/
 */
export const IconYrl: IconYrlType = props => {
  const {
    name = '',
    size = '',
    color = '',
    testID = 'IconYrl',
    library = '',
  } = props
  const Icon = library ? ICON[library] : null

  return <Icon name={name} size={size} color={color} testID={testID} />
}
