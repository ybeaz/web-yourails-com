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
          idProfileHost: '3',
          idProfileActive: '2',
        },
        expected: [
          {
            createdAt: 1673904347000,
            idMessage: '0',
            idConversation: '2',
            profileID: '3',
            text: 'Hi! Need an electrician for some lighting fixtures.',
          },
          {
            createdAt: 1673904967000,
            idMessage: '1',
            idConversation: '2',
            profileID: '2',
            text: 'Hey there! What are you thinking?',
          },
          {
            createdAt: 1673905580000,
            idMessage: '3',
            idConversation: '2',
            profileID: '3',
            text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
          },
          {
            createdAt: 1673906187000,
            idMessage: '4',
            idConversation: '2',
            profileID: '2',
            text: "Sure thing! What's your budget?",
          },
          {
            createdAt: 1673906807000,
            idMessage: '5',
            idConversation: '2',
            profileID: '3',
            text: 'Around $1500, including everything.',
          },
          {
            createdAt: 1673907431000,
            idMessage: '6',
            idConversation: '2',
            profileID: '2',
            text: 'Got it. When can I take a look at the space??',
          },
          {
            createdAt: 1673908047000,
            idMessage: '7',
            idConversation: '2',
            profileID: '3',
            text: 'How is about this Saturday around the noon?',
          },
          {
            createdAt: 1673908667000,
            idMessage: '8',
            idConversation: '2',
            profileID: '2',
            text: 'That works for me, see you then!',
          },
        ],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: '2',
          idProfileActive: '3',
        },
        expected: [
          {
            createdAt: 1673904347000,
            idMessage: '0',
            idConversation: '2',
            profileID: '3',
            text: 'Hi! Need an electrician for some lighting fixtures.',
          },
          {
            createdAt: 1673904967000,
            idMessage: '1',
            idConversation: '2',
            profileID: '2',
            text: 'Hey there! What are you thinking?',
          },
          {
            createdAt: 1673905580000,
            idMessage: '3',
            idConversation: '2',
            profileID: '3',
            text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
          },
          {
            createdAt: 1673906187000,
            idMessage: '4',
            idConversation: '2',
            profileID: '2',
            text: "Sure thing! What's your budget?",
          },
          {
            createdAt: 1673906807000,
            idMessage: '5',
            idConversation: '2',
            profileID: '3',
            text: 'Around $1500, including everything.',
          },
          {
            createdAt: 1673907431000,
            idMessage: '6',
            idConversation: '2',
            profileID: '2',
            text: 'Got it. When can I take a look at the space??',
          },
          {
            createdAt: 1673908047000,
            idMessage: '7',
            idConversation: '2',
            profileID: '3',
            text: 'How is about this Saturday around the noon?',
          },
          {
            createdAt: 1673908667000,
            idMessage: '8',
            idConversation: '2',
            profileID: '2',
            text: 'That works for me, see you then!',
          },
        ],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: '1',
          idProfileActive: '4',
        },
        expected: [
          {
            idMessage: 'random_string_1',
            idConversation: '1',
            profileID: '4',
            createdAt: 1646145000000,
            text: 'Need a web app for appointment management.',
          },
          {
            idMessage: 'random_string_2',
            idConversation: '1',
            profileID: '1',
            createdAt: 1646145300000,
            text: 'Details on how you want the app to work?',
          },
          {
            idMessage: 'random_string_3',
            idConversation: '1',
            profileID: '4',
            createdAt: 1646145640000,
            text: 'Schedule, cancel, notifications. Show past appts in calendar view.',
          },
          {
            idMessage: 'random_string_4',
            idConversation: '1',
            profileID: '1',
            createdAt: 1646145960000,
            text: 'Specific design or layout requirements?',
          },
          {
            idMessage: 'random_string_5',
            idConversation: '1',
            profileID: '4',
            createdAt: 1646146300000,
            text: 'Clean, modern, easy to use.',
          },
          {
            idMessage: 'random_string_6',
            idConversation: '1',
            profileID: '1',
            createdAt: 1646146620000,
            text: 'How many users?',
          },
          {
            idMessage: 'random_string_7',
            idConversation: '1',
            profileID: '4',
            createdAt: 1646146980000,
            text: 'Around 50.',
          },
          {
            idMessage: 'random_string_8',
            idConversation: '1',
            profileID: '1',
            createdAt: 1646147340000,
            text: 'Deadline for project?',
          },
          {
            idMessage: 'random_string_9',
            idConversation: '1',
            profileID: '4',
            createdAt: 1646147700000,
            text: '3 months.',
          },
          {
            idMessage: 'random_string_10',
            idConversation: '1',
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
          idProfileHost: '1',
          idProfileActive: '1',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: '1',
          idProfileActive: '9999',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: '1',
          idProfileActive: undefined,
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: undefined,
          idProfileActive: '4',
        },
        expected: [],
      },
      {
        isActive: true,
        input: {
          messages,
          idProfileHost: undefined,
          idProfileActive: undefined,
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
