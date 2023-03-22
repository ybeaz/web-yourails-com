import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const AvatarNameStatusStyle = StyleSheet.create({
  AvatarNameStatus: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    paddingLeft: '1rem',
  },
  ImageYrl: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: '1rem',
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
