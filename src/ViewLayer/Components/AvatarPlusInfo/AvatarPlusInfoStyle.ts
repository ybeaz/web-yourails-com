import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  AvatarPlusInfo: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    paddingLeft: getPx('1rem'),
  },
  ImageYrl: {},
  image: {
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: getPx('1rem'),
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
})
