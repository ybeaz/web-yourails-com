export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** Date custom scalar type */
    Date: {
        input: any;
        output: any;
    };
};
export type AddDocumentInputGraphql = {
    capture: Scalars['String']['input'];
    contentIDs: Array<Scalars['String']['input']>;
    courseID: Scalars['ID']['input'];
    description?: InputMaybe<Scalars['String']['input']>;
    env: Scalars['String']['input'];
    lang: Scalars['String']['input'];
    meta: MetaInputGraphql;
    moduleIDs: Array<Scalars['String']['input']>;
    userName: UserNameInputGraphql;
};
export type AvatarSizeGraphgl = {
    __typename?: 'AvatarSizeGraphgl';
    /** height */
    height?: Maybe<Scalars['Float']['output']>;
    /** width */
    width?: Maybe<Scalars['Float']['output']>;
};
export type ChoiceModelGraphql = {
    __typename?: 'ChoiceModelGraphql';
    finish_reason: Scalars['String']['output'];
    index: Scalars['Int']['output'];
    message: MessageModelGraphql;
};
export type ComparisonFields = {
    /** user ID */
    userIdAuth?: InputMaybe<Scalars['ID']['input']>;
    /** user ID */
    userIdProfile?: InputMaybe<Scalars['ID']['input']>;
};
export type DocumentModelGraphql = {
    __typename?: 'DocumentModelGraphql';
    capture: Scalars['String']['output'];
    contentIDs: Array<Scalars['String']['output']>;
    courseID: Scalars['ID']['output'];
    creationDate: Scalars['Date']['output'];
    description?: Maybe<Scalars['String']['output']>;
    documentID: Scalars['ID']['output'];
    env: Scalars['String']['output'];
    ip: Scalars['String']['output'];
    lang: Scalars['String']['output'];
    meta: MetaObjectGraphql;
    moduleIDs: Array<Scalars['String']['output']>;
    pathName: Scalars['String']['output'];
    userName: UserNameObjectGraphql;
};
export type ImageDataOpenAiModelGraphql = {
    __typename?: 'ImageDataOpenAiModelGraphql';
    b64_json?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ImageOpenAiInputGraphql = {
    n: Scalars['Int']['input'];
    prompt: Scalars['String']['input'];
    response_format?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
};
export type ImagesOpenAiModelGraphql = {
    __typename?: 'ImagesOpenAiModelGraphql';
    created: Scalars['Int']['output'];
    data: Array<ImageDataOpenAiModelGraphql>;
};
export type MessageAssistantInputGraphql = {
    messages: Array<MessageInputGraphql>;
    model: Scalars['String']['input'];
    temperature: Scalars['Float']['input'];
};
export type MessageAssistantModelGraphql = {
    __typename?: 'MessageAssistantModelGraphql';
    choices: Array<ChoiceModelGraphql>;
};
export type MessageInputGraphql = {
    content?: InputMaybe<Scalars['String']['input']>;
    role: Scalars['String']['input'];
};
export type MessageModelGraphql = {
    __typename?: 'MessageModelGraphql';
    content?: Maybe<Scalars['String']['output']>;
    role: Scalars['String']['output'];
};
export type MessengerGraphgl = {
    __typename?: 'MessengerGraphgl';
    /** name */
    name?: Maybe<Scalars['String']['output']>;
    /** profileName */
    profileName?: Maybe<Scalars['String']['output']>;
};
export type MetaInputGraphql = {
    email: Scalars['String']['input'];
    institution: Scalars['String']['input'];
    isSendingBcc: Scalars['Boolean']['input'];
    specName: Scalars['String']['input'];
    specTitle: Scalars['String']['input'];
};
export type MetaObjectGraphql = {
    __typename?: 'MetaObjectGraphql';
    email: Scalars['String']['output'];
    institution: Scalars['String']['output'];
    isSendingBcc: Scalars['Boolean']['output'];
    specName: Scalars['String']['output'];
    specTitle: Scalars['String']['output'];
};
export type Mutation = {
    __typename?: 'Mutation';
    addDocument: DocumentModelGraphql;
    addRecipe: RecipeModelGraphql;
    createTemplate: TemplateResponseExtendedGraphql;
    createUser: UserModelExtendedGraphql;
    deleteTemplate: TemplateResponseExtendedGraphql;
    deleteUser: UserModelExtendedGraphql;
    removeDocument: Scalars['Boolean']['output'];
    removeRecipe: Scalars['Boolean']['output'];
    updateTemplate: TemplateResponseExtendedGraphql;
    updateUser: UserModelExtendedGraphql;
};
export type MutationAddDocumentArgs = {
    addDocumentInputGraphql: AddDocumentInputGraphql;
};
export type MutationAddRecipeArgs = {
    newRecipeData: NewRecipeInputGraphql;
};
export type MutationCreateTemplateArgs = {
    templateInputGraphql: TemplateInputGraphql;
};
export type MutationCreateUserArgs = {
    userInputGraphql: UserInputGraphql;
};
export type MutationDeleteTemplateArgs = {
    templateId: Scalars['String']['input'];
};
export type MutationDeleteUserArgs = {
    userIdAuth: Scalars['String']['input'];
    userIdProfile: Scalars['String']['input'];
};
export type MutationRemoveDocumentArgs = {
    id: Scalars['String']['input'];
};
export type MutationRemoveRecipeArgs = {
    id: Scalars['String']['input'];
};
export type MutationUpdateTemplateArgs = {
    templateInputGraphql: TemplateInputGraphql;
};
export type MutationUpdateUserArgs = {
    userInputGraphql2: UserInputGraphql;
};
export type NewRecipeInputGraphql = {
    description?: InputMaybe<Scalars['String']['input']>;
    ingredients: Array<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
export type ProfileModelGraphql = {
    __typename?: 'ProfileModelGraphql';
    /** avatarSrc */
    avatarSize?: Maybe<AvatarSizeGraphgl>;
    /** avatarSrc */
    avatarSrc?: Maybe<Scalars['String']['output']>;
    /** contacts */
    contacts?: Maybe<Array<Scalars['String']['output']>>;
    /** disclaimer */
    disclaimer?: Maybe<Scalars['String']['output']>;
    /** emails */
    emails?: Maybe<Array<Scalars['String']['output']>>;
    /** profile ID */
    idProfile: Scalars['ID']['output'];
    /** socket ID */
    idSocket?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    idUser: Scalars['ID']['output'];
    /** imagePendingSrc */
    imagePendingSrc?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** locations */
    locations?: Maybe<Array<Scalars['String']['output']>>;
    /** messengers */
    messengers?: Maybe<Array<MessengerGraphgl>>;
    /** nameFirst */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** nameLast */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** pendingText */
    pendingText?: Maybe<Scalars['String']['output']>;
    /** phones */
    phones?: Maybe<Array<Scalars['String']['output']>>;
    /** default position profile in the list */
    position?: Maybe<Scalars['Float']['output']>;
    /** profile ID */
    profileName: Scalars['String']['output'];
    /** promptExamples */
    promptExamples?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSections */
    serviceSections?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSpecs */
    serviceSpecs?: Maybe<Array<Scalars['String']['output']>>;
    /** summary */
    summary?: Maybe<Scalars['String']['output']>;
};
export type Query = {
    __typename?: 'Query';
    findAllDocuments: Array<DocumentModelGraphql>;
    findDocument: DocumentModelGraphql;
    getImagesOpenAi: ImagesOpenAiModelGraphql;
    getMessageAssistant: MessageAssistantModelGraphql;
    getProfiles: Array<ProfileModelGraphql>;
    getRefreshedUserAuthAwsCognito: UserIdDataAwsCognitoGraphql;
    getRevokedUserAuthAwsCognito: UserIdDataAwsCognitoGraphql;
    getUserIdDataAwsCognito: UserIdDataAwsCognitoGraphql;
    readTemplates: Array<TemplateModelGraphql>;
    readUserAuth: UserModelExtendedGraphql;
    readUserProfile: UserModelExtendedGraphql;
    readUsers: UsersGraphql;
    recipe: RecipeModelGraphql;
    recipes: Array<RecipeModelGraphql>;
    sendEmailDocument: DocumentModelGraphql;
};
export type QueryFindAllDocumentsArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QueryFindDocumentArgs = {
    documentID: Scalars['String']['input'];
};
export type QueryGetImagesOpenAiArgs = {
    imageOpenAiInput: ImageOpenAiInputGraphql;
};
export type QueryGetMessageAssistantArgs = {
    messageAssistantInput: MessageAssistantInputGraphql;
};
export type QueryGetRefreshedUserAuthAwsCognitoArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql;
};
export type QueryGetRevokedUserAuthAwsCognitoArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql;
};
export type QueryGetUserIdDataAwsCognitoArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql;
};
export type QueryReadTemplatesArgs = {
    options: TemplateOptionsReadGraphql;
};
export type QueryReadUserAuthArgs = {
    userIdAuth: Scalars['String']['input'];
};
export type QueryReadUserProfileArgs = {
    userIdProfile: Scalars['String']['input'];
};
export type QueryReadUsersArgs = {
    options: ReadUsersOptions;
};
export type QueryRecipeArgs = {
    id: Scalars['String']['input'];
};
export type QueryRecipesArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QuerySendEmailDocumentArgs = {
    documentID: Scalars['String']['input'];
    sendBcc: Scalars['String']['input'];
    sendCc: Scalars['String']['input'];
    sendTo: Scalars['String']['input'];
};
export type ReadUsersOptions = {
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/eq/ */
    eq?: InputMaybe<Array<ComparisonFields>>;
    /** The option to search for active or not recods in user document */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/ne/ */
    ne?: InputMaybe<Array<ComparisonFields>>;
};
export type RecipeModelGraphql = {
    __typename?: 'RecipeModelGraphql';
    creationDate: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    ingredients: Array<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};
