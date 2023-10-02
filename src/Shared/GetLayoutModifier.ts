export type GetLayoutModifierThisType = {
  modalContentMargin: number | undefined
  buttonTop: number | undefined
  buttonLeft: number | undefined
  buttonRight: number | undefined
}

interface GetLayoutModifierType {
  (
    this: GetLayoutModifierThisType,
    deviceTypeIn: string,
    options?: { printRes: boolean }
  ): any
}

/**
 * @description Function to GetLayoutModifier
 * @import import { GetLayoutModifier } from './GetLayoutModifier'
 */

export const GetLayoutModifier: any = function (
  this: GetLayoutModifierThisType,
  deviceTypeIn: string,
  options?: { printRes: boolean }
) {
  this.modalContentMargin = '3rem'.getPx()
  this.buttonTop = '0.5rem'.getPx()
  this.buttonLeft = '1rem'.getPx()
  this.buttonRight = '1rem'.getPx()

  const objExec: Record<string, any> = {
    xsDevice() {
      this.modalContentMargin = 0
    },
    smDevice() {
      this.modalContentMargin = '2rem'.getPx()
      this.buttonTop = '0.25rem'.getPx()
      this.buttonLeft = '0.5rem'.getPx()
      this.buttonRight = '0.5rem'.getPx()
    },
    mdDevice() {
      this.buttonTop = '0.75rem'.getPx()
    },
    lgDevice() {
      this.buttonTop = '1rem'.getPx()
    },
    xlDevice() {
      this.buttonTop = '1rem'.getPx()
    },
  }
  objExec[deviceTypeIn]

  if (options?.printRes) {
    console.log('GetLayoutModifier', 'this', this)
  }
}
