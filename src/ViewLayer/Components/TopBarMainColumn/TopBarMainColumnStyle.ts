import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TopBarMainColumnStyle = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    paddingTop: '0.45rem',
    paddingBottom: '0.45rem',
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
  serviceSpec: {
    paddingLeft: '2rem',
  },
  serviceSpecText: {},
})
