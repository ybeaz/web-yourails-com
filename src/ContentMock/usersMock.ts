import { UserType } from '../@types/UserType'

export const users: UserType[] = [
  {
    id: '1',
    username: '@rome_sfba2',
    nameFirst: 'Roman',
    nameLast: 'Ches',
    uriAvatar: 'https://yourails.com/images/_VVS3415-crop-4k.jpg',
    phones: ['415-650-9893'],
    emails: ['t3531350@yahoo.com'],
    messengers: [{ name: 'Telegram', username: '@rome_sfba2' }],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Full Stack Developer', 'Machine Learning'],
    summary:
      '\
Full Stack Engineer with 12+ years of experience: a broad overview from MERN to LAMP, from AWS CDK to AI and Machine Learning.\n\
Frontend and backend Javascript, Typescript, ES6, 4 in React-Native, 8 in React.js, Redux, GraphQL, REST API, Node.js, AWS serveless: CDK, CloudFront, Lambda, API Gateway, Python, AI-ML: a broad outlook from MERN design patterns to LAMP OOP and focus on product requirements\n\
ML and AI include Tensorflow, Keras, NumPy, Pandas, SciPy, Matplotlib, PyTorch, AWS, API\n\
',
  },
  {
    id: '2',
    username: '@smiddist',
    nameFirst: 'Dmitrii',
    nameLast: 'Ches',
    uriAvatar: 'https://yourails.com/images/sphinx-01.jpg',
    phones: ['415-340-9293'],
    emails: ['smiddist@gmail.com'],
    messengers: [],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Electrician', 'Carpenter'],
    summary: '',
  },
]
