import { AffinityGroup, Profile } from "../server";
import mockAffinityGroups from "./affinity-groups.json";
import mockSearchResults from "./search-results.json";
import mockProfiles from "./profiles.json";
import mockSurvey from "./survey.json";
import mockSurveyQuestions from "./survey-questions.json";
import mockArticles from "./articles.json";
import mockFeedbackMutation from "./feedback-mutation.json";
import mockBatchGetFeedback from "./batch-get-feedback.json";
import {
  UserSurveyInput,
  RateType,
  ArticleContentType,
  MutationResponse,
  FeedbackInput,
  Feedback,
} from "../../src/types/graphql";

// SEARCH
export const generateSearchResults = (arg: { query: string }) => {
  return mockSearchResults.filter((sr) =>
    sr.title.toLowerCase().includes(arg.query.toLowerCase())
  );
};

// AFFINITY GROUPS
export const generateAffinityGroups = (): AffinityGroup[] => {
  return mockAffinityGroups;
};

export const generateAffinityGroup = (arg: {
  id: string;
}): AffinityGroup | undefined => {
  return mockAffinityGroups.find((ag) => ag.id === arg.id);
};

export const getAffinityGroupAndSignUp = (arg: {
  id: string;
  hasJoined: boolean;
}): AffinityGroup | undefined => {
  let affinityGroup = mockAffinityGroups.find((ag) => ag.id === arg.id);

  if (affinityGroup) {
    affinityGroup.hasJoined = arg.hasJoined;
  }

  return affinityGroup;
};

// PROFILE
export const generateProfile = (): Profile => {
  return mockProfiles;
};

export const getProfileAndChangeEmail = (arg: {
  email: string;
}): Profile | undefined => {
  let profile = mockProfiles;
  profile.email = arg.email;

  return profile;
};

export const getProfileAndEditAffinityGroups = ({
  groups,
}: {
  groups: AffinityGroup[];
}) => {
  let profile = mockProfiles;
  let groupsMap = new Map();
  for (let group of groups) {
    groupsMap.set(group.id, group.hasJoined);
  }

  profile.affinityGroups.forEach((ag) => (ag.hasJoined = groupsMap.get(ag.id)));
  return profile;
};

// SURVEY
export const generateSurvey = () => {
  return mockSurveyQuestions;
};

export const createSurvey = ({
  input,
}: {
  input: UserSurveyInput;
}): MutationResponse => {
  return mockSurvey as any;
};

//ARTICLE
export const generateArticle = (arg: { articleId: string }) => {
  return mockArticles.find((article) => article.articleId === arg.articleId);
};

export const batchGetFeedback = (ids: string[]): Feedback[] => {
  return mockBatchGetFeedback as Feedback[];
};

export const createFeedback = ({
  input,
}: {
  input: FeedbackInput;
}): Feedback => {
  return mockBatchGetFeedback[1] as Feedback;
};

export const deleteFeedback = (contentId: string): MutationResponse => {
  return mockFeedbackMutation as MutationResponse;
};

//! Delete
export const rateArticle = ({
  articleId,
  rating,
}: {
  articleId: string;
  rating: RateType;
}) => {
  let article = mockArticles.find((article) => article.articleId === articleId);

  if (article) {
    if (article.likes === rating) {
      article.likes = "NEUTRAL";
    } else {
      article.likes = rating;
    }
  }

  return article;
};
