import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const Message: any = StyleSheet.create({
  MessageCommon: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '0.5rem',
  },
  contentCommon: {
    width: 'fit-content',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: '1rem',
    maxWidth: '75%',
  },
  messageWrapperCommon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '0.25rem',
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
    content: Message.contentCommon,
    messageWrapper: Message.messageWrapperCommon,
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
    content: Message.contentCommon,
    messageWrapper: Message.messageWrapperCommon,
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
