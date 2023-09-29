/**
 * @description Funciton to merge "right" array with arrInput (with arrInput priority)
 */

export const getUpdatedArrByArrInput: Function = (
  arr: any[],
  arrInput: any[],
  updateByProp: string
): any[] => {
  if (arr.length === 0) return []
  if (arrInput.length === 0) return arr

  const arrFiltered = arr.filter(
    item => !!arrInput.find(item2 => item2[updateByProp] !== item[updateByProp])
  )

  return [...arrFiltered, ...arrInput]
}
