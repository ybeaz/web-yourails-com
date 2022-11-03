import { join } from 'path'
import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { recipes } from './mockFunctions/recipes'
import { users } from './mockFunctions/users'
// import {
//   Card,
//   RateType,
//   UserSurveyAnswer,
//   UserSurveyInput,
//   ArticleContentType,
//   MutationResponse,
//   FeedbackInput,
//   Feedback,
// } from "../src/types/graphql";

const typeDefs = readFileSync(join(__dirname, 'schema.graphql')).toString(
  'utf-8'
)

const resolvers = {
  Query: {
    users,
    recipes,
  },
  // Mutation: {},
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
  mockEntireSchema: false,
})

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`)
})
