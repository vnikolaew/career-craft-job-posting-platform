/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  AccessToken = 'access_token',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  _relevance?: InputMaybe<AccountOrderByRelevanceInput>;
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Metadata = 'metadata',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
};

export type AggregateCompanyCategory = {
  __typename?: 'AggregateCompanyCategory';
  _count?: Maybe<CompanyCategoryCountAggregate>;
  _max?: Maybe<CompanyCategoryMaxAggregate>;
  _min?: Maybe<CompanyCategoryMinAggregate>;
};

export type AggregateJobListing = {
  __typename?: 'AggregateJobListing';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
};

export type AggregateJobListingCategory = {
  __typename?: 'AggregateJobListingCategory';
  _count?: Maybe<JobListingCategoryCountAggregate>;
  _max?: Maybe<JobListingCategoryMaxAggregate>;
  _min?: Maybe<JobListingCategoryMinAggregate>;
};

export type AggregateSavedListing = {
  __typename?: 'AggregateSavedListing';
  _count?: Maybe<SavedListingCountAggregate>;
  _max?: Maybe<SavedListingMaxAggregate>;
  _min?: Maybe<SavedListingMinAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['URL']['output']>;
  benefits: Array<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['URL']['output']>;
  career_description_raw: Scalars['String']['output'];
  categories: Array<CompanyCategory>;
  company_values: Array<Scalars['String']['output']>;
  contacts?: Maybe<CompanyContacts>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  hiring_process: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listings: Array<JobListing>;
  local_info?: Maybe<CompanyLocalInfo>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment: Array<Scalars['String']['output']>;
  worldwide_info?: Maybe<CompanyWorldwideInfo>;
};


export type CompanyCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type CompanyListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};

export type CompanyCategory = {
  __typename?: 'CompanyCategory';
  _count?: Maybe<CompanyCategoryCount>;
  companies: Array<Company>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type CompanyCategoryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyCategoryCount = {
  __typename?: 'CompanyCategoryCount';
  companies: Scalars['Int']['output'];
};


export type CompanyCategoryCountCompaniesArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyCategoryCountAggregate = {
  __typename?: 'CompanyCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type CompanyCategoryCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryCreateInput = {
  companies?: InputMaybe<CompanyCreateNestedManyWithoutCategoriesInput>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateNestedManyWithoutCompaniesInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutCompaniesInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutCompaniesInput>>;
};

export type CompanyCategoryCreateOrConnectWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateWithoutCompaniesInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryGroupBy = {
  __typename?: 'CompanyCategoryGroupBy';
  _count?: Maybe<CompanyCategoryCountAggregate>;
  _max?: Maybe<CompanyCategoryMaxAggregate>;
  _min?: Maybe<CompanyCategoryMinAggregate>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CompanyCategoryListRelationFilter = {
  every?: InputMaybe<CompanyCategoryWhereInput>;
  none?: InputMaybe<CompanyCategoryWhereInput>;
  some?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryMaxAggregate = {
  __typename?: 'CompanyCategoryMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyCategoryMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryMinAggregate = {
  __typename?: 'CompanyCategoryMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyCategoryMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CompanyCategoryOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CompanyCategoryOrderByRelevanceInput = {
  fields: Array<CompanyCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CompanyCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CompanyCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyCategoryMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<CompanyCategoryOrderByRelevanceInput>;
  companies?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum CompanyCategoryScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CompanyCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CompanyCategoryUpdateInput = {
  companies?: InputMaybe<CompanyUpdateManyWithoutCategoriesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyWithWhereWithoutCompaniesInput = {
  data: CompanyCategoryUpdateManyMutationInput;
  where: CompanyCategoryScalarWhereInput;
};

export type CompanyCategoryUpdateManyWithoutCompaniesNestedInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutCompaniesInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutCompaniesInput>>;
  delete?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyCategoryUpdateWithWhereUniqueWithoutCompaniesInput>>;
  updateMany?: InputMaybe<Array<CompanyCategoryUpdateManyWithWhereWithoutCompaniesInput>>;
  upsert?: InputMaybe<Array<CompanyCategoryUpsertWithWhereUniqueWithoutCompaniesInput>>;
};

export type CompanyCategoryUpdateWithWhereUniqueWithoutCompaniesInput = {
  data: CompanyCategoryUpdateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpdateWithoutCompaniesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpsertWithWhereUniqueWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  update: CompanyCategoryUpdateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyContact = {
  __typename?: 'CompanyContact';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  coordinates?: Maybe<Coordinates>;
  phone_number: Scalars['String']['output'];
};

export type CompanyContacts = {
  __typename?: 'CompanyContacts';
  address: Scalars['String']['output'];
  company_bulstat: Scalars['String']['output'];
  contacts: Array<CompanyContact>;
  email: Scalars['EmailAddress']['output'];
  facebook_url: Scalars['URL']['output'];
  linkedin_url: Scalars['URL']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  twitter_url: Scalars['URL']['output'];
  website_url: Scalars['URL']['output'];
  youtube_url: Scalars['URL']['output'];
};

export type CompanyCount = {
  __typename?: 'CompanyCount';
  categories: Scalars['Int']['output'];
  listings: Scalars['Int']['output'];
};


export type CompanyCountCategoriesArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type CompanyCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  _all: Scalars['Int']['output'];
  about_raw: Scalars['Int']['output'];
  banner_image_url: Scalars['Int']['output'];
  benefits: Scalars['Int']['output'];
  brand_image_url: Scalars['Int']['output'];
  career_description_raw: Scalars['Int']['output'];
  company_values: Scalars['Int']['output'];
  contacts: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  hiring_process: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  local_info: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  work_environment: Scalars['Int']['output'];
  worldwide_info: Scalars['Int']['output'];
};

export type CompanyCountOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyCreateInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutCompaniesInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateManyInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutCategoriesInput>>;
};

export type CompanyCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
};

export type CompanyCreateOrConnectWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutCategoriesInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutListingsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutCompaniesInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreatebenefitsInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatecompany_ValuesInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatehiring_ProcessInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatework_EnvironmentInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['String']['output']>;
  benefits?: Maybe<Array<Scalars['String']['output']>>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw: Scalars['String']['output'];
  company_values?: Maybe<Array<Scalars['String']['output']>>;
  contacts: Scalars['JSON']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  hiring_process?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  local_info: Scalars['JSON']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment?: Maybe<Array<Scalars['String']['output']>>;
  worldwide_info: Scalars['JSON']['output'];
};

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>;
  none?: InputMaybe<CompanyWhereInput>;
  some?: InputMaybe<CompanyWhereInput>;
};

export type CompanyLocalInfo = {
  __typename?: 'CompanyLocalInfo';
  employeeCount?: Maybe<Scalars['Int']['output']>;
  locations: Array<Scalars['String']['output']>;
  since?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  about_raw?: Maybe<Scalars['String']['output']>;
  banner_image_url?: Maybe<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  about_raw?: Maybe<Scalars['String']['output']>;
  banner_image_url?: Maybe<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMinOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CompanyOrderByRelevanceFieldEnum {
  AboutRaw = 'about_raw',
  BannerImageUrl = 'banner_image_url',
  Benefits = 'benefits',
  BrandImageUrl = 'brand_image_url',
  CareerDescriptionRaw = 'career_description_raw',
  CompanyValues = 'company_values',
  Email = 'email',
  HiringProcess = 'hiring_process',
  Id = 'id',
  Name = 'name',
  WorkEnvironment = 'work_environment'
}

export type CompanyOrderByRelevanceInput = {
  fields: Array<CompanyOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CompanyOrderByWithAggregationInput = {
  _count?: InputMaybe<CompanyCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyMinOrderByAggregateInput>;
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrderInput>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrderInput>;
  career_description_raw?: InputMaybe<SortOrder>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  _relevance?: InputMaybe<CompanyOrderByRelevanceInput>;
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrderInput>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrderInput>;
  career_description_raw?: InputMaybe<SortOrder>;
  categories?: InputMaybe<CompanyCategoryOrderByRelationAggregateInput>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  AboutRaw = 'about_raw',
  BannerImageUrl = 'banner_image_url',
  Benefits = 'benefits',
  BrandImageUrl = 'brand_image_url',
  CareerDescriptionRaw = 'career_description_raw',
  CompanyValues = 'company_values',
  Contacts = 'contacts',
  CreatedAt = 'createdAt',
  Email = 'email',
  HiringProcess = 'hiring_process',
  Id = 'id',
  LocalInfo = 'local_info',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkEnvironment = 'work_environment',
  WorldwideInfo = 'worldwide_info'
}

export type CompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<StringFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  about_raw?: InputMaybe<StringWithAggregatesFilter>;
  banner_image_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  career_description_raw?: InputMaybe<StringWithAggregatesFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  local_info?: InputMaybe<JsonWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonWithAggregatesFilter>;
};

export type CompanyUpdateInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutCompaniesNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateManyMutationInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateManyWithWhereWithoutCategoriesInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type CompanyUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutListingsInput>;
};

