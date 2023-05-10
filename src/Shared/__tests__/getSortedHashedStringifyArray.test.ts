import {
  getSortedHashedStringifyArray,
  HashFunctionType,
} from '../getSortedHashedStringifyArray'

/**
 * @test yarn jest getSortedHashedStringifyArray.test
 */
describe('Test function getSortedHashedStringifyArray', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        input: {
          arr: ['1', '3'],
          options: { hashFunction: HashFunctionType['sha256'] },
        },
        expected:
          'de94d569f18fb07d9d1d0dad9d75457673b3039b8ccc2886f1138eb7d8c6a2bf',
      },
      {
        isActive: true,
        input: {
          arr: ['3', '1'],
          options: { hashFunction: HashFunctionType['sha256'] },
        },
        expected:
          'de94d569f18fb07d9d1d0dad9d75457673b3039b8ccc2886f1138eb7d8c6a2bf',
      },
      {
        isActive: true,
        input: {
          arr: ['1', '3'],
          options: { hashFunction: HashFunctionType['sha1'] },
        },
        expected: '16eaa2d059b19456c9205cf4d7abe0bfbf4cfdaa',
      },
      {
        isActive: true,
        input: {
          arr: ['3', '1'],
          options: { hashFunction: HashFunctionType['sha1'] },
        },
        expected: '16eaa2d059b19456c9205cf4d7abe0bfbf4cfdaa',
      },
    ]

    tests.forEach((test: any) => {
      const {
        isActive,
        input: { arr, options },
        expected,
      } = test
      if (isActive) {
        const outputed = getSortedHashedStringifyArray(arr, options)

        // console.info('getTemplat [21]', { outputed })

        expect(outputed).toEqual(expected)
      }
    })
  })
})
