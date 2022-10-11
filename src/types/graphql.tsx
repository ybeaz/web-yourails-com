/* eslint-disable */
//
// -------------------------------------------------------------------------------- 
// Do not edit this File manually. Run "yarn codegen" to generate types automatically 
// ================================================================================ 
// 
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe?: Maybe<MutationResponse>;
  deleteRecipe?: Maybe<MutationResponse>;
  updateRecipe?: Maybe<MutationResponse>;
};


export type MutationCreateRecipeArgs = {
  recipeInput: RecipeInput;
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String'];
};


export type MutationUpdateRecipeArgs = {
  recipeInput: RecipeInput;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  details?: Maybe<Scalars['String']>;
  mutationStatus: MutationStatus;
};

export enum MutationStatus {
  Error = 'ERROR',
  Ok = 'OK'
}

export type Query = {
  __typename?: 'Query';
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryRecipesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ingredients?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type RecipeInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  ingredients?: InputMaybe<Array<Array<Scalars['String']>>>;
  title: Scalars['String'];
  type: RecipeType;
};

export enum RecipeType {
  Common = 'COMMON',
  Vegan = 'VEGAN'
}

export type GetRecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', id: string, title: string, description?: string | null, ingredients?: Array<string> | null } | null };


export const GetRecipeDocument = gql`
    query GetRecipe($id: String!) {
  recipe(id: $id) {
    id
    title
    description
    ingredients
  }
}
    `;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
      }
export function useGetRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
        }
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeQueryResult = Apollo.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;