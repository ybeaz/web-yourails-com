/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 * @generate-docs
 */

'use strict'

import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  AccessibilityState,
  AccessibilityActionEvent,
  AccessibilityActionInfo,
} from 'react-native'
//  import StyleSheet, {type ColorValue} from '../StyleSheet/StyleSheet';
//  import Text from '../Text/Text';
//  import TouchableNativeFeedback from './Touchable/TouchableNativeFeedback';
//  import TouchableOpacity from './Touchable/TouchableOpacity';
//  import View from './View/View';
//  import invariant from 'invariant';

//  import type {
//    AccessibilityState,
//    AccessibilityActionEvent,
//    AccessibilityActionInfo,
//  } from './View/ViewAccessibility';
//  import type {PressEvent} from '../Types/CoreEventTypes';

// import { ButtonYrnStyle } from './ButtonYrnStyle'

// import { IButtonProps } from '../type'

type ButtonProps = {
  /**
     Text to display inside the button. On Android the given title will be
     converted to the uppercased form.
    */
  title: string

  /**
     Handler to be called when the user taps the button. The first function
     argument is an event in form of [PressEvent](pressevent).
    */
  onPress: (event?: any) => any

  /**
     If `true`, doesn't play system sound on touch.
 
     @platform android
 
     @default false
    */
  touchSoundDisabled?: boolean

  /**
     Color of the text (iOS), or background color of the button (Android).
 
     @default {@platform android} '#2196F3'
     @default {@platform ios} '#007AFF'
    */
  color?: any

  /**
     TV preferred focus.
 
     @platform tv
 
     @default false
    */
  hasTVPreferredFocus?: boolean

  /**
     Designates the next view to receive focus when the user navigates down. See
     the [Android documentation][android:nextFocusDown].
 
     [android:nextFocusDown]:
     https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown
 
     @platform android, tv
    */
  nextFocusDown?: number

  /**
     Designates the next view to receive focus when the user navigates forward.
     See the [Android documentation][android:nextFocusForward].
 
     [android:nextFocusForward]:
     https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward
 
     @platform android, tv
    */
  nextFocusForward?: number

  /**
     Designates the next view to receive focus when the user navigates left. See
     the [Android documentation][android:nextFocusLeft].
 
     [android:nextFocusLeft]:
     https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft
 
     @platform android, tv
    */
  nextFocusLeft?: number

  /**
     Designates the next view to receive focus when the user navigates right. See
     the [Android documentation][android:nextFocusRight].
 
     [android:nextFocusRight]:
     https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight
 
     @platform android, tv
    */
  nextFocusRight?: number

  /**
     Designates the next view to receive focus when the user navigates up. See
     the [Android documentation][android:nextFocusUp].
 
     [android:nextFocusUp]:
     https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp
 
     @platform android, tv
    */
  nextFocusUp?: number

  /**
     Text to display for blindness accessibility features.
    */
  accessibilityLabel?: string

  /**
     If `true`, disable all interactions for this component.
 
     @default false
    */
  disabled?: boolean

  /**
     Used to locate this view in end-to-end tests.
    */
  testID?: string

  /**
   * Accessibility props.
   */
  accessible?: boolean
  accessibilityActions?: AccessibilityActionInfo
  onAccessibilityAction?: (event: AccessibilityActionEvent) => any
  accessibilityState?: AccessibilityState
  accessibilityHint?: string
}

interface IButtonYrn {
  (props: ButtonProps): JSX.Element | null
}

export const ButtonYrn: IButtonYrn = props => {
  const {
    accessibilityLabel,
    color,
    onPress,
    touchSoundDisabled,
    title,
    hasTVPreferredFocus,
    nextFocusDown,
    nextFocusForward,
    nextFocusLeft,
    nextFocusRight,
    nextFocusUp,
    testID,
    accessible,
    accessibilityActions,
    accessibilityHint,
    onAccessibilityAction,
  } = props
  const buttonStyles = [styles.button]
  const textStyles = [styles.text]
  if (color) {
    if (Platform.OS === 'ios') {
      textStyles.push({ color: color })
    } else {
      buttonStyles.push({ backgroundColor: color })
    }
  }

  const disabled =
    props.disabled != null ? props.disabled : props.accessibilityState?.disabled

  const accessibilityState =
    disabled !== props.accessibilityState?.disabled
      ? { ...props.accessibilityState, disabled }
      : props.accessibilityState

  if (disabled) {
    buttonStyles.push(styles.buttonDisabled)
    textStyles.push(styles.textDisabled)
  }

  const formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title
  const Touchable: any =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Touchable
      accessible={accessible}
      accessibilityActions={accessibilityActions}
      onAccessibilityAction={onAccessibilityAction}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole='button'
      accessibilityState={accessibilityState}
      hasTVPreferredFocus={hasTVPreferredFocus}
      nextFocusDown={nextFocusDown}
      nextFocusForward={nextFocusForward}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}
      nextFocusUp={nextFocusUp}
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      touchSoundDisabled={touchSoundDisabled}
    >
      <View style={buttonStyles}>
        <Text style={textStyles} disabled={disabled}>
          {formattedTitle}
        </Text>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  // @ts-ignore
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
  text: {
    textAlign: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18,
      },
      android: {
        color: 'white',
        fontWeight: '500',
      },
    }),
  },
  // @ts-ignore
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    },
  }),
  // @ts-ignore
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    },
  }),
})

// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native'

// import { ButtonYrnStyle } from './ButtonYrnStyle'

// import { IButtonProps } from '../type'

// console.info('ButtonYrn [6-7]', {
//   ButtonYrnStyle,
// })

// const ButtonYrn: React.FC<IButtonProps> = ({
//   disabled = false,
//   backgroundColor = '#3979aa',
//   color = 'white',
//   ...props
// }) => {
//   return (
//     <button
//       ref={props.buttonRef}
//       title={props.title}
//       className={''}
//       style={{
//         backgroundColor: backgroundColor,
//         color: color,
//         borderColor: backgroundColor,
//       }}
//       disabled={disabled}
//       onClick={props.onClick}
//     >
//       {props.icon ? (
//         <span className='rce-button-icon--container'>
//           {(props.icon.float === 'right' || !props.icon.float) && (
//             <span>{props.text}</span>
//           )}

//           <span
//             style={{ float: props.icon.float, fontSize: props.icon.size || 12 }}
//             className='rce-button-icon'
//           >
//             {props.icon.component}
//           </span>

//           {props.icon.float === 'left' && <span>{props.text}</span>}
//         </span>
//       ) : (
//         <span>{props.text}</span>
//       )}
//     </button>
//   )
// }
// export default ButtonYrn
