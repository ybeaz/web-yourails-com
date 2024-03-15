import { getPreproccedMessages } from '../getPreproccedMessages'
import { messages, messagesPreprocceced } from '../__mocks__/messagesMock'

/**
 * @test yarn jest getPreproccedMessages.test
 */
describe('Test function getPreproccedMessages', () => {
  it('test', () => {
    const userHostID = '0'
    const outputed = getPreproccedMessages(messages, userHostID)
    const expected = messagesPreprocceced

    expect(outputed).toEqual(expected)
  })
})
