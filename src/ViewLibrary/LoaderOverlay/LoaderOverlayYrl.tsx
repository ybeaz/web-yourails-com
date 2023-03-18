import React from 'react'
import { View } from 'react-native'

import { LoaderOverlayYrlStyle } from './LoaderOverlayYrlStyle'
import { LoaderOverlayType } from './LoaderOverlayYrlType'

/**
 * @import import { LoaderOverlayYrl } from './ViewLibrary/LoaderOverlay/LoaderOverlay'
 * @import import { LoaderOverlayPropsType } from './ViewLibrary/LoaderOverlay/LoaderOverlayType'
 */
const LoaderOverlay: LoaderOverlayType = props => {
  const {
    isLoaderOverlayVisible,
    propsStyle = { LoaderOverlay: {}, spinner: {} },
  } = props

  return (
    <View
      style={[LoaderOverlayYrlStyle.LoaderOverlay, propsStyle.LoaderOverlay]}
    >
      <View style={[LoaderOverlayYrlStyle.spinner, propsStyle.spinner]}></View>
    </View>
  )
}

export default LoaderOverlay