export type CompanyUpdateToOneWithWhereWithoutListingsInput = {
  data: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: CompanyUpdateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithoutCategoriesInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutListingsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutCompaniesNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdatebenefitsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatecompany_ValuesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatehiring_ProcessInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatework_EnvironmentInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  update: CompanyUpdateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  update: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<StringFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyWorldwideInfo = {
  __typename?: 'CompanyWorldwideInfo';
  employeeCount?: Maybe<Scalars['Int']['output']>;
  founded?: Maybe<Scalars['DateTimeISO']['output']>;
  headquarters: Scalars['String']['output'];
  locations: Array<Scalars['String']['output']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumJobListingEmploymentTypeNullableFilter = {
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type EnumJobListingEmploymentTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type EnumJobListingLevelNullableFilter = {
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type EnumJobListingLevelNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type EnumWorkFromHomeNullableFilter = {
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type EnumWorkFromHomeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  _min?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type GetTopCompaniesInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetTopListingCategoriesInput = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JobListing = {
  __typename?: 'JobListing';
  _count?: Maybe<JobListingCount>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description_raw: Scalars['String']['output'];
  external_application_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSaved?: Maybe<Scalars['Boolean']['output']>;
  keywords: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingCategory = {
  __typename?: 'JobListingCategory';
  _count?: Maybe<JobListingCategoryCount>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type JobListingCategoryCount = {
  __typename?: 'JobListingCategoryCount';
  listings: Scalars['Int']['output'];
};


export type JobListingCategoryCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingCategoryCountAggregate = {
  __typename?: 'JobListingCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type JobListingCategoryCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryCreateInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateNestedManyWithoutListingsInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutListingsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutListingsInput>>;
};

export type JobListingCategoryCreateOrConnectWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateWithoutListingsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryGroupBy = {
  __typename?: 'JobListingCategoryGroupBy';
  _count?: Maybe<JobListingCategoryCountAggregate>;
  _max?: Maybe<JobListingCategoryMaxAggregate>;
  _min?: Maybe<JobListingCategoryMinAggregate>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type JobListingCategoryListRelationFilter = {
  every?: InputMaybe<JobListingCategoryWhereInput>;
  none?: InputMaybe<JobListingCategoryWhereInput>;
  some?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryMaxAggregate = {
  __typename?: 'JobListingCategoryMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JobListingCategoryMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryMinAggregate = {
  __typename?: 'JobListingCategoryMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JobListingCategoryMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingCategoryOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type JobListingCategoryOrderByRelevanceInput = {
  fields: Array<JobListingCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingCategoryMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingCategoryOrderByRelevanceInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export enum JobListingCategoryScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type JobListingCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type JobListingCategoryUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyWithWhereWithoutListingsInput = {
  data: JobListingCategoryUpdateManyMutationInput;
  where: JobListingCategoryScalarWhereInput;
};

export type JobListingCategoryUpdateManyWithoutListingsNestedInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutListingsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutListingsInput>>;
  delete?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingCategoryUpdateWithWhereUniqueWithoutListingsInput>>;
  updateMany?: InputMaybe<Array<JobListingCategoryUpdateManyWithWhereWithoutListingsInput>>;
  upsert?: InputMaybe<Array<JobListingCategoryUpsertWithWhereUniqueWithoutListingsInput>>;
};

export type JobListingCategoryUpdateWithWhereUniqueWithoutListingsInput = {
  data: JobListingCategoryUpdateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpdateWithoutListingsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpsertWithWhereUniqueWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  update: JobListingCategoryUpdateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCount = {
  __typename?: 'JobListingCount';
  categories: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
};


export type JobListingCountCategoriesArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type JobListingCountSavesArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCountAggregate = {
  __typename?: 'JobListingCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description_raw: Scalars['Int']['output'];
  external_application_url: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  keywords: Scalars['Int']['output'];
  languages: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  parameters: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  work_from: Scalars['Int']['output'];
};

export type JobListingCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingCreateInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateManyCompanyInput = {
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateManyCompanyInputEnvelope = {
  data: Array<JobListingCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingCreateManyInput = {
  companyId: Scalars['String']['input'];
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCategoriesInput>>;
};

export type JobListingCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
};

export type JobListingCreateNestedOneWithoutSavesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
};

export type JobListingCreateOrConnectWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateOrConnectWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateOrConnectWithoutSavesInput = {
  create: JobListingCreateWithoutSavesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateWithoutCategoriesInput = {
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateWithoutCompanyInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateWithoutSavesInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreatekeywordsInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingCreatelanguagesInput = {
  set: Array<Scalars['String']['input']>;
};

export enum JobListingEmploymentType {
  FlexibleTime = 'FlexibleTime',
  ForStudents = 'ForStudents',
  FreelanceProject = 'FreelanceProject',
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  Permanent = 'Permanent',
  RefugeeStatus = 'RefugeeStatus',
  Temporary = 'Temporary'
}

export type JobListingGroupBy = {
  __typename?: 'JobListingGroupBy';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description_raw: Scalars['String']['output'];
  external_application_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  level?: Maybe<JobListingLevel>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};

export enum JobListingLevel {
  Experts = 'Experts',
  Management = 'Management',
  Staff = 'Staff'
}

export type JobListingListRelationFilter = {
  every?: InputMaybe<JobListingWhereInput>;
  none?: InputMaybe<JobListingWhereInput>;
  some?: InputMaybe<JobListingWhereInput>;
};

export type JobListingMaxAggregate = {
  __typename?: 'JobListingMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description_raw?: Maybe<Scalars['String']['output']>;
  external_application_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingMinAggregate = {
  __typename?: 'JobListingMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description_raw?: Maybe<Scalars['String']['output']>;
  external_application_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingOrderByRelevanceFieldEnum {
  CompanyId = 'companyId',
  DescriptionRaw = 'description_raw',
  ExternalApplicationUrl = 'external_application_url',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Location = 'location',
  Name = 'name'
}

export type JobListingOrderByRelevanceInput = {
  fields: Array<JobListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingMinOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingOrderByRelevanceInput>;
  categories?: InputMaybe<JobListingCategoryOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SavedListingOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingRelationFilter = {
  is?: InputMaybe<JobListingWhereInput>;
  isNot?: InputMaybe<JobListingWhereInput>;
};

export enum JobListingScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DescriptionRaw = 'description_raw',
  ExternalApplicationUrl = 'external_application_url',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Level = 'level',
  Location = 'location',
  Name = 'name',
  Parameters = 'parameters',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkFrom = 'work_from'
}

export type JobListingScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingScalarWhereInput>>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  description_raw?: InputMaybe<StringWithAggregatesFilter>;
  external_application_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  parameters?: InputMaybe<JsonWithAggregatesFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableWithAggregatesFilter>;
};

export type JobListingUpdateInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateManyMutationInput = {
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateManyWithWhereWithoutCategoriesInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
};

export type JobListingUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
};

export type JobListingUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type JobListingUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<JobListingUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<JobListingUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type JobListingUpdateOneRequiredWithoutSavesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutSavesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutSavesInput>;
};

export type JobListingUpdateToOneWithWhereWithoutSavesInput = {
  data: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: JobListingUpdateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateWithoutCompanyInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateWithoutSavesInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingUpdatelanguagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  update: JobListingUpdateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  update: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithoutSavesInput = {
  create: JobListingCreateWithoutSavesInput;
  update: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingWhereInput = {
  AND?: InputMaybe<Array<JobListingWhereInput>>;
  NOT?: InputMaybe<Array<JobListingWhereInput>>;
  OR?: InputMaybe<Array<JobListingWhereInput>>;
  categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  saves?: InputMaybe<SavedListingListRelationFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingWhereInput>>;
  NOT?: InputMaybe<Array<JobListingWhereInput>>;
  OR?: InputMaybe<Array<JobListingWhereInput>>;
  categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  saves?: InputMaybe<SavedListingListRelationFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCompanyCategory: AffectedRowsOutput;
  createManyJobListing: AffectedRowsOutput;
  createManyJobListingCategory: AffectedRowsOutput;
  createManySavedListing: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneCompany: Company;
  createOneCompanyCategory: CompanyCategory;
  createOneJobListing: JobListing;
  createOneJobListingCategory: JobListingCategory;
  createOneSavedListing: SavedListing;
  createOneSession: Session;
  createOneUser: User;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCompanyCategory: AffectedRowsOutput;
  deleteManyJobListing: AffectedRowsOutput;
  deleteManyJobListingCategory: AffectedRowsOutput;
  deleteManySavedListing: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCompanyCategory?: Maybe<CompanyCategory>;
  deleteOneJobListing?: Maybe<JobListing>;
  deleteOneJobListingCategory?: Maybe<JobListingCategory>;
  deleteOneSavedListing?: Maybe<SavedListing>;
  deleteOneSession?: Maybe<Session>;
  deleteOneUser?: Maybe<User>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  fileUpload: Scalars['Boolean']['output'];
  generateSignUpEmailCode: SignUpWithEmailCodeResponse;
  saveJobListing?: Maybe<SavedListing>;
  sendVerificationEmail: SendVerificationEmailResponse;
  signIn?: Maybe<User>;
  signInWithEmailCode?: Maybe<User>;
  signOut: Scalars['Boolean']['output'];
  signUp: User;
  signUpWithEmailCode: User;
  unSaveJobListing?: Maybe<Scalars['Boolean']['output']>;
  updateManyAccount: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCompanyCategory: AffectedRowsOutput;
  updateManyJobListing: AffectedRowsOutput;
  updateManyJobListingCategory: AffectedRowsOutput;
  updateManySavedListing: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneCompany?: Maybe<Company>;
  updateOneCompanyCategory?: Maybe<CompanyCategory>;
  updateOneJobListing?: Maybe<JobListing>;
  updateOneJobListingCategory?: Maybe<JobListingCategory>;
  updateOneSavedListing?: Maybe<SavedListing>;
  updateOneSession?: Maybe<Session>;
  updateOneUser?: Maybe<User>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneCompany: Company;
  upsertOneCompanyCategory: CompanyCategory;
  upsertOneJobListing: JobListing;
  upsertOneJobListingCategory: JobListingCategory;
  upsertOneSavedListing: SavedListing;
  upsertOneSession: Session;
  upsertOneUser: User;
  upsertOneVerificationToken: VerificationToken;
  verifyEmail: VerifyEmailResponse;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCompanyArgs = {
  data: Array<CompanyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCompanyCategoryArgs = {
  data: Array<CompanyCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyJobListingArgs = {
  data: Array<JobListingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyJobListingCategoryArgs = {
  data: Array<JobListingCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySavedListingArgs = {
  data: Array<SavedListingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneCompanyCategoryArgs = {
  data: CompanyCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneJobListingArgs = {
  data: JobListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneJobListingCategoryArgs = {
  data: JobListingCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSavedListingArgs = {
  data: SavedListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyCompanyCategoryArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type MutationDeleteManyJobListingArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};


export type MutationDeleteManyJobListingCategoryArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type MutationDeleteManySavedListingArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteOneCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationDeleteOneJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type MutationDeleteOneJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationDeleteOneSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationGenerateSignUpEmailCodeArgs = {
  email: Scalars['EmailAddress']['input'];
};


export type MutationSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInModel: UserSignInInput;
};


export type MutationSignInWithEmailCodeArgs = {
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  signUpModel: UserSignUpInput;
};


export type MutationSignUpWithEmailCodeArgs = {
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationUnSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationUpdateManyCompanyCategoryArgs = {
  data: CompanyCategoryUpdateManyMutationInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type MutationUpdateManyJobListingArgs = {
  data: JobListingUpdateManyMutationInput;
  where?: InputMaybe<JobListingWhereInput>;
};


export type MutationUpdateManyJobListingCategoryArgs = {
  data: JobListingCategoryUpdateManyMutationInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type MutationUpdateManySavedListingArgs = {
  data: SavedListingUpdateManyMutationInput;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneCompanyCategoryArgs = {
  data: CompanyCategoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationUpdateOneJobListingArgs = {
  data: JobListingUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type MutationUpdateOneJobListingCategoryArgs = {
  data: JobListingCategoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationUpdateOneSavedListingArgs = {
  data: SavedListingUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  create: CompanyCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneCompanyCategoryArgs = {
  create: CompanyCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: CompanyCategoryUpdateInput;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationUpsertOneJobListingArgs = {
  create: JobListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingUpdateInput;
  where: JobListingWhereUniqueInput;
};


export type MutationUpsertOneJobListingCategoryArgs = {
  create: JobListingCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingCategoryUpdateInput;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationUpsertOneSavedListingArgs = {
  create: SavedListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SavedListingUpdateInput;
  where: SavedListingWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumJobListingEmploymentTypeNullableFilter = {
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type NestedEnumJobListingLevelNullableFilter = {
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type NestedEnumJobListingLevelNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type NestedEnumWorkFromHomeNullableFilter = {
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type NestedEnumWorkFromHomeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  _min?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingEmploymentType>;
};

export type NullableEnumJobListingLevelFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingLevel>;
};

export type NullableEnumWorkFromHomeFieldUpdateOperationsInput = {
  set?: InputMaybe<WorkFromHome>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateCompany: AggregateCompany;
  aggregateCompanyCategory: AggregateCompanyCategory;
  aggregateJobListing: AggregateJobListing;
  aggregateJobListingCategory: AggregateJobListingCategory;
  aggregateSavedListing: AggregateSavedListing;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateVerificationToken: AggregateVerificationToken;
  companies: Array<Company>;
  company?: Maybe<Company>;
  companyCategories: Array<CompanyCategory>;
  companyCategory?: Maybe<CompanyCategory>;
  findById: User;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstCompany?: Maybe<Company>;
  findFirstCompanyCategory?: Maybe<CompanyCategory>;
  findFirstCompanyCategoryOrThrow?: Maybe<CompanyCategory>;
  findFirstCompanyOrThrow?: Maybe<Company>;
  findFirstJobListing?: Maybe<JobListing>;
  findFirstJobListingCategory?: Maybe<JobListingCategory>;
  findFirstJobListingCategoryOrThrow?: Maybe<JobListingCategory>;
  findFirstJobListingOrThrow?: Maybe<JobListing>;
  findFirstSavedListing?: Maybe<SavedListing>;
  findFirstSavedListingOrThrow?: Maybe<SavedListing>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  getAccount?: Maybe<Account>;
  getCompany?: Maybe<Company>;
  getCompanyCategory?: Maybe<CompanyCategory>;
  getJobListing?: Maybe<JobListing>;
  getJobListingCategory?: Maybe<JobListingCategory>;
  getSavedListing?: Maybe<SavedListing>;
  getSession?: Maybe<Session>;
  getTopCompanies: Array<Company>;
  getTopListingCategories: Array<JobListingCategory>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  googleLoginUrl: Scalars['String']['output'];
  groupByAccount: Array<AccountGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCompanyCategory: Array<CompanyCategoryGroupBy>;
  groupByJobListing: Array<JobListingGroupBy>;
  groupByJobListingCategory: Array<JobListingCategoryGroupBy>;
  groupBySavedListing: Array<SavedListingGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  jobListing?: Maybe<JobListing>;
  jobListingCategories: Array<JobListingCategory>;
  jobListingCategory?: Maybe<JobListingCategory>;
  jobListings: Array<JobListing>;
  me?: Maybe<User>;
  savedListing?: Maybe<SavedListing>;
  savedListings: Array<SavedListing>;
  search: Array<UserSearchResponse>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryAggregateCompanyCategoryArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryAggregateJobListingArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryAggregateJobListingCategoryArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryAggregateSavedListingArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryCompanyCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstCompanyCategoryArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryFindFirstCompanyCategoryOrThrowArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryFindFirstCompanyOrThrowArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstJobListingArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryFindFirstJobListingCategoryArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryFindFirstJobListingCategoryOrThrowArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryFindFirstJobListingOrThrowArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryFindFirstSavedListingArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryFindFirstSavedListingOrThrowArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryGetCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type QueryGetJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type QueryGetJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type QueryGetSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetTopCompaniesArgs = {
  input: GetTopCompaniesInput;
};


export type QueryGetTopListingCategoriesArgs = {
  input: GetTopListingCategoriesInput;
};


export type QueryGetUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGoogleLoginUrlArgs = {
  redirect_url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByCompanyArgs = {
  by: Array<CompanyScalarFieldEnum>;
  having?: InputMaybe<CompanyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryGroupByCompanyCategoryArgs = {
  by: Array<CompanyCategoryScalarFieldEnum>;
  having?: InputMaybe<CompanyCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryGroupByJobListingArgs = {
  by: Array<JobListingScalarFieldEnum>;
  having?: InputMaybe<JobListingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryGroupByJobListingCategoryArgs = {
  by: Array<JobListingCategoryScalarFieldEnum>;
  having?: InputMaybe<JobListingCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryGroupBySavedListingArgs = {
  by: Array<SavedListingScalarFieldEnum>;
  having?: InputMaybe<SavedListingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type QueryJobListingCategoriesArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type QueryJobListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QuerySavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QuerySavedListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QuerySearchArgs = {
  search?: UsersSearchInput;
};


export type QuerySessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export type SavedListing = {
  __typename?: 'SavedListing';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listingId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SavedListingCountAggregate = {
  __typename?: 'SavedListingCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  listingId: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SavedListingCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInputEnvelope = {
  data: Array<SavedListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingCreateManyUserInputEnvelope = {
  data: Array<SavedListingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<SavedListingCreateManyListingInputEnvelope>;
};

export type SavedListingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutUserInput>>;
  createMany?: InputMaybe<SavedListingCreateManyUserInputEnvelope>;
};

export type SavedListingCreateOrConnectWithoutListingInput = {
  create: SavedListingCreateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingCreateOrConnectWithoutUserInput = {
  create: SavedListingCreateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingCreateWithoutListingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingGroupBy = {
  __typename?: 'SavedListingGroupBy';
  _count?: Maybe<SavedListingCountAggregate>;
  _max?: Maybe<SavedListingMaxAggregate>;
  _min?: Maybe<SavedListingMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  listingId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SavedListingListRelationFilter = {
  every?: InputMaybe<SavedListingWhereInput>;
  none?: InputMaybe<SavedListingWhereInput>;
  some?: InputMaybe<SavedListingWhereInput>;
};

export type SavedListingMaxAggregate = {
  __typename?: 'SavedListingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingMinAggregate = {
  __typename?: 'SavedListingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SavedListingOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listingId',
  UserId = 'userId'
}

export type SavedListingOrderByRelevanceInput = {
  fields: Array<SavedListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SavedListingOrderByWithAggregationInput = {
  _count?: InputMaybe<SavedListingCountOrderByAggregateInput>;
  _max?: InputMaybe<SavedListingMaxOrderByAggregateInput>;
  _min?: InputMaybe<SavedListingMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<SavedListingOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SavedListingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listingId',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SavedListingScalarWhereInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listingId?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SavedListingUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingUpdateManyWithWhereWithoutListingInput = {
  data: SavedListingUpdateManyMutationInput;
  where: SavedListingScalarWhereInput;
};

export type SavedListingUpdateManyWithWhereWithoutUserInput = {
  data: SavedListingUpdateManyMutationInput;
  where: SavedListingScalarWhereInput;
};

export type SavedListingUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<SavedListingCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  set?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  update?: InputMaybe<Array<SavedListingUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<SavedListingUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<SavedListingUpsertWithWhereUniqueWithoutListingInput>>;
};

export type SavedListingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutUserInput>>;
  createMany?: InputMaybe<SavedListingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  set?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  update?: InputMaybe<Array<SavedListingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SavedListingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SavedListingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SavedListingUpdateWithWhereUniqueWithoutListingInput = {
  data: SavedListingUpdateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpdateWithWhereUniqueWithoutUserInput = {
  data: SavedListingUpdateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpdateWithoutListingInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingUpsertWithWhereUniqueWithoutListingInput = {
  create: SavedListingCreateWithoutListingInput;
  update: SavedListingUpdateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpsertWithWhereUniqueWithoutUserInput = {
  create: SavedListingCreateWithoutUserInput;
  update: SavedListingUpdateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingWhereInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingWhereUniqueInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SendVerificationEmailResponse = {
  __typename?: 'SendVerificationEmailResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SignUpWithEmailCodeResponse = {
  __typename?: 'SignUpWithEmailCodeResponse';
  code?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  randomNumber: Scalars['Int']['output'];
  userSignedUp: User;
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  saved_listings: Array<SavedListing>;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


/** Always after the prisma-client-js generator */
export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSaved_ListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCookiePreferences = {
  __typename?: 'UserCookiePreferences';
  functionality: Scalars['Boolean']['output'];
  marketing: Scalars['Boolean']['output'];
  necessary: Scalars['Boolean']['output'];
  statistics: Scalars['Boolean']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  saved_listings: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountSaved_ListingsArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutSaved_ListingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaved_ListingsInput>;
  create?: InputMaybe<UserCreateWithoutSaved_ListingsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSaved_ListingsInput = {
  create: UserCreateWithoutSaved_ListingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  Image = 'image',
  LastName = 'last_name',
  Name = 'name',
  Password = 'password'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  saved_listings?: InputMaybe<SavedListingOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'first_name',
  Id = 'id',
  Image = 'image',
  LastName = 'last_name',
  Metadata = 'metadata',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSearchResponse = {
  __typename?: 'UserSearchResponse';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  saved_listings: Array<SavedListing>;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type UserSearchResponseAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserSearchResponseSaved_ListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserSearchResponseSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserSignInInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserSignUpInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutSaved_ListingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaved_ListingsInput>;
  create?: InputMaybe<UserCreateWithoutSaved_ListingsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSaved_ListingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSaved_ListingsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSaved_ListingsInput = {
  data: UserUpdateWithoutSaved_ListingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSaved_ListingsInput = {
  create: UserCreateWithoutSaved_ListingsInput;
  update: UserUpdateWithoutSaved_ListingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  saved_listings?: InputMaybe<SavedListingListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  saved_listings?: InputMaybe<SavedListingListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UsersSearchInput = {
  limit?: Scalars['Int']['input'];
  search?: Scalars['String']['input'];
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenOrderByRelevanceFieldEnum {
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenOrderByRelevanceInput = {
  fields: Array<VerificationTokenOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  _relevance?: InputMaybe<VerificationTokenOrderByRelevanceInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<StringFilter>;
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum WorkFromHome {
  FullyRemote = 'FullyRemote',
  Hybrid = 'Hybrid'
}

export type GetTopJobCategoriesQueryVariables = Exact<{
  input: GetTopListingCategoriesInput;
}>;


export type GetTopJobCategoriesQuery = { __typename?: 'Query', getTopListingCategories: Array<{ __typename?: 'JobListingCategory', id: string, name: string, description: string, _count?: { __typename?: 'JobListingCategoryCount', listings: number } | null }> };

export type GetTopEmployersQueryVariables = Exact<{
  input: GetTopCompaniesInput;
}>;


export type GetTopEmployersQuery = { __typename?: 'Query', getTopCompanies: Array<{ __typename?: 'Company', id: string, name: string, banner_image_url?: any | null, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type GetCompanyWithListingsQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyWithListingsQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, brand_image_url?: any | null, banner_image_url?: any | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, isSaved?: boolean | null }> } | null };

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type GetCompanyQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, about_raw: string, career_description_raw: string, benefits: Array<string>, company_values: Array<string>, work_environment: Array<string>, hiring_process: Array<string>, createdAt: any, updatedAt: any, metadata?: any | null, email: any, brand_image_url?: any | null, banner_image_url?: any | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }>, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null }>, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string, coordinates?: { __typename?: 'Coordinates', latitude?: any | null, longitude?: any | null } | null }> } | null, local_info?: { __typename?: 'CompanyLocalInfo', since?: any | null, employeeCount?: number | null, locations: Array<string> } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', founded?: any | null, employeeCount?: number | null, headquarters: string, locations: Array<string> } | null } | null };

export type UnSaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type UnSaveJobListingMutation = { __typename?: 'Mutation', unSaveJobListing?: boolean | null };

export type SaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type SaveJobListingMutation = { __typename?: 'Mutation', saveJobListing?: { __typename?: 'SavedListing', id: string, listingId: string, userId: string, metadata?: any | null, createdAt: any } | null };

export type GetCompanyJobQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyJobQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, companyId: string, createdAt: any, updatedAt: any } | null };

export type SignInWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignInWithEmailCodeMutation = { __typename?: 'Mutation', signInWithEmailCode?: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } | null };

export type GenerateEmailCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
}>;


export type GenerateEmailCodeMutation = { __typename?: 'Mutation', generateSignUpEmailCode: { __typename?: 'SignUpWithEmailCodeResponse', code?: number | null, error?: string | null, identifier?: string | null, expires?: any | null, success: boolean } };

export type SignUpWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignUpWithEmailCodeMutation = { __typename?: 'Mutation', signUpWithEmailCode: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, createdAt: any, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listingId: string, metadata?: any | null, createdAt: any }> } | null };

export type GoogleLoginQueryQueryVariables = Exact<{
  redirectUrl: Scalars['String']['input'];
}>;


export type GoogleLoginQueryQuery = { __typename?: 'Query', googleLoginUrl: string };


export const GetTopJobCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopJobCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTopListingCategoriesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopListingCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopJobCategoriesQuery, GetTopJobCategoriesQueryVariables>;
export const GetTopEmployersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopEmployers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTopCompaniesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopEmployersQuery, GetTopEmployersQueryVariables>;
export const GetCompanyWithListingsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyWithListingsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"isSaved"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyWithListingsQueryQuery, GetCompanyWithListingsQueryQueryVariables>;
export const GetAllCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>;
export const GetCompanyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"about_raw"}},{"kind":"Field","name":{"kind":"Name","value":"career_description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"benefits"}},{"kind":"Field","name":{"kind":"Name","value":"company_values"}},{"kind":"Field","name":{"kind":"Name","value":"work_environment"}},{"kind":"Field","name":{"kind":"Name","value":"hiring_process"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company_bulstat"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"facebook_url"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_url"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin_url"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"local_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"since"}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}}]}},{"kind":"Field","name":{"kind":"Name","value":"worldwide_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"founded"}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"headquarters"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyQueryQuery, GetCompanyQueryQueryVariables>;
export const UnSaveJobListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnSaveJobListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unSaveJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}}}]}]}}]} as unknown as DocumentNode<UnSaveJobListingMutation, UnSaveJobListingMutationVariables>;
export const SaveJobListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveJobListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SaveJobListingMutation, SaveJobListingMutationVariables>;
export const GetCompanyJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"external_application_url"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCompanyJobQuery, GetCompanyJobQueryVariables>;
export const SignInWithEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInWithEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignInWithEmailCodeMutation, SignInWithEmailCodeMutationVariables>;
export const GenerateEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateSignUpEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GenerateEmailCodeMutation, GenerateEmailCodeMutationVariables>;
export const SignUpWithEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpWithEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignUpWithEmailCodeMutation, SignUpWithEmailCodeMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"cookieConsent"}},{"kind":"Field","name":{"kind":"Name","value":"cookiePreferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionality"}},{"kind":"Field","name":{"kind":"Name","value":"marketing"}},{"kind":"Field","name":{"kind":"Name","value":"necessary"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const MeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"cookieConsent"}},{"kind":"Field","name":{"kind":"Name","value":"cookiePreferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionality"}},{"kind":"Field","name":{"kind":"Name","value":"marketing"}},{"kind":"Field","name":{"kind":"Name","value":"necessary"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saved_listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const GoogleLoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GoogleLoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleLoginUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"redirect_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}}}]}]}}]} as unknown as DocumentNode<GoogleLoginQueryQuery, GoogleLoginQueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  AccessToken = 'access_token',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  _relevance?: InputMaybe<AccountOrderByRelevanceInput>;
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Metadata = 'metadata',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
};

export type AggregateCompanyCategory = {
  __typename?: 'AggregateCompanyCategory';
  _count?: Maybe<CompanyCategoryCountAggregate>;
  _max?: Maybe<CompanyCategoryMaxAggregate>;
  _min?: Maybe<CompanyCategoryMinAggregate>;
};

export type AggregateJobListing = {
  __typename?: 'AggregateJobListing';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
};

export type AggregateJobListingCategory = {
  __typename?: 'AggregateJobListingCategory';
  _count?: Maybe<JobListingCategoryCountAggregate>;
  _max?: Maybe<JobListingCategoryMaxAggregate>;
  _min?: Maybe<JobListingCategoryMinAggregate>;
};

export type AggregateSavedListing = {
  __typename?: 'AggregateSavedListing';
  _count?: Maybe<SavedListingCountAggregate>;
  _max?: Maybe<SavedListingMaxAggregate>;
  _min?: Maybe<SavedListingMinAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['URL']['output']>;
  benefits: Array<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['URL']['output']>;
  career_description_raw: Scalars['String']['output'];
  categories: Array<CompanyCategory>;
  company_values: Array<Scalars['String']['output']>;
  contacts?: Maybe<CompanyContacts>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  hiring_process: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listings: Array<JobListing>;
  local_info?: Maybe<CompanyLocalInfo>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment: Array<Scalars['String']['output']>;
  worldwide_info?: Maybe<CompanyWorldwideInfo>;
};


export type CompanyCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type CompanyListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};

export type CompanyCategory = {
  __typename?: 'CompanyCategory';
  _count?: Maybe<CompanyCategoryCount>;
  companies: Array<Company>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type CompanyCategoryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyCategoryCount = {
  __typename?: 'CompanyCategoryCount';
  companies: Scalars['Int']['output'];
};


export type CompanyCategoryCountCompaniesArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyCategoryCountAggregate = {
  __typename?: 'CompanyCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type CompanyCategoryCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryCreateInput = {
  companies?: InputMaybe<CompanyCreateNestedManyWithoutCategoriesInput>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateNestedManyWithoutCompaniesInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutCompaniesInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutCompaniesInput>>;
};

export type CompanyCategoryCreateOrConnectWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateWithoutCompaniesInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryGroupBy = {
  __typename?: 'CompanyCategoryGroupBy';
  _count?: Maybe<CompanyCategoryCountAggregate>;
  _max?: Maybe<CompanyCategoryMaxAggregate>;
  _min?: Maybe<CompanyCategoryMinAggregate>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CompanyCategoryListRelationFilter = {
  every?: InputMaybe<CompanyCategoryWhereInput>;
  none?: InputMaybe<CompanyCategoryWhereInput>;
  some?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryMaxAggregate = {
  __typename?: 'CompanyCategoryMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyCategoryMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryMinAggregate = {
  __typename?: 'CompanyCategoryMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyCategoryMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CompanyCategoryOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CompanyCategoryOrderByRelevanceInput = {
  fields: Array<CompanyCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CompanyCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CompanyCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyCategoryMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<CompanyCategoryOrderByRelevanceInput>;
  companies?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum CompanyCategoryScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CompanyCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyCategoryScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CompanyCategoryUpdateInput = {
  companies?: InputMaybe<CompanyUpdateManyWithoutCategoriesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyWithWhereWithoutCompaniesInput = {
  data: CompanyCategoryUpdateManyMutationInput;
  where: CompanyCategoryScalarWhereInput;
};

export type CompanyCategoryUpdateManyWithoutCompaniesNestedInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutCompaniesInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutCompaniesInput>>;
  delete?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyCategoryUpdateWithWhereUniqueWithoutCompaniesInput>>;
  updateMany?: InputMaybe<Array<CompanyCategoryUpdateManyWithWhereWithoutCompaniesInput>>;
  upsert?: InputMaybe<Array<CompanyCategoryUpsertWithWhereUniqueWithoutCompaniesInput>>;
};

export type CompanyCategoryUpdateWithWhereUniqueWithoutCompaniesInput = {
  data: CompanyCategoryUpdateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpdateWithoutCompaniesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpsertWithWhereUniqueWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  update: CompanyCategoryUpdateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyContact = {
  __typename?: 'CompanyContact';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  coordinates?: Maybe<Coordinates>;
  phone_number: Scalars['String']['output'];
};

export type CompanyContacts = {
  __typename?: 'CompanyContacts';
  address: Scalars['String']['output'];
  company_bulstat: Scalars['String']['output'];
  contacts: Array<CompanyContact>;
  email: Scalars['EmailAddress']['output'];
  facebook_url: Scalars['URL']['output'];
  linkedin_url: Scalars['URL']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  twitter_url: Scalars['URL']['output'];
  website_url: Scalars['URL']['output'];
  youtube_url: Scalars['URL']['output'];
};

export type CompanyCount = {
  __typename?: 'CompanyCount';
  categories: Scalars['Int']['output'];
  listings: Scalars['Int']['output'];
};


export type CompanyCountCategoriesArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type CompanyCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  _all: Scalars['Int']['output'];
  about_raw: Scalars['Int']['output'];
  banner_image_url: Scalars['Int']['output'];
  benefits: Scalars['Int']['output'];
  brand_image_url: Scalars['Int']['output'];
  career_description_raw: Scalars['Int']['output'];
  company_values: Scalars['Int']['output'];
  contacts: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  hiring_process: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  local_info: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  work_environment: Scalars['Int']['output'];
  worldwide_info: Scalars['Int']['output'];
};

export type CompanyCountOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyCreateInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutCompaniesInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateManyInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutCategoriesInput>>;
};

export type CompanyCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
};

export type CompanyCreateOrConnectWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutCategoriesInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutListingsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutCompaniesInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email: Scalars['String']['input'];
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreatebenefitsInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatecompany_ValuesInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatehiring_ProcessInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyCreatework_EnvironmentInput = {
  set: Array<Scalars['String']['input']>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['String']['output']>;
  benefits?: Maybe<Array<Scalars['String']['output']>>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw: Scalars['String']['output'];
  company_values?: Maybe<Array<Scalars['String']['output']>>;
  contacts: Scalars['JSON']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  hiring_process?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  local_info: Scalars['JSON']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment?: Maybe<Array<Scalars['String']['output']>>;
  worldwide_info: Scalars['JSON']['output'];
};

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>;
  none?: InputMaybe<CompanyWhereInput>;
  some?: InputMaybe<CompanyWhereInput>;
};

export type CompanyLocalInfo = {
  __typename?: 'CompanyLocalInfo';
  employeeCount?: Maybe<Scalars['Int']['output']>;
  locations: Array<Scalars['String']['output']>;
  since?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  about_raw?: Maybe<Scalars['String']['output']>;
  banner_image_url?: Maybe<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  about_raw?: Maybe<Scalars['String']['output']>;
  banner_image_url?: Maybe<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['String']['output']>;
  career_description_raw?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMinOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CompanyOrderByRelevanceFieldEnum {
  AboutRaw = 'about_raw',
  BannerImageUrl = 'banner_image_url',
  Benefits = 'benefits',
  BrandImageUrl = 'brand_image_url',
  CareerDescriptionRaw = 'career_description_raw',
  CompanyValues = 'company_values',
  Email = 'email',
  HiringProcess = 'hiring_process',
  Id = 'id',
  Name = 'name',
  WorkEnvironment = 'work_environment'
}

export type CompanyOrderByRelevanceInput = {
  fields: Array<CompanyOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CompanyOrderByWithAggregationInput = {
  _count?: InputMaybe<CompanyCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyMinOrderByAggregateInput>;
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrderInput>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrderInput>;
  career_description_raw?: InputMaybe<SortOrder>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  _relevance?: InputMaybe<CompanyOrderByRelevanceInput>;
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrderInput>;
  benefits?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrderInput>;
  career_description_raw?: InputMaybe<SortOrder>;
  categories?: InputMaybe<CompanyCategoryOrderByRelationAggregateInput>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  work_environment?: InputMaybe<SortOrder>;
  worldwide_info?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  AboutRaw = 'about_raw',
  BannerImageUrl = 'banner_image_url',
  Benefits = 'benefits',
  BrandImageUrl = 'brand_image_url',
  CareerDescriptionRaw = 'career_description_raw',
  CompanyValues = 'company_values',
  Contacts = 'contacts',
  CreatedAt = 'createdAt',
  Email = 'email',
  HiringProcess = 'hiring_process',
  Id = 'id',
  LocalInfo = 'local_info',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkEnvironment = 'work_environment',
  WorldwideInfo = 'worldwide_info'
}

export type CompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<StringFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  about_raw?: InputMaybe<StringWithAggregatesFilter>;
  banner_image_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  career_description_raw?: InputMaybe<StringWithAggregatesFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  local_info?: InputMaybe<JsonWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonWithAggregatesFilter>;
};

export type CompanyUpdateInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutCompaniesNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateManyMutationInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateManyWithWhereWithoutCategoriesInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type CompanyUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutListingsInput>;
};

export type CompanyUpdateToOneWithWhereWithoutListingsInput = {
  data: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: CompanyUpdateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithoutCategoriesInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutListingsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutCompaniesNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdatebenefitsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatecompany_ValuesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatehiring_ProcessInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpdatework_EnvironmentInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompanyUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  update: CompanyUpdateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  update: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<StringFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  about_raw?: InputMaybe<StringFilter>;
  banner_image_url?: InputMaybe<StringNullableFilter>;
  benefits?: InputMaybe<StringNullableListFilter>;
  brand_image_url?: InputMaybe<StringNullableFilter>;
  career_description_raw?: InputMaybe<StringFilter>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonFilter>;
};

export type CompanyWorldwideInfo = {
  __typename?: 'CompanyWorldwideInfo';
  employeeCount?: Maybe<Scalars['Int']['output']>;
  founded?: Maybe<Scalars['DateTimeISO']['output']>;
  headquarters: Scalars['String']['output'];
  locations: Array<Scalars['String']['output']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumJobListingEmploymentTypeNullableFilter = {
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type EnumJobListingEmploymentTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type EnumJobListingLevelNullableFilter = {
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type EnumJobListingLevelNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type EnumWorkFromHomeNullableFilter = {
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type EnumWorkFromHomeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  _min?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type GetTopCompaniesInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetTopListingCategoriesInput = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JobListing = {
  __typename?: 'JobListing';
  _count?: Maybe<JobListingCount>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description_raw: Scalars['String']['output'];
  external_application_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSaved?: Maybe<Scalars['Boolean']['output']>;
  keywords: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingCategory = {
  __typename?: 'JobListingCategory';
  _count?: Maybe<JobListingCategoryCount>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type JobListingCategoryCount = {
  __typename?: 'JobListingCategoryCount';
  listings: Scalars['Int']['output'];
};


export type JobListingCategoryCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingCategoryCountAggregate = {
  __typename?: 'JobListingCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type JobListingCategoryCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryCreateInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateNestedManyWithoutListingsInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutListingsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutListingsInput>>;
};

export type JobListingCategoryCreateOrConnectWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateWithoutListingsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryGroupBy = {
  __typename?: 'JobListingCategoryGroupBy';
  _count?: Maybe<JobListingCategoryCountAggregate>;
  _max?: Maybe<JobListingCategoryMaxAggregate>;
  _min?: Maybe<JobListingCategoryMinAggregate>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type JobListingCategoryListRelationFilter = {
  every?: InputMaybe<JobListingCategoryWhereInput>;
  none?: InputMaybe<JobListingCategoryWhereInput>;
  some?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryMaxAggregate = {
  __typename?: 'JobListingCategoryMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JobListingCategoryMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryMinAggregate = {
  __typename?: 'JobListingCategoryMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JobListingCategoryMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingCategoryOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type JobListingCategoryOrderByRelevanceInput = {
  fields: Array<JobListingCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingCategoryMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type JobListingCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingCategoryOrderByRelevanceInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export enum JobListingCategoryScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type JobListingCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingCategoryScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type JobListingCategoryUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyWithWhereWithoutListingsInput = {
  data: JobListingCategoryUpdateManyMutationInput;
  where: JobListingCategoryScalarWhereInput;
};

export type JobListingCategoryUpdateManyWithoutListingsNestedInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutListingsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutListingsInput>>;
  delete?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingCategoryUpdateWithWhereUniqueWithoutListingsInput>>;
  updateMany?: InputMaybe<Array<JobListingCategoryUpdateManyWithWhereWithoutListingsInput>>;
  upsert?: InputMaybe<Array<JobListingCategoryUpsertWithWhereUniqueWithoutListingsInput>>;
};

export type JobListingCategoryUpdateWithWhereUniqueWithoutListingsInput = {
  data: JobListingCategoryUpdateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpdateWithoutListingsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpsertWithWhereUniqueWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  update: JobListingCategoryUpdateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobListingCount = {
  __typename?: 'JobListingCount';
  categories: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
};


export type JobListingCountCategoriesArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type JobListingCountSavesArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCountAggregate = {
  __typename?: 'JobListingCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description_raw: Scalars['Int']['output'];
  external_application_url: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  keywords: Scalars['Int']['output'];
  languages: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  parameters: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  work_from: Scalars['Int']['output'];
};

export type JobListingCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingCreateInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateManyCompanyInput = {
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateManyCompanyInputEnvelope = {
  data: Array<JobListingCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingCreateManyInput = {
  companyId: Scalars['String']['input'];
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCategoriesInput>>;
};

export type JobListingCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
};

export type JobListingCreateNestedOneWithoutSavesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
};

export type JobListingCreateOrConnectWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateOrConnectWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateOrConnectWithoutSavesInput = {
  create: JobListingCreateWithoutSavesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingCreateWithoutCategoriesInput = {
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateWithoutCompanyInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingCreateNestedManyWithoutListingInput>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreateWithoutSavesInput = {
  categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutListingsInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  description_raw: Scalars['String']['input'];
  external_application_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingCreatekeywordsInput>;
  languages?: InputMaybe<JobListingCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingCreatekeywordsInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingCreatelanguagesInput = {
  set: Array<Scalars['String']['input']>;
};

export enum JobListingEmploymentType {
  FlexibleTime = 'FlexibleTime',
  ForStudents = 'ForStudents',
  FreelanceProject = 'FreelanceProject',
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  Permanent = 'Permanent',
  RefugeeStatus = 'RefugeeStatus',
  Temporary = 'Temporary'
}

export type JobListingGroupBy = {
  __typename?: 'JobListingGroupBy';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description_raw: Scalars['String']['output'];
  external_application_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  level?: Maybe<JobListingLevel>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};

export enum JobListingLevel {
  Experts = 'Experts',
  Management = 'Management',
  Staff = 'Staff'
}

export type JobListingListRelationFilter = {
  every?: InputMaybe<JobListingWhereInput>;
  none?: InputMaybe<JobListingWhereInput>;
  some?: InputMaybe<JobListingWhereInput>;
};

export type JobListingMaxAggregate = {
  __typename?: 'JobListingMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description_raw?: Maybe<Scalars['String']['output']>;
  external_application_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingMinAggregate = {
  __typename?: 'JobListingMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description_raw?: Maybe<Scalars['String']['output']>;
  external_application_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingOrderByRelevanceFieldEnum {
  CompanyId = 'companyId',
  DescriptionRaw = 'description_raw',
  ExternalApplicationUrl = 'external_application_url',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Location = 'location',
  Name = 'name'
}

export type JobListingOrderByRelevanceInput = {
  fields: Array<JobListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingMinOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingOrderByRelevanceInput>;
  categories?: InputMaybe<JobListingCategoryOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  description_raw?: InputMaybe<SortOrder>;
  external_application_url?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SavedListingOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingRelationFilter = {
  is?: InputMaybe<JobListingWhereInput>;
  isNot?: InputMaybe<JobListingWhereInput>;
};

export enum JobListingScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DescriptionRaw = 'description_raw',
  ExternalApplicationUrl = 'external_application_url',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Level = 'level',
  Location = 'location',
  Name = 'name',
  Parameters = 'parameters',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkFrom = 'work_from'
}

export type JobListingScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingScalarWhereInput>>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  description_raw?: InputMaybe<StringWithAggregatesFilter>;
  external_application_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  parameters?: InputMaybe<JsonWithAggregatesFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableWithAggregatesFilter>;
};

export type JobListingUpdateInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateManyMutationInput = {
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateManyWithWhereWithoutCategoriesInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
};

export type JobListingUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
};

export type JobListingUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type JobListingUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<JobListingUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<JobListingUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type JobListingUpdateOneRequiredWithoutSavesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutSavesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutSavesInput>;
};

export type JobListingUpdateToOneWithWhereWithoutSavesInput = {
  data: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: JobListingUpdateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateWithoutCompanyInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  saves?: InputMaybe<SavedListingUpdateManyWithoutListingNestedInput>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdateWithoutSavesInput = {
  categories?: InputMaybe<JobListingCategoryUpdateManyWithoutListingsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  external_application_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingUpdatelanguagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  update: JobListingUpdateWithoutCategoriesInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  update: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithoutSavesInput = {
  create: JobListingCreateWithoutSavesInput;
  update: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingWhereInput = {
  AND?: InputMaybe<Array<JobListingWhereInput>>;
  NOT?: InputMaybe<Array<JobListingWhereInput>>;
  OR?: InputMaybe<Array<JobListingWhereInput>>;
  categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  saves?: InputMaybe<SavedListingListRelationFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingWhereInput>>;
  NOT?: InputMaybe<Array<JobListingWhereInput>>;
  OR?: InputMaybe<Array<JobListingWhereInput>>;
  categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  description_raw?: InputMaybe<StringFilter>;
  external_application_url?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parameters?: InputMaybe<JsonFilter>;
  saves?: InputMaybe<SavedListingListRelationFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCompanyCategory: AffectedRowsOutput;
  createManyJobListing: AffectedRowsOutput;
  createManyJobListingCategory: AffectedRowsOutput;
  createManySavedListing: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneCompany: Company;
  createOneCompanyCategory: CompanyCategory;
  createOneJobListing: JobListing;
  createOneJobListingCategory: JobListingCategory;
  createOneSavedListing: SavedListing;
  createOneSession: Session;
  createOneUser: User;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCompanyCategory: AffectedRowsOutput;
  deleteManyJobListing: AffectedRowsOutput;
  deleteManyJobListingCategory: AffectedRowsOutput;
  deleteManySavedListing: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCompanyCategory?: Maybe<CompanyCategory>;
  deleteOneJobListing?: Maybe<JobListing>;
  deleteOneJobListingCategory?: Maybe<JobListingCategory>;
  deleteOneSavedListing?: Maybe<SavedListing>;
  deleteOneSession?: Maybe<Session>;
  deleteOneUser?: Maybe<User>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  fileUpload: Scalars['Boolean']['output'];
  generateSignUpEmailCode: SignUpWithEmailCodeResponse;
  saveJobListing?: Maybe<SavedListing>;
  sendVerificationEmail: SendVerificationEmailResponse;
  signIn?: Maybe<User>;
  signInWithEmailCode?: Maybe<User>;
  signOut: Scalars['Boolean']['output'];
  signUp: User;
  signUpWithEmailCode: User;
  unSaveJobListing?: Maybe<Scalars['Boolean']['output']>;
  updateManyAccount: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCompanyCategory: AffectedRowsOutput;
  updateManyJobListing: AffectedRowsOutput;
  updateManyJobListingCategory: AffectedRowsOutput;
  updateManySavedListing: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneCompany?: Maybe<Company>;
  updateOneCompanyCategory?: Maybe<CompanyCategory>;
  updateOneJobListing?: Maybe<JobListing>;
  updateOneJobListingCategory?: Maybe<JobListingCategory>;
  updateOneSavedListing?: Maybe<SavedListing>;
  updateOneSession?: Maybe<Session>;
  updateOneUser?: Maybe<User>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneCompany: Company;
  upsertOneCompanyCategory: CompanyCategory;
  upsertOneJobListing: JobListing;
  upsertOneJobListingCategory: JobListingCategory;
  upsertOneSavedListing: SavedListing;
  upsertOneSession: Session;
  upsertOneUser: User;
  upsertOneVerificationToken: VerificationToken;
  verifyEmail: VerifyEmailResponse;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCompanyArgs = {
  data: Array<CompanyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCompanyCategoryArgs = {
  data: Array<CompanyCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyJobListingArgs = {
  data: Array<JobListingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyJobListingCategoryArgs = {
  data: Array<JobListingCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySavedListingArgs = {
  data: Array<SavedListingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneCompanyCategoryArgs = {
  data: CompanyCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneJobListingArgs = {
  data: JobListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneJobListingCategoryArgs = {
  data: JobListingCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSavedListingArgs = {
  data: SavedListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyCompanyCategoryArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type MutationDeleteManyJobListingArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};


export type MutationDeleteManyJobListingCategoryArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type MutationDeleteManySavedListingArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteOneCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationDeleteOneJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type MutationDeleteOneJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationDeleteOneSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationGenerateSignUpEmailCodeArgs = {
  email: Scalars['EmailAddress']['input'];
};


export type MutationSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInModel: UserSignInInput;
};


export type MutationSignInWithEmailCodeArgs = {
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  signUpModel: UserSignUpInput;
};


export type MutationSignUpWithEmailCodeArgs = {
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationUnSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationUpdateManyCompanyCategoryArgs = {
  data: CompanyCategoryUpdateManyMutationInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type MutationUpdateManyJobListingArgs = {
  data: JobListingUpdateManyMutationInput;
  where?: InputMaybe<JobListingWhereInput>;
};


export type MutationUpdateManyJobListingCategoryArgs = {
  data: JobListingCategoryUpdateManyMutationInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type MutationUpdateManySavedListingArgs = {
  data: SavedListingUpdateManyMutationInput;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneCompanyCategoryArgs = {
  data: CompanyCategoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationUpdateOneJobListingArgs = {
  data: JobListingUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type MutationUpdateOneJobListingCategoryArgs = {
  data: JobListingCategoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationUpdateOneSavedListingArgs = {
  data: SavedListingUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  create: CompanyCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneCompanyCategoryArgs = {
  create: CompanyCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: CompanyCategoryUpdateInput;
  where: CompanyCategoryWhereUniqueInput;
};


export type MutationUpsertOneJobListingArgs = {
  create: JobListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingUpdateInput;
  where: JobListingWhereUniqueInput;
};


export type MutationUpsertOneJobListingCategoryArgs = {
  create: JobListingCategoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingCategoryUpdateInput;
  where: JobListingCategoryWhereUniqueInput;
};


export type MutationUpsertOneSavedListingArgs = {
  create: SavedListingCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SavedListingUpdateInput;
  where: SavedListingWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumJobListingEmploymentTypeNullableFilter = {
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableFilter>;
  equals?: InputMaybe<JobListingEmploymentType>;
  in?: InputMaybe<Array<JobListingEmploymentType>>;
  not?: InputMaybe<NestedEnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingEmploymentType>>;
};

export type NestedEnumJobListingLevelNullableFilter = {
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type NestedEnumJobListingLevelNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  _min?: InputMaybe<NestedEnumJobListingLevelNullableFilter>;
  equals?: InputMaybe<JobListingLevel>;
  in?: InputMaybe<Array<JobListingLevel>>;
  not?: InputMaybe<NestedEnumJobListingLevelNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingLevel>>;
};

export type NestedEnumWorkFromHomeNullableFilter = {
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type NestedEnumWorkFromHomeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  _min?: InputMaybe<NestedEnumWorkFromHomeNullableFilter>;
  equals?: InputMaybe<WorkFromHome>;
  in?: InputMaybe<Array<WorkFromHome>>;
  not?: InputMaybe<NestedEnumWorkFromHomeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<WorkFromHome>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingEmploymentType>;
};

export type NullableEnumJobListingLevelFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingLevel>;
};

export type NullableEnumWorkFromHomeFieldUpdateOperationsInput = {
  set?: InputMaybe<WorkFromHome>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateCompany: AggregateCompany;
  aggregateCompanyCategory: AggregateCompanyCategory;
  aggregateJobListing: AggregateJobListing;
  aggregateJobListingCategory: AggregateJobListingCategory;
  aggregateSavedListing: AggregateSavedListing;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateVerificationToken: AggregateVerificationToken;
  companies: Array<Company>;
  company?: Maybe<Company>;
  companyCategories: Array<CompanyCategory>;
  companyCategory?: Maybe<CompanyCategory>;
  findById: User;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstCompany?: Maybe<Company>;
  findFirstCompanyCategory?: Maybe<CompanyCategory>;
  findFirstCompanyCategoryOrThrow?: Maybe<CompanyCategory>;
  findFirstCompanyOrThrow?: Maybe<Company>;
  findFirstJobListing?: Maybe<JobListing>;
  findFirstJobListingCategory?: Maybe<JobListingCategory>;
  findFirstJobListingCategoryOrThrow?: Maybe<JobListingCategory>;
  findFirstJobListingOrThrow?: Maybe<JobListing>;
  findFirstSavedListing?: Maybe<SavedListing>;
  findFirstSavedListingOrThrow?: Maybe<SavedListing>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  getAccount?: Maybe<Account>;
  getCompany?: Maybe<Company>;
  getCompanyCategory?: Maybe<CompanyCategory>;
  getJobListing?: Maybe<JobListing>;
  getJobListingCategory?: Maybe<JobListingCategory>;
  getSavedListing?: Maybe<SavedListing>;
  getSession?: Maybe<Session>;
  getTopCompanies: Array<Company>;
  getTopListingCategories: Array<JobListingCategory>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  googleLoginUrl: Scalars['String']['output'];
  groupByAccount: Array<AccountGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCompanyCategory: Array<CompanyCategoryGroupBy>;
  groupByJobListing: Array<JobListingGroupBy>;
  groupByJobListingCategory: Array<JobListingCategoryGroupBy>;
  groupBySavedListing: Array<SavedListingGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  jobListing?: Maybe<JobListing>;
  jobListingCategories: Array<JobListingCategory>;
  jobListingCategory?: Maybe<JobListingCategory>;
  jobListings: Array<JobListing>;
  me?: Maybe<User>;
  savedListing?: Maybe<SavedListing>;
  savedListings: Array<SavedListing>;
  search: Array<UserSearchResponse>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryAggregateCompanyCategoryArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryAggregateJobListingArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryAggregateJobListingCategoryArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryAggregateSavedListingArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryCompanyCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstCompanyCategoryArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryFindFirstCompanyCategoryOrThrowArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryFindFirstCompanyOrThrowArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstJobListingArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryFindFirstJobListingCategoryArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryFindFirstJobListingCategoryOrThrowArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryFindFirstJobListingOrThrowArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryFindFirstSavedListingArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryFindFirstSavedListingOrThrowArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryGetCompanyCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyCategoryWhereUniqueInput;
};


export type QueryGetJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type QueryGetJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type QueryGetSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetTopCompaniesArgs = {
  input: GetTopCompaniesInput;
};


export type QueryGetTopListingCategoriesArgs = {
  input: GetTopListingCategoriesInput;
};


export type QueryGetUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGoogleLoginUrlArgs = {
  redirect_url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByCompanyArgs = {
  by: Array<CompanyScalarFieldEnum>;
  having?: InputMaybe<CompanyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryGroupByCompanyCategoryArgs = {
  by: Array<CompanyCategoryScalarFieldEnum>;
  having?: InputMaybe<CompanyCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type QueryGroupByJobListingArgs = {
  by: Array<JobListingScalarFieldEnum>;
  having?: InputMaybe<JobListingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QueryGroupByJobListingCategoryArgs = {
  by: Array<JobListingCategoryScalarFieldEnum>;
  having?: InputMaybe<JobListingCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryGroupBySavedListingArgs = {
  by: Array<SavedListingScalarFieldEnum>;
  having?: InputMaybe<SavedListingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryJobListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingWhereUniqueInput;
};


export type QueryJobListingCategoriesArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type QueryJobListingCategoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingCategoryWhereUniqueInput;
};


export type QueryJobListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type QuerySavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QuerySavedListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type QuerySearchArgs = {
  search?: UsersSearchInput;
};


export type QuerySessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export type SavedListing = {
  __typename?: 'SavedListing';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listingId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SavedListingCountAggregate = {
  __typename?: 'SavedListingCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  listingId: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SavedListingCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInputEnvelope = {
  data: Array<SavedListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingCreateManyUserInputEnvelope = {
  data: Array<SavedListingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<SavedListingCreateManyListingInputEnvelope>;
};

export type SavedListingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutUserInput>>;
  createMany?: InputMaybe<SavedListingCreateManyUserInputEnvelope>;
};

export type SavedListingCreateOrConnectWithoutListingInput = {
  create: SavedListingCreateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingCreateOrConnectWithoutUserInput = {
  create: SavedListingCreateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingCreateWithoutListingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingGroupBy = {
  __typename?: 'SavedListingGroupBy';
  _count?: Maybe<SavedListingCountAggregate>;
  _max?: Maybe<SavedListingMaxAggregate>;
  _min?: Maybe<SavedListingMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  listingId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SavedListingListRelationFilter = {
  every?: InputMaybe<SavedListingWhereInput>;
  none?: InputMaybe<SavedListingWhereInput>;
  some?: InputMaybe<SavedListingWhereInput>;
};

export type SavedListingMaxAggregate = {
  __typename?: 'SavedListingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingMinAggregate = {
  __typename?: 'SavedListingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SavedListingOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listingId',
  UserId = 'userId'
}

export type SavedListingOrderByRelevanceInput = {
  fields: Array<SavedListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SavedListingOrderByWithAggregationInput = {
  _count?: InputMaybe<SavedListingCountOrderByAggregateInput>;
  _max?: InputMaybe<SavedListingMaxOrderByAggregateInput>;
  _min?: InputMaybe<SavedListingMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<SavedListingOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listingId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SavedListingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listingId',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SavedListingScalarWhereInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listingId?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SavedListingUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingUpdateManyWithWhereWithoutListingInput = {
  data: SavedListingUpdateManyMutationInput;
  where: SavedListingScalarWhereInput;
};

export type SavedListingUpdateManyWithWhereWithoutUserInput = {
  data: SavedListingUpdateManyMutationInput;
  where: SavedListingScalarWhereInput;
};

export type SavedListingUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<SavedListingCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  set?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  update?: InputMaybe<Array<SavedListingUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<SavedListingUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<SavedListingUpsertWithWhereUniqueWithoutListingInput>>;
};

export type SavedListingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SavedListingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SavedListingCreateWithoutUserInput>>;
  createMany?: InputMaybe<SavedListingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  set?: InputMaybe<Array<SavedListingWhereUniqueInput>>;
  update?: InputMaybe<Array<SavedListingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SavedListingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SavedListingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SavedListingUpdateWithWhereUniqueWithoutListingInput = {
  data: SavedListingUpdateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpdateWithWhereUniqueWithoutUserInput = {
  data: SavedListingUpdateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpdateWithoutListingInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type SavedListingUpsertWithWhereUniqueWithoutListingInput = {
  create: SavedListingCreateWithoutListingInput;
  update: SavedListingUpdateWithoutListingInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingUpsertWithWhereUniqueWithoutUserInput = {
  create: SavedListingCreateWithoutUserInput;
  update: SavedListingUpdateWithoutUserInput;
  where: SavedListingWhereUniqueInput;
};

export type SavedListingWhereInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingWhereUniqueInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listingId?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SendVerificationEmailResponse = {
  __typename?: 'SendVerificationEmailResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SignUpWithEmailCodeResponse = {
  __typename?: 'SignUpWithEmailCodeResponse';
  code?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  randomNumber: Scalars['Int']['output'];
  userSignedUp: User;
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  saved_listings: Array<SavedListing>;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


/** Always after the prisma-client-js generator */
export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSaved_ListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCookiePreferences = {
  __typename?: 'UserCookiePreferences';
  functionality: Scalars['Boolean']['output'];
  marketing: Scalars['Boolean']['output'];
  necessary: Scalars['Boolean']['output'];
  statistics: Scalars['Boolean']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  saved_listings: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountSaved_ListingsArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutSaved_ListingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaved_ListingsInput>;
  create?: InputMaybe<UserCreateWithoutSaved_ListingsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSaved_ListingsInput = {
  create: UserCreateWithoutSaved_ListingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  Image = 'image',
  LastName = 'last_name',
  Name = 'name',
  Password = 'password'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  saved_listings?: InputMaybe<SavedListingOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'first_name',
  Id = 'id',
  Image = 'image',
  LastName = 'last_name',
  Metadata = 'metadata',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSearchResponse = {
  __typename?: 'UserSearchResponse';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  saved_listings: Array<SavedListing>;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type UserSearchResponseAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserSearchResponseSaved_ListingsArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserSearchResponseSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserSignInInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserSignUpInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutSaved_ListingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaved_ListingsInput>;
  create?: InputMaybe<UserCreateWithoutSaved_ListingsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSaved_ListingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSaved_ListingsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSaved_ListingsInput = {
  data: UserUpdateWithoutSaved_ListingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSaved_ListingsInput = {
  create: UserCreateWithoutSaved_ListingsInput;
  update: UserUpdateWithoutSaved_ListingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  saved_listings?: InputMaybe<SavedListingListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  saved_listings?: InputMaybe<SavedListingListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UsersSearchInput = {
  limit?: Scalars['Int']['input'];
  search?: Scalars['String']['input'];
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenOrderByRelevanceFieldEnum {
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenOrderByRelevanceInput = {
  fields: Array<VerificationTokenOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  _relevance?: InputMaybe<VerificationTokenOrderByRelevanceInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<StringFilter>;
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum WorkFromHome {
  FullyRemote = 'FullyRemote',
  Hybrid = 'Hybrid'
}

export type GetTopJobCategoriesQueryVariables = Exact<{
  input: GetTopListingCategoriesInput;
}>;


export type GetTopJobCategoriesQuery = { __typename?: 'Query', getTopListingCategories: Array<{ __typename?: 'JobListingCategory', id: string, name: string, description: string, _count?: { __typename?: 'JobListingCategoryCount', listings: number } | null }> };

export type GetTopEmployersQueryVariables = Exact<{
  input: GetTopCompaniesInput;
}>;


export type GetTopEmployersQuery = { __typename?: 'Query', getTopCompanies: Array<{ __typename?: 'Company', id: string, name: string, banner_image_url?: any | null, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type GetCompanyWithListingsQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyWithListingsQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, brand_image_url?: any | null, banner_image_url?: any | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, isSaved?: boolean | null }> } | null };

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type GetCompanyQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, about_raw: string, career_description_raw: string, benefits: Array<string>, company_values: Array<string>, work_environment: Array<string>, hiring_process: Array<string>, createdAt: any, updatedAt: any, metadata?: any | null, email: any, brand_image_url?: any | null, banner_image_url?: any | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }>, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null }>, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string, coordinates?: { __typename?: 'Coordinates', latitude?: any | null, longitude?: any | null } | null }> } | null, local_info?: { __typename?: 'CompanyLocalInfo', since?: any | null, employeeCount?: number | null, locations: Array<string> } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', founded?: any | null, employeeCount?: number | null, headquarters: string, locations: Array<string> } | null } | null };

export type UnSaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type UnSaveJobListingMutation = { __typename?: 'Mutation', unSaveJobListing?: boolean | null };

export type SaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type SaveJobListingMutation = { __typename?: 'Mutation', saveJobListing?: { __typename?: 'SavedListing', id: string, listingId: string, userId: string, metadata?: any | null, createdAt: any } | null };

export type GetCompanyJobQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyJobQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, companyId: string, createdAt: any, updatedAt: any } | null };

export type SignInWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignInWithEmailCodeMutation = { __typename?: 'Mutation', signInWithEmailCode?: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } | null };

export type GenerateEmailCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
}>;


export type GenerateEmailCodeMutation = { __typename?: 'Mutation', generateSignUpEmailCode: { __typename?: 'SignUpWithEmailCodeResponse', code?: number | null, error?: string | null, identifier?: string | null, expires?: any | null, success: boolean } };

export type SignUpWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignUpWithEmailCodeMutation = { __typename?: 'Mutation', signUpWithEmailCode: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, createdAt: any, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listingId: string, metadata?: any | null, createdAt: any }> } | null };

export type GoogleLoginQueryQueryVariables = Exact<{
  redirectUrl: Scalars['String']['input'];
}>;


export type GoogleLoginQueryQuery = { __typename?: 'Query', googleLoginUrl: string };


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};

      export default result;
    