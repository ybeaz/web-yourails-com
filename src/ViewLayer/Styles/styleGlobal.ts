import { StyleSheet } from 'react-native'

import { getPxOfRem } from '../../Shared/getPxOfRem'

const rootElementFontSize: number = 16
const listOfAcceptedRemValues: string[] = [
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '0.875rem',
  '1.25rem',
  '1.5rem',
  '1rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
  '6rem',
  '10rem',
  '15rem',
]

/**
 * @description Function to translate css rem units into px number
 * @import import '../../Styles/styleGlobal'
 */
export const getPx = (rem: string) =>
  getPxOfRem(rem, {
    multiplier: rootElementFontSize,
    listOfAcceptedRemValues,
    printRes: false,
  })

/**
 * @description Prototype style for js String
 * @import import './Shared/ptototypes'
 */
String.prototype.getPx = function () {
  const remString = this.valueOf() as string
  return getPxOfRem(remString, {
    multiplier: 16,
    listOfAcceptedRemValues,
    printRes: false,
  })
}

/**
 * @import import { styleGlobal } from '../Styles/styleGlobal'
 */
export const styleGlobal = StyleSheet.create({
  typography: {
    fontFamily: 'Roboto-Regular', // San Francisco Font, Roboto, Arial, Poppins, Verdana, tahoma, verdana, arial, sans-serif' lucida grande
    fontSize: '1rem'.getPx(),
    fontWeight: '400',
  },
  h1: {
    fontSize: '2rem'.getPx(),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '1.5rem'.getPx(),
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '1.25rem'.getPx(),
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '1rem'.getPx(),
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '0.875rem'.getPx(),
    fontWeight: 'bold',
  },
  h6: {
    fontSize: '0.75rem'.getPx(),
    fontWeight: 'bold',
  },
  norm: {
    fontSize: '1rem'.getPx(),
    fontWeight: '400',
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    flex: 0,
  },
})

interface DebugLayoutType {
  (borderColor: string, backgroundColor?: string): {
    borderColor: string
    borderStyle: 'solid' | 'dotted' | 'dashed' | undefined
    borderWidth: number
    backgroundColor: string
  }
}

export const debugLayout: DebugLayoutType = (
  borderColor: string,
  backgroundColor: string = 'white'
) => ({
  borderColor,
  borderStyle: 'solid',
  borderWidth: 3,
  backgroundColor,
})
