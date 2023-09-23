import React, { useState } from 'react'
import { View } from 'react-native'
import { getPx } from '../../Styles/styleGlobal'

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
import { Text } from '../Text/Text'
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
  const [helpHeightState, setHelpHeightState] = useState(32)
  const [inputTextYrlHeightState, setInputTextYrlHeightState] = useState(32)
  const [isVisiblePromptExamplesState, setIsVisiblePromptExamplesState] =
    useState(false)
  const [isVisibleHelpState, setIsVisibleHelpsState] = useState(false)

  const onPromptExampleHeightChange = (height: number): void => {
    setPromptExamplesHeightState(height)
  }

  const onHelpHeightChange = (height: number): void => {
    setHelpHeightState(height)
  }

  const onInputTextYrlHeightChange = (height: number): void => {
    setInputTextYrlHeightState(height)
  }

  const onPromptExampleClick = (): void => {
    setIsVisiblePromptExamplesState(false)
  }

  const profileActive = getProfileByIdProfile(profiles, idProfileActive)
  const promptExamples = profileActive?.promptExamples || []
  const helpText = profileActive?.help

  const propsOutM1: ChatInputPropsOutM1Type = {
    tooltipTitleWrapperProps: {
      style: [style.tooltipTitleWrapper],
      testID: 'tooltipTitleWrapper',
    },
    tooltipPopoverPromptExamplesIconProps: {
      library: 'Ionicons',
      name: 'pencil-outline',
      styleProps: {
        IconYrl: {
          cursor: 'pointer',
          paddingRight: getPx('0.25rem'),
        },
      },
      size: 16,
      color: themes['themeB'].color10,
      testID: 'tooltip_IconYrl',
    },
    tooltipPopoverHelpIconProps: {
      library: 'Ionicons',
      name: 'help',
      styleProps: {
        IconYrl: {
          cursor: 'pointer',
          paddingRight: getPx('0.25rem'),
        },
      },
      size: 16,
      color: themes['themeB'].color10,
      testID: 'tooltip_IconYrl',
    },
    promptExamplesProps: {
      styleProps: {},
      promptExamples,
      onHeightChange: onPromptExampleHeightChange,
      onPromptExampleClick,
      idProfileActive,
    },
    helpTooltipsTextProps: {
      styleProps: {
        Text: { ...style.helpTooltipsText, color: themes['themeB'].color01 },
      },
      onHeightChange: onHelpHeightChange,
      testID: 'helpTooltipsText',
    },
  }

  const tooltipTitlePromptExamples = promptExamples.length ? (
    <View {...propsOutM1.tooltipTitleWrapperProps}>
      <IconYrl {...propsOutM1.tooltipPopoverPromptExamplesIconProps} />
    </View>
  ) : null

  const tooltipTitleHelp = helpText ? (
    <View {...propsOutM1.tooltipTitleWrapperProps}>
      <IconYrl {...propsOutM1.tooltipPopoverHelpIconProps} />
    </View>
  ) : null

  const promptExamplesTooltipContainerStyleTop: number =
    height - 70 - inputTextYrlHeightState - promptExamplesHeightState
  const helpTooltipContainerStyleTop: number =
    height - 70 - inputTextYrlHeightState - helpHeightState

  const propsOut: ChatInputPropsOutType = {
    inputTextYrlProps: {
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_CHAT({}, { idProfileActive, text }),
      onSubmitEditing: () =>
        handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
      onHeightChange: onInputTextYrlHeightChange,
      styleProps: {
        InputTextYrl: {
          ...style.InputTextYrl,
          borderColor: themes.themeB.color08,
        },
        inputText: { ...style.inputText, ...themes.themeA.colors01 },
        inputTextResize: { ...style.inputTextResize },
      },
      testID: 'ChatInput_InputTextYrl',
      multiline: true,
      numberOfLines: 3,
      placeholder: 'Message',
      placeholderTextColor: themes['themeB'].color10, // '#a2acb4',
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
    buttonCopyToClipboardProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'pasteThisButtonYrl',
      disabled: false,
      onPress: async () => {
        const text = (idProfileActive && inputChat[idProfileActive]) || ''
        navigator.clipboard.writeText(text)
      },
      iconProps: {
        library: 'Ionicons',
        name: 'copy-outline',
        styleProps: { IconYrl: {} },
        size: 18,
        color: themes['themeB'].color10,
        testID: 'copyThisIconYrl',
      },
    },
    buttonPasteFromClipboardProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'pasteThisButtonYrl',
      disabled: false,
      onPress: async () => {
        const clipboardText = await navigator.clipboard.readText()
        handleEvents.CLICK_ON_PASTE_FROM_CLOPBOARD(
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
    buttonClearInputProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'pasteThisButtonYrl',
      disabled: false,
      onPress: async () => {
        handleEvents.CLICK_ON_PASTE_FROM_CLOPBOARD(
          {},
          { idProfileActive, text: '' }
        )
      },
      iconProps: {
        library: 'Ionicons',
        name: 'close-outline',
        styleProps: { IconYrl: {} },
        size: 22,
        color: themes['themeB'].color10,
        testID: 'copyThisIconYrl',
      },
    },
    tooltipPromptExamplesProps: {
      backgroundColor: themes['themeA'].colors09.backgroundColor,
      children: <PromptExamples {...propsOutM1.promptExamplesProps} />,
      styleProps: {
        TooltipYrl: style.tooltip_TooltipYrl,
        iconTextWrapper: style.tooltip_iconTextWrapper,
        titleText: [style.tooltip_titleText],
        containerStyle: {
          ...style.tooltip_container,
          top: promptExamplesTooltipContainerStyleTop,
          alignSelf: 'center',
        },
        TooltipPopoverYrl: style.tooltip_tooltipPopover,
      },
      setIsVisibleProp: setIsVisiblePromptExamplesState,
      isVisibleProp: isVisiblePromptExamplesState,
      testID: `tooltipPromptExample`,
      titleText: tooltipTitlePromptExamples,
    },
    tooltipHelpProps: {
      backgroundColor: themes['themeA'].colors09.backgroundColor,
      children: <Text {...propsOutM1.helpTooltipsTextProps}>{helpText}</Text>,
      styleProps: {
        TooltipYrl: style.tooltip_TooltipYrl,
        iconTextWrapper: style.tooltip_iconTextWrapper,
        titleText: [style.tooltip_titleText],
        containerStyle: {
          ...style.tooltip_container,
          top: helpTooltipContainerStyleTop,
          alignSelf: 'center',
        },
        TooltipPopoverYrl: style.tooltip_tooltipPopover,
      },
      setIsVisibleProp: setIsVisibleHelpsState,
      isVisibleProp:
        helpText && isVisibleHelpState ? isVisibleHelpState : false,
      testID: `tooltipHelp`,
      titleText: tooltipTitleHelp,
    },
    buttonSmallSendProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: undefined,
      testID: 'buttonSmallSend',
      disabled: false,
      onPress: async () =>
        handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
      iconProps: {
        library: 'Ionicons',
        name: 'send-outline',
        styleProps: { IconYrl: {} },
        size: 16,
        color: themes['themeB'].color10,
        testID: 'iconSmallSendProps',
      },
    },
  }

  return (
    <>
      {!isMainColumnBlank && isShowModalFrame === false ? (
        <View style={[style.ChatInput]} testID='ChatInput'>
          <View style={[style.tooltipsWrapper]} testID='tooltipsWrapper'>
            <ButtonYrl {...propsOut.buttonCopyToClipboardProps} />
            <ButtonYrl {...propsOut.buttonPasteFromClipboardProps} />
            <ButtonYrl {...propsOut.buttonClearInputProps} />
            <TooltipYrl {...propsOut.tooltipPromptExamplesProps} />
            <TooltipYrl {...propsOut.tooltipHelpProps} />
            <ButtonYrl {...propsOut.buttonSmallSendProps} />
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
