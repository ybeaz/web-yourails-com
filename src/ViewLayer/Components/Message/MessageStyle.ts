import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const Message: any = StyleSheet.create({
  MessageCommon: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '0.125rem',
  },
  // viewPadding: {
  //   padding: '1rem',
  // },
  contentCommon: {
    width: 'fit-content',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: '1rem',
    maxWidth: '75%',
  },
  textCommon: {},
  dateStringCommon: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

export const styles: any = {
  left: StyleSheet.create({
    Message: {
      ...Message.MessageCommon,
      justifyContent: 'flex-start',
      marginLeft: 8,
      marginRight: 0,
    },
    // viewPadding: Message.viewPadding,
    content: Message.contentCommon,
    text: Message.textCommon,
    dateString: Message.dateStringCommon,
  }),
  right: StyleSheet.create({
    Message: {
      ...Message.MessageCommon,
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 8,
    },
    // viewPadding: Message.viewPadding,
    content: Message.contentCommon,
    text: Message.textCommon,
    dateString: Message.dateStringCommon,
  }),
  roundAllCorners: StyleSheet.create({
    style: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  }),
}
