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
export type AvatarSizeType = {
    __typename?: 'AvatarSizeType';
    /** height */
    height?: Maybe<Scalars['Float']['output']>;
    /** width */
    width?: Maybe<Scalars['Float']['output']>;
};
export type ChoiceType = {
    __typename?: 'ChoiceType';
    finish_reason: Scalars['String']['output'];
    index: Scalars['Int']['output'];
    message: MessageChoiceType;
};
export type CollectionUpdateStatusType = {
    __typename?: 'CollectionUpdateStatusType';
    /** templates ID */
    collectionName?: Maybe<Scalars['ID']['output']>;
    /** collection updated date */
    dateUpdated?: Maybe<Scalars['Float']['output']>;
    /** status > whether the collection is updated successfully */
    statusUpdated: Scalars['Boolean']['output'];
};
export type ComparisonFields = {
    /** user ID */
    userIdAuth?: InputMaybe<Scalars['ID']['input']>;
    /** user ID */
    userIdProfile?: InputMaybe<Scalars['ID']['input']>;
};
export declare enum CompetencyContentType {
    CompetencyTagType = "CompetencyTagType",
    ProfileType = "ProfileType",
    ProjectType = "ProjectType"
}
export type CompetencyTagType = {
    __typename?: 'CompetencyTagType';
    /** competency ID */
    competencyID: Scalars['ID']['output'];
    /** contentType */
    contentType: CompetencyContentType;
    /** iconLibrary */
    iconLibrary?: Maybe<Scalars['String']['output']>;
    /** iconName */
    iconName?: Maybe<Scalars['String']['output']>;
    /** linkHref */
    linkHref?: Maybe<Scalars['String']['output']>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
    /** section */
    section?: Maybe<Scalars['String']['output']>;
    /** title */
    title?: Maybe<Scalars['String']['output']>;
    /** tooltips */
    tooltips?: Maybe<Scalars['String']['output']>;
};
export type CompetencyTagsInputType = {
    /** competencyTags created date */
    competencyTagsDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags deleted date */
    competencyTagsDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags updated date */
    competencyTagsDateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags ID */
    idCompetencyTags?: InputMaybe<Scalars['ID']['input']>;
};
export type CompetencyTagsParamsReadType = {
    /** first item */
    profileID?: InputMaybe<Scalars['String']['input']>;
};
export type CourseEdgeType = {
    __typename?: 'CourseEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** Course */
    node?: Maybe<CourseType>;
};
export type CourseType = {
    __typename?: 'CourseType';
    /** course capture */
    capture: Scalars['String']['output'];
    /** courses ID */
    courseID: Scalars['ID']['output'];
    /** courses created date */
    dateCreated: Scalars['Float']['output'];
    /** courses deleted date */
    dateDeleted?: Maybe<Scalars['Float']['output']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['output'];
    /** course description */
    description: Scalars['String']['output'];
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** courses meta information */
    meta?: Maybe<MetaCourseType>;
    /** courses modules */
    modules?: Maybe<Array<ModuleType>>;
    /** courses passRate */
    passRate?: Maybe<Scalars['Float']['output']>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
    /** courses questionNumber */
    questionNumber: Scalars['Int']['output'];
};
export type CoursesConnectionType = {
    __typename?: 'CoursesConnectionType';
    /** [CoursesEdgeType] */
    edges?: Maybe<Array<CourseEdgeType>>;
    /** CoursesPageInfoType */
    pageInfo?: Maybe<CoursesPageInfoType>;
};
export type CoursesPageInfoType = {
    __typename?: 'CoursesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type CreateCourseInputType = {
    /** course capture */
    capture: Scalars['String']['input'];
    /** courses ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** course description */
    description: Scalars['String']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** courses meta information */
    meta?: InputMaybe<MetaCourseInputType>;
    /** courses modules */
    modules?: InputMaybe<Array<ModuleInputType>>;
    /** courses passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
    /** courses questionNumber */
    questionNumber: Scalars['Int']['input'];
};
export type CreateDocumentInputType = {
    /** capture */
    capture: Scalars['String']['input'];
    /** contentIDs */
    contentIDs: Array<Scalars['String']['input']>;
    /** courseID */
    courseID: Scalars['ID']['input'];
    /** description */
    description?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** language */
    language: Scalars['String']['input'];
    /** meta */
    meta: MetaDocumentInputType;
    /** moduleIDs */
    moduleIDs: Array<Scalars['String']['input']>;
    /** userID */
    profileID: Scalars['String']['input'];
    /** userName */
    profileProps: ProfilePropsInputType;
};
export type CreateTemplatesInputType = {
    /** templates created date */
    dateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** templates deleted date */
    dateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** templates updated date */
    dateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** templates ID */
    templatesID?: InputMaybe<Scalars['ID']['input']>;
};
export type DocumentEdgeType = {
    __typename?: 'DocumentEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** Document */
    node?: Maybe<DocumentType>;
};
export type DocumentType = {
    __typename?: 'DocumentType';
    /** course capture */
    capture: Scalars['String']['output'];
    /** contentIDs */
    contentIDs: Array<Scalars['String']['output']>;
    /** courseID */
    courseID: Scalars['ID']['output'];
    /** courses created date */
    dateCreated: Scalars['Float']['output'];
    /** courses deleted date */
    dateDeleted?: Maybe<Scalars['Float']['output']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['output'];
    /** course description */
    description: Scalars['String']['output'];
    /** documentID */
    documentID: Scalars['ID']['output'];
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** meta */
    meta: MetaDocumentType;
    /** moduleIDs */
    moduleIDs: Array<Scalars['String']['output']>;
    /** pathName of the document */
    pathName: Scalars['String']['output'];
    /** profileID */
    profileID: Scalars['ID']['output'];
    /** userName */
    profileProps: ProfilePropsType;
};
export type DocumentsConnectionType = {
    __typename?: 'DocumentsConnectionType';
    /** [DocumentsEdgeType] */
    edges?: Maybe<Array<DocumentEdgeType>>;
    /** DocumentsPageInfoType */
    pageInfo?: Maybe<DocumentsPageInfoType>;
};
export type DocumentsPageInfoType = {
    __typename?: 'DocumentsPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type ImageDataOpenAiType = {
    __typename?: 'ImageDataOpenAiType';
    b64_json?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ImageOpenAiInputType = {
    n: Scalars['Int']['input'];
    prompt: Scalars['String']['input'];
    response_format?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
};
export type ImagesOpenAiType = {
    __typename?: 'ImagesOpenAiType';
    created: Scalars['Int']['output'];
    data: Array<ImageDataOpenAiType>;
};
export type MessageAssistantInputType = {
    messages: Array<MessageChoiceInputType>;
    model: Scalars['String']['input'];
    temperature: Scalars['Float']['input'];
};
export type MessageAssistantType = {
    __typename?: 'MessageAssistantType';
    choices: Array<ChoiceType>;
};
export type MessageChoiceInputType = {
    content?: InputMaybe<Scalars['String']['input']>;
    role: Scalars['String']['input'];
};
export type MessageChoiceType = {
    __typename?: 'MessageChoiceType';
    content?: Maybe<Scalars['String']['output']>;
    role: Scalars['String']['output'];
};
export type MessengerType = {
    __typename?: 'MessengerType';
    /** name */
    name?: Maybe<Scalars['String']['output']>;
    /** profileName */
    profileName?: Maybe<Scalars['String']['output']>;
};
export type MetaCourseInputType = {
    /** course meta email */
    email: Scalars['String']['input'];
    /** course meta institution */
    institution: Scalars['String']['input'];
    /** course meta isSendingBcc */
    isSendingBcc?: Scalars['Boolean']['input'];
    /** course meta specName */
    specName: Scalars['String']['input'];
    /** course meta specTitle */
    specTitle: Scalars['String']['input'];
    /** courses meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content, its marketing features */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type MetaCourseType = {
    __typename?: 'MetaCourseType';
    /** course meta email */
    email: Scalars['String']['output'];
    /** course meta institution */
    institution: Scalars['String']['output'];
    /** course meta isSendingBcc */
    isSendingBcc: Scalars['Boolean']['output'];
    /** course meta specName */
    specName: Scalars['String']['output'];
    /** course meta specTitle */
    specTitle: Scalars['String']['output'];
    /** courses meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** courses meta tags: tags that characterises the course content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
};
export type MetaDocumentInputType = {
    /**  email */
    email?: InputMaybe<Scalars['String']['input']>;
    /** institution */
    institution: Scalars['String']['input'];
    /** isSendingBcc to the email */
    isSendingBcc?: Scalars['Boolean']['input'];
    /** specName */
    specName: Scalars['String']['input'];
    /** specTitle */
    specTitle?: InputMaybe<Scalars['String']['input']>;
    /** courses meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type MetaDocumentType = {
    __typename?: 'MetaDocumentType';
    /**  email */
    email?: Maybe<Scalars['String']['output']>;
    /** institution */
    institution: Scalars['String']['output'];
    /** isSendingBcc to the email */
    isSendingBcc: Scalars['Boolean']['output'];
    /** specName */
    specName: Scalars['String']['output'];
    /** specTitle */
    specTitle?: Maybe<Scalars['String']['output']>;
    /** courses meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** courses meta tags: tags that characterises the course content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
};
export type ModuleInputType = {
    /** course module capture */
    capture: Scalars['String']['input'];
    /** course module contentID */
    contentID: Scalars['ID']['input'];
    /** course module content type */
    contentType: Scalars['String']['input'];
    /** course module capture */
    description?: InputMaybe<Scalars['String']['input']>;
    /** course module duration */
    duration: Scalars['String']['input'];
    /** course module index */
    index: Scalars['Int']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** course module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
    /** course module questions */
    questions: Array<QuestionInputType>;
};
export type ModuleType = {
    __typename?: 'ModuleType';
    /** course module capture */
    capture: Scalars['String']['output'];
    /** course module contentID */
    contentID: Scalars['ID']['output'];
    /** course module content type */
    contentType: Scalars['String']['output'];
    /** course module capture */
    description?: Maybe<Scalars['String']['output']>;
    /** course module duration */
    duration: Scalars['String']['output'];
    /** course module index */
    index: Scalars['Int']['output'];
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** course module ID */
    moduleID: Scalars['ID']['output'];
    /** course module questions */
    questions: Array<QuestionType>;
};
export type Mutation = {
    __typename?: 'Mutation';
    addRecipe: RecipeType;
    createCompetencyTags: Array<CompetencyTagType>;
    createCourses: Array<CourseType>;
    createDocuments: Array<DocumentType>;
    createProfiles: Array<ProfileType>;
    createTemplates: Array<TemplatesType>;
    createUser: UserModelExtendedType;
    deactivateCourses: Array<Scalars['String']['output']>;
    deactivateDocuments: Array<Scalars['String']['output']>;
    deleteCompetencyTags: Array<CompetencyTagType>;
    deleteCourses: Array<Scalars['String']['output']>;
    deleteDocuments: Array<Scalars['String']['output']>;
    deleteProfiles: Array<ProfileType>;
    deleteTemplates: Array<Scalars['String']['output']>;
    deleteUser: UserModelExtendedType;
    removeRecipe: Scalars['Boolean']['output'];
    updateCollections: Array<CollectionUpdateStatusType>;
    updateCompetencyTags: Array<CompetencyTagType>;
    updateCourses: Array<CourseType>;
    updateProfiles: Array<ProfileType>;
    updateTemplates: Array<TemplatesType>;
    updateUser: UserModelExtendedType;
};
export type MutationAddRecipeArgs = {
    newRecipeData: NewRecipeInputType;
};
export type MutationCreateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationCreateCoursesArgs = {
    createCoursesInput: Array<CreateCourseInputType>;
};
export type MutationCreateDocumentsArgs = {
    createDocumentsInput: Array<CreateDocumentInputType>;
};
export type MutationCreateProfilesArgs = {
    profilesInput: ProfilesInputType;
};
export type MutationCreateTemplatesArgs = {
    createTemplatesInput: CreateTemplatesInputType;
};
export type MutationCreateUserArgs = {
    userInputType: UserInputType;
};
export type MutationDeactivateCoursesArgs = {
    deactivateCoursesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateDocumentsArgs = {
    deactivateDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteCompetencyTagsArgs = {
    idCompetencyTags: Scalars['String']['input'];
};
export type MutationDeleteCoursesArgs = {
    deleteCoursesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteDocumentsArgs = {
    deleteDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteProfilesArgs = {
    idProfiles: Scalars['String']['input'];
};
export type MutationDeleteTemplatesArgs = {
    deleteTemplatesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteUserArgs = {
    userIdAuth: Scalars['String']['input'];
    userIdProfile: Scalars['String']['input'];
};
export type MutationRemoveRecipeArgs = {
    id: Scalars['String']['input'];
};
export type MutationUpdateCollectionsArgs = {
    collections: Array<Scalars['String']['input']>;
};
export type MutationUpdateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationUpdateCoursesArgs = {
    updateCoursesInput: Array<UpdateCourseInputType>;
};
export type MutationUpdateProfilesArgs = {
    profilesInput: ProfilesInputType;
};
export type MutationUpdateTemplatesArgs = {
    updateTemplatesInput: UpdateTemplatesInputType;
};
export type MutationUpdateUserArgs = {
    userInputType2: UserInputType;
};
export type NewRecipeInputType = {
    description?: InputMaybe<Scalars['String']['input']>;
    ingredients: Array<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
export type OptionInputType = {
    /** course module question option label */
    label: Scalars['String']['input'];
    /** courses module question option ID */
    optionID?: InputMaybe<Scalars['ID']['input']>;
    /** course module question option status: true or false */
    status: Scalars['Boolean']['input'];
};
export type OptionType = {
    __typename?: 'OptionType';
    /** course module question option label */
    label: Scalars['String']['output'];
    /** courses module question option ID */
    optionID?: Maybe<Scalars['ID']['output']>;
    /** course module question option status: true or false */
    status: Scalars['Boolean']['output'];
};
export type ProfileEdgeType = {
    __typename?: 'ProfileEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** ProfileEdgeType */
    node?: Maybe<ProfileType>;
};
export declare enum ProfileNatureType {
    Bot = "bot",
    Company = "company",
    Human = "human"
}
export type ProfilePropsInputType = {
    nameFirst: Scalars['String']['input'];
    nameLast: Scalars['String']['input'];
    nameMiddle: Scalars['String']['input'];
};
export type ProfilePropsType = {
    __typename?: 'ProfilePropsType';
    nameFirst: Scalars['String']['output'];
    nameLast: Scalars['String']['output'];
    nameMiddle: Scalars['String']['output'];
};
export type ProfileType = {
    __typename?: 'ProfileType';
    /** avatarSrc */
    avatarSize?: Maybe<AvatarSizeType>;
    /** avatarSrc */
    avatarSrc?: Maybe<Scalars['String']['output']>;
    /** contacts */
    contacts?: Maybe<Array<Scalars['String']['output']>>;
    /** disclaimer */
    disclaimer?: Maybe<Scalars['String']['output']>;
    /** emails */
    emails?: Maybe<Array<Scalars['String']['output']>>;
    /** help */
    help?: Maybe<Scalars['String']['output']>;
    /** socket ID */
    idSocket?: Maybe<Scalars['ID']['output']>;
    /** imagePendingSrc */
    imagePendingSrc?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** locations */
    locations?: Maybe<Array<Scalars['String']['output']>>;
    /** messengers */
    messengers?: Maybe<Array<MessengerType>>;
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
    profileID: Scalars['ID']['output'];
    /** profile ID */
    profileName: Scalars['String']['output'];
    /** profileNature */
    profileNature: ProfileNatureType;
    /** promptExamples */
    promptExamples?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSections */
    serviceSections?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSpecs */
    serviceSpecs?: Maybe<Array<Scalars['String']['output']>>;
    /** summary */
    summary?: Maybe<Scalars['String']['output']>;
    /** user ID */
    userID: Scalars['ID']['output'];
};
export type ProfilesConnectionType = {
    __typename?: 'ProfilesConnectionType';
    /** [ProfileEdgeType] */
    edges?: Maybe<Array<ProfileEdgeType>>;
    /** ProfilesPageInfoType */
    pageInfo?: Maybe<ProfilesPageInfoType>;
};
export type ProfilesInputType = {
    /** profiles ID */
    idProfiles?: InputMaybe<Scalars['ID']['input']>;
    /** profiles created date */
    profilesDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** profiles deleted date */
    profilesDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** profiles updated date */
    profilesDateUpdated?: InputMaybe<Scalars['Date']['input']>;
};
export type ProfilesPageInfoType = {
    __typename?: 'ProfilesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type Query = {
    __typename?: 'Query';
    getAuthAwsCognitoUserData: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRefreshed: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRevoked: UserIdDataAwsCognitoType;
    getImagesOpenAi: ImagesOpenAiType;
    getMessageAssistant: MessageAssistantType;
    readCompetencyTags: Array<CompetencyTagType>;
    readCourses: Array<CourseType>;
    readCoursesAll: Array<CourseType>;
    readCoursesConnection: CoursesConnectionType;
    readDocuments: Array<DocumentType>;
    readDocumentsAll: Array<DocumentType>;
    readDocumentsConnection: DocumentsConnectionType;
    readProfiles: Array<ProfileType>;
    readProfilesConnection: ProfilesConnectionType;
    readRecipe: RecipeType;
    readRecipes: Array<RecipeType>;
    readTemplates: Array<TemplatesType>;
    readTemplatesAll: Array<TemplatesType>;
    readTemplatesConnection: TemplatesConnectionType;
    readUserAuth: UserModelExtendedType;
    readUserProfile: UserModelExtendedType;
    readUsers: UsersType;
    sendEmailDocument: DocumentType;
};
export type QueryGetAuthAwsCognitoUserDataArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetAuthAwsCognitoUserRefreshedArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetAuthAwsCognitoUserRevokedArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetImagesOpenAiArgs = {
    imageOpenAiInput: ImageOpenAiInputType;
};
export type QueryGetMessageAssistantArgs = {
    messageAssistantInput: MessageAssistantInputType;
};
export type QueryReadCompetencyTagsArgs = {
    params: CompetencyTagsParamsReadType;
};
export type QueryReadCoursesArgs = {
    readCoursesInput: Array<ReadCourseInputType>;
};
export type QueryReadCoursesConnectionArgs = {
    readCoursesConnectionInput: ReadCoursesConnectionInputType;
};
export type QueryReadDocumentsArgs = {
    readDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type QueryReadDocumentsConnectionArgs = {
    readDocumentsConnectionInput: ReadDocumentsConnectionInputType;
};
export type QueryReadProfilesConnectionArgs = {
    readProfilesConnectionInput: ReadProfilesConnectionInputType;
};
export type QueryReadRecipeArgs = {
    id: Scalars['String']['input'];
};
export type QueryReadRecipesArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QueryReadTemplatesArgs = {
    readTemplatesInput: Array<Scalars['String']['input']>;
};
export type QueryReadTemplatesConnectionArgs = {
    readTemplatesConnectionInput: ReadTemplatesConnectionInputType;
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
export type QuerySendEmailDocumentArgs = {
    documentID: Scalars['String']['input'];
    sendBcc: Scalars['String']['input'];
    sendCc: Scalars['String']['input'];
    sendTo: Scalars['String']['input'];
};
export type QuestionInputType = {
    /** course module question capture */
    capture: Scalars['String']['input'];
    /** course module question designType */
    designType?: InputMaybe<Scalars['String']['input']>;
    /** course module question isActive */
    isActive?: Scalars['Boolean']['input'];
    /** designType > multi */
    multi?: InputMaybe<Scalars['Boolean']['input']>;
    /** course module question options */
    options: Array<OptionInputType>;
    /** courses module question ID */
    questionID?: InputMaybe<Scalars['ID']['input']>;
    /** course module question topic */
    topic?: InputMaybe<Scalars['String']['input']>;
};
export type QuestionType = {
    __typename?: 'QuestionType';
    /** course module question capture */
    capture: Scalars['String']['output'];
    /** course module question designType */
    designType?: Maybe<Scalars['String']['output']>;
    /** course module question isActive */
    isActive: Scalars['Boolean']['output'];
    /** designType > multi */
    multi?: Maybe<Scalars['Boolean']['output']>;
    /** course module question options */
    options: Array<OptionType>;
    /** courses module question ID */
    questionID?: Maybe<Scalars['ID']['output']>;
    /** course module question topic */
    topic?: Maybe<Scalars['String']['output']>;
};
export type ReadCourseInputType = {
    /** course ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadCoursesConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortCoursesInputType>;
    /** courses meta stages: stages/ statuses/ envs to omit with that selection of the documents */
    stagesOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta stages: stages/ statuses/ envs to pick from the set of documents */
    stagesPick?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadDocumentsConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortDocumentsInputType>;
    /** courses meta stages: stages/ statuses/ envs to omit with that selection of the documents */
    stagesOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta stages: stages/ statuses/ envs to pick from the set of documents */
    stagesPick?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadProfilesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ReadTemplatesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ReadUsersOptions = {
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/eq/ */
    eq?: InputMaybe<Array<ComparisonFields>>;
    /** The option to search for active or not recods in user document */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/ne/ */
    ne?: InputMaybe<Array<ComparisonFields>>;
};
export type RecipeType = {
    __typename?: 'RecipeType';
    creationDate: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    ingredients: Array<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};
export type ResponseMessageType = {
    __typename?: 'ResponseMessageType';
    /** description message */
    message?: Maybe<Scalars['String']['output']>;
    /** status: success or failure */
    status?: Maybe<Scalars['String']['output']>;
};
export type SortCoursesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: Scalars['Float']['input'];
    /** property name to sort by */
    prop?: Scalars['String']['input'];
};
export type SortDocumentsInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: Scalars['Float']['input'];
    /** property name to sort by */
    prop?: Scalars['String']['input'];
};
export type Subscription = {
    __typename?: 'Subscription';
    documentAdded: DocumentType;
    recipeAdded: RecipeType;
};
export type TemplatesConnectionType = {
    __typename?: 'TemplatesConnectionType';
    /** [TemplatesEdgeType] */
    edges?: Maybe<Array<TemplatesEdgeType>>;
    /** TemplatesPageInfoType */
    pageInfo?: Maybe<TemplatesPageInfoType>;
};
export type TemplatesEdgeType = {
    __typename?: 'TemplatesEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** TemplatesEdgeType */
    node?: Maybe<TemplatesType>;
};
export type TemplatesPageInfoType = {
    __typename?: 'TemplatesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type TemplatesType = {
    __typename?: 'TemplatesType';
    /** templates created date */
    dateCreated?: Maybe<Scalars['Date']['output']>;
    /** templates deleted date */
    dateDeleted?: Maybe<Scalars['Date']['output']>;
    /** templates updated date */
    dateUpdated?: Maybe<Scalars['Date']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** templates ID */
    templatesID?: Maybe<Scalars['ID']['output']>;
};
export type UpdateCourseInputType = {
    /** course capture */
    capture: Scalars['String']['input'];
    /** courses ID */
    courseID: Scalars['ID']['input'];
    /** courses created date */
    dateCreated: Scalars['Float']['input'];
    /** courses deleted date */
    dateDeleted?: InputMaybe<Scalars['Float']['input']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['input'];
    /** course description */
    description: Scalars['String']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** courses meta information */
    meta?: InputMaybe<MetaCourseInputType>;
    /** courses modules */
    modules?: InputMaybe<Array<ModuleInputType>>;
    /** courses passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
    /** courses questionNumber */
    questionNumber: Scalars['Int']['input'];
};
export type UpdateTemplatesInputType = {
    /** templates created date */
    dateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** templates deleted date */
    dateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** templates updated date */
    dateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** templates ID */
    templatesID?: InputMaybe<Scalars['ID']['input']>;
};
export type UserIdDataAwsCognitoInputType = {
    /** AWS enum client_app */
    client_app: Scalars['String']['input'];
    /** AWS code from authorisation workflow */
    code?: InputMaybe<Scalars['String']['input']>;
    /** AWS redirect_uri */
    redirect_uri: Scalars['String']['input'];
    /** AWS refresh token from post-authorization workflow */
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
export type UserIdDataAwsCognitoType = {
    __typename?: 'UserIdDataAwsCognitoType';
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
export type UserInputType = {
    /** user first name */
    nameFirst?: InputMaybe<Scalars['String']['input']>;
    /** user last name */
    nameLast?: InputMaybe<Scalars['String']['input']>;
    /** user middle name */
    nameMiddle?: InputMaybe<Scalars['String']['input']>;
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
export type UserModelExtendedType = {
    __typename?: 'UserModelExtendedType';
    /** user first name */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    nameMiddle?: Maybe<Scalars['String']['output']>;
    responseMessage: ResponseMessageType;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user deleted date */
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
export type UserType = {
    __typename?: 'UserType';
    /** user first name */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    nameMiddle?: Maybe<Scalars['String']['output']>;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user deleted date */
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
export type UsersType = {
    __typename?: 'UsersType';
    responseMessage: ResponseMessageType;
    users: Array<UserType>;
};
