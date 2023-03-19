import * as React from 'react'
import { IconYrlType } from './IconYrlType'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ICON: Record<string, any> = {
  FontAwesome,
}

/**
 * @import import { IconYrl } from './ViewLibrary/IconYrl/IconYrl'
 * @import import { ButtonYrlPropsType } from './ViewLibrary/IconYrl/IconYrlType'
 */
export const IconYrl: IconYrlType = props => {
  const { testID = 'IconYrl', library } = props
  const Icon = library ? ICON[library] : null

  return (
    <Icon
      name={props.name}
      size={props.size}
      color={props.color}
      testID={testID}
    />
  )
}
