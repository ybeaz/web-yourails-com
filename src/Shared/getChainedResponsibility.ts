type GetChainedResponsibilityOutType<T> = {
  res: any
  exec: (
    func: (...params: any) => T,
    params?: any[]
  ) => GetChainedResponsibilityOutType<T>
  done: () => T
}

interface GetChainedResponsibilityType<T> {
  (
    entity: T,
    options?: { printRes: boolean }
  ): GetChainedResponsibilityOutType<T>
}

/**
 * @description Function to getChainedResponsibility
 * @import import { getChainedResponsibility } from './getChainedResponsibility'
 */

export const getChainedResponsibility: GetChainedResponsibilityType<any[]> = (
  entity,
  options
) => {
  const outputObj: GetChainedResponsibilityOutType<any[]> = {
    res: entity || [],
    exec(func: (...params: any) => any, params?: any[]) {
      const paramsNext: any[] =
        params && params.length ? [this.res, ...params] : [this.res]
      this.res = this.res && this.res.length ? func.apply(null, paramsNext) : []
      return outputObj
    },
    done() {
      return this.res
    },
  }

  if (options?.printRes) {
    console.log('getChainedResponsibility', 'res', outputObj.res)
  }

  return outputObj
}
