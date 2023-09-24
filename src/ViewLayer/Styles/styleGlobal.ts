import { StyleSheet } from 'react-native'

import { getPxOfRem } from '../../Shared/getPxOfRem'

const rootElementFontSize: number = 16
const listOfAcceptedRemValues: string[] = [
  '-0.75rem',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '0.875rem',
  '1.25rem',
  '1.5rem',
  '1rem',
  '2rem',
  '3rem',
  '4rem',
  '6rem',
  '10rem',
  '15rem',
]

/**
 * @description Function to translate css rem units into px number
 * @import import { getPx } from '../../Styles/styleGlobal'
 */
export const getPx = (rem: string) =>
  getPxOfRem(rem, {
    multiplier: rootElementFontSize,
    listOfAcceptedRemValues,
    printRes: false,
  })

/**
 * @import import { styleGlobal } from '../Styles/styleGlobal'
 */
export const styleGlobal = StyleSheet.create({
  typography: {
    fontFamily: 'Roboto-Regular', // San Francisco Font, Roboto, Arial, Poppins, Verdana, tahoma, verdana, arial, sans-serif' lucida grande
    fontSize: getPx('1rem'),
    fontWeight: '400',
  },
  h1: {
    fontSize: getPx('2rem'),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: getPx('1.5rem'),
    fontWeight: 'bold',
  },
  h3: {
    fontSize: getPx('1.25rem'),
    fontWeight: 'bold',
  },
  h4: {
    fontSize: getPx('1rem'),
    fontWeight: 'bold',
  },
  h5: {
    fontSize: getPx('0.875rem'),
    fontWeight: 'bold',
  },
  h6: {
    fontSize: getPx('0.75rem'),
    fontWeight: 'bold',
  },
  norm: {
    fontSize: getPx('1rem'),
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
  (borderColor: string): {
    borderColor: string
    borderStyle: 'solid' | 'dotted' | 'dashed' | undefined
    borderWidth: number
  }
}

export const debugLayout: DebugLayoutType = (borderColor: string) => ({
  borderColor,
  borderStyle: 'solid',
  borderWidth: 1,
})
