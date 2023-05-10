import crypto from 'crypto'

export enum HashFunctionType {
  'sha1' = 'sha1',
  'sha256' = 'sha256',
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

    if (hashFunction)
      output = crypto
        .createHash(hashFunction)
        .update(output, 'utf8')
        .digest('hex')

    return output
  }
