import { messages } from '../__mocks__/messagesMock'

import { getMessagesWithProfileActive } from '../getMessagesWithProfileActive'

/**
 * @test yarn jest getMessagesWithProfileActive.test
 */
describe('Test function getMessagesWithProfileActive', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '3',
          profileActiveID: '2',
        },
        expected: [
          {
            createdAt: 1673904347000,
            messageID: '0',
            conversationID: '2',
            profileID: '3',
            text: 'Hi! Need an electrician for some lighting fixtures.',
          },
          {
            createdAt: 1673904967000,
            messageID: '1',
            conversationID: '2',
            profileID: '2',
            text: 'Hey there! What are you thinking?',
          },
          {
            createdAt: 1673905580000,
            messageID: '3',
            conversationID: '2',
            profileID: '3',
            text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
          },
          {
            createdAt: 1673906187000,
            messageID: '4',
            conversationID: '2',
            profileID: '2',
            text: "Sure thing! What's your budget?",
          },
          {
            createdAt: 1673906807000,
            messageID: '5',
            conversationID: '2',
            profileID: '3',
            text: 'Around $1500, including everything.',
          },
          {
            createdAt: 1673907431000,
            messageID: '6',
            conversationID: '2',
            profileID: '2',
            text: 'Got it. When can I take a look at the space??',
          },
          {
            createdAt: 1673908047000,
            messageID: '7',
            conversationID: '2',
            profileID: '3',
            text: 'How is about this Saturday around the noon?',
          },
          {
            createdAt: 1673908667000,
            messageID: '8',
            conversationID: '2',
            profileID: '2',
            text: 'That works for me, see you then!',
          },
        ],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '2',
          profileActiveID: '3',
        },
        expected: [
          {
            createdAt: 1673904347000,
            messageID: '0',
            conversationID: '2',
            profileID: '3',
            text: 'Hi! Need an electrician for some lighting fixtures.',
          },
          {
            createdAt: 1673904967000,
            messageID: '1',
            conversationID: '2',
            profileID: '2',
            text: 'Hey there! What are you thinking?',
          },
          {
            createdAt: 1673905580000,
            messageID: '3',
            conversationID: '2',
            profileID: '3',
            text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
          },
          {
            createdAt: 1673906187000,
            messageID: '4',
            conversationID: '2',
            profileID: '2',
            text: "Sure thing! What's your budget?",
          },
          {
            createdAt: 1673906807000,
            messageID: '5',
            conversationID: '2',
            profileID: '3',
            text: 'Around $1500, including everything.',
          },
          {
            createdAt: 1673907431000,
            messageID: '6',
            conversationID: '2',
            profileID: '2',
            text: 'Got it. When can I take a look at the space??',
          },
          {
            createdAt: 1673908047000,
            messageID: '7',
            conversationID: '2',
            profileID: '3',
            text: 'How is about this Saturday around the noon?',
          },
          {
            createdAt: 1673908667000,
            messageID: '8',
            conversationID: '2',
            profileID: '2',
            text: 'That works for me, see you then!',
          },
        ],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '1',
          profileActiveID: '4',
        },
        expected: [
          {
            messageID: 'random_string_1',
            conversationID: '1',
            profileID: '4',
            createdAt: 1646145000000,
            text: 'Need a web app for appointment management.',
          },
          {
            messageID: 'random_string_2',
            conversationID: '1',
            profileID: '1',
            createdAt: 1646145300000,
            text: 'Details on how you want the app to work?',
          },
          {
            messageID: 'random_string_3',
            conversationID: '1',
            profileID: '4',
            createdAt: 1646145640000,
            text: 'Schedule, cancel, notifications. Show past appts in calendar view.',
          },
          {
            messageID: 'random_string_4',
            conversationID: '1',
            profileID: '1',
            createdAt: 1646145960000,
            text: 'Specific design or layout requirements?',
          },
          {
            messageID: 'random_string_5',
            conversationID: '1',
            profileID: '4',
            createdAt: 1646146300000,
            text: 'Clean, modern, easy to use.',
          },
          {
            messageID: 'random_string_6',
            conversationID: '1',
            profileID: '1',
            createdAt: 1646146620000,
            text: 'How many users?',
          },
          {
            messageID: 'random_string_7',
            conversationID: '1',
            profileID: '4',
            createdAt: 1646146980000,
            text: 'Around 50.',
          },
          {
            messageID: 'random_string_8',
            conversationID: '1',
            profileID: '1',
            createdAt: 1646147340000,
            text: 'Deadline for project?',
          },
          {
            messageID: 'random_string_9',
            conversationID: '1',
            profileID: '4',
            createdAt: 1646147700000,
            text: '3 months.',
          },
          {
            messageID: 'random_string_10',
            conversationID: '1',
            profileID: '1',
            createdAt: 1646148060000,
            text: 'Starting project, will keep you updated.',
          },
        ],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '1',
          profileActiveID: '1',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '1',
          profileActiveID: '9999',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: '1',
          profileActiveID: undefined,
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: undefined,
          profileActiveID: '4',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          profileHostID: undefined,
          profileActiveID: undefined,
        },
        expected: [],
      },
    ]

    tests.forEach((test: any) => {
      const { isActive, input, expected } = test
      if (isActive) {
        const outputed = getMessagesWithProfileActive(input)

        // console.info('getMessagesWithProfileActive.test [37]', {
        //   input,
        //   outputed,
        // })

        expect(outputed).toEqual(expected)
      }
    })
  })
})
