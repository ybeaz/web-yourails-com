import React from 'react'
import { SafeAreaView } from 'react-native'

import { LoaderOverlayYrlStyle as style } from './LoaderOverlayYrlStyle'
import { LoaderOverlayYrlType } from './LoaderOverlayYrlType'

/**
 * @import import { LoaderOverlayYrl } from './YrlNativeViewLibrary/LoaderOverlay/LoaderOverlay'
 * @import import { LoaderOverlayPropsType } from './YrlNativeViewLibrary/LoaderOverlay/LoaderOverlayType'
 * @propsOut 
  loaderOverlayYrl: {
    propsStyle: { LoaderOverlay: {}, spinner: {} },
    isLoaderOverlayVisible: false,
    testID: 'LoaderOverlayYrl',
  }
 */
export const LoaderOverlayYrl: LoaderOverlayYrlType = props => {
  const {
    propsStyle = { LoaderOverlay: {}, spinner: {} },
    isLoaderOverlayVisible,
    testID = 'LoaderOverlayYrl',
  } = props

  return (
    <SafeAreaView
      style={[style.LoaderOverlay, propsStyle.LoaderOverlay]}
      testID={testID}
    >
      <SafeAreaView
        style={[style.spinner, propsStyle.spinner]}
        testID={`${testID}_View`}
      ></SafeAreaView>
    </SafeAreaView>
  )
}
