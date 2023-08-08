interface GetSetObjToLocalStorageType {
  (obj: any): void
}

/**
 * @description Function to getSetObjToLocalStorage
 * @example of getting item back: const itemValue = localStorage.getItem('itemName')
 * @import import { getSetObjToLocalStorage } from '../../../Shared/getSetObjToLocalStorage'
 */

export const getSetObjToLocalStorage: GetSetObjToLocalStorageType = obj => {
  Object.keys(obj).forEach(key => localStorage.setItem(key, obj[key]))
}
