import { getPreproccedMessages } from '../getPreproccedMessages'
import { messages, messagesPreprocceced } from '../../Constants/messagesMock'

/**
 * @test yarn jest getPreproccedMessages.test
 */
describe('Test function getPreproccedMessages', () => {
  it('test', () => {
    const idUserHost = '0'
    const outputed = getPreproccedMessages(messages, idUserHost)
    const expected = messagesPreprocceced

    console.info('getPreproccedMessages.test [11]', {
      outputed: outputed.slice(0, 1),
      expected: expected.slice(0, 1),
    })

    // expect(outputed).toEqual(expected)
  })
})
