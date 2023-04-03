import { UserType } from '../@types/UserType'

export const users: UserType[] = [
  {
    id: 0,
    username: '@rome_sfba',
    nameFirst: 'Roman',
    nameLast: 'Cheskidov',
    uriAvatar: 'https://yourails.com/images/_VVS3415-crop-4k.jpg',
    phones: ['415-650-9893'],
    emails: ['t3531350@yahoo.com'],
    messengers: [{ name: 'Telegram', username: '@rome_sfba2' }],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Full Stack Developer', 'Machine Learning Engineer'],
    summary:
      'Full Stack programmer with 12+ years of experience with Javascript, Typescript, 4 in React-Native, 8 in React.js, Redux, GraphQL, REST API, Node.js, AWS, Python, AI-ML: a broad outlook from MERN design patterns to LAMP OOP and focus on product requirements',
  },
  {
    id: 1,
    username: '@smiddist',
    nameFirst: 'Dmitrii',
    nameLast: 'Cheskidov',
    uriAvatar: 'https://yourails.com/images/sphinx-01.jpg',
    phones: ['415-340-9293'],
    emails: ['smiddist@gmail.com'],
    messengers: [],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Handyman', 'Carpenter'],
    summary: '',
  },
]
