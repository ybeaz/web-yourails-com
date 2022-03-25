import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface StubUserGoodbyeArgs {}

export const StubUserGoodbye: React.FunctionComponent<StubUserGoodbyeArgs> = (
  props: StubUserGoodbyeArgs
): ReactElement => {
  const store = useSelector((store2: IRootStore) => store2)
  const {
    globalVars: { language },
  } = store

  return (
    <div className='StubUserGoodbye'>
      <h1 className='_h1'>
        {DICTIONARY.This_functionality_is_under_development[language]}
      </h1>
      <div className='_text p_1_0_0_0'>
        {DICTIONARY.We_are_currently_looking_for_support_and_feedback[language]}
      </div>
      <div className='_text'>
        {DICTIONARY.If_you_have_any_ideas_or_opinions[language]}
      </div>
      <div className='_text'>
        {DICTIONARY.dont_hesitate_to_share_with_us[language]}
      </div>
      <div className='_text p_1_0'>{DICTIONARY.Our_contacts[language]}:</div>
      <div className='_text'>
        {DICTIONARY.Email[language]}
        {': '}
        <a href='mailto: email@futuralis.com' target='_blank'>
          email@futuralis.com
        </a>
      </div>
    </div>
  )
}
