import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'

const svg = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M12 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-6.5-10h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2z' />
  </svg>
)

const ICONS: any = {
  add: require('../../Assets/ionicons/add.svg'),
  svg,
}

function AsyncImage(props: any) {
  const [imageSource, setImageSource] = useState('')
  const [loading, setLoading] = useState(true)

  console.info('AsyncImageYrl [8]', { props })

  useEffect(() => {
    const loadImage = async () => {
      try {
        console.info('AsyncImageYrl [13]', { 'props.source': props.source })
        const source = await ICONS[props.source]
        console.info('AsyncImageYrl [15]', {
          source,
          'props.source': props.source,
        })

        setImageSource(source)
        setLoading(false)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }
    loadImage()

    return () => {
      console.info('AsyncImageYrl [29]', 'cleanup')
    }
  }, [props.source])

  const str =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PGxpbmUgeDE9IjI1NiIgeTE9IjExMiIgeDI9IjI1NiIgeTI9IjQwMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48bGluZSB4MT0iNDAwIiB5MT0iMjU2IiB4Mj0iMTEyIiB5Mj0iMjU2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIvPjwvc3ZnPg=='

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <img src={imageSource} height={24} width={24} />
        // <Image
        //   source={{ uri: 'https://web1.yourails.com/static/ionicons/add.svg' }}
        //   style={props.style}
        // />
      )}
    </View>
  )
}

export default AsyncImage
