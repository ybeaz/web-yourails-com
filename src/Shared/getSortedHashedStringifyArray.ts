import cryptoJS from 'crypto-js'

export enum HashFunctionType {
  'SHA1' = 'SHA1',
  'SHA256' = 'SHA256',
}

interface GetSortedHashedStringifyArrayType {
  (arr: any[], options?: { hashFunction?: HashFunctionType }): string
}

/**
 * @description Function to return sorted and optionally hashed array
 * @link https://stackoverflow.com/a/43232849/4791116
 * @link https://nodejs.org/api/crypto.html
 * @import import { getSortedHashedStringifyArray, HashFunctionType } from '../../../Shared/getSortedHashedStringifyArray'
 */

export const getSortedHashedStringifyArray: GetSortedHashedStringifyArrayType =
  (arr, options = { hashFunction: undefined }) => {
    const { hashFunction } = options
    let output = JSON.stringify(arr.sort((a, b) => a.localeCompare(b)))

    if (hashFunction) output = cryptoJS[hashFunction](output).toString()

    return output
  }
