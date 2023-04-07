import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { StubUserGoodbyeType } from './StubUserGoodbyeType'
import { style } from './StubUserGoodbyeStyle'
import { RootStoreType } from '../../../@types/RootStoreType'
import { DICTIONARY } from '../../../Constants/dictionary.const'

const StubUserGoodbyeComponent: StubUserGoodbyeType = props => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    globalVars: { language },
  } = store

  return (
    <View style={style.StubUserGoodbye}>
      <Text style={style.StubUserGoodbye.text}>
        {DICTIONARY.This_functionality_is_under_development[language]}
      </Text>
      <View style={style.StubUserGoodbye.text}>
        {DICTIONARY.We_are_currently_looking_for_support_and_feedback[language]}
      </View>
      <Text style={style.StubUserGoodbye.text}>
        {DICTIONARY.If_you_have_any_ideas_or_opinions[language]}
      </Text>
      <Text style={style.StubUserGoodbye.text}>
        {DICTIONARY.dont_hesitate_to_share_with_us[language]}
      </Text>
      <Text style={style.StubUserGoodbye.text}>
        {DICTIONARY.Our_contacts[language]}:
      </Text>
      <Text style={style.StubUserGoodbye.text}>
        {DICTIONARY.Email[language]}
        {': '}
        email@futuralis.com
      </Text>
    </View>
  )
}

export const StubUserGoodbye = React.memo(StubUserGoodbyeComponent)
