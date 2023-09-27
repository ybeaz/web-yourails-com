import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const Message: any = {
  MessageCommon: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '0.5rem'.getPx(),
  },
  contentCommon: {
    width: 'fit-content',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: '1rem'.getPx(),
    maxWidth: '75%',
  },
  messageWrapperCommon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '0.25rem'.getPx(),
  },
  textCommon: {},
  dateStringCommon: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '0.875rem'.getPx(),
  },
}

export const stylesDefault: any = {
  left: {
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
    copyThis: {
      marginRight: -'0.75rem'.getPx(),
      paddingTop: '0.5rem'.getPx(),
    },
  },
  right: {
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
    copyThis: {
      marginRight: -'0.75rem'.getPx(),
      paddingTop: '0.5rem'.getPx(),
    },
  },
  roundAllCorners: {
    style: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  },
}

const xsDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
})

const mdDevice = StyleSheet.create({
  ...stylesDefault,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  left: {
    Message: {
      ...Message.MessageCommon,
      justifyContent: 'flex-start',
      marginLeft: 0,
      marginRight: 0,
    },
    content: Message.contentCommon,
    messageWrapper: Message.messageWrapperCommon,
    text: Message.textCommon,
    dateString: Message.dateStringCommon,
    copyThis: {
      paddingLeft: '0.25rem'.getPx(),
    },
  },
  right: {
    Message: {
      ...Message.MessageCommon,
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 0,
    },
    content: Message.contentCommon,
    messageWrapper: Message.messageWrapperCommon,
    text: Message.textCommon,
    dateString: Message.dateStringCommon,
    copyThis: {
      marginRight: -'0.75rem'.getPx(),
    },
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  ...lgDevice,
})

/**
 * @import import { styles } from './PageChatsWholeScreenStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
