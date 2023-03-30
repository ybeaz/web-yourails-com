import React, { useState, useEffect, useRef, ReactElement } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native'

import { TagsPropertiesType } from './TagsPropertiesType'
import { TagsPropertiesStyle as style } from './TagsPropertiesStyle'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

/**
 * @import import { TagsProperties } from '../Components/TagsProperties/TagsProperties'
 */
const TagsPropertiesComponent: TagsPropertiesType = props => {
  const { styleProps = { TagsProperties: {} } } = props

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  type ItemProps = { title: string }

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

  const propsOut = {}

  return (
    <SafeAreaView
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
