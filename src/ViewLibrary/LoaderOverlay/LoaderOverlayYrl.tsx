import React from 'react'
import { View } from 'react-native'

import { loaderOverlayYrlStyleDefault as styles} from './LoaderOverlayYrlStyle'
import { LoaderOverlayType } from './LoaderOverlayYrlType'

const LoaderOverlay: LoaderOverlayType = props => {
  const { isLoaderOverlayVisible } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  return (
    <View style={[styles.loaderOverlay]}>
      <View style={[styles._spinner]}></View>
    </View>
  )
}

export default LoaderOverlay
