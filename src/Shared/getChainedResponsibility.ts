type GetChainedResponsibilityOutType<T> = {
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
  let res = entity || []

  const outputObj: GetChainedResponsibilityOutType<any[]> = {
    exec(func: (...params: any) => any, params?: any[]) {
      const paramsNext: any[] =
        params && params.length ? [res, ...params] : [res]
      res = res && res.length ? func.apply(null, paramsNext) : []
      return outputObj
    },
    done() {
      return res
    },
  }
  if (options?.printRes) {
    console.log('getChainedResponsibility', 'res', res)
  }

  return outputObj
}
