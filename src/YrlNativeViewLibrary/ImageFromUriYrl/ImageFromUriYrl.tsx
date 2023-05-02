import React from 'react'
import { Image, View } from 'react-native'
import { Asset } from 'expo-asset'
import { ImageFromUriYrlType } from './ImageFromUriYrlType'
import { ImageFromUriYrlStyle as style } from './ImageFromUriYrlStyle'

/**
 * @import import { ImageFromUriYrl, ImageFromUriYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  ImageFromUriYrlProps: {
  }
 */
export const ImageFromUriYrl: ImageFromUriYrlType = props => {
  /* @ts-ignore */
  const { styleProps = { ImageFromUriYrl: {} }, testID = 'ImageFromUriYrl' } =
    props

  const [image, setImage] = React.useState(null)

  const loadAssetAsync = async () => {
    const remoteUri =
      'https://cdn.orsive.com/avatars/3tYL96SMyBcwUakNphevH-avatar.svg'

    const remoteUri2 =
      'https://a.cdn-hotels.com/gdcs/production83/d171/381e80c3-1baf-4822-9fb7-5d39274f9cf5.jpg'
    const asset = Asset.fromURI(remoteUri)
    await asset.downloadAsync()
    /* @ts-ignore */
    setImage(asset)
  }

  React.useEffect(() => {
    loadAssetAsync()
  }, [])

  if (!image) {
    return <View />
  }

  return (
    <Image
      style={[style.ImageFromUriYrl, styleProps.ImageFromUriYrl]}
      source={{ uri: image.uri }}
    />
  )
}
