import React, { useState } from 'react'
import { View } from 'react-native'
import { Text as TextRrneui } from '@rneui/themed'

import {
  ButtonYrl,
  IconYrl,
  withStoreStateSliceYrl,
  InputTextYrl,
  withPropsYrl,
  mediaParamsDefault,
  withParamsMediaYrl,
  TooltipYrl,
} from '../../../YrlNativeViewLibrary'
import {
  ChatInputType,
  ChatInputPropsOutM1Type,
  ChatInputPropsOutType,
} from './ChatInputType'
import { PromptExamples } from '../PromptExamples/PromptExamples'
import { styles } from './ChatInputStyle'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

const ChatInputComponent: ChatInputType = props => {
  const {
    handleEvents,
    storeStateSlice,
    mediaParams = mediaParamsDefault,
  } = props

  const {
    profiles,
    idProfileActive,
    inputChat,
    isMainColumnBlank,
    modalFrame,
  } = storeStateSlice
  const { isShow: isShowModalFrame } = modalFrame

  const { deviceType, height } = mediaParams
  const style = styles[deviceType]

  const [promptExamplesHeightState, setPromptExamplesHeightState] = useState(32)
  const [inputTextYrlHeightState, setInputTextYrlHeightState] = useState(32)
  const [isVisiblePropState, setisVisiblePropState] = useState(false)

  const onPromptExampleHeightChange = (height: number): void => {
    setPromptExamplesHeightState(height)
  }

  const onInputTextYrlHeightChange = (height: number): void => {
    setInputTextYrlHeightState(height)
  }

  const onPromptExampleClick = (): void => {
    setisVisiblePropState(false)
  }

  const profileActive = getProfileByIdProfile(profiles, idProfileActive)

  const propsOutM1: ChatInputPropsOutM1Type = {
    tooltipTitleWrapperProps: {
      style: [style.tooltipTitleWrapper],
      testID: 'tooltipTitleWrapper',
    },
    tooltipPopoverIconProps: {
      library: 'Ionicons',
      name: 'pencil-outline',
      styleProps: {
        IconYrl: {
          cursor: 'pointer',
          paddingRight: '0.25rem',
        },
      },
      size: 16,
      color: themes['themeB'].color10,
      testID: 'tooltip_IconYrl',
    },
    promptExamplesProps: {
      styleProps: {},
      promptExamples: profileActive?.promptExamples || [],
      onHeightChange: onPromptExampleHeightChange,
      onPromptExampleClick,
      idProfileActive,
    },
  }

  const tooltipTitlePromptExamples = profileActive?.promptExamples?.length ? (
    <View {...propsOutM1.tooltipTitleWrapperProps}>
      <IconYrl {...propsOutM1.tooltipPopoverIconProps} />
      <TextRrneui
        style={[style.titleText, { color: themes['themeB'].color10 }]}
        testID='tooltipTitle'
      >
        Prompt Examples
      </TextRrneui>
    </View>
  ) : null

  const tooltipContainerStyleTop: number =
    height - 70 - inputTextYrlHeightState - promptExamplesHeightState

  const propsOut: ChatInputPropsOutType = {
    inputTextYrlProps: {
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_CHAT({}, { idProfileActive, text }),
      onSubmitEditing: () =>
        handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
      onHeightChange: onInputTextYrlHeightChange,
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
      testID: 'chatInput_IconYrl_search',
    },
    tooltipPromptExamples: {
      backgroundColor: themes['themeA'].colors09.backgroundColor,
      children: <PromptExamples {...propsOutM1.promptExamplesProps} />,
      styleProps: {
        TooltipYrl: style.tooltip_TooltipYrl,
        iconTextWrapper: style.tooltip_iconTextWrapper,
        titleText: [style.tooltip_titleText],
        containerStyle: {
          ...style.tooltip_container,
          top: tooltipContainerStyleTop,
          alignSelf: 'center',
        },
        TooltipPopoverYrl: style.tooltip_tooltipPopover,
      },
      setIsVisibleProp: setisVisiblePropState,
      isVisibleProp: isVisiblePropState,
      testID: `tooltipPromptExample`,
      titleText: tooltipTitlePromptExamples,
    },
    buttonPasteFromClipboardProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'pasteThisButtonYrl',
      disabled: false,
      onPress: async () => {
        const clipboardText = await navigator.clipboard.readText()
        handleEvents.CLICK_ON_PROMPT_EXAMPLE(
          {},
          { idProfileActive, text: clipboardText }
        )
      },
      iconProps: {
        library: 'Ionicons',
        name: 'arrow-down-circle-outline',
        styleProps: { IconYrl: {} },
        size: 20,
        color: themes['themeB'].color10,
        testID: 'copyThisIconYrl',
      },
    },
  }

  return (
    <>
      {!isMainColumnBlank && isShowModalFrame === false ? (
        <View style={[style.ChatInput]} testID='ChatInput'>
          <View style={[style.tooltipsWrapper]} testID='tooltipsWrapper'>
            <ButtonYrl {...propsOut.buttonPasteFromClipboardProps} />
            <TooltipYrl {...propsOut.tooltipPromptExamples} />
          </View>
          <View style={[style.inputButton]} testID='inputButton'>
            <InputTextYrl {...propsOut.inputTextYrlProps} />
            <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
              <ButtonYrl {...propsOut.sendButtonYrlProps}>
                <IconYrl {...propsOut.sendIconYrlProps} />
              </ButtonYrl>
            </View>
          </View>
        </View>
      ) : null}
    </>
  )
}

export const ChatInput = withPropsYrl({ handleEvents: handleEventsProp })(
  withStoreStateSliceYrl(
    [
      'profiles',
      'idProfileActive',
      'inputChat',
      'isMainColumnBlank',
      'modalFrame',
    ],
    withParamsMediaYrl(React.memo(ChatInputComponent))
  )
)
