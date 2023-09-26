import React from 'react'
import { View } from 'react-native'

import { IconYrl } from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import {
  NameStatusPropsOutType,
  NameStatusType,
  NameStatusComponentType,
} from './NameStatusType'
import { style } from './NameStatusStyle'
import { getPx } from '../../Styles/styleGlobal'

/**
 * @import import { NameStatus } from '../Components/NameStatus/NameStatus'
 * @propsOut
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors07,
      },
      profile,
      status: 'last seen recently',
    },
 */
const NameStatusComponent: NameStatusComponentType = props => {
  const {
    styleProps = { NameStatus: {}, firstRowWrapper: {}, viewStyle: {} },
    profile,
    status,
  } = props
  const { nameFirst, nameLast, profileNature } = profile

  const PROFILE_NATURE_ICON_DICTIONARY: Record<string, string> = {
    bot: 'robot-outline',
    human: '',
    company: 'office-building-outline',
  }

  const propsOut: NameStatusPropsOutType = {
    iconProfileNatureProps: {
      isActive: PROFILE_NATURE_ICON_DICTIONARY[profileNature] ? true : false,
      library: 'MaterialCommunityIcons',
      name: PROFILE_NATURE_ICON_DICTIONARY[profileNature],
      styleProps: {
        IconYrl: {
          cursor: 'pointer',
          paddingBottom: '0.25rem'.getPx(),
          paddingLeft: '0.25rem'.getPx(),
        },
      },
      size: '1rem'.getPx(),
      color: styleProps.viewStyle.color,
      testID: 'iconProfileNature',
    },
  }

  return (
    <View style={[style.NameStatus, styleProps.NameStatus]} testID='NameStatus'>
      <View
        style={[style.firstRowWrapper, styleProps.firstRowWrapper]}
        testID='firstRowWrapper'
      >
        <Text
          style={[style.name, styleProps.viewStyle]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='name'
        >
          {`${nameFirst} ${nameLast}`}
        </Text>
        <IconYrl {...propsOut.iconProfileNatureProps} />
      </View>
      <Text
        style={[style.status, styleProps.viewStyle]}
        numberOfLines={1}
        adjustsFontSizeToFit
        testID='status'
      >
        {status}
      </Text>
    </View>
  )
}

export const NameStatus: NameStatusType = React.memo(NameStatusComponent)
