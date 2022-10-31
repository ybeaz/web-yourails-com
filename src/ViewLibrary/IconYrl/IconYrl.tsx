import * as React from 'react'
import { IIconYrlProps } from './IconYrlType'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ICON: Record<string, any> = {
  FontAwesome,
}

export const IconYrl = (props: IIconYrlProps) => {
  const Icon = props.library ? ICON[props.library] : null

  return <Icon name={props.name} size={props.size} color={props.color} />
}
