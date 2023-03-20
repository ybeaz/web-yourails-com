import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const MessageStyles: any = {
  left: StyleSheet.create({
    Message: {
      ...styleGlobal.typography,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: 8,
      marginRight: 0,
    },
    avatar: {},
    content: {},
    text: {},
  }),
  right: StyleSheet.create({
    Message: {
      ...styleGlobal.typography,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 8,
    },
    avatar: {},
    content: {},
    text: {},
  }),
}
