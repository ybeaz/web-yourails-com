import React from 'react'
import { View } from 'react-native'

import { LoaderOverlayYrlStyle } from './LoaderOverlayYrlStyle'
import { LoaderOverlayType } from './LoaderOverlayYrlType'

/**
 * @import import { LoaderOverlayYrl } from './ViewLibrary/LoaderOverlay/LoaderOverlay'
 * @import import { LoaderOverlayPropsType } from './ViewLibrary/LoaderOverlay/LoaderOverlayType'
 * @propsOut 
  loaderOverlayYrl: {
    propsStyle: { LoaderOverlay: {}, spinner: {} },
    isLoaderOverlayVisible: false,
    testID: 'LoaderOverlayYrl',
  }
 */
const LoaderOverlayYrl: LoaderOverlayType = props => {
  const {
    propsStyle = { LoaderOverlay: {}, spinner: {} },
    isLoaderOverlayVisible,
    testID = 'LoaderOverlayYrl',
  } = props

  return (
    <View
      style={[LoaderOverlayYrlStyle.LoaderOverlay, propsStyle.LoaderOverlay]}
      testID={testID}
    >
      <View
        style={[LoaderOverlayYrlStyle.spinner, propsStyle.spinner]}
        testID={`${testID}_View`}
      ></View>
    </View>
  )
}

export default LoaderOverlayYrl
