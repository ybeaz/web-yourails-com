import { join } from "path";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import {
  generateAffinityGroups,
  generateAffinityGroup,
  generateSearchResults,
  getAffinityGroupAndSignUp,
  generateProfile,
  getProfileAndChangeEmail,
  getProfileAndEditAffinityGroups,
  generateSurvey,
  createSurvey,
  generateArticle,
  rateArticle,
  createFeedback,
  deleteFeedback,
  batchGetFeedback,
} from "./mocks/data";
import {
  Card,
  RateType,
  UserSurveyAnswer,
  UserSurveyInput,
  ArticleContentType,
  MutationResponse,
  FeedbackInput,
  Feedback,
} from "../src/types/graphql";

const typeDefs = readFileSync(join(__dirname, "schema.graphql")).toString(
  "utf-8"
);

export type AffinityGroup = {
  id: string;
  name: string;
  nameTranslationKey: string;
  description: string;
  descriptionTranslationKey: string;
  link: string;
  logo: string;
  logoAltText: string;
  logoAltTextTranslationKey: string;
  hasJoined: boolean;
  isInterestList: boolean;
  active: boolean;
  cards: Card[];
};

export type ProfileAffinityGroup = {
  id: string;
  logo: string;
  logoAltText: string;
  active: boolean;
  hasJoined: boolean;
};

export type SearchResult = {
  id: string;
  title: string;
  type: string;
  link: string;
  description: string;
};

export type Profile = {
  alias: string;
  email: string;
  affinityGroups: ProfileAffinityGroup[];
};

export type UserSurvey = {
  surveyAnswers: UserSurveyAnswer[];
};

export type Article = {
  articleId: string;
  title?: string | undefined;
  content: {
    order: number;
    text: string;
    type: ArticleContentType | string;
    url: string;
    description?: string | undefined | null;
  }[];
  likes: RateType | string | undefined | null;
  tags: string[];
};

const resolvers = {
  Query: {
    getAffinityGroups: () => generateAffinityGroups(),
    getAffinityGroup: (
      _: unknown,
      { id }: { id: string }
    ): AffinityGroup | undefined => generateAffinityGroup({ id }),
    getSearchResults: (
      _: unknown,
      { query }: { query: string }
    ): SearchResult[] | undefined => generateSearchResults({ query }),
    getProfile: (): Profile | undefined => generateProfile(),
    getSurvey: () => generateSurvey(),
    batchGetFeedback: (_: unknown, { ids }: { ids: string[] }): Feedback[] =>
      batchGetFeedback(ids),
    getArticle: (
      _: unknown,
      { articleId }: { articleId: string }
    ): Article | undefined => generateArticle({ articleId }),
  },
  Mutation: {
    signUpToAffinityGroup: (
      _: unknown,
      { id, hasJoined }: { id: string; hasJoined: boolean }
    ): AffinityGroup | undefined =>
      getAffinityGroupAndSignUp({ id, hasJoined }),
    changeEmail: (
      _: unknown,
      { email }: { email: string }
    ): Profile | undefined => getProfileAndChangeEmail({ email }),
    editUserAffinityGroups: (
      _: unknown,
      { groups }: { groups: AffinityGroup[] }
    ): Profile | undefined => getProfileAndEditAffinityGroups({ groups }),
    createSurvey: (
      _: unknown,
      { input }: { input: UserSurveyInput }
    ): MutationResponse => createSurvey({ input }),
    createFeedback: (
      _: unknown,
      { input }: { input: FeedbackInput }
    ): Feedback => createFeedback({ input }),
    deleteFeedback: (_: unknown, contentId: string): MutationResponse =>
      deleteFeedback(contentId),
    rateArticle: (
      _: unknown,
      { articleId, rating }: { articleId: string; rating: RateType }
    ): Article | undefined => rateArticle({ articleId, rating }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
  mockEntireSchema: false,
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