export type ResponseMessageGraphql = {
    __typename?: 'ResponseMessageGraphql';
    /** description message */
    message?: Maybe<Scalars['String']['output']>;
    /** status: success or failure */
    status?: Maybe<Scalars['String']['output']>;
};
export type Subscription = {
    __typename?: 'Subscription';
    documentAdded: DocumentModelGraphql;
    recipeAdded: RecipeModelGraphql;
};
export type TemplateInputGraphql = {
    /** template created date */
    templateDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** template closed date */
    templateDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** template updated date */
    templateDateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** template ID */
    templateId?: InputMaybe<Scalars['ID']['input']>;
};
export type TemplateMessageGraphql = {
    __typename?: 'TemplateMessageGraphql';
    /** description message */
    message?: Maybe<Scalars['String']['output']>;
    /** status: success or failure */
    status?: Maybe<Scalars['String']['output']>;
};
export type TemplateModelGraphql = {
    __typename?: 'TemplateModelGraphql';
    /** template created date */
    templateDateCreated?: Maybe<Scalars['Date']['output']>;
    /** template closed date */
    templateDateDeleted?: Maybe<Scalars['Date']['output']>;
    /** template updated date */
    templateDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** template ID */
    templateId?: Maybe<Scalars['ID']['output']>;
};
export type TemplateOptionsReadGraphql = {
    /** temporary name - value */
    param?: InputMaybe<Scalars['String']['input']>;
};
export type TemplateResponseExtendedGraphql = {
    __typename?: 'TemplateResponseExtendedGraphql';
    responseMessage: TemplateMessageGraphql;
    /** template created date */
    templateDateCreated?: Maybe<Scalars['Date']['output']>;
    /** template closed date */
    templateDateDeleted?: Maybe<Scalars['Date']['output']>;
    /** template updated date */
    templateDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** template ID */
    templateId?: Maybe<Scalars['ID']['output']>;
};
export type UserIdDataAwsCognitoGraphql = {
    __typename?: 'UserIdDataAwsCognitoGraphql';
    /** at hash */
    at_hash?: Maybe<Scalars['String']['output']>;
    /** The user pool app client that authenticated your user. Amazon Cognito renders the same value in the access token client_id claim */
    aud?: Maybe<Scalars['String']['output']>;
    /** The authentication time, in Unix time format, that your user completed authentication */
    auth_time?: Maybe<Scalars['Float']['output']>;
    /** An array of the names of user pool groups that have your user as a member */
    cognito_groups?: Maybe<Array<Scalars['String']['output']>>;
    /** The username of your user in your user pool */
    cognito_username?: Maybe<Scalars['String']['output']>;
    /** user's email */
    email?: Maybe<Scalars['String']['output']>;
    /** is email verified */
    email_verified?: Maybe<Scalars['Boolean']['output']>;
    /** The expiration time, in Unix time format, that your user's token expires */
    exp?: Maybe<Scalars['Float']['output']>;
    /** The issued-at time, in Unix time format, that Amazon Cognito issued your user's token */
    iat?: Maybe<Scalars['Float']['output']>;
    /** The identity provider that issued the token. The claim has the following format */
    iss?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the JWT */
    jti?: Maybe<Scalars['String']['output']>;
    /** message along with data */
    message: Scalars['String']['output'];
    /** A token-revocation identifier associated with your user's refresh token. Amazon Cognito references the origin_jti claim when it checks if you revoked your user's token with the Revoke endpoint or the RevokeToken API operation. When you revoke a token, Amazon Cognito invalidates all access and ID tokens with the same origin_jti value */
    origin_jti?: Maybe<Scalars['String']['output']>;
    /** preferred username */
    preferred_username?: Maybe<Scalars['String']['output']>;
    /** AWS refresh token from post-authorization workflow */
    refresh_token?: Maybe<Scalars['String']['output']>;
    /** A unique identifier (UUID), or subject, for the authenticated user. The username might not be unique in your user pool. The sub claim is the best way to identify a given user */
    sub?: Maybe<Scalars['ID']['output']>;
    /** The intended purpose of the token. In an ID token, its value is id */
    token_use?: Maybe<Scalars['String']['output']>;
};
export type UserIdDataAwsCognitoInputGraphql = {
    /** AWS code from authorisation workflow */
    code?: InputMaybe<Scalars['String']['input']>;
    /** AWS redirect_uri */
    redirect_uri?: InputMaybe<Scalars['String']['input']>;
    /** AWS refresh token from post-authorization workflow */
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
export type UserInputGraphql = {
    /** user avatar */
    userAvatar?: InputMaybe<Scalars['String']['input']>;
    /** user year of birthday */
    userBirthYear?: InputMaybe<Scalars['Float']['input']>;
    /** user email */
    userEmail?: InputMaybe<Scalars['String']['input']>;
    /** user gender */
    userGender?: InputMaybe<Scalars['String']['input']>;
    /** user ID */
    userIdAuth?: InputMaybe<Scalars['ID']['input']>;
    /** user short information */
    userInfoAbout?: InputMaybe<Scalars['String']['input']>;
    /** user speaking languages */
    userLanguages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user city location */
    userLocaleCity?: InputMaybe<Scalars['String']['input']>;
    /** user country location */
    userLocaleCountry?: InputMaybe<Scalars['String']['input']>;
    /** user login source */
    userLoginSource?: InputMaybe<Scalars['String']['input']>;
    /** user media */
    userMedia?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: InputMaybe<Scalars['String']['input']>;
    /** user first name */
    userNameFirst?: InputMaybe<Scalars['String']['input']>;
    /** user last name */
    userNameLast?: InputMaybe<Scalars['String']['input']>;
    /** user middle name */
    userNameMiddle?: InputMaybe<Scalars['String']['input']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['input'];
    /** user telephone number */
    userPhone?: InputMaybe<Scalars['Float']['input']>;
    /** user roles to perform actions */
    userRoles?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user timezone */
    userTimeZone?: InputMaybe<Scalars['String']['input']>;
    /** user web site */
    userWebLink?: InputMaybe<Scalars['String']['input']>;
};
export type UserModelExtendedGraphql = {
    __typename?: 'UserModelExtendedGraphql';
    responseMessage: ResponseMessageGraphql;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user closed date */
    userDateDeleted?: Maybe<Scalars['Date']['output']>;
    /** user updated date */
    userDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** user email */
    userEmail?: Maybe<Scalars['String']['output']>;
    /** user gender */
    userGender?: Maybe<Scalars['String']['output']>;
    /** user ID */
    userIdAuth?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    userIdProfile?: Maybe<Scalars['ID']['output']>;
    /** user short information */
    userInfoAbout?: Maybe<Scalars['String']['output']>;
    /** user speaking languages */
    userLanguages?: Maybe<Array<Scalars['String']['output']>>;
    /** user city location */
    userLocaleCity?: Maybe<Scalars['String']['output']>;
    /** user country location */
    userLocaleCountry?: Maybe<Scalars['String']['output']>;
    /** user timezone */
    userLoginSource?: Maybe<Scalars['String']['output']>;
    /** user media */
    userMedia?: Maybe<Array<Scalars['String']['output']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: Maybe<Scalars['String']['output']>;
    /** user first name */
    userNameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    userNameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    userNameMiddle?: Maybe<Scalars['String']['output']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['output'];
    /** user telephone number */
    userPhone?: Maybe<Scalars['Float']['output']>;
    /** user roles to perform actions */
    userRoles?: Maybe<Array<Scalars['String']['output']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: Maybe<Array<Scalars['String']['output']>>;
    /** user timezone */
    userTimeZone?: Maybe<Scalars['String']['output']>;
    /** user web site */
    userWebLink?: Maybe<Scalars['String']['output']>;
};
export type UserModelGraphql = {
    __typename?: 'UserModelGraphql';
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user closed date */
    userDateDeleted?: Maybe<Scalars['Date']['output']>;
    /** user updated date */
    userDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** user email */
    userEmail?: Maybe<Scalars['String']['output']>;
    /** user gender */
    userGender?: Maybe<Scalars['String']['output']>;
    /** user ID */
    userIdAuth?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    userIdProfile?: Maybe<Scalars['ID']['output']>;
    /** user short information */
    userInfoAbout?: Maybe<Scalars['String']['output']>;
    /** user speaking languages */
    userLanguages?: Maybe<Array<Scalars['String']['output']>>;
    /** user city location */
    userLocaleCity?: Maybe<Scalars['String']['output']>;
    /** user country location */
    userLocaleCountry?: Maybe<Scalars['String']['output']>;
    /** user timezone */
    userLoginSource?: Maybe<Scalars['String']['output']>;
    /** user media */
    userMedia?: Maybe<Array<Scalars['String']['output']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: Maybe<Scalars['String']['output']>;
    /** user first name */
    userNameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    userNameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    userNameMiddle?: Maybe<Scalars['String']['output']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['output'];
    /** user telephone number */
    userPhone?: Maybe<Scalars['Float']['output']>;
    /** user roles to perform actions */
    userRoles?: Maybe<Array<Scalars['String']['output']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: Maybe<Array<Scalars['String']['output']>>;
    /** user timezone */
    userTimeZone?: Maybe<Scalars['String']['output']>;
    /** user web site */
    userWebLink?: Maybe<Scalars['String']['output']>;
};
export type UserNameInputGraphql = {
    firstName: Scalars['String']['input'];
    lastName: Scalars['String']['input'];
    middleName: Scalars['String']['input'];
};
export type UserNameObjectGraphql = {
    __typename?: 'UserNameObjectGraphql';
    firstName: Scalars['String']['output'];
    lastName: Scalars['String']['output'];
    middleName: Scalars['String']['output'];
};
export type UsersGraphql = {
    __typename?: 'UsersGraphql';
    responseMessage: ResponseMessageGraphql;
    users: Array<UserModelGraphql>;
};
