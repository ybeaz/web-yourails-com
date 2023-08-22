import React from 'react'
import { ScrollView, View, Modal } from 'react-native'
import { Text as TextRrneui } from '@rneui/themed'

import {
  ButtonYrl,
  IconYrl,
  withStoreStateYrl,
  InputTextYrl,
  withPropsYrl,
  mediaParamsDefault,
  withParamsMediaYrl,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../Text/Text'
import { ControlledTooltip } from '../ControlledTooltip/ControlledTooltip'
import { ChatInputType } from './ChatInputType'
import { styles } from './ChatInputStyle'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

const ChatInputComponent: ChatInputType = props => {
  const { handleEvents, store, mediaParams = mediaParamsDefault } = props

  const {
    profiles,
    globalVars: { idProfileActive },
    forms: { inputChat },
  } = store

  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const profileActive = getProfileByIdProfile(profiles, idProfileActive)

  const propsOut: Record<string, any> = {
    inputTextYrlProps: {
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_CHAT({}, { idProfileActive, text }),
      onSubmitEditing: () =>
        handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
      styleProps: {
        InputTextYrl: style.InputTextYrl,
        inputText: {
          ...style.inputText,
          ...themes.themeA.colors01,
          border: 0,
          outlineWidth: 0,
        },
        inputTextResize: style.inputTextResize,
      },
      testID: 'ChatInput_InputTextYrl',
      multiline: true,
      numberOfLines: 3,
      placeholder: 'Message',
      placeholderTextColor: '#a2acb4',
      value: (idProfileActive && inputChat[idProfileActive]) || '',
    },
    sendButtonYrlProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
    },
    sendIconYrlProps: {
      library: 'Ionicons',
      name: 'send',
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: 24,
      color: themes['themeA'].colors02.color,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  const Popover = () => (
    <View
      style={[style.tooltip_containerView]}
      testID={'tooltip_containerView'}
    >
      <ScrollView
        style={[style.tooltip_scrollView]}
        testID={'tooltip_scrollView'}
      >
        <ButtonYrl {...propsOut.tooltip_buttonYrlLinking} />
        <TextRrneui
          style={[style.tooltip_textRrneui]}
          testID={'tooltip_textRrneui'}
        >
          {'tooltips'}
        </TextRrneui>
      </ScrollView>
    </View>
  )

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <ControlledTooltip
        ModalComponent={Modal}
        backgroundColor={themes['themeA'].colors09.backgroundColor}
        popover={<Popover />}
        containerStyle={[style.tooltip_container]}
        withOverlay={true}
        withPointer={true}
      >
        <View style={style.tagIconTextWrapper} testID='tagIconTextWrapper'>
          <Text
            style={[
              style.titleText,
              { color: themes['themeA'].colors08.color },
            ]}
            testID='tagIconText'
          >
            {/* {iconLibrary && iconName && <IconYrl {...propsOut.iconProps} />} */}
            {'title'}
          </Text>
        </View>
      </ControlledTooltip>
      <View style={[style.inputButton]} testID='ChatInput_inputButton'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <ButtonYrl {...propsOut.sendButtonYrlProps}>
            <IconYrl {...propsOut.sendIconYrlProps} />
          </ButtonYrl>
        </View>
      </View>
    </View>
  )
}

export const ChatInput = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(ChatInputComponent))
  )
)
