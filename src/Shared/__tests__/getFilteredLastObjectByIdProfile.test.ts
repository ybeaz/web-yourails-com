import { getFilteredLastObjectByIdProfile } from '../getFilteredLastObjectByIdProfile'

const consoleDirOptions = {
  showHidden: true,
  depth: null,
  showPrototypes: true,
}

/**
 * @test yarn jest getFilteredLastObjectByIdProfile.test
 */
describe('Test function getFilteredLastObjectByIdProfile', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        input: {
          messages: [
            { idMessage: 'xxx1', idProfile: 'yyy1' },
            { idMessage: 'xxx2', idProfile: 'yyy2' },
            { idMessage: 'xxx3', idProfile: 'yyy1' },
            { idMessage: 'xxx3', idProfile: 'yyy2' },
            { idMessage: 'xxx4', idProfile: 'yyy2' },
          ],
          idProfile: 'yyy2',
        },
        expected: [
          { idMessage: 'xxx1', idProfile: 'yyy1' },
          { idMessage: 'xxx2', idProfile: 'yyy2' },
          { idMessage: 'xxx3', idProfile: 'yyy1' },
          { idMessage: 'xxx3', idProfile: 'yyy2' },
        ],
      },
      {
        isActive: true,
        input: {
          messages: [
            { idMessage: 'xxx1', idProfile: 'yyy1' },
            { idMessage: 'xxx2', idProfile: 'yyy2' },
            { idMessage: 'xxx3', idProfile: 'yyy1' },
            { idMessage: 'xxx3', idProfile: 'yyy2' },
            { idMessage: 'xxx4', idProfile: 'yyy2' },
            { idMessage: 'xxx5', idProfile: 'yyy1' },
          ],
          idProfile: 'yyy2',
        },
        expected: [
          { idMessage: 'xxx1', idProfile: 'yyy1' },
          { idMessage: 'xxx2', idProfile: 'yyy2' },
          { idMessage: 'xxx3', idProfile: 'yyy1' },
          { idMessage: 'xxx3', idProfile: 'yyy2' },
          { idMessage: 'xxx5', idProfile: 'yyy1' },
        ],
      },
      {
        isActive: true,
        input: {
          messages: [
            { idMessage: 'xxx1', idProfile: 'yyy1' },
            { idMessage: 'xxx2', idProfile: 'yyy3' },
            { idMessage: 'xxx3', idProfile: 'yyy1' },
            { idMessage: 'xxx3', idProfile: 'yyy3' },
            { idMessage: 'xxx4', idProfile: 'yyy3' },
          ],
          idProfile: 'yyy2',
        },
        expected: [
          { idMessage: 'xxx1', idProfile: 'yyy1' },
          { idMessage: 'xxx2', idProfile: 'yyy3' },
          { idMessage: 'xxx3', idProfile: 'yyy1' },
          { idMessage: 'xxx3', idProfile: 'yyy3' },
          { idMessage: 'xxx4', idProfile: 'yyy3' },
        ],
      },
    ]

    tests.forEach((test: any) => {
      const { isActive, input, expected } = test
      const { messages, idProfile } = input

      if (isActive) {
        const outputed = getFilteredLastObjectByIdProfile(messages, idProfile)

        // console.info('getFilteredLastObjectByIdProfile [21]', { outputed })

        expect(outputed).toEqual(expected)
      }
    })
  })
})
