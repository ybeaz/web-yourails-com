export type GetPxOfRemParamsType = string

export type GetPxOfRemResType = number

export interface GetPxOfRemType {
  (
    remString: GetPxOfRemParamsType,
    options?: {
      multiplier: number
      listOfAcceptedRemValues: string[]
      printRes: boolean
    }
  ): GetPxOfRemResType
}

/**
 * @description Function to getPxOfRem
 * @import import { getPxOfRem } from './getPxOfRem'
 */

export const getPxOfRem: GetPxOfRemType = (
  remString = '',
  options = { multiplier: 16, listOfAcceptedRemValues: [], printRes: false }
) => {
  const { multiplier, listOfAcceptedRemValues, printRes } = options

  if (
    listOfAcceptedRemValues.length &&
    !listOfAcceptedRemValues.find(item => item === remString)
  )
    console.error(
      'getPxOfRem [23]',
      `Please, add the used rem value ${remString} to the accepted list in the file src/ViewLayer/Styles/styleGlobal.ts`
    )

  const remArr = remString.split('rem')
  const res = remArr.length ? parseFloat(remArr[0]) * multiplier : 0

  if (printRes) {
    console.log('getPxOfRem', 'res', res)
  }

  return res | 0
}
