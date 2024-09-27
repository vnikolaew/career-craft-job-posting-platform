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
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: any; output: any; }
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
  user: User;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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

export type AggregateJobListingSubscription = {
  __typename?: 'AggregateJobListingSubscription';
  _count?: Maybe<JobListingSubscriptionCountAggregate>;
  _max?: Maybe<JobListingSubscriptionMaxAggregate>;
  _min?: Maybe<JobListingSubscriptionMinAggregate>;
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

export type AggregateUserAttachments = {
  __typename?: 'AggregateUserAttachments';
  _count?: Maybe<UserAttachmentsCountAggregate>;
  _max?: Maybe<UserAttachmentsMaxAggregate>;
  _min?: Maybe<UserAttachmentsMinAggregate>;
};

export type AggregateUserCoverLetterTemplate = {
  __typename?: 'AggregateUserCoverLetterTemplate';
  _count?: Maybe<UserCoverLetterTemplateCountAggregate>;
  _max?: Maybe<UserCoverLetterTemplateMaxAggregate>;
  _min?: Maybe<UserCoverLetterTemplateMinAggregate>;
};

export type AggregateUserJobApplication = {
  __typename?: 'AggregateUserJobApplication';
  _count?: Maybe<UserJobApplicationCountAggregate>;
  _max?: Maybe<UserJobApplicationMaxAggregate>;
  _min?: Maybe<UserJobApplicationMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type CategoryDetailsResponse = {
  __typename?: 'CategoryDetailsResponse';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  totalJobListings: Scalars['Int']['output'];
};

export type CategoryOnCompany = {
  __typename?: 'CategoryOnCompany';
  category_id: Scalars['String']['output'];
  company_id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CategoryOnCompanyCompany_IdCategory_IdCompoundUniqueInput = {
  category_id: Scalars['String']['input'];
  company_id: Scalars['String']['input'];
};

export type CategoryOnCompanyCreateManyCategoryInput = {
  company_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateManyCategoryInputEnvelope = {
  data: Array<CategoryOnCompanyCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnCompanyCreateManyCompanyInput = {
  category_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateManyCompanyInputEnvelope = {
  data: Array<CategoryOnCompanyCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnCompanyCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCategoryInputEnvelope>;
};

export type CategoryOnCompanyCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCompanyInputEnvelope>;
};

export type CategoryOnCompanyCreateOrConnectWithoutCategoryInput = {
  create: CategoryOnCompanyCreateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyCreateOrConnectWithoutCompanyInput = {
  create: CategoryOnCompanyCreateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyCreateWithoutCategoryInput = {
  company: CompanyCreateNestedOneWithoutCategoriesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateWithoutCompanyInput = {
  category: CompanyCategoryCreateNestedOneWithoutCompaniesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyListRelationFilter = {
  every?: InputMaybe<CategoryOnCompanyWhereInput>;
  none?: InputMaybe<CategoryOnCompanyWhereInput>;
  some?: InputMaybe<CategoryOnCompanyWhereInput>;
};

export type CategoryOnCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOnCompanyOrderByRelevanceFieldEnum {
  CategoryId = 'category_id',
  CompanyId = 'company_id'
}

export type CategoryOnCompanyOrderByRelevanceInput = {
  fields: Array<CategoryOnCompanyOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CategoryOnCompanyOrderByWithRelationInput = {
  _relevance?: InputMaybe<CategoryOnCompanyOrderByRelevanceInput>;
  category?: InputMaybe<CompanyCategoryOrderByWithRelationInput>;
  category_id?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
};

export enum CategoryOnCompanyScalarFieldEnum {
  CategoryId = 'category_id',
  CompanyId = 'company_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type CategoryOnCompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  category_id?: InputMaybe<StringFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnCompanyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryOnCompanyUpdateManyMutationInput;
  where: CategoryOnCompanyScalarWhereInput;
};

export type CategoryOnCompanyUpdateManyWithWhereWithoutCompanyInput = {
  data: CategoryOnCompanyUpdateManyMutationInput;
  where: CategoryOnCompanyScalarWhereInput;
};

export type CategoryOnCompanyUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnCompanyUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryOnCompanyUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryOnCompanyUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryOnCompanyUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnCompanyUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<CategoryOnCompanyUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<CategoryOnCompanyUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type CategoryOnCompanyUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryOnCompanyUpdateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
  data: CategoryOnCompanyUpdateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpdateWithoutCategoryInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutCategoriesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpdateWithoutCompanyInput = {
  category?: InputMaybe<CompanyCategoryUpdateOneRequiredWithoutCompaniesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryOnCompanyCreateWithoutCategoryInput;
  update: CategoryOnCompanyUpdateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
  create: CategoryOnCompanyCreateWithoutCompanyInput;
  update: CategoryOnCompanyUpdateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyWhereInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  category?: InputMaybe<CompanyCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnCompanyWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  category?: InputMaybe<CompanyCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  company_id_category_id?: InputMaybe<CategoryOnCompanyCompany_IdCategory_IdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnJobListing = {
  __typename?: 'CategoryOnJobListing';
  category_id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  listing_id: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CategoryOnJobListingCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  listing_id: Scalars['String']['input'];
};

export type CategoryOnJobListingCreateManyCategoryInputEnvelope = {
  data: Array<CategoryOnJobListingCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnJobListingCreateManyListingInput = {
  category_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnJobListingCreateManyListingInputEnvelope = {
  data: Array<CategoryOnJobListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnJobListingCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyCategoryInputEnvelope>;
};

export type CategoryOnJobListingCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyListingInputEnvelope>;
};

export type CategoryOnJobListingCreateOrConnectWithoutCategoryInput = {
  create: CategoryOnJobListingCreateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingCreateOrConnectWithoutListingInput = {
  create: CategoryOnJobListingCreateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  listing: JobListingCreateNestedOneWithoutCategoriesInput;
};

export type CategoryOnJobListingCreateWithoutListingInput = {
  category: JobListingCategoryCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnJobListingListRelationFilter = {
  every?: InputMaybe<CategoryOnJobListingWhereInput>;
  none?: InputMaybe<CategoryOnJobListingWhereInput>;
  some?: InputMaybe<CategoryOnJobListingWhereInput>;
};

export type CategoryOnJobListingListing_IdCategory_IdCompoundUniqueInput = {
  category_id: Scalars['String']['input'];
  listing_id: Scalars['String']['input'];
};

export type CategoryOnJobListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOnJobListingOrderByRelevanceFieldEnum {
  CategoryId = 'category_id',
  ListingId = 'listing_id'
}

export type CategoryOnJobListingOrderByRelevanceInput = {
  fields: Array<CategoryOnJobListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CategoryOnJobListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<CategoryOnJobListingOrderByRelevanceInput>;
  category?: InputMaybe<JobListingCategoryOrderByWithRelationInput>;
  category_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
};

export enum CategoryOnJobListingScalarFieldEnum {
  CategoryId = 'category_id',
  CreatedAt = 'createdAt',
  ListingId = 'listing_id',
  UpdatedAt = 'updatedAt'
}

export type CategoryOnJobListingScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing_id?: InputMaybe<StringFilter>;
};

export type CategoryOnJobListingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnJobListingUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryOnJobListingUpdateManyMutationInput;
  where: CategoryOnJobListingScalarWhereInput;
};

export type CategoryOnJobListingUpdateManyWithWhereWithoutListingInput = {
  data: CategoryOnJobListingUpdateManyMutationInput;
  where: CategoryOnJobListingScalarWhereInput;
};

export type CategoryOnJobListingUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnJobListingUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryOnJobListingUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryOnJobListingUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryOnJobListingUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnJobListingUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<CategoryOnJobListingUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<CategoryOnJobListingUpsertWithWhereUniqueWithoutListingInput>>;
};

export type CategoryOnJobListingUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryOnJobListingUpdateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpdateWithWhereUniqueWithoutListingInput = {
  data: CategoryOnJobListingUpdateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutCategoriesNestedInput>;
};

export type CategoryOnJobListingUpdateWithoutListingInput = {
  category?: InputMaybe<JobListingCategoryUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnJobListingUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryOnJobListingCreateWithoutCategoryInput;
  update: CategoryOnJobListingUpdateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpsertWithWhereUniqueWithoutListingInput = {
  create: CategoryOnJobListingCreateWithoutListingInput;
  update: CategoryOnJobListingUpdateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingWhereInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  category?: InputMaybe<JobListingCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
};

export type CategoryOnJobListingWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  category?: InputMaybe<JobListingCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  listing_id_category_id?: InputMaybe<CategoryOnJobListingListing_IdCategory_IdCompoundUniqueInput>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['URL']['output']>;
  benefits: Array<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['URL']['output']>;
  career_description_raw: Scalars['String']['output'];
  companyCategories?: Maybe<Array<CompanyCategory>>;
  company_values: Array<Scalars['String']['output']>;
  contacts?: Maybe<CompanyContacts>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  hiring_process: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listings: Array<JobListing>;
  listingsCount: Scalars['Int']['output'];
  local_info?: Maybe<CompanyLocalInfo>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment: Array<Scalars['String']['output']>;
  worldwide_info?: Maybe<CompanyWorldwideInfo>;
};


export type CompanyListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type CompanySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type CompanyCategory = {
  __typename?: 'CompanyCategory';
  _count?: Maybe<CompanyCategoryCount>;
  companies: Array<CategoryOnCompany>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
};


export type CompanyCategoryCompaniesArgs = {
  cursor?: InputMaybe<CategoryOnCompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnCompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnCompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCategorySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type CompanyCategoryCount = {
  __typename?: 'CompanyCategoryCount';
  companies: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type CompanyCategoryCountCompaniesArgs = {
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCategoryCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  companies?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCategoryInput>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCategoriesInput>;
};

export type CompanyCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateNestedManyWithoutSubscriptionsInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutSubscriptionsInput>>;
};

export type CompanyCategoryCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCategoryCreateOrConnectWithoutCompaniesInput>;
  create?: InputMaybe<CompanyCategoryCreateWithoutCompaniesInput>;
};

export type CompanyCategoryCreateOrConnectWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateOrConnectWithoutSubscriptionsInput = {
  create: CompanyCategoryCreateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateWithoutCompaniesInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCategoriesInput>;
};

export type CompanyCategoryCreateWithoutSubscriptionsInput = {
  companies?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCategoryInput>;
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

export type CompanyCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
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
  companies?: InputMaybe<CategoryOnCompanyOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
};

export type CompanyCategoryRelationFilter = {
  is?: InputMaybe<CompanyCategoryWhereInput>;
  isNot?: InputMaybe<CompanyCategoryWhereInput>;
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
  companies?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCategoryNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput>;
};

export type CompanyCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyWithWhereWithoutSubscriptionsInput = {
  data: CompanyCategoryUpdateManyMutationInput;
  where: CompanyCategoryScalarWhereInput;
};

export type CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutSubscriptionsInput>>;
  delete?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput>>;
  updateMany?: InputMaybe<Array<CompanyCategoryUpdateManyWithWhereWithoutSubscriptionsInput>>;
  upsert?: InputMaybe<Array<CompanyCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput>>;
};

export type CompanyCategoryUpdateOneRequiredWithoutCompaniesNestedInput = {
  connect?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCategoryCreateOrConnectWithoutCompaniesInput>;
  create?: InputMaybe<CompanyCategoryCreateWithoutCompaniesInput>;
  update?: InputMaybe<CompanyCategoryUpdateToOneWithWhereWithoutCompaniesInput>;
  upsert?: InputMaybe<CompanyCategoryUpsertWithoutCompaniesInput>;
};

export type CompanyCategoryUpdateToOneWithWhereWithoutCompaniesInput = {
  data: CompanyCategoryUpdateWithoutCompaniesInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput = {
  data: CompanyCategoryUpdateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpdateWithoutCompaniesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput>;
};

export type CompanyCategoryUpdateWithoutSubscriptionsInput = {
  companies?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCategoryNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput = {
  create: CompanyCategoryCreateWithoutSubscriptionsInput;
  update: CompanyCategoryUpdateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpsertWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  update: CompanyCategoryUpdateWithoutCompaniesInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type CompanyCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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
  subscriptions: Scalars['Int']['output'];
};


export type CompanyCountCategoriesArgs = {
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};


export type CompanyCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  emailVerified: Scalars['Int']['output'];
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
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
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<CompanyCreateWithoutCategoriesInput>;
};

export type CompanyCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
};

export type CompanyCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionsInput>;
};

export type CompanyCreateOrConnectWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutSubscriptionsInput = {
  create: CompanyCreateWithoutSubscriptionsInput;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutListingsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutSubscriptionsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  hiring_process?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  local_info: Scalars['JSON']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment?: Maybe<Array<Scalars['String']['output']>>;
  worldwide_info: Scalars['JSON']['output'];
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMinOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyNullableRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
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
  categories?: InputMaybe<CategoryOnCompanyOrderByRelationAggregateInput>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
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
  EmailVerified = 'emailVerified',
  HiringProcess = 'hiring_process',
  Id = 'id',
  LocalInfo = 'local_info',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkEnvironment = 'work_environment',
  WorldwideInfo = 'worldwide_info'
}

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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  local_info?: InputMaybe<JsonWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonWithAggregatesFilter>;
};

export type CompanySignUpInput = {
  administratorEmail: Scalars['String']['input'];
  administratorFirstName: Scalars['String']['input'];
  administratorLastName: Scalars['String']['input'];
  administratorPhone: Scalars['String']['input'];
  administratorPosition: Scalars['String']['input'];
  authorizedPerson: Scalars['Boolean']['input'];
  businessSectors: Array<Scalars['String']['input']>;
  companyAddress: Scalars['String']['input'];
  companyAddressRegistration: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyPassword: Scalars['String']['input'];
  companyPasswordConfirm: Scalars['String']['input'];
  companyPhone: Scalars['String']['input'];
  companySite: Scalars['String']['input'];
  companyUsername: Scalars['String']['input'];
  key: Scalars['String']['input'];
  officialCorrespondenceAddress?: InputMaybe<Scalars['String']['input']>;
  officialEmail?: InputMaybe<Scalars['String']['input']>;
  officialName?: InputMaybe<Scalars['String']['input']>;
  officialPhone?: InputMaybe<Scalars['String']['input']>;
  organizationType: Scalars['String']['input'];
};

export type CompanyUpdateInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<CompanyCreateWithoutCategoriesInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutCategoriesInput>;
};

export type CompanyUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutListingsInput>;
};

export type CompanyUpdateOneWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionsInput>;
  delete?: InputMaybe<CompanyWhereInput>;
  disconnect?: InputMaybe<CompanyWhereInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutSubscriptionsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSubscriptionsInput>;
};

export type CompanyUpdateToOneWithWhereWithoutCategoriesInput = {
  data: CompanyUpdateWithoutCategoriesInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateToOneWithWhereWithoutListingsInput = {
  data: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateToOneWithWhereWithoutSubscriptionsInput = {
  data: CompanyUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateWithoutCategoriesInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutListingsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutSubscriptionsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
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

export type CompanyUpsertWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  update: CompanyUpdateWithoutCategoriesInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpsertWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  update: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpsertWithoutSubscriptionsInput = {
  create: CompanyCreateWithoutSubscriptionsInput;
  update: CompanyUpdateWithoutSubscriptionsInput;
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
  categories?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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
  categories?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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

export type CreateUserCoverLetterTemplateInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
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

export type DeleteAllSubscriptionsResponse = {
  __typename?: 'DeleteAllSubscriptionsResponse';
  deleted_count: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
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

export type EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
};

export type EnumJobListingSubscriptionNotificationFrequencyFilter = {
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
};

export type EnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  _min?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
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

export type FixedJobListingSalary = JobListingSalary & {
  __typename?: 'FixedJobListingSalary';
  currency: Scalars['Currency']['output'];
  value: Scalars['Float']['output'];
};

export enum FurloughPeriod {
  ThirtyPlus = 'ThirtyPlus',
  TwentyFiveToThirty = 'TwentyFiveToThirty',
  TwentyOneToTwentyFive = 'TwentyOneToTwentyFive'
}

export type GetApplicationsByUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetAttachmentsByUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetCategoriesDetailsInput = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type GetEmploymentTypeDetailsResponse = {
  __typename?: 'GetEmploymentTypeDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetJobListingLevelsDetailsResponse = {
  __typename?: 'GetJobListingLevelsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetKeywordsDetailsResponse = {
  __typename?: 'GetKeywordsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetLanguagesDetailsResponse = {
  __typename?: 'GetLanguagesDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetLocationsDetailsResponse = {
  __typename?: 'GetLocationsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetRelevantCompaniesInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetSubscriptionsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetSubscriptionsJobListingsResponse = {
  __typename?: 'GetSubscriptionsJobListingsResponse';
  entries: Array<SubscriptionJobListingsResponse>;
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

export type JobCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type JobListing = {
  __typename?: 'JobListing';
  _count?: Maybe<JobListingCount>;
  applications: Array<UserJobApplication>;
  categories: Array<CategoryOnJobListing>;
  company: Company;
  company_id: Scalars['String']['output'];
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
  /** [JobListingParameters] */
  parameters: Scalars['JSON']['output'];
  parametersTyped?: Maybe<JobListingParameters>;
  saves: Array<SavedListing>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};


export type JobListingApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type JobListingCategoriesArgs = {
  cursor?: InputMaybe<CategoryOnJobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnJobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnJobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingSavesArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCategory = {
  __typename?: 'JobListingCategory';
  _count?: Maybe<JobListingCategoryCount>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listings: Array<CategoryOnJobListing>;
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
};


export type JobListingCategoryListingsArgs = {
  cursor?: InputMaybe<CategoryOnJobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnJobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnJobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCategorySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type JobListingCategoryCount = {
  __typename?: 'JobListingCategoryCount';
  listings: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type JobListingCategoryCountListingsArgs = {
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCategoryCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  listings?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutCategoryInput>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput>;
};

export type JobListingCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateNestedManyWithoutSubscriptionsInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutSubscriptionsInput>>;
};

export type JobListingCategoryCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCategoryCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<JobListingCategoryCreateWithoutListingsInput>;
};

export type JobListingCategoryCreateOrConnectWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateOrConnectWithoutSubscriptionsInput = {
  create: JobListingCategoryCreateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateWithoutListingsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput>;
};

export type JobListingCategoryCreateWithoutSubscriptionsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutCategoryInput>;
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
  listings?: InputMaybe<CategoryOnJobListingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
};

export type JobListingCategoryRelationFilter = {
  is?: InputMaybe<JobListingCategoryWhereInput>;
  isNot?: InputMaybe<JobListingCategoryWhereInput>;
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
  listings?: InputMaybe<CategoryOnJobListingUpdateManyWithoutCategoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput>;
};

export type JobListingCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyWithWhereWithoutSubscriptionsInput = {
  data: JobListingCategoryUpdateManyMutationInput;
  where: JobListingCategoryScalarWhereInput;
};

export type JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutSubscriptionsInput>>;
  delete?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput>>;
  updateMany?: InputMaybe<Array<JobListingCategoryUpdateManyWithWhereWithoutSubscriptionsInput>>;
  upsert?: InputMaybe<Array<JobListingCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput>>;
};

export type JobListingCategoryUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCategoryCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<JobListingCategoryCreateWithoutListingsInput>;
  update?: InputMaybe<JobListingCategoryUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<JobListingCategoryUpsertWithoutListingsInput>;
};

export type JobListingCategoryUpdateToOneWithWhereWithoutListingsInput = {
  data: JobListingCategoryUpdateWithoutListingsInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput = {
  data: JobListingCategoryUpdateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpdateWithoutListingsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput>;
};

export type JobListingCategoryUpdateWithoutSubscriptionsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<CategoryOnJobListingUpdateManyWithoutCategoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput = {
  create: JobListingCategoryCreateWithoutSubscriptionsInput;
  update: JobListingCategoryUpdateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpsertWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  update: JobListingCategoryUpdateWithoutListingsInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type JobListingCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type JobListingCount = {
  __typename?: 'JobListingCount';
  applications: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
};


export type JobListingCountApplicationsArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type JobListingCountCategoriesArgs = {
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCountSavesArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCountAggregate = {
  __typename?: 'JobListingCountAggregate';
  _all: Scalars['Int']['output'];
  company_id: Scalars['Int']['output'];
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  company_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type JobListingCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
};

export type JobListingCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobListingCreateWithoutApplicationsInput>;
};

export type JobListingCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<JobListingCreateWithoutCategoriesInput>;
};

export type JobListingCreateNestedOneWithoutSavesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
};

export type JobListingCreateOrConnectWithoutApplicationsInput = {
  create: JobListingCreateWithoutApplicationsInput;
  where: JobListingWhereUniqueInput;
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

export type JobListingCreateWithoutApplicationsInput = {
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type JobListingCreateWithoutCategoriesInput = {
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export enum JobListingFrom {
  Agencies = 'Agencies',
  DirectEmployer = 'DirectEmployer'
}

export type JobListingGroupBy = {
  __typename?: 'JobListingGroupBy';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
  company_id: Scalars['String']['output'];
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
  company_id?: Maybe<Scalars['String']['output']>;
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  company_id?: Maybe<Scalars['String']['output']>;
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  CompanyId = 'company_id',
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoryOnJobListingOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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

export type JobListingParameters = {
  __typename?: 'JobListingParameters';
  from?: Maybe<JobListingFrom>;
  furlough: FurloughPeriod;
  internship?: Maybe<Scalars['Boolean']['output']>;
  remoteInterview?: Maybe<Scalars['Boolean']['output']>;
  salary?: Maybe<JobListingSalary>;
};

export type JobListingParametersInput = {
  from?: InputMaybe<JobListingFrom>;
  furlough?: InputMaybe<FurloughPeriod>;
  internship?: InputMaybe<Scalars['Boolean']['input']>;
  remoteInterview?: InputMaybe<Scalars['Boolean']['input']>;
  salary?: InputMaybe<JobListingSalaryInput>;
};

export type JobListingRelationFilter = {
  is?: InputMaybe<JobListingWhereInput>;
  isNot?: InputMaybe<JobListingWhereInput>;
};

export type JobListingSalary = {
  currency: Scalars['Currency']['output'];
};

export type JobListingSalaryInput = {
  currency: Scalars['Currency']['input'];
};

export enum JobListingScalarFieldEnum {
  CompanyId = 'company_id',
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
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  company_id?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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

export type JobListingSubscription = {
  __typename?: 'JobListingSubscription';
  _count?: Maybe<JobListingSubscriptionCount>;
  categories: Array<CompanyCategory>;
  company?: Maybe<Company>;
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  job_categories: Array<JobListingCategory>;
  keywords: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  /** [JobListingParameters] */
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user?: Maybe<User>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};


export type JobListingSubscriptionCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type JobListingSubscriptionCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type JobListingSubscriptionJob_CategoriesArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type JobListingSubscriptionUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type JobListingSubscriptionCount = {
  __typename?: 'JobListingSubscriptionCount';
  categories: Scalars['Int']['output'];
  job_categories: Scalars['Int']['output'];
};


export type JobListingSubscriptionCountCategoriesArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type JobListingSubscriptionCountJob_CategoriesArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingSubscriptionCountAggregate = {
  __typename?: 'JobListingSubscriptionCountAggregate';
  _all: Scalars['Int']['output'];
  company_id: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  keywords: Scalars['Int']['output'];
  languages: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  notification_frequency: Scalars['Int']['output'];
  parameters: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_email: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  work_from: Scalars['Int']['output'];
};

export type JobListingSubscriptionCountOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingSubscriptionCreateInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyCompanyInputEnvelope = {
  data: Array<JobListingSubscriptionCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingSubscriptionCreateManyInput = {
  company_id?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyUserInput = {
  company_id?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyUserInputEnvelope = {
  data: Array<JobListingSubscriptionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingSubscriptionCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCategoriesInput>>;
};

export type JobListingSubscriptionCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyCompanyInputEnvelope>;
};

export type JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutJob_CategoriesInput>>;
};

export type JobListingSubscriptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyUserInputEnvelope>;
};

export type JobListingSubscriptionCreateOrConnectWithoutCategoriesInput = {
  create: JobListingSubscriptionCreateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutCompanyInput = {
  create: JobListingSubscriptionCreateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput = {
  create: JobListingSubscriptionCreateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutUserInput = {
  create: JobListingSubscriptionCreateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutCompanyInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutJob_CategoriesInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutUserInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreatekeywordsInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingSubscriptionCreatelanguagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingSubscriptionGroupBy = {
  __typename?: 'JobListingSubscriptionGroupBy';
  _count?: Maybe<JobListingSubscriptionCountAggregate>;
  _max?: Maybe<JobListingSubscriptionMaxAggregate>;
  _min?: Maybe<JobListingSubscriptionMinAggregate>;
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionListRelationFilter = {
  every?: InputMaybe<JobListingSubscriptionWhereInput>;
  none?: InputMaybe<JobListingSubscriptionWhereInput>;
  some?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type JobListingSubscriptionMaxAggregate = {
  __typename?: 'JobListingSubscriptionMaxAggregate';
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  notification_frequency?: Maybe<JobListingSubscriptionNotificationFrequency>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionMaxOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingSubscriptionMinAggregate = {
  __typename?: 'JobListingSubscriptionMinAggregate';
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  notification_frequency?: Maybe<JobListingSubscriptionNotificationFrequency>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionMinOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export enum JobListingSubscriptionNotificationFrequency {
  Daily = 'Daily',
  Weekly = 'Weekly'
}

export type JobListingSubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingSubscriptionOrderByRelevanceFieldEnum {
  CompanyId = 'company_id',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Location = 'location',
  UserEmail = 'user_email',
  UserId = 'user_id'
}

export type JobListingSubscriptionOrderByRelevanceInput = {
  fields: Array<JobListingSubscriptionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingSubscriptionOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingSubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingSubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingSubscriptionMinOrderByAggregateInput>;
  company_id?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  user_email?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingSubscriptionOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingSubscriptionOrderByRelevanceInput>;
  categories?: InputMaybe<CompanyCategoryOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job_categories?: InputMaybe<JobListingCategoryOrderByRelationAggregateInput>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_email?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export enum JobListingSubscriptionScalarFieldEnum {
  CompanyId = 'company_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Level = 'level',
  Location = 'location',
  Metadata = 'metadata',
  NotificationFrequency = 'notification_frequency',
  Parameters = 'parameters',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserEmail = 'user_email',
  UserId = 'user_id',
  WorkFrom = 'work_from'
}

export type JobListingSubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingSubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  company_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  parameters?: InputMaybe<JsonWithAggregatesFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  user_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableWithAggregatesFilter>;
};

export type JobListingSubscriptionUpdateInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutCategoriesInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutJob_CategoriesInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutUserInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutJob_CategoriesInput>>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutJob_CategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutJob_CategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutJob_CategoriesInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: JobListingSubscriptionUpdateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingSubscriptionUpdateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutJob_CategoriesInput = {
  data: JobListingSubscriptionUpdateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
  data: JobListingSubscriptionUpdateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutCompanyInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutJob_CategoriesInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutUserInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingSubscriptionUpdatelanguagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: JobListingSubscriptionCreateWithoutCategoriesInput;
  update: JobListingSubscriptionUpdateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingSubscriptionCreateWithoutCompanyInput;
  update: JobListingSubscriptionUpdateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutJob_CategoriesInput = {
  create: JobListingSubscriptionCreateWithoutJob_CategoriesInput;
  update: JobListingSubscriptionUpdateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
  create: JobListingSubscriptionCreateWithoutUserInput;
  update: JobListingSubscriptionUpdateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionWhereInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company?: InputMaybe<CompanyNullableRelationFilter>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  job_categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingSubscriptionWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company?: InputMaybe<CompanyNullableRelationFilter>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingUpdateInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
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

export type JobListingUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobListingCreateWithoutApplicationsInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutApplicationsInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutApplicationsInput>;
};

export type JobListingUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<JobListingCreateWithoutCategoriesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutCategoriesInput>;
};

export type JobListingUpdateOneRequiredWithoutSavesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutSavesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutSavesInput>;
};

export type JobListingUpdateToOneWithWhereWithoutApplicationsInput = {
  data: JobListingUpdateWithoutApplicationsInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateToOneWithWhereWithoutCategoriesInput = {
  data: JobListingUpdateWithoutCategoriesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateToOneWithWhereWithoutSavesInput = {
  data: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithoutApplicationsInput = {
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpdateWithoutCategoriesInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  update: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithoutApplicationsInput = {
  create: JobListingCreateWithoutApplicationsInput;
  update: JobListingUpdateWithoutApplicationsInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpsertWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  update: JobListingUpdateWithoutCategoriesInput;
  where?: InputMaybe<JobListingWhereInput>;
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
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  categories?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  categories?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  acceptAllCookies: Scalars['Boolean']['output'];
  companySignUp?: Maybe<Company>;
  confirmJobListingSubscription?: Maybe<JobListingSubscription>;
  createManyAccount: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCompanyCategory: AffectedRowsOutput;
  createManyJobListing: AffectedRowsOutput;
  createManyJobListingCategory: AffectedRowsOutput;
  createManyJobListingSubscription: AffectedRowsOutput;
  createManySavedListing: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserAttachments: AffectedRowsOutput;
  createManyUserCoverLetterTemplate: AffectedRowsOutput;
  createManyUserJobApplication: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneCompany: Company;
  createOneCompanyCategory: CompanyCategory;
  createOneJobListing: JobListing;
  createOneJobListingCategory: JobListingCategory;
  createOneJobListingSubscription: JobListingSubscription;
  createOneSavedListing: SavedListing;
  createOneSession: Session;
  createOneUser: User;
  createOneUserAttachments: UserAttachments;
  createOneUserCoverLetterTemplate: UserCoverLetterTemplate;
  createOneUserJobApplication: UserJobApplication;
  createOneVerificationToken: VerificationToken;
  createUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  declineAllCookies: Scalars['Boolean']['output'];
  deleteAllCoverLetterTemplates: Scalars['Boolean']['output'];
  deleteAllSubscriptions: DeleteAllSubscriptionsResponse;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCompanyCategory: AffectedRowsOutput;
  deleteManyJobListing: AffectedRowsOutput;
  deleteManyJobListingCategory: AffectedRowsOutput;
  deleteManyJobListingSubscription: AffectedRowsOutput;
  deleteManySavedListing: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserAttachments: AffectedRowsOutput;
  deleteManyUserCoverLetterTemplate: AffectedRowsOutput;
  deleteManyUserJobApplication: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCompanyCategory?: Maybe<CompanyCategory>;
  deleteOneJobListing?: Maybe<JobListing>;
  deleteOneJobListingCategory?: Maybe<JobListingCategory>;
  deleteOneJobListingSubscription?: Maybe<JobListingSubscription>;
  deleteOneSavedListing?: Maybe<SavedListing>;
  deleteOneSession?: Maybe<Session>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserAttachments?: Maybe<UserAttachments>;
  deleteOneUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  deleteOneUserJobApplication?: Maybe<UserJobApplication>;
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
  subscribeToCompanyListings?: Maybe<JobListingSubscription>;
  unSaveJobListing?: Maybe<Scalars['Boolean']['output']>;
  unSubscribeToJobListings: Scalars['Boolean']['output'];
  updateCookiePreferences: Scalars['Boolean']['output'];
  updateManyAccount: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCompanyCategory: AffectedRowsOutput;
  updateManyJobListing: AffectedRowsOutput;
  updateManyJobListingCategory: AffectedRowsOutput;
  updateManyJobListingSubscription: AffectedRowsOutput;
  updateManySavedListing: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserAttachments: AffectedRowsOutput;
  updateManyUserCoverLetterTemplate: AffectedRowsOutput;
  updateManyUserJobApplication: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneCompany?: Maybe<Company>;
  updateOneCompanyCategory?: Maybe<CompanyCategory>;
  updateOneJobListing?: Maybe<JobListing>;
  updateOneJobListingCategory?: Maybe<JobListingCategory>;
  updateOneJobListingSubscription?: Maybe<JobListingSubscription>;
  updateOneSavedListing?: Maybe<SavedListing>;
  updateOneSession?: Maybe<Session>;
  updateOneUser?: Maybe<User>;
  updateOneUserAttachments?: Maybe<UserAttachments>;
  updateOneUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  updateOneUserJobApplication?: Maybe<UserJobApplication>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneCompany: Company;
  upsertOneCompanyCategory: CompanyCategory;
  upsertOneJobListing: JobListing;
  upsertOneJobListingCategory: JobListingCategory;
  upsertOneJobListingSubscription: JobListingSubscription;
  upsertOneSavedListing: SavedListing;
  upsertOneSession: Session;
  upsertOneUser: User;
  upsertOneUserAttachments: UserAttachments;
  upsertOneUserCoverLetterTemplate: UserCoverLetterTemplate;
  upsertOneUserJobApplication: UserJobApplication;
  upsertOneVerificationToken: VerificationToken;
  verifyEmail: VerifyEmailResponse;
};


export type MutationCompanySignUpArgs = {
  input: CompanySignUpInput;
};


export type MutationConfirmJobListingSubscriptionArgs = {
  subscriptionId: Scalars['String']['input'];
  subscriptionKey: Scalars['String']['input'];
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


export type MutationCreateManyJobListingSubscriptionArgs = {
  data: Array<JobListingSubscriptionCreateManyInput>;
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


export type MutationCreateManyUserAttachmentsArgs = {
  data: Array<UserAttachmentsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserCoverLetterTemplateArgs = {
  data: Array<UserCoverLetterTemplateCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserJobApplicationArgs = {
  data: Array<UserJobApplicationCreateManyInput>;
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


export type MutationCreateOneJobListingSubscriptionArgs = {
  data: JobListingSubscriptionCreateInput;
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


export type MutationCreateOneUserAttachmentsArgs = {
  data: UserAttachmentsCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserJobApplicationArgs = {
  data: UserJobApplicationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateUserCoverLetterTemplateArgs = {
  input: CreateUserCoverLetterTemplateInput;
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


export type MutationDeleteManyJobListingSubscriptionArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type MutationDeleteManyUserAttachmentsArgs = {
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type MutationDeleteManyUserCoverLetterTemplateArgs = {
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type MutationDeleteManyUserJobApplicationArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type MutationDeleteOneJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationDeleteOneUserAttachmentsArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationDeleteOneUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationDeleteOneUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type MutationSubscribeToCompanyListingsArgs = {
  input: SubscribeToJobListingsInput;
};


export type MutationUnSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationUnSubscribeToJobListingsArgs = {
  subscriptionId: Scalars['String']['input'];
};


export type MutationUpdateCookiePreferencesArgs = {
  input: UpdateCookiePreferencesInput;
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


export type MutationUpdateManyJobListingSubscriptionArgs = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type MutationUpdateManyUserAttachmentsArgs = {
  data: UserAttachmentsUpdateManyMutationInput;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type MutationUpdateManyUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateUpdateManyMutationInput;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type MutationUpdateManyUserJobApplicationArgs = {
  data: UserJobApplicationUpdateManyMutationInput;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type MutationUpdateOneJobListingSubscriptionArgs = {
  data: JobListingSubscriptionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationUpdateOneUserAttachmentsArgs = {
  data: UserAttachmentsUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationUpdateOneUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationUpdateOneUserJobApplicationArgs = {
  data: UserJobApplicationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type MutationUpsertOneJobListingSubscriptionArgs = {
  create: JobListingSubscriptionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingSubscriptionUpdateInput;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationUpsertOneUserAttachmentsArgs = {
  create: UserAttachmentsCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserAttachmentsUpdateInput;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationUpsertOneUserCoverLetterTemplateArgs = {
  create: UserCoverLetterTemplateCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserCoverLetterTemplateUpdateInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationUpsertOneUserJobApplicationArgs = {
  create: UserJobApplicationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserJobApplicationUpdateInput;
  where: UserJobApplicationWhereUniqueInput;
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

export type NestedEnumJobListingSubscriptionNotificationFrequencyFilter = {
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
};

export type NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  _min?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
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
  aggregateJobListingSubscription: AggregateJobListingSubscription;
  aggregateSavedListing: AggregateSavedListing;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateUserAttachments: AggregateUserAttachments;
  aggregateUserCoverLetterTemplate: AggregateUserCoverLetterTemplate;
  aggregateUserJobApplication: AggregateUserJobApplication;
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
  findFirstJobListingSubscription?: Maybe<JobListingSubscription>;
  findFirstJobListingSubscriptionOrThrow?: Maybe<JobListingSubscription>;
  findFirstSavedListing?: Maybe<SavedListing>;
  findFirstSavedListingOrThrow?: Maybe<SavedListing>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstUserAttachments?: Maybe<UserAttachments>;
  findFirstUserAttachmentsOrThrow?: Maybe<UserAttachments>;
  findFirstUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  findFirstUserCoverLetterTemplateOrThrow?: Maybe<UserCoverLetterTemplate>;
  findFirstUserJobApplication?: Maybe<UserJobApplication>;
  findFirstUserJobApplicationOrThrow?: Maybe<UserJobApplication>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  findManyUserAttachments: Array<UserAttachments>;
  findUniqueUserAttachments?: Maybe<UserAttachments>;
  findUniqueUserAttachmentsOrThrow?: Maybe<UserAttachments>;
  getAccount?: Maybe<Account>;
  getAllEmploymentTypes: Array<GetEmploymentTypeDetailsResponse>;
  getAllKeywords: Array<GetKeywordsDetailsResponse>;
  getAllLanguages: Array<GetLanguagesDetailsResponse>;
  getAllLocations: Array<GetLocationsDetailsResponse>;
  getAllUsersWithSubscriptions: Array<User>;
  getAvailableCountries: Array<Scalars['String']['output']>;
  getCompany?: Maybe<Company>;
  getCompanyCategoriesDetails: Array<CategoryDetailsResponse>;
  getCompanyCategory?: Maybe<CompanyCategory>;
  getJobListing?: Maybe<JobListing>;
  getJobListingCategory?: Maybe<JobListingCategory>;
  getJobListingLevelsDetails: Array<GetJobListingLevelsDetailsResponse>;
  getJobListingSubscription?: Maybe<JobListingSubscription>;
  getMostRelevantCompanies: Array<Company>;
  getMyCoverLetterTemplates: Array<UserCoverLetterTemplate>;
  getSavedListing?: Maybe<SavedListing>;
  getSession?: Maybe<Session>;
  getSubscriptionsJobListingsForUser: GetSubscriptionsJobListingsResponse;
  getTopCompanies: Array<Company>;
  getTopListingCategories: Array<JobListingCategory>;
  getUser?: Maybe<User>;
  getUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  getUserJobApplication?: Maybe<UserJobApplication>;
  getVerificationToken?: Maybe<VerificationToken>;
  googleLoginUrl: Scalars['String']['output'];
  groupByAccount: Array<AccountGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCompanyCategory: Array<CompanyCategoryGroupBy>;
  groupByJobListing: Array<JobListingGroupBy>;
  groupByJobListingCategory: Array<JobListingCategoryGroupBy>;
  groupByJobListingSubscription: Array<JobListingSubscriptionGroupBy>;
  groupBySavedListing: Array<SavedListingGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserAttachments: Array<UserAttachmentsGroupBy>;
  groupByUserCoverLetterTemplate: Array<UserCoverLetterTemplateGroupBy>;
  groupByUserJobApplication: Array<UserJobApplicationGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  jobListing?: Maybe<JobListing>;
  jobListingCategories: Array<JobListingCategory>;
  jobListingCategory?: Maybe<JobListingCategory>;
  jobListingSubscription?: Maybe<JobListingSubscription>;
  jobListingSubscriptions: Array<JobListingSubscription>;
  jobListings: Array<JobListing>;
  me?: Maybe<User>;
  myApplications: Array<UserJobApplication>;
  myAttachments: Array<UserAttachments>;
  mySubscriptions: Array<JobListingSubscription>;
  savedListing?: Maybe<SavedListing>;
  savedListings: Array<SavedListing>;
  search: Array<UserSearchResponse>;
  searchJobListings: Array<JobListing>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  userCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  userCoverLetterTemplates: Array<UserCoverLetterTemplate>;
  userJobApplication?: Maybe<UserJobApplication>;
  userJobApplications: Array<UserJobApplication>;
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


export type QueryAggregateJobListingSubscriptionArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryAggregateUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryAggregateUserCoverLetterTemplateArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryAggregateUserJobApplicationArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryFindFirstJobListingSubscriptionArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};


export type QueryFindFirstJobListingSubscriptionOrThrowArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryFindFirstUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindFirstUserAttachmentsOrThrowArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindFirstUserCoverLetterTemplateArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryFindFirstUserCoverLetterTemplateOrThrowArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryFindFirstUserJobApplicationArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type QueryFindFirstUserJobApplicationOrThrowArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryFindManyUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindUniqueUserAttachmentsArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type QueryFindUniqueUserAttachmentsOrThrowArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryGetCompanyCategoriesDetailsArgs = {
  input: GetCategoriesDetailsInput;
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


export type QueryGetJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
};


export type QueryGetMostRelevantCompaniesArgs = {
  input: GetRelevantCompaniesInput;
};


export type QueryGetSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetSubscriptionsJobListingsForUserArgs = {
  userId: Scalars['String']['input'];
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


export type QueryGetUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type QueryGetUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type QueryGroupByJobListingSubscriptionArgs = {
  by: Array<JobListingSubscriptionScalarFieldEnum>;
  having?: InputMaybe<JobListingSubscriptionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryGroupByUserAttachmentsArgs = {
  by: Array<UserAttachmentsScalarFieldEnum>;
  having?: InputMaybe<UserAttachmentsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryGroupByUserCoverLetterTemplateArgs = {
  by: Array<UserCoverLetterTemplateScalarFieldEnum>;
  having?: InputMaybe<UserCoverLetterTemplateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryGroupByUserJobApplicationArgs = {
  by: Array<UserJobApplicationScalarFieldEnum>;
  having?: InputMaybe<UserJobApplicationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
};


export type QueryJobListingSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryMyApplicationsArgs = {
  input: GetApplicationsByUserInput;
};


export type QueryMyAttachmentsArgs = {
  input: GetAttachmentsByUserInput;
};


export type QueryMySubscriptionsArgs = {
  input: GetSubscriptionsInput;
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


export type QuerySearchJobListingsArgs = {
  input: SearchJobListingsInput;
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


export type QueryUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type QueryUserCoverLetterTemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
};


export type QueryUserJobApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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

export type RangeJobListingSalary = JobListingSalary & {
  __typename?: 'RangeJobListingSalary';
  currency: Scalars['Currency']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export type SavedListing = {
  __typename?: 'SavedListing';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listing_id: Scalars['String']['output'];
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
  listing_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SavedListingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInputEnvelope = {
  data: Array<SavedListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  listing_id: Scalars['String']['output'];
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
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingMinAggregate = {
  __typename?: 'SavedListingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SavedListingOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listing_id',
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
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<SavedListingOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SavedListingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listing_id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SavedListingScalarWhereInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listing_id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SavedListingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingWhereUniqueInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SearchJobListingsInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  companyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<JobListingFrom>;
  furlough?: InputMaybe<FurloughPeriod>;
  internship?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  levels?: InputMaybe<Array<JobListingLevel>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  noExperience?: InputMaybe<Scalars['Boolean']['input']>;
  professions?: InputMaybe<Array<Scalars['String']['input']>>;
  remoteInterview?: InputMaybe<Scalars['Boolean']['input']>;
  salary?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<JobListingEmploymentType>>;
  workFromHome?: InputMaybe<Scalars['Boolean']['input']>;
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
  user: User;
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
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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

export type SubscribeToJobListingsInput = {
  categories: Array<CompanyCategoryInput>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  employmentType?: InputMaybe<JobListingEmploymentType>;
  frequency: JobListingSubscriptionNotificationFrequency;
  job_categories: Array<JobCategoryInput>;
  keywords: Array<Scalars['String']['input']>;
  languages: Array<Scalars['String']['input']>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<JobListingParametersInput>;
  workFromHome?: InputMaybe<WorkFromHome>;
};

export type Subscription = {
  __typename?: 'Subscription';
  randomNumber: Scalars['Int']['output'];
  userSignedUp: User;
};

export type SubscriptionJobListingsResponse = {
  __typename?: 'SubscriptionJobListingsResponse';
  listingIds: Array<Scalars['String']['output']>;
  subscriptionId: Scalars['String']['output'];
};

export type UpdateCookiePreferencesInput = {
  Functionality: Scalars['Boolean']['input'];
  Marketing: Scalars['Boolean']['input'];
  Necessary: Scalars['Boolean']['input'];
  Statistics: Scalars['Boolean']['input'];
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  applications: Array<UserJobApplication>;
  attachments: Array<UserAttachments>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  cover_letter_templates: Array<UserCoverLetterTemplate>;
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
  subscriptions: Array<JobListingSubscription>;
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
export type UserApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserCover_Letter_TemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
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


/** Always after the prisma-client-js generator */
export type UserSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type UserAttachments = {
  __typename?: 'UserAttachments';
  attachment_extension: Scalars['String']['output'];
  attachment_name: Scalars['String']['output'];
  attachment_url: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserAttachmentsCountAggregate = {
  __typename?: 'UserAttachmentsCountAggregate';
  _all: Scalars['Int']['output'];
  attachment_extension: Scalars['Int']['output'];
  attachment_name: Scalars['Int']['output'];
  attachment_url: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserAttachmentsCountOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsCreateInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutAttachmentsInput;
};

export type UserAttachmentsCreateManyInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserAttachmentsCreateManyUserInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsCreateManyUserInputEnvelope = {
  data: Array<UserAttachmentsCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAttachmentsCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAttachmentsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAttachmentsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAttachmentsCreateManyUserInputEnvelope>;
};

export type UserAttachmentsCreateOrConnectWithoutUserInput = {
  create: UserAttachmentsCreateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsCreateWithoutUserInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsGroupBy = {
  __typename?: 'UserAttachmentsGroupBy';
  _count?: Maybe<UserAttachmentsCountAggregate>;
  _max?: Maybe<UserAttachmentsMaxAggregate>;
  _min?: Maybe<UserAttachmentsMinAggregate>;
  attachment_extension: Scalars['String']['output'];
  attachment_name: Scalars['String']['output'];
  attachment_url: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserAttachmentsListRelationFilter = {
  every?: InputMaybe<UserAttachmentsWhereInput>;
  none?: InputMaybe<UserAttachmentsWhereInput>;
  some?: InputMaybe<UserAttachmentsWhereInput>;
};

export type UserAttachmentsMaxAggregate = {
  __typename?: 'UserAttachmentsMaxAggregate';
  attachment_extension?: Maybe<Scalars['String']['output']>;
  attachment_name?: Maybe<Scalars['String']['output']>;
  attachment_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserAttachmentsMaxOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsMinAggregate = {
  __typename?: 'UserAttachmentsMinAggregate';
  attachment_extension?: Maybe<Scalars['String']['output']>;
  attachment_name?: Maybe<Scalars['String']['output']>;
  attachment_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserAttachmentsMinOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserAttachmentsOrderByRelevanceFieldEnum {
  AttachmentExtension = 'attachment_extension',
  AttachmentName = 'attachment_name',
  AttachmentUrl = 'attachment_url',
  Id = 'id',
  UserId = 'user_id'
}

export type UserAttachmentsOrderByRelevanceInput = {
  fields: Array<UserAttachmentsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserAttachmentsOrderByWithAggregationInput = {
  _count?: InputMaybe<UserAttachmentsCountOrderByAggregateInput>;
  _max?: InputMaybe<UserAttachmentsMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserAttachmentsMinOrderByAggregateInput>;
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserAttachmentsOrderByRelevanceInput>;
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserAttachmentsScalarFieldEnum {
  AttachmentExtension = 'attachment_extension',
  AttachmentName = 'attachment_name',
  AttachmentUrl = 'attachment_url',
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserAttachmentsScalarWhereInput = {
  AND?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserAttachmentsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  attachment_extension?: InputMaybe<StringWithAggregatesFilter>;
  attachment_name?: InputMaybe<StringWithAggregatesFilter>;
  attachment_url?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserAttachmentsUpdateInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttachmentsNestedInput>;
};

export type UserAttachmentsUpdateManyMutationInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsUpdateManyWithWhereWithoutUserInput = {
  data: UserAttachmentsUpdateManyMutationInput;
  where: UserAttachmentsScalarWhereInput;
};

export type UserAttachmentsUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAttachmentsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAttachmentsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAttachmentsCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAttachmentsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserAttachmentsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserAttachmentsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserAttachmentsUpdateWithWhereUniqueWithoutUserInput = {
  data: UserAttachmentsUpdateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsUpdateWithoutUserInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsUpsertWithWhereUniqueWithoutUserInput = {
  create: UserAttachmentsCreateWithoutUserInput;
  update: UserAttachmentsUpdateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsWhereInput = {
  AND?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserAttachmentsWhereUniqueInput = {
  AND?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
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
  applications: Scalars['Int']['output'];
  attachments: Scalars['Int']['output'];
  cover_letter_templates: Scalars['Int']['output'];
  saved_listings: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountApplicationsArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type UserCountAttachmentsArgs = {
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type UserCountCover_Letter_TemplatesArgs = {
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type UserCountSaved_ListingsArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type UserCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplate = {
  __typename?: 'UserCoverLetterTemplate';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  letter: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserCoverLetterTemplateCountAggregate = {
  __typename?: 'UserCoverLetterTemplateCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  letter: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserCoverLetterTemplateCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutCover_Letter_TemplatesInput;
};

export type UserCoverLetterTemplateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

export type UserCoverLetterTemplateCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCoverLetterTemplateCreateManyUserInputEnvelope = {
  data: Array<UserCoverLetterTemplateCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCoverLetterTemplateCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCoverLetterTemplateCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserCoverLetterTemplateCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserCoverLetterTemplateCreateManyUserInputEnvelope>;
};

export type UserCoverLetterTemplateCreateOrConnectWithoutUserInput = {
  create: UserCoverLetterTemplateCreateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCoverLetterTemplateGroupBy = {
  __typename?: 'UserCoverLetterTemplateGroupBy';
  _count?: Maybe<UserCoverLetterTemplateCountAggregate>;
  _max?: Maybe<UserCoverLetterTemplateMaxAggregate>;
  _min?: Maybe<UserCoverLetterTemplateMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  letter: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserCoverLetterTemplateListRelationFilter = {
  every?: InputMaybe<UserCoverLetterTemplateWhereInput>;
  none?: InputMaybe<UserCoverLetterTemplateWhereInput>;
  some?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};

export type UserCoverLetterTemplateMaxAggregate = {
  __typename?: 'UserCoverLetterTemplateMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  letter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserCoverLetterTemplateMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateMinAggregate = {
  __typename?: 'UserCoverLetterTemplateMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  letter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserCoverLetterTemplateMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserCoverLetterTemplateOrderByRelevanceFieldEnum {
  Id = 'id',
  Letter = 'letter',
  Name = 'name',
  UserId = 'user_id'
}

export type UserCoverLetterTemplateOrderByRelevanceInput = {
  fields: Array<UserCoverLetterTemplateOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserCoverLetterTemplateOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCoverLetterTemplateCountOrderByAggregateInput>;
  _max?: InputMaybe<UserCoverLetterTemplateMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserCoverLetterTemplateMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserCoverLetterTemplateOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserCoverLetterTemplateScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Letter = 'letter',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserCoverLetterTemplateScalarWhereInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCoverLetterTemplateScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  letter?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserCoverLetterTemplateUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCover_Letter_TemplatesNestedInput>;
};

export type UserCoverLetterTemplateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserCoverLetterTemplateUpdateManyWithWhereWithoutUserInput = {
  data: UserCoverLetterTemplateUpdateManyMutationInput;
  where: UserCoverLetterTemplateScalarWhereInput;
};

export type UserCoverLetterTemplateUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCoverLetterTemplateCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserCoverLetterTemplateCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserCoverLetterTemplateCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  set?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  update?: InputMaybe<Array<UserCoverLetterTemplateUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserCoverLetterTemplateUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserCoverLetterTemplateUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserCoverLetterTemplateUpdateWithWhereUniqueWithoutUserInput = {
  data: UserCoverLetterTemplateUpdateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserCoverLetterTemplateUpsertWithWhereUniqueWithoutUserInput = {
  create: UserCoverLetterTemplateCreateWithoutUserInput;
  update: UserCoverLetterTemplateUpdateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateWhereInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCoverLetterTemplateWhereUniqueInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type UserCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
};

export type UserCreateNestedOneWithoutAttachmentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttachmentsInput>;
  create?: InputMaybe<UserCreateWithoutAttachmentsInput>;
};

export type UserCreateNestedOneWithoutCover_Letter_TemplatesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCover_Letter_TemplatesInput>;
  create?: InputMaybe<UserCreateWithoutCover_Letter_TemplatesInput>;
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

export type UserCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAttachmentsInput = {
  create: UserCreateWithoutAttachmentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCover_Letter_TemplatesInput = {
  create: UserCreateWithoutCover_Letter_TemplatesInput;
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

export type UserCreateOrConnectWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutApplicationsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutAttachmentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCover_Letter_TemplatesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSubscriptionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type UserJobApplication = {
  __typename?: 'UserJobApplication';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listing_id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserJobApplicationCountAggregate = {
  __typename?: 'UserJobApplicationCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  listing_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserJobApplicationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutApplicationsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutApplicationsInput;
};

export type UserJobApplicationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserJobApplicationCreateManyListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserJobApplicationCreateManyListingInputEnvelope = {
  data: Array<UserJobApplicationCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserJobApplicationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationCreateManyUserInputEnvelope = {
  data: Array<UserJobApplicationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserJobApplicationCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutListingInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyListingInputEnvelope>;
};

export type UserJobApplicationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyUserInputEnvelope>;
};

export type UserJobApplicationCreateOrConnectWithoutListingInput = {
  create: UserJobApplicationCreateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationCreateOrConnectWithoutUserInput = {
  create: UserJobApplicationCreateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationCreateWithoutListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutApplicationsInput;
};

export type UserJobApplicationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutApplicationsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationGroupBy = {
  __typename?: 'UserJobApplicationGroupBy';
  _count?: Maybe<UserJobApplicationCountAggregate>;
  _max?: Maybe<UserJobApplicationMaxAggregate>;
  _min?: Maybe<UserJobApplicationMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  listing_id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserJobApplicationListRelationFilter = {
  every?: InputMaybe<UserJobApplicationWhereInput>;
  none?: InputMaybe<UserJobApplicationWhereInput>;
  some?: InputMaybe<UserJobApplicationWhereInput>;
};

export type UserJobApplicationMaxAggregate = {
  __typename?: 'UserJobApplicationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserJobApplicationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationMinAggregate = {
  __typename?: 'UserJobApplicationMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserJobApplicationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserJobApplicationOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listing_id',
  UserId = 'user_id'
}

export type UserJobApplicationOrderByRelevanceInput = {
  fields: Array<UserJobApplicationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserJobApplicationOrderByWithAggregationInput = {
  _count?: InputMaybe<UserJobApplicationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserJobApplicationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserJobApplicationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserJobApplicationOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserJobApplicationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listing_id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserJobApplicationScalarWhereInput = {
  AND?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserJobApplicationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listing_id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserJobApplicationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutApplicationsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
};

export type UserJobApplicationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationUpdateManyWithWhereWithoutListingInput = {
  data: UserJobApplicationUpdateManyMutationInput;
  where: UserJobApplicationScalarWhereInput;
};

export type UserJobApplicationUpdateManyWithWhereWithoutUserInput = {
  data: UserJobApplicationUpdateManyMutationInput;
  where: UserJobApplicationScalarWhereInput;
};

export type UserJobApplicationUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutListingInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserJobApplicationUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<UserJobApplicationUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<UserJobApplicationUpsertWithWhereUniqueWithoutListingInput>>;
};

export type UserJobApplicationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserJobApplicationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserJobApplicationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserJobApplicationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserJobApplicationUpdateWithWhereUniqueWithoutListingInput = {
  data: UserJobApplicationUpdateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpdateWithWhereUniqueWithoutUserInput = {
  data: UserJobApplicationUpdateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpdateWithoutListingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
};

export type UserJobApplicationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutApplicationsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationUpsertWithWhereUniqueWithoutListingInput = {
  create: UserJobApplicationCreateWithoutListingInput;
  update: UserJobApplicationUpdateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpsertWithWhereUniqueWithoutUserInput = {
  create: UserJobApplicationCreateWithoutUserInput;
  update: UserJobApplicationUpdateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationWhereInput = {
  AND?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserJobApplicationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationOrderByRelationAggregateInput>;
  attachments?: InputMaybe<UserAttachmentsOrderByRelationAggregateInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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
  applications: Array<UserJobApplication>;
  attachments: Array<UserAttachments>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  cover_letter_templates: Array<UserCoverLetterTemplate>;
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
  subscriptions: Array<JobListingSubscription>;
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


export type UserSearchResponseApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type UserSearchResponseAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type UserSearchResponseCover_Letter_TemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
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


export type UserSearchResponseSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutApplicationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutApplicationsInput>;
};

export type UserUpdateOneRequiredWithoutAttachmentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttachmentsInput>;
  create?: InputMaybe<UserCreateWithoutAttachmentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAttachmentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAttachmentsInput>;
};

export type UserUpdateOneRequiredWithoutCover_Letter_TemplatesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCover_Letter_TemplatesInput>;
  create?: InputMaybe<UserCreateWithoutCover_Letter_TemplatesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCover_Letter_TemplatesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCover_Letter_TemplatesInput>;
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

export type UserUpdateOneWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSubscriptionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscriptionsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
  data: UserUpdateWithoutApplicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAttachmentsInput = {
  data: UserUpdateWithoutAttachmentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCover_Letter_TemplatesInput = {
  data: UserUpdateWithoutCover_Letter_TemplatesInput;
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

export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
  data: UserUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutApplicationsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutAttachmentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutCover_Letter_TemplatesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSubscriptionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  update: UserUpdateWithoutApplicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAttachmentsInput = {
  create: UserCreateWithoutAttachmentsInput;
  update: UserUpdateWithoutAttachmentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCover_Letter_TemplatesInput = {
  create: UserCreateWithoutCover_Letter_TemplatesInput;
  update: UserUpdateWithoutCover_Letter_TemplatesInput;
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

export type UserUpsertWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  update: UserUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  attachments?: InputMaybe<UserAttachmentsListRelationFilter>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  attachments?: InputMaybe<UserAttachmentsListRelationFilter>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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


export type GetTopEmployersQuery = { __typename?: 'Query', getTopCompanies: Array<{ __typename?: 'Company', id: string, name: string, banner_image_url?: any | null, brand_image_url?: any | null, listingsCount: number, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type TotalJobListingsCountQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalJobListingsCountQueryQuery = { __typename?: 'Query', jobListings: Array<{ __typename?: 'JobListing', id: string, name: string, createdAt: any }>, me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listing_id: string, metadata?: any | null, createdAt: any }> } | null };

export type GetJobListingsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetJobListingsQuery = { __typename?: 'Query', jobListings: Array<{ __typename?: 'JobListing', id: string, name: string, description_raw: string, createdAt: any, external_application_url?: string | null, keywords: Array<string>, languages: Array<string>, location: string, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, company_id: string, categories: Array<{ __typename?: 'CategoryOnJobListing', category_id: string }>, company: { __typename?: 'Company', id: string, name: string, about_raw: string, email: any, brand_image_url?: any | null } }> };

export type GetAllUsersWithSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersWithSubscriptionsQuery = { __typename?: 'Query', getAllUsersWithSubscriptions: Array<{ __typename?: 'User', id: string, name: string, email: any }> };

export type GetSubscriptionsJobListingsForUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetSubscriptionsJobListingsForUserQuery = { __typename?: 'Query', getSubscriptionsJobListingsForUser: { __typename?: 'GetSubscriptionsJobListingsResponse', entries: Array<{ __typename?: 'SubscriptionJobListingsResponse', listingIds: Array<string>, subscriptionId: string }> } };

export type UnSaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type UnSaveJobListingMutation = { __typename?: 'Mutation', unSaveJobListing?: boolean | null };

export type SaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type SaveJobListingMutation = { __typename?: 'Mutation', saveJobListing?: { __typename?: 'SavedListing', id: string, listing_id: string, userId: string, metadata?: any | null, createdAt: any } | null };

export type GetCompanyListingsCountQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyListingsCountQueryQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, company: { __typename?: 'Company', _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetCompanyWithListingsQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyWithListingsQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, brand_image_url?: any | null, banner_image_url?: any | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, isSaved?: boolean | null, parametersTyped?: { __typename?: 'JobListingParameters', remoteInterview?: boolean | null, internship?: boolean | null, furlough: FurloughPeriod, from?: JobListingFrom | null, salary?: { __typename: 'FixedJobListingSalary', value: number, currency: any } | { __typename: 'RangeJobListingSalary', min: number, max: number, currency: any } | null } | null }> } | null };

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type GetCompanyQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, about_raw: string, career_description_raw: string, benefits: Array<string>, company_values: Array<string>, work_environment: Array<string>, hiring_process: Array<string>, createdAt: any, updatedAt: any, metadata?: any | null, email: any, brand_image_url?: any | null, banner_image_url?: any | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null }>, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string, coordinates?: { __typename?: 'Coordinates', latitude?: any | null, longitude?: any | null } | null }> } | null, local_info?: { __typename?: 'CompanyLocalInfo', since?: any | null, employeeCount?: number | null, locations: Array<string> } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', founded?: any | null, employeeCount?: number | null, headquarters: string, locations: Array<string> } | null } | null };

export type FileUploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type FileUploadMutation = { __typename?: 'Mutation', fileUpload: boolean };

export type GetJobListingQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetJobListingQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, company_id: string, createdAt: any, updatedAt: any, company: { __typename?: 'Company', id: string, email: any, name: string, brand_image_url?: any | null, banner_image_url?: any | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', employeeCount?: number | null, headquarters: string, locations: Array<string>, founded?: any | null } | null, _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetCompanyJobQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyJobQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, company_id: string, createdAt: any, updatedAt: any, company: { __typename?: 'Company', id: string, name: string, _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetAllCategoriesQueryQueryVariables = Exact<{
  input: GetCategoriesDetailsInput;
}>;


export type GetAllCategoriesQueryQuery = { __typename?: 'Query', getCompanyCategoriesDetails: Array<{ __typename?: 'CategoryDetailsResponse', id: string, name: string, description: string, totalJobListings: number }> };

export type GetAllCompaniesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQueryQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string, email: any, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type GetAllEmploymentTypesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmploymentTypesQueryQuery = { __typename?: 'Query', getAllEmploymentTypes: Array<{ __typename?: 'GetEmploymentTypeDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLevelsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLevelsQueryQuery = { __typename?: 'Query', getJobListingLevelsDetails: Array<{ __typename?: 'GetJobListingLevelsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllKeywordsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllKeywordsQueryQuery = { __typename?: 'Query', getAllKeywords: Array<{ __typename?: 'GetKeywordsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLanguagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQueryQuery = { __typename?: 'Query', getAllLanguages: Array<{ __typename?: 'GetLanguagesDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLocationsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLocationsQueryQuery = { __typename?: 'Query', getAllLocations: Array<{ __typename?: 'GetLocationsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllJobCategoriesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobCategoriesQueryQuery = { __typename?: 'Query', jobListingCategories: Array<{ __typename?: 'JobListingCategory', id: string, name: string, description: string, _count?: { __typename?: 'JobListingCategoryCount', listings: number } | null }> };

export type GetJobListingsWithFilterQueryVariables = Exact<{
  filter: SearchJobListingsInput;
  categories?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetJobListingsWithFilterQuery = { __typename?: 'Query', getMostRelevantCompanies: Array<{ __typename?: 'Company', id: string, name: string, email: any, _count?: { __typename?: 'CompanyCount', listings: number, categories: number } | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string }> | null, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string }> } | null }>, companies: Array<{ __typename?: 'Company', id: string, name: string }>, searchJobListings: Array<{ __typename?: 'JobListing', id: string, name: string, company_id: string, createdAt: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, parameters: any, keywords: Array<string>, level?: JobListingLevel | null, isSaved?: boolean | null, languages: Array<string>, location: string, description_raw: string, external_application_url?: string | null, parametersTyped?: { __typename?: 'JobListingParameters', from?: JobListingFrom | null, furlough: FurloughPeriod, internship?: boolean | null, remoteInterview?: boolean | null, salary?: { __typename: 'FixedJobListingSalary', value: number, currency: any } | { __typename: 'RangeJobListingSalary', min: number, max: number, currency: any } | null } | null, categories: Array<{ __typename?: 'CategoryOnJobListing', category_id: string }>, company: { __typename?: 'Company', id: string, name: string, email: any, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string }> | null, local_info?: { __typename?: 'CompanyLocalInfo', employeeCount?: number | null, locations: Array<string>, since?: any | null } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', locations: Array<string>, employeeCount?: number | null, founded?: any | null, headquarters: string } | null } }> };

export type DeleteAllCvsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllCvsMutation = { __typename?: 'Mutation', deleteAllCoverLetterTemplates: boolean };

export type MyCvsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCvsQueryQuery = { __typename?: 'Query', getMyCoverLetterTemplates: Array<{ __typename?: 'UserCoverLetterTemplate', id: string, name: string, letter: string, metadata?: any | null, createdAt: any, user_id: string }> };

export type CreateCvTemplateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  template: Scalars['String']['input'];
}>;


export type CreateCvTemplateMutation = { __typename?: 'Mutation', createUserCoverLetterTemplate?: { __typename?: 'UserCoverLetterTemplate', id: string, user_id: string, name: string, letter: string, createdAt: any, metadata?: any | null } | null };

export type SignInWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignInWithEmailCodeMutation = { __typename?: 'Mutation', signInWithEmailCode?: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } | null };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', getAvailableCountries: Array<string> };

export type CompanySignUpMutationVariables = Exact<{
  input: CompanySignUpInput;
}>;


export type CompanySignUpMutation = { __typename?: 'Mutation', companySignUp?: { __typename?: 'Company', id: string, email: any, name: string, metadata?: any | null } | null };

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

export type MeQueryGsByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryGsByIdQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string } | null };

export type GetSubscriptionByIdQueryQueryVariables = Exact<{
  subscriptionId: Scalars['String']['input'];
  meId: Scalars['String']['input'];
}>;


export type GetSubscriptionByIdQueryQuery = { __typename?: 'Query', jobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, company_id?: string | null, user_id?: string | null, user_email?: string | null, metadata?: any | null, notification_frequency: JobListingSubscriptionNotificationFrequency, description: string, location?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, languages: Array<string>, parameters: any, keywords: Array<string>, createdAt: any, updatedAt: any, user?: { __typename?: 'User', id: string, name: string, email: any } | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string }>, job_categories: Array<{ __typename?: 'JobListingCategory', id: string, name: string }>, company?: { __typename?: 'Company', id: string, name: string } | null } | null };

export type DeleteAllSubscriptionsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllSubscriptionsMutation = { __typename?: 'Mutation', deleteAllSubscriptions: { __typename?: 'DeleteAllSubscriptionsResponse', deleted_count: number, success: boolean } };

export type GetMySubscriptionsQueryVariables = Exact<{
  input: GetSubscriptionsInput;
}>;


export type GetMySubscriptionsQuery = { __typename?: 'Query', mySubscriptions: Array<{ __typename?: 'JobListingSubscription', id: string, company_id?: string | null, user_id?: string | null, metadata?: any | null, notification_frequency: JobListingSubscriptionNotificationFrequency, location?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, languages: Array<string>, parameters: any, keywords: Array<string>, createdAt: any, updatedAt: any, description: string, company?: { __typename?: 'Company', id: string, name: string, email: any } | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> }> };

export type MeQuerySlimQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuerySlimQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: any } | null };

export type GetSubscriptionByIdQueryVariables = Exact<{
  subscriptionId: Scalars['String']['input'];
}>;


export type GetSubscriptionByIdQuery = { __typename?: 'Query', jobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, company_id?: string | null, createdAt: any, metadata?: any | null, company?: { __typename?: 'Company', id: string, name: string } | null } | null };

export type ConfirmSubscriptionMutationVariables = Exact<{
  key: Scalars['String']['input'];
  subscriptionId: Scalars['String']['input'];
}>;


export type ConfirmSubscriptionMutation = { __typename?: 'Mutation', confirmJobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, createdAt: any, metadata?: any | null } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, createdAt: any, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listing_id: string, metadata?: any | null, createdAt: any }> } | null };

export type GoogleLoginQueryQueryVariables = Exact<{
  redirectUrl: Scalars['String']['input'];
}>;


export type GoogleLoginQueryQuery = { __typename?: 'Query', googleLoginUrl: string };

export type SubscribeToCompanyListingsMutationVariables = Exact<{
  input: SubscribeToJobListingsInput;
}>;


export type SubscribeToCompanyListingsMutation = { __typename?: 'Mutation', subscribeToCompanyListings?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, metadata?: any | null, createdAt: any, updatedAt: any, work_from?: WorkFromHome | null, level?: JobListingLevel | null, type?: JobListingEmploymentType | null, location?: string | null, languages: Array<string>, parameters: any, keywords: Array<string>, description: string, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }>, job_categories: Array<{ __typename?: 'JobListingCategory', id: string, name: string }> } | null };

export type UpdateCookiePreferencesMutationVariables = Exact<{
  preferences: UpdateCookiePreferencesInput;
}>;


export type UpdateCookiePreferencesMutation = { __typename?: 'Mutation', updateCookiePreferences: boolean };

export type AcceptAllCookiesMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptAllCookiesMutation = { __typename?: 'Mutation', acceptAllCookies: boolean };

export type DeclineAllCookiesMutationVariables = Exact<{ [key: string]: never; }>;


export type DeclineAllCookiesMutation = { __typename?: 'Mutation', declineAllCookies: boolean };


export const GetTopJobCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopJobCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTopListingCategoriesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopListingCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopJobCategoriesQuery, GetTopJobCategoriesQueryVariables>;
export const GetTopEmployersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopEmployers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTopCompaniesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"listingsCount"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopEmployersQuery, GetTopEmployersQueryVariables>;
export const TotalJobListingsCountQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TotalJobListingsCountQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobListings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"cookieConsent"}},{"kind":"Field","name":{"kind":"Name","value":"cookiePreferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionality"}},{"kind":"Field","name":{"kind":"Name","value":"marketing"}},{"kind":"Field","name":{"kind":"Name","value":"necessary"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saved_listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listing_id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<TotalJobListingsCountQueryQuery, TotalJobListingsCountQueryQueryVariables>;
export const GetJobListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobListings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobListings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"external_application_url"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"about_raw"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobListingsQuery, GetJobListingsQueryVariables>;
export const GetAllUsersWithSubscriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsersWithSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsersWithSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersWithSubscriptionsQuery, GetAllUsersWithSubscriptionsQueryVariables>;
export const GetSubscriptionsJobListingsForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionsJobListingsForUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubscriptionsJobListingsForUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingIds"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionId"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionsJobListingsForUserQuery, GetSubscriptionsJobListingsForUserQueryVariables>;
export const UnSaveJobListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnSaveJobListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unSaveJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}}}]}]}}]} as unknown as DocumentNode<UnSaveJobListingMutation, UnSaveJobListingMutationVariables>;
export const SaveJobListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveJobListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobListingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listing_id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SaveJobListingMutation, SaveJobListingMutationVariables>;
export const GetCompanyListingsCountQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyListingsCountQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyListingsCountQueryQuery, GetCompanyListingsCountQueryQueryVariables>;
export const GetCompanyWithListingsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyWithListingsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"parametersTyped"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"salary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeJobListingSalary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FixedJobListingSalary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"remoteInterview"}},{"kind":"Field","name":{"kind":"Name","value":"internship"}},{"kind":"Field","name":{"kind":"Name","value":"furlough"}},{"kind":"Field","name":{"kind":"Name","value":"from"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSaved"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyWithListingsQueryQuery, GetCompanyWithListingsQueryQueryVariables>;
export const GetAllCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>;
export const GetCompanyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"about_raw"}},{"kind":"Field","name":{"kind":"Name","value":"career_description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"benefits"}},{"kind":"Field","name":{"kind":"Name","value":"company_values"}},{"kind":"Field","name":{"kind":"Name","value":"work_environment"}},{"kind":"Field","name":{"kind":"Name","value":"hiring_process"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"companyCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company_bulstat"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"facebook_url"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_url"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin_url"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"local_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"since"}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}}]}},{"kind":"Field","name":{"kind":"Name","value":"worldwide_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"founded"}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"headquarters"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyQueryQuery, GetCompanyQueryQueryVariables>;
export const FileUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FileUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<FileUploadMutation, FileUploadMutationVariables>;
export const GetJobListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"external_application_url"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"companyCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"worldwide_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"headquarters"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"founded"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJobListingQuery, GetJobListingQueryVariables>;
export const GetCompanyJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"external_application_url"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyJobQuery, GetCompanyJobQueryVariables>;
export const GetAllCategoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCategoriesDetailsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyCategoriesDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobListings"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQueryQuery, GetAllCategoriesQueryQueryVariables>;
export const GetAllCompaniesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCompaniesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"listings"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_count"},"value":{"kind":"EnumValue","value":"desc"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCompaniesQueryQuery, GetAllCompaniesQueryQueryVariables>;
export const GetAllEmploymentTypesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllEmploymentTypesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllEmploymentTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobsCount"}}]}}]}}]} as unknown as DocumentNode<GetAllEmploymentTypesQueryQuery, GetAllEmploymentTypesQueryQueryVariables>;
export const GetAllLevelsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLevelsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobListingLevelsDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobsCount"}}]}}]}}]} as unknown as DocumentNode<GetAllLevelsQueryQuery, GetAllLevelsQueryQueryVariables>;
export const GetAllKeywordsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllKeywordsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllKeywords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobsCount"}}]}}]}}]} as unknown as DocumentNode<GetAllKeywordsQueryQuery, GetAllKeywordsQueryQueryVariables>;
export const GetAllLanguagesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLanguagesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobsCount"}}]}}]}}]} as unknown as DocumentNode<GetAllLanguagesQueryQuery, GetAllLanguagesQueryQueryVariables>;
export const GetAllLocationsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLocationsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalJobsCount"}}]}}]}}]} as unknown as DocumentNode<GetAllLocationsQueryQuery, GetAllLocationsQueryQueryVariables>;
export const GetAllJobCategoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllJobCategoriesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobListingCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllJobCategoriesQueryQuery, GetAllJobCategoriesQueryQueryVariables>;
export const GetJobListingsWithFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobListingsWithFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchJobListingsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMostRelevantCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"ObjectField","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"company_bulstat"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"facebook_url"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_url"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin_url"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"searchJobListings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"parametersTyped"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"furlough"}},{"kind":"Field","name":{"kind":"Name","value":"internship"}},{"kind":"Field","name":{"kind":"Name","value":"remoteInterview"}},{"kind":"Field","name":{"kind":"Name","value":"salary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FixedJobListingSalary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeJobListingSalary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"isSaved"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"description_raw"}},{"kind":"Field","name":{"kind":"Name","value":"external_application_url"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"brand_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"local_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"since"}}]}},{"kind":"Field","name":{"kind":"Name","value":"worldwide_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"founded"}},{"kind":"Field","name":{"kind":"Name","value":"headquarters"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJobListingsWithFilterQuery, GetJobListingsWithFilterQueryVariables>;
export const DeleteAllCvsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllCvs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAllCoverLetterTemplates"}}]}}]} as unknown as DocumentNode<DeleteAllCvsMutation, DeleteAllCvsMutationVariables>;
export const MyCvsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyCvsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyCoverLetterTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<MyCvsQueryQuery, MyCvsQueryQueryVariables>;
export const CreateCvTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCvTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"template"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserCoverLetterTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"template"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<CreateCvTemplateMutation, CreateCvTemplateMutationVariables>;
export const SignInWithEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInWithEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignInWithEmailCodeMutation, SignInWithEmailCodeMutationVariables>;
export const GetAllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAvailableCountries"}}]}}]} as unknown as DocumentNode<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const CompanySignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompanySignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanySignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companySignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<CompanySignUpMutation, CompanySignUpMutationVariables>;
export const GenerateEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateSignUpEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<GenerateEmailCodeMutation, GenerateEmailCodeMutationVariables>;
export const SignUpWithEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpWithEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignUpWithEmailCodeMutation, SignUpWithEmailCodeMutationVariables>;
export const MeQueryGsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQueryGSById"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MeQueryGsByIdQuery, MeQueryGsByIdQueryVariables>;
export const GetSubscriptionByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobListingSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"job_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"notification_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionByIdQueryQuery, GetSubscriptionByIdQueryQueryVariables>;
export const DeleteAllSubscriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAllSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted_count"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteAllSubscriptionsMutation, DeleteAllSubscriptionsMutationVariables>;
export const GetMySubscriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMySubscriptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSubscriptionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mySubscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"notification_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetMySubscriptionsQuery, GetMySubscriptionsQueryVariables>;
export const MeQuerySlimDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuerySlim"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQuerySlimQuery, MeQuerySlimQueryVariables>;
export const GetSubscriptionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobListingSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionByIdQuery, GetSubscriptionByIdQueryVariables>;
export const ConfirmSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmJobListingSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"subscriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<ConfirmSubscriptionMutation, ConfirmSubscriptionMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"cookieConsent"}},{"kind":"Field","name":{"kind":"Name","value":"cookiePreferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionality"}},{"kind":"Field","name":{"kind":"Name","value":"marketing"}},{"kind":"Field","name":{"kind":"Name","value":"necessary"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const MeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"cookieConsent"}},{"kind":"Field","name":{"kind":"Name","value":"cookiePreferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionality"}},{"kind":"Field","name":{"kind":"Name","value":"marketing"}},{"kind":"Field","name":{"kind":"Name","value":"necessary"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saved_listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listing_id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const GoogleLoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GoogleLoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleLoginUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"redirect_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}}}]}]}}]} as unknown as DocumentNode<GoogleLoginQueryQuery, GoogleLoginQueryQueryVariables>;
export const SubscribeToCompanyListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToCompanyListings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeToJobListingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToCompanyListings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"work_from"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"job_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SubscribeToCompanyListingsMutation, SubscribeToCompanyListingsMutationVariables>;
export const UpdateCookiePreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCookiePreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preferences"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCookiePreferencesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCookiePreferences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preferences"}}}]}]}}]} as unknown as DocumentNode<UpdateCookiePreferencesMutation, UpdateCookiePreferencesMutationVariables>;
export const AcceptAllCookiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptAllCookies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptAllCookies"}}]}}]} as unknown as DocumentNode<AcceptAllCookiesMutation, AcceptAllCookiesMutationVariables>;
export const DeclineAllCookiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeclineAllCookies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"declineAllCookies"}}]}}]} as unknown as DocumentNode<DeclineAllCookiesMutation, DeclineAllCookiesMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: any; output: any; }
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
  user: User;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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

export type AggregateJobListingSubscription = {
  __typename?: 'AggregateJobListingSubscription';
  _count?: Maybe<JobListingSubscriptionCountAggregate>;
  _max?: Maybe<JobListingSubscriptionMaxAggregate>;
  _min?: Maybe<JobListingSubscriptionMinAggregate>;
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

export type AggregateUserAttachments = {
  __typename?: 'AggregateUserAttachments';
  _count?: Maybe<UserAttachmentsCountAggregate>;
  _max?: Maybe<UserAttachmentsMaxAggregate>;
  _min?: Maybe<UserAttachmentsMinAggregate>;
};

export type AggregateUserCoverLetterTemplate = {
  __typename?: 'AggregateUserCoverLetterTemplate';
  _count?: Maybe<UserCoverLetterTemplateCountAggregate>;
  _max?: Maybe<UserCoverLetterTemplateMaxAggregate>;
  _min?: Maybe<UserCoverLetterTemplateMinAggregate>;
};

export type AggregateUserJobApplication = {
  __typename?: 'AggregateUserJobApplication';
  _count?: Maybe<UserJobApplicationCountAggregate>;
  _max?: Maybe<UserJobApplicationMaxAggregate>;
  _min?: Maybe<UserJobApplicationMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type CategoryDetailsResponse = {
  __typename?: 'CategoryDetailsResponse';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  totalJobListings: Scalars['Int']['output'];
};

export type CategoryOnCompany = {
  __typename?: 'CategoryOnCompany';
  category_id: Scalars['String']['output'];
  company_id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CategoryOnCompanyCompany_IdCategory_IdCompoundUniqueInput = {
  category_id: Scalars['String']['input'];
  company_id: Scalars['String']['input'];
};

export type CategoryOnCompanyCreateManyCategoryInput = {
  company_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateManyCategoryInputEnvelope = {
  data: Array<CategoryOnCompanyCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnCompanyCreateManyCompanyInput = {
  category_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateManyCompanyInputEnvelope = {
  data: Array<CategoryOnCompanyCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnCompanyCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCategoryInputEnvelope>;
};

export type CategoryOnCompanyCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCompanyInputEnvelope>;
};

export type CategoryOnCompanyCreateOrConnectWithoutCategoryInput = {
  create: CategoryOnCompanyCreateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyCreateOrConnectWithoutCompanyInput = {
  create: CategoryOnCompanyCreateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyCreateWithoutCategoryInput = {
  company: CompanyCreateNestedOneWithoutCategoriesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyCreateWithoutCompanyInput = {
  category: CompanyCategoryCreateNestedOneWithoutCompaniesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnCompanyListRelationFilter = {
  every?: InputMaybe<CategoryOnCompanyWhereInput>;
  none?: InputMaybe<CategoryOnCompanyWhereInput>;
  some?: InputMaybe<CategoryOnCompanyWhereInput>;
};

export type CategoryOnCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOnCompanyOrderByRelevanceFieldEnum {
  CategoryId = 'category_id',
  CompanyId = 'company_id'
}

export type CategoryOnCompanyOrderByRelevanceInput = {
  fields: Array<CategoryOnCompanyOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CategoryOnCompanyOrderByWithRelationInput = {
  _relevance?: InputMaybe<CategoryOnCompanyOrderByRelevanceInput>;
  category?: InputMaybe<CompanyCategoryOrderByWithRelationInput>;
  category_id?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
};

export enum CategoryOnCompanyScalarFieldEnum {
  CategoryId = 'category_id',
  CompanyId = 'company_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type CategoryOnCompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  category_id?: InputMaybe<StringFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnCompanyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryOnCompanyUpdateManyMutationInput;
  where: CategoryOnCompanyScalarWhereInput;
};

export type CategoryOnCompanyUpdateManyWithWhereWithoutCompanyInput = {
  data: CategoryOnCompanyUpdateManyMutationInput;
  where: CategoryOnCompanyScalarWhereInput;
};

export type CategoryOnCompanyUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnCompanyUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryOnCompanyUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryOnCompanyUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryOnCompanyUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnCompanyCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<CategoryOnCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<CategoryOnCompanyCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnCompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnCompanyUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<CategoryOnCompanyUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<CategoryOnCompanyUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type CategoryOnCompanyUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryOnCompanyUpdateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
  data: CategoryOnCompanyUpdateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpdateWithoutCategoryInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutCategoriesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpdateWithoutCompanyInput = {
  category?: InputMaybe<CompanyCategoryUpdateOneRequiredWithoutCompaniesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnCompanyUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryOnCompanyCreateWithoutCategoryInput;
  update: CategoryOnCompanyUpdateWithoutCategoryInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
  create: CategoryOnCompanyCreateWithoutCompanyInput;
  update: CategoryOnCompanyUpdateWithoutCompanyInput;
  where: CategoryOnCompanyWhereUniqueInput;
};

export type CategoryOnCompanyWhereInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  category?: InputMaybe<CompanyCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnCompanyWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnCompanyWhereInput>>;
  category?: InputMaybe<CompanyCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  company_id_category_id?: InputMaybe<CategoryOnCompanyCompany_IdCategory_IdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryOnJobListing = {
  __typename?: 'CategoryOnJobListing';
  category_id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  listing_id: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CategoryOnJobListingCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  listing_id: Scalars['String']['input'];
};

export type CategoryOnJobListingCreateManyCategoryInputEnvelope = {
  data: Array<CategoryOnJobListingCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnJobListingCreateManyListingInput = {
  category_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnJobListingCreateManyListingInputEnvelope = {
  data: Array<CategoryOnJobListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryOnJobListingCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyCategoryInputEnvelope>;
};

export type CategoryOnJobListingCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyListingInputEnvelope>;
};

export type CategoryOnJobListingCreateOrConnectWithoutCategoryInput = {
  create: CategoryOnJobListingCreateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingCreateOrConnectWithoutListingInput = {
  create: CategoryOnJobListingCreateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  listing: JobListingCreateNestedOneWithoutCategoriesInput;
};

export type CategoryOnJobListingCreateWithoutListingInput = {
  category: JobListingCategoryCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CategoryOnJobListingListRelationFilter = {
  every?: InputMaybe<CategoryOnJobListingWhereInput>;
  none?: InputMaybe<CategoryOnJobListingWhereInput>;
  some?: InputMaybe<CategoryOnJobListingWhereInput>;
};

export type CategoryOnJobListingListing_IdCategory_IdCompoundUniqueInput = {
  category_id: Scalars['String']['input'];
  listing_id: Scalars['String']['input'];
};

export type CategoryOnJobListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOnJobListingOrderByRelevanceFieldEnum {
  CategoryId = 'category_id',
  ListingId = 'listing_id'
}

export type CategoryOnJobListingOrderByRelevanceInput = {
  fields: Array<CategoryOnJobListingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CategoryOnJobListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<CategoryOnJobListingOrderByRelevanceInput>;
  category?: InputMaybe<JobListingCategoryOrderByWithRelationInput>;
  category_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
};

export enum CategoryOnJobListingScalarFieldEnum {
  CategoryId = 'category_id',
  CreatedAt = 'createdAt',
  ListingId = 'listing_id',
  UpdatedAt = 'updatedAt'
}

export type CategoryOnJobListingScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing_id?: InputMaybe<StringFilter>;
};

export type CategoryOnJobListingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnJobListingUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryOnJobListingUpdateManyMutationInput;
  where: CategoryOnJobListingScalarWhereInput;
};

export type CategoryOnJobListingUpdateManyWithWhereWithoutListingInput = {
  data: CategoryOnJobListingUpdateManyMutationInput;
  where: CategoryOnJobListingScalarWhereInput;
};

export type CategoryOnJobListingUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnJobListingUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryOnJobListingUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryOnJobListingUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryOnJobListingUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryOnJobListingCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<CategoryOnJobListingCreateWithoutListingInput>>;
  createMany?: InputMaybe<CategoryOnJobListingCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryOnJobListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryOnJobListingWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryOnJobListingUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<CategoryOnJobListingUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<CategoryOnJobListingUpsertWithWhereUniqueWithoutListingInput>>;
};

export type CategoryOnJobListingUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryOnJobListingUpdateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpdateWithWhereUniqueWithoutListingInput = {
  data: CategoryOnJobListingUpdateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutCategoriesNestedInput>;
};

export type CategoryOnJobListingUpdateWithoutListingInput = {
  category?: InputMaybe<JobListingCategoryUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryOnJobListingUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryOnJobListingCreateWithoutCategoryInput;
  update: CategoryOnJobListingUpdateWithoutCategoryInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingUpsertWithWhereUniqueWithoutListingInput = {
  create: CategoryOnJobListingCreateWithoutListingInput;
  update: CategoryOnJobListingUpdateWithoutListingInput;
  where: CategoryOnJobListingWhereUniqueInput;
};

export type CategoryOnJobListingWhereInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  category?: InputMaybe<JobListingCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
};

export type CategoryOnJobListingWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  NOT?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  OR?: InputMaybe<Array<CategoryOnJobListingWhereInput>>;
  category?: InputMaybe<JobListingCategoryRelationFilter>;
  category_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  listing_id_category_id?: InputMaybe<CategoryOnJobListingListing_IdCategory_IdCompoundUniqueInput>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  about_raw: Scalars['String']['output'];
  banner_image_url?: Maybe<Scalars['URL']['output']>;
  benefits: Array<Scalars['String']['output']>;
  brand_image_url?: Maybe<Scalars['URL']['output']>;
  career_description_raw: Scalars['String']['output'];
  companyCategories?: Maybe<Array<CompanyCategory>>;
  company_values: Array<Scalars['String']['output']>;
  contacts?: Maybe<CompanyContacts>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['EmailAddress']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  hiring_process: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listings: Array<JobListing>;
  listingsCount: Scalars['Int']['output'];
  local_info?: Maybe<CompanyLocalInfo>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment: Array<Scalars['String']['output']>;
  worldwide_info?: Maybe<CompanyWorldwideInfo>;
};


export type CompanyListingsArgs = {
  cursor?: InputMaybe<JobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingWhereInput>;
};


export type CompanySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type CompanyCategory = {
  __typename?: 'CompanyCategory';
  _count?: Maybe<CompanyCategoryCount>;
  companies: Array<CategoryOnCompany>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
};


export type CompanyCategoryCompaniesArgs = {
  cursor?: InputMaybe<CategoryOnCompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnCompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnCompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCategorySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type CompanyCategoryCount = {
  __typename?: 'CompanyCategoryCount';
  companies: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type CompanyCategoryCountCompaniesArgs = {
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCategoryCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  companies?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCategoryInput>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCategoriesInput>;
};

export type CompanyCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyCategoryCreateNestedManyWithoutSubscriptionsInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutSubscriptionsInput>>;
};

export type CompanyCategoryCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCategoryCreateOrConnectWithoutCompaniesInput>;
  create?: InputMaybe<CompanyCategoryCreateWithoutCompaniesInput>;
};

export type CompanyCategoryCreateOrConnectWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateOrConnectWithoutSubscriptionsInput = {
  create: CompanyCategoryCreateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryCreateWithoutCompaniesInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCategoriesInput>;
};

export type CompanyCategoryCreateWithoutSubscriptionsInput = {
  companies?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCategoryInput>;
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

export type CompanyCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
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
  companies?: InputMaybe<CategoryOnCompanyOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
};

export type CompanyCategoryRelationFilter = {
  is?: InputMaybe<CompanyCategoryWhereInput>;
  isNot?: InputMaybe<CompanyCategoryWhereInput>;
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
  companies?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCategoryNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput>;
};

export type CompanyCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpdateManyWithWhereWithoutSubscriptionsInput = {
  data: CompanyCategoryUpdateManyMutationInput;
  where: CompanyCategoryScalarWhereInput;
};

export type CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<CompanyCategoryCreateWithoutSubscriptionsInput>>;
  delete?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput>>;
  updateMany?: InputMaybe<Array<CompanyCategoryUpdateManyWithWhereWithoutSubscriptionsInput>>;
  upsert?: InputMaybe<Array<CompanyCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput>>;
};

export type CompanyCategoryUpdateOneRequiredWithoutCompaniesNestedInput = {
  connect?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCategoryCreateOrConnectWithoutCompaniesInput>;
  create?: InputMaybe<CompanyCategoryCreateWithoutCompaniesInput>;
  update?: InputMaybe<CompanyCategoryUpdateToOneWithWhereWithoutCompaniesInput>;
  upsert?: InputMaybe<CompanyCategoryUpsertWithoutCompaniesInput>;
};

export type CompanyCategoryUpdateToOneWithWhereWithoutCompaniesInput = {
  data: CompanyCategoryUpdateWithoutCompaniesInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput = {
  data: CompanyCategoryUpdateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpdateWithoutCompaniesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput>;
};

export type CompanyCategoryUpdateWithoutSubscriptionsInput = {
  companies?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCategoryNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput = {
  create: CompanyCategoryCreateWithoutSubscriptionsInput;
  update: CompanyCategoryUpdateWithoutSubscriptionsInput;
  where: CompanyCategoryWhereUniqueInput;
};

export type CompanyCategoryUpsertWithoutCompaniesInput = {
  create: CompanyCategoryCreateWithoutCompaniesInput;
  update: CompanyCategoryUpdateWithoutCompaniesInput;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};

export type CompanyCategoryWhereInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type CompanyCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  OR?: InputMaybe<Array<CompanyCategoryWhereInput>>;
  companies?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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
  subscriptions: Scalars['Int']['output'];
};


export type CompanyCountCategoriesArgs = {
  where?: InputMaybe<CategoryOnCompanyWhereInput>;
};


export type CompanyCountListingsArgs = {
  where?: InputMaybe<JobListingWhereInput>;
};


export type CompanyCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  emailVerified: Scalars['Int']['output'];
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
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
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<CompanyCreateWithoutCategoriesInput>;
};

export type CompanyCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
};

export type CompanyCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionsInput>;
};

export type CompanyCreateOrConnectWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutSubscriptionsInput = {
  create: CompanyCreateWithoutSubscriptionsInput;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutListingsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutCompanyInput>;
  work_environment?: InputMaybe<CompanyCreatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyCreateWithoutSubscriptionsInput = {
  about_raw: Scalars['String']['input'];
  banner_image_url?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CompanyCreatebenefitsInput>;
  brand_image_url?: InputMaybe<Scalars['String']['input']>;
  career_description_raw: Scalars['String']['input'];
  categories?: InputMaybe<CategoryOnCompanyCreateNestedManyWithoutCompanyInput>;
  company_values?: InputMaybe<CompanyCreatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hiring_process?: InputMaybe<CompanyCreatehiring_ProcessInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingCreateNestedManyWithoutCompanyInput>;
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  hiring_process?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  local_info: Scalars['JSON']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  work_environment?: Maybe<Array<Scalars['String']['output']>>;
  worldwide_info: Scalars['JSON']['output'];
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMaxOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
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
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CompanyMinOrderByAggregateInput = {
  about_raw?: InputMaybe<SortOrder>;
  banner_image_url?: InputMaybe<SortOrder>;
  brand_image_url?: InputMaybe<SortOrder>;
  career_description_raw?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyNullableRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
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
  categories?: InputMaybe<CategoryOnCompanyOrderByRelationAggregateInput>;
  company_values?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  hiring_process?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listings?: InputMaybe<JobListingOrderByRelationAggregateInput>;
  local_info?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
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
  EmailVerified = 'emailVerified',
  HiringProcess = 'hiring_process',
  Id = 'id',
  LocalInfo = 'local_info',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkEnvironment = 'work_environment',
  WorldwideInfo = 'worldwide_info'
}

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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  local_info?: InputMaybe<JsonWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  work_environment?: InputMaybe<StringNullableListFilter>;
  worldwide_info?: InputMaybe<JsonWithAggregatesFilter>;
};

export type CompanySignUpInput = {
  administratorEmail: Scalars['String']['input'];
  administratorFirstName: Scalars['String']['input'];
  administratorLastName: Scalars['String']['input'];
  administratorPhone: Scalars['String']['input'];
  administratorPosition: Scalars['String']['input'];
  authorizedPerson: Scalars['Boolean']['input'];
  businessSectors: Array<Scalars['String']['input']>;
  companyAddress: Scalars['String']['input'];
  companyAddressRegistration: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyPassword: Scalars['String']['input'];
  companyPasswordConfirm: Scalars['String']['input'];
  companyPhone: Scalars['String']['input'];
  companySite: Scalars['String']['input'];
  companyUsername: Scalars['String']['input'];
  key: Scalars['String']['input'];
  officialCorrespondenceAddress?: InputMaybe<Scalars['String']['input']>;
  officialEmail?: InputMaybe<Scalars['String']['input']>;
  officialName?: InputMaybe<Scalars['String']['input']>;
  officialPhone?: InputMaybe<Scalars['String']['input']>;
  organizationType: Scalars['String']['input'];
};

export type CompanyUpdateInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<CompanyCreateWithoutCategoriesInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutCategoriesInput>;
};

export type CompanyUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<CompanyCreateWithoutListingsInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutListingsInput>;
};

export type CompanyUpdateOneWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionsInput>;
  delete?: InputMaybe<CompanyWhereInput>;
  disconnect?: InputMaybe<CompanyWhereInput>;
  update?: InputMaybe<CompanyUpdateToOneWithWhereWithoutSubscriptionsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSubscriptionsInput>;
};

export type CompanyUpdateToOneWithWhereWithoutCategoriesInput = {
  data: CompanyUpdateWithoutCategoriesInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateToOneWithWhereWithoutListingsInput = {
  data: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateToOneWithWhereWithoutSubscriptionsInput = {
  data: CompanyUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateWithoutCategoriesInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutListingsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local_info?: InputMaybe<Scalars['JSON']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutCompanyNestedInput>;
  work_environment?: InputMaybe<CompanyUpdatework_EnvironmentInput>;
  worldwide_info?: InputMaybe<Scalars['JSON']['input']>;
};

export type CompanyUpdateWithoutSubscriptionsInput = {
  about_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  banner_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  benefits?: InputMaybe<CompanyUpdatebenefitsInput>;
  brand_image_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career_description_raw?: InputMaybe<StringFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryOnCompanyUpdateManyWithoutCompanyNestedInput>;
  company_values?: InputMaybe<CompanyUpdatecompany_ValuesInput>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hiring_process?: InputMaybe<CompanyUpdatehiring_ProcessInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<JobListingUpdateManyWithoutCompanyNestedInput>;
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

export type CompanyUpsertWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  update: CompanyUpdateWithoutCategoriesInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpsertWithoutListingsInput = {
  create: CompanyCreateWithoutListingsInput;
  update: CompanyUpdateWithoutListingsInput;
  where?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpsertWithoutSubscriptionsInput = {
  create: CompanyCreateWithoutSubscriptionsInput;
  update: CompanyUpdateWithoutSubscriptionsInput;
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
  categories?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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
  categories?: InputMaybe<CategoryOnCompanyListRelationFilter>;
  company_values?: InputMaybe<StringNullableListFilter>;
  contacts?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  hiring_process?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<JobListingListRelationFilter>;
  local_info?: InputMaybe<JsonFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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

export type CreateUserCoverLetterTemplateInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
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

export type DeleteAllSubscriptionsResponse = {
  __typename?: 'DeleteAllSubscriptionsResponse';
  deleted_count: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
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

export type EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput = {
  set?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
};

export type EnumJobListingSubscriptionNotificationFrequencyFilter = {
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
};

export type EnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  _min?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
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

export type FixedJobListingSalary = JobListingSalary & {
  __typename?: 'FixedJobListingSalary';
  currency: Scalars['Currency']['output'];
  value: Scalars['Float']['output'];
};

export enum FurloughPeriod {
  ThirtyPlus = 'ThirtyPlus',
  TwentyFiveToThirty = 'TwentyFiveToThirty',
  TwentyOneToTwentyFive = 'TwentyOneToTwentyFive'
}

export type GetApplicationsByUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetAttachmentsByUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetCategoriesDetailsInput = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type GetEmploymentTypeDetailsResponse = {
  __typename?: 'GetEmploymentTypeDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetJobListingLevelsDetailsResponse = {
  __typename?: 'GetJobListingLevelsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetKeywordsDetailsResponse = {
  __typename?: 'GetKeywordsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetLanguagesDetailsResponse = {
  __typename?: 'GetLanguagesDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetLocationsDetailsResponse = {
  __typename?: 'GetLocationsDetailsResponse';
  name?: Maybe<Scalars['String']['output']>;
  totalJobsCount: Scalars['Int']['output'];
};

export type GetRelevantCompaniesInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetSubscriptionsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetSubscriptionsJobListingsResponse = {
  __typename?: 'GetSubscriptionsJobListingsResponse';
  entries: Array<SubscriptionJobListingsResponse>;
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

export type JobCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type JobListing = {
  __typename?: 'JobListing';
  _count?: Maybe<JobListingCount>;
  applications: Array<UserJobApplication>;
  categories: Array<CategoryOnJobListing>;
  company: Company;
  company_id: Scalars['String']['output'];
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
  /** [JobListingParameters] */
  parameters: Scalars['JSON']['output'];
  parametersTyped?: Maybe<JobListingParameters>;
  saves: Array<SavedListing>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  work_from?: Maybe<WorkFromHome>;
};


export type JobListingApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type JobListingCategoriesArgs = {
  cursor?: InputMaybe<CategoryOnJobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnJobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnJobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingSavesArgs = {
  cursor?: InputMaybe<SavedListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SavedListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SavedListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCategory = {
  __typename?: 'JobListingCategory';
  _count?: Maybe<JobListingCategoryCount>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listings: Array<CategoryOnJobListing>;
  name: Scalars['String']['output'];
  subscriptions: Array<JobListingSubscription>;
};


export type JobListingCategoryListingsArgs = {
  cursor?: InputMaybe<CategoryOnJobListingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryOnJobListingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOnJobListingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCategorySubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type JobListingCategoryCount = {
  __typename?: 'JobListingCategoryCount';
  listings: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type JobListingCategoryCountListingsArgs = {
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCategoryCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  listings?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutCategoryInput>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput>;
};

export type JobListingCategoryCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type JobListingCategoryCreateNestedManyWithoutSubscriptionsInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutSubscriptionsInput>>;
};

export type JobListingCategoryCreateNestedOneWithoutListingsInput = {
  connect?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCategoryCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<JobListingCategoryCreateWithoutListingsInput>;
};

export type JobListingCategoryCreateOrConnectWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateOrConnectWithoutSubscriptionsInput = {
  create: JobListingCategoryCreateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryCreateWithoutListingsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput>;
};

export type JobListingCategoryCreateWithoutSubscriptionsInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutCategoryInput>;
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
  listings?: InputMaybe<CategoryOnJobListingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
};

export type JobListingCategoryRelationFilter = {
  is?: InputMaybe<JobListingCategoryWhereInput>;
  isNot?: InputMaybe<JobListingCategoryWhereInput>;
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
  listings?: InputMaybe<CategoryOnJobListingUpdateManyWithoutCategoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput>;
};

export type JobListingCategoryUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpdateManyWithWhereWithoutSubscriptionsInput = {
  data: JobListingCategoryUpdateManyMutationInput;
  where: JobListingCategoryScalarWhereInput;
};

export type JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCategoryCreateOrConnectWithoutSubscriptionsInput>>;
  create?: InputMaybe<Array<JobListingCategoryCreateWithoutSubscriptionsInput>>;
  delete?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput>>;
  updateMany?: InputMaybe<Array<JobListingCategoryUpdateManyWithWhereWithoutSubscriptionsInput>>;
  upsert?: InputMaybe<Array<JobListingCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput>>;
};

export type JobListingCategoryUpdateOneRequiredWithoutListingsNestedInput = {
  connect?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCategoryCreateOrConnectWithoutListingsInput>;
  create?: InputMaybe<JobListingCategoryCreateWithoutListingsInput>;
  update?: InputMaybe<JobListingCategoryUpdateToOneWithWhereWithoutListingsInput>;
  upsert?: InputMaybe<JobListingCategoryUpsertWithoutListingsInput>;
};

export type JobListingCategoryUpdateToOneWithWhereWithoutListingsInput = {
  data: JobListingCategoryUpdateWithoutListingsInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryUpdateWithWhereUniqueWithoutSubscriptionsInput = {
  data: JobListingCategoryUpdateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpdateWithoutListingsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput>;
};

export type JobListingCategoryUpdateWithoutSubscriptionsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listings?: InputMaybe<CategoryOnJobListingUpdateManyWithoutCategoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobListingCategoryUpsertWithWhereUniqueWithoutSubscriptionsInput = {
  create: JobListingCategoryCreateWithoutSubscriptionsInput;
  update: JobListingCategoryUpdateWithoutSubscriptionsInput;
  where: JobListingCategoryWhereUniqueInput;
};

export type JobListingCategoryUpsertWithoutListingsInput = {
  create: JobListingCategoryCreateWithoutListingsInput;
  update: JobListingCategoryUpdateWithoutListingsInput;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingCategoryWhereInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listings?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type JobListingCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  NOT?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  OR?: InputMaybe<Array<JobListingCategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listings?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type JobListingCount = {
  __typename?: 'JobListingCount';
  applications: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
};


export type JobListingCountApplicationsArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type JobListingCountCategoriesArgs = {
  where?: InputMaybe<CategoryOnJobListingWhereInput>;
};


export type JobListingCountSavesArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};

export type JobListingCountAggregate = {
  __typename?: 'JobListingCountAggregate';
  _all: Scalars['Int']['output'];
  company_id: Scalars['Int']['output'];
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  company_id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type JobListingCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingCreateManyCompanyInputEnvelope>;
};

export type JobListingCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobListingCreateWithoutApplicationsInput>;
};

export type JobListingCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<JobListingCreateWithoutCategoriesInput>;
};

export type JobListingCreateNestedOneWithoutSavesInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
};

export type JobListingCreateOrConnectWithoutApplicationsInput = {
  create: JobListingCreateWithoutApplicationsInput;
  where: JobListingWhereUniqueInput;
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

export type JobListingCreateWithoutApplicationsInput = {
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type JobListingCreateWithoutCategoriesInput = {
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutListingInput>;
  categories?: InputMaybe<CategoryOnJobListingCreateNestedManyWithoutListingInput>;
  company: CompanyCreateNestedOneWithoutListingsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export enum JobListingFrom {
  Agencies = 'Agencies',
  DirectEmployer = 'DirectEmployer'
}

export type JobListingGroupBy = {
  __typename?: 'JobListingGroupBy';
  _count?: Maybe<JobListingCountAggregate>;
  _max?: Maybe<JobListingMaxAggregate>;
  _min?: Maybe<JobListingMinAggregate>;
  company_id: Scalars['String']['output'];
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
  company_id?: Maybe<Scalars['String']['output']>;
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  company_id?: Maybe<Scalars['String']['output']>;
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  CompanyId = 'company_id',
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
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoryOnJobListingOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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

export type JobListingParameters = {
  __typename?: 'JobListingParameters';
  from?: Maybe<JobListingFrom>;
  furlough: FurloughPeriod;
  internship?: Maybe<Scalars['Boolean']['output']>;
  remoteInterview?: Maybe<Scalars['Boolean']['output']>;
  salary?: Maybe<JobListingSalary>;
};

export type JobListingParametersInput = {
  from?: InputMaybe<JobListingFrom>;
  furlough?: InputMaybe<FurloughPeriod>;
  internship?: InputMaybe<Scalars['Boolean']['input']>;
  remoteInterview?: InputMaybe<Scalars['Boolean']['input']>;
  salary?: InputMaybe<JobListingSalaryInput>;
};

export type JobListingRelationFilter = {
  is?: InputMaybe<JobListingWhereInput>;
  isNot?: InputMaybe<JobListingWhereInput>;
};

export type JobListingSalary = {
  currency: Scalars['Currency']['output'];
};

export type JobListingSalaryInput = {
  currency: Scalars['Currency']['input'];
};

export enum JobListingScalarFieldEnum {
  CompanyId = 'company_id',
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
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  company_id?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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

export type JobListingSubscription = {
  __typename?: 'JobListingSubscription';
  _count?: Maybe<JobListingSubscriptionCount>;
  categories: Array<CompanyCategory>;
  company?: Maybe<Company>;
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  job_categories: Array<JobListingCategory>;
  keywords: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  /** [JobListingParameters] */
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user?: Maybe<User>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};


export type JobListingSubscriptionCategoriesArgs = {
  cursor?: InputMaybe<CompanyCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type JobListingSubscriptionCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type JobListingSubscriptionJob_CategoriesArgs = {
  cursor?: InputMaybe<JobListingCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingCategoryWhereInput>;
};


export type JobListingSubscriptionUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type JobListingSubscriptionCount = {
  __typename?: 'JobListingSubscriptionCount';
  categories: Scalars['Int']['output'];
  job_categories: Scalars['Int']['output'];
};


export type JobListingSubscriptionCountCategoriesArgs = {
  where?: InputMaybe<CompanyCategoryWhereInput>;
};


export type JobListingSubscriptionCountJob_CategoriesArgs = {
  where?: InputMaybe<JobListingCategoryWhereInput>;
};

export type JobListingSubscriptionCountAggregate = {
  __typename?: 'JobListingSubscriptionCountAggregate';
  _all: Scalars['Int']['output'];
  company_id: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  keywords: Scalars['Int']['output'];
  languages: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  notification_frequency: Scalars['Int']['output'];
  parameters: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_email: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  work_from: Scalars['Int']['output'];
};

export type JobListingSubscriptionCountOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingSubscriptionCreateInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyCompanyInputEnvelope = {
  data: Array<JobListingSubscriptionCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingSubscriptionCreateManyInput = {
  company_id?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyUserInput = {
  company_id?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateManyUserInputEnvelope = {
  data: Array<JobListingSubscriptionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobListingSubscriptionCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCategoriesInput>>;
};

export type JobListingSubscriptionCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyCompanyInputEnvelope>;
};

export type JobListingSubscriptionCreateNestedManyWithoutJob_CategoriesInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutJob_CategoriesInput>>;
};

export type JobListingSubscriptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyUserInputEnvelope>;
};

export type JobListingSubscriptionCreateOrConnectWithoutCategoriesInput = {
  create: JobListingSubscriptionCreateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutCompanyInput = {
  create: JobListingSubscriptionCreateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput = {
  create: JobListingSubscriptionCreateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateOrConnectWithoutUserInput = {
  create: JobListingSubscriptionCreateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionCreateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutCompanyInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutJob_CategoriesInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user?: InputMaybe<UserCreateNestedOneWithoutSubscriptionsInput>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreateWithoutUserInput = {
  categories?: InputMaybe<CompanyCategoryCreateNestedManyWithoutSubscriptionsInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryCreateNestedManyWithoutSubscriptionsInput>;
  keywords?: InputMaybe<JobListingSubscriptionCreatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionCreatelanguagesInput>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<JobListingEmploymentType>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  work_from?: InputMaybe<WorkFromHome>;
};

export type JobListingSubscriptionCreatekeywordsInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingSubscriptionCreatelanguagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type JobListingSubscriptionGroupBy = {
  __typename?: 'JobListingSubscriptionGroupBy';
  _count?: Maybe<JobListingSubscriptionCountAggregate>;
  _max?: Maybe<JobListingSubscriptionMaxAggregate>;
  _min?: Maybe<JobListingSubscriptionMinAggregate>;
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  notification_frequency: JobListingSubscriptionNotificationFrequency;
  parameters: Scalars['JSON']['output'];
  type?: Maybe<JobListingEmploymentType>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionListRelationFilter = {
  every?: InputMaybe<JobListingSubscriptionWhereInput>;
  none?: InputMaybe<JobListingSubscriptionWhereInput>;
  some?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type JobListingSubscriptionMaxAggregate = {
  __typename?: 'JobListingSubscriptionMaxAggregate';
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  notification_frequency?: Maybe<JobListingSubscriptionNotificationFrequency>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionMaxOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export type JobListingSubscriptionMinAggregate = {
  __typename?: 'JobListingSubscriptionMinAggregate';
  company_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<JobListingLevel>;
  location?: Maybe<Scalars['String']['output']>;
  notification_frequency?: Maybe<JobListingSubscriptionNotificationFrequency>;
  type?: Maybe<JobListingEmploymentType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_from?: Maybe<WorkFromHome>;
};

export type JobListingSubscriptionMinOrderByAggregateInput = {
  company_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  notification_frequency?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user_email?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  work_from?: InputMaybe<SortOrder>;
};

export enum JobListingSubscriptionNotificationFrequency {
  Daily = 'Daily',
  Weekly = 'Weekly'
}

export type JobListingSubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum JobListingSubscriptionOrderByRelevanceFieldEnum {
  CompanyId = 'company_id',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Location = 'location',
  UserEmail = 'user_email',
  UserId = 'user_id'
}

export type JobListingSubscriptionOrderByRelevanceInput = {
  fields: Array<JobListingSubscriptionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type JobListingSubscriptionOrderByWithAggregationInput = {
  _count?: InputMaybe<JobListingSubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<JobListingSubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobListingSubscriptionMinOrderByAggregateInput>;
  company_id?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  user_email?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export type JobListingSubscriptionOrderByWithRelationInput = {
  _relevance?: InputMaybe<JobListingSubscriptionOrderByRelevanceInput>;
  categories?: InputMaybe<CompanyCategoryOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  company_id?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job_categories?: InputMaybe<JobListingCategoryOrderByRelationAggregateInput>;
  keywords?: InputMaybe<SortOrder>;
  languages?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrderInput>;
  location?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  notification_frequency?: InputMaybe<SortOrder>;
  parameters?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_email?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrderInput>;
  work_from?: InputMaybe<SortOrderInput>;
};

export enum JobListingSubscriptionScalarFieldEnum {
  CompanyId = 'company_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  Keywords = 'keywords',
  Languages = 'languages',
  Level = 'level',
  Location = 'location',
  Metadata = 'metadata',
  NotificationFrequency = 'notification_frequency',
  Parameters = 'parameters',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserEmail = 'user_email',
  UserId = 'user_id',
  WorkFrom = 'work_from'
}

export type JobListingSubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingSubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionScalarWhereWithAggregatesInput>>;
  company_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  parameters?: InputMaybe<JsonWithAggregatesFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableWithAggregatesFilter>;
  user_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableWithAggregatesFilter>;
};

export type JobListingSubscriptionUpdateInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutCategoriesInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutJob_CategoriesInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithWhereWithoutUserInput = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where: JobListingSubscriptionScalarWhereInput;
};

export type JobListingSubscriptionUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutJob_CategoriesNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutJob_CategoriesInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutJob_CategoriesInput>>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutJob_CategoriesInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutJob_CategoriesInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutJob_CategoriesInput>>;
};

export type JobListingSubscriptionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JobListingSubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JobListingSubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<JobListingSubscriptionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JobListingSubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<JobListingSubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<JobListingSubscriptionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<JobListingSubscriptionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<JobListingSubscriptionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: JobListingSubscriptionUpdateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingSubscriptionUpdateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutJob_CategoriesInput = {
  data: JobListingSubscriptionUpdateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
  data: JobListingSubscriptionUpdateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpdateWithoutCategoriesInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutCompanyInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutJob_CategoriesInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutSubscriptionsNestedInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdateWithoutUserInput = {
  categories?: InputMaybe<CompanyCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_categories?: InputMaybe<JobListingCategoryUpdateManyWithoutSubscriptionsNestedInput>;
  keywords?: InputMaybe<JobListingSubscriptionUpdatekeywordsInput>;
  languages?: InputMaybe<JobListingSubscriptionUpdatelanguagesInput>;
  level?: InputMaybe<NullableEnumJobListingLevelFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFieldUpdateOperationsInput>;
  parameters?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<NullableEnumJobListingEmploymentTypeFieldUpdateOperationsInput>;
  user_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  work_from?: InputMaybe<NullableEnumWorkFromHomeFieldUpdateOperationsInput>;
};

export type JobListingSubscriptionUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingSubscriptionUpdatelanguagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: JobListingSubscriptionCreateWithoutCategoriesInput;
  update: JobListingSubscriptionUpdateWithoutCategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingSubscriptionCreateWithoutCompanyInput;
  update: JobListingSubscriptionUpdateWithoutCompanyInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutJob_CategoriesInput = {
  create: JobListingSubscriptionCreateWithoutJob_CategoriesInput;
  update: JobListingSubscriptionUpdateWithoutJob_CategoriesInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
  create: JobListingSubscriptionCreateWithoutUserInput;
  update: JobListingSubscriptionUpdateWithoutUserInput;
  where: JobListingSubscriptionWhereUniqueInput;
};

export type JobListingSubscriptionWhereInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company?: InputMaybe<CompanyNullableRelationFilter>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  job_categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingSubscriptionWhereUniqueInput = {
  AND?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<JobListingSubscriptionWhereInput>>;
  categories?: InputMaybe<CompanyCategoryListRelationFilter>;
  company?: InputMaybe<CompanyNullableRelationFilter>;
  company_id?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  job_categories?: InputMaybe<JobListingCategoryListRelationFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  languages?: InputMaybe<StringNullableListFilter>;
  level?: InputMaybe<EnumJobListingLevelNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  notification_frequency?: InputMaybe<EnumJobListingSubscriptionNotificationFrequencyFilter>;
  parameters?: InputMaybe<JsonFilter>;
  type?: InputMaybe<EnumJobListingEmploymentTypeNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_email?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<StringNullableFilter>;
  work_from?: InputMaybe<EnumWorkFromHomeNullableFilter>;
};

export type JobListingUpdateInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpdateManyWithWhereWithoutCompanyInput = {
  data: JobListingUpdateManyMutationInput;
  where: JobListingScalarWhereInput;
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

export type JobListingUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobListingCreateWithoutApplicationsInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutApplicationsInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutApplicationsInput>;
};

export type JobListingUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<JobListingCreateWithoutCategoriesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutCategoriesInput>;
};

export type JobListingUpdateOneRequiredWithoutSavesNestedInput = {
  connect?: InputMaybe<JobListingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobListingCreateOrConnectWithoutSavesInput>;
  create?: InputMaybe<JobListingCreateWithoutSavesInput>;
  update?: InputMaybe<JobListingUpdateToOneWithWhereWithoutSavesInput>;
  upsert?: InputMaybe<JobListingUpsertWithoutSavesInput>;
};

export type JobListingUpdateToOneWithWhereWithoutApplicationsInput = {
  data: JobListingUpdateWithoutApplicationsInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateToOneWithWhereWithoutCategoriesInput = {
  data: JobListingUpdateWithoutCategoriesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateToOneWithWhereWithoutSavesInput = {
  data: JobListingUpdateWithoutSavesInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpdateWithWhereUniqueWithoutCompanyInput = {
  data: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpdateWithoutApplicationsInput = {
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpdateWithoutCategoriesInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutListingNestedInput>;
  categories?: InputMaybe<CategoryOnJobListingUpdateManyWithoutListingNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutListingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type JobListingUpsertWithWhereUniqueWithoutCompanyInput = {
  create: JobListingCreateWithoutCompanyInput;
  update: JobListingUpdateWithoutCompanyInput;
  where: JobListingWhereUniqueInput;
};

export type JobListingUpsertWithoutApplicationsInput = {
  create: JobListingCreateWithoutApplicationsInput;
  update: JobListingUpdateWithoutApplicationsInput;
  where?: InputMaybe<JobListingWhereInput>;
};

export type JobListingUpsertWithoutCategoriesInput = {
  create: JobListingCreateWithoutCategoriesInput;
  update: JobListingUpdateWithoutCategoriesInput;
  where?: InputMaybe<JobListingWhereInput>;
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
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  categories?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  categories?: InputMaybe<CategoryOnJobListingListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  acceptAllCookies: Scalars['Boolean']['output'];
  companySignUp?: Maybe<Company>;
  confirmJobListingSubscription?: Maybe<JobListingSubscription>;
  createManyAccount: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCompanyCategory: AffectedRowsOutput;
  createManyJobListing: AffectedRowsOutput;
  createManyJobListingCategory: AffectedRowsOutput;
  createManyJobListingSubscription: AffectedRowsOutput;
  createManySavedListing: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserAttachments: AffectedRowsOutput;
  createManyUserCoverLetterTemplate: AffectedRowsOutput;
  createManyUserJobApplication: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneCompany: Company;
  createOneCompanyCategory: CompanyCategory;
  createOneJobListing: JobListing;
  createOneJobListingCategory: JobListingCategory;
  createOneJobListingSubscription: JobListingSubscription;
  createOneSavedListing: SavedListing;
  createOneSession: Session;
  createOneUser: User;
  createOneUserAttachments: UserAttachments;
  createOneUserCoverLetterTemplate: UserCoverLetterTemplate;
  createOneUserJobApplication: UserJobApplication;
  createOneVerificationToken: VerificationToken;
  createUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  declineAllCookies: Scalars['Boolean']['output'];
  deleteAllCoverLetterTemplates: Scalars['Boolean']['output'];
  deleteAllSubscriptions: DeleteAllSubscriptionsResponse;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCompanyCategory: AffectedRowsOutput;
  deleteManyJobListing: AffectedRowsOutput;
  deleteManyJobListingCategory: AffectedRowsOutput;
  deleteManyJobListingSubscription: AffectedRowsOutput;
  deleteManySavedListing: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserAttachments: AffectedRowsOutput;
  deleteManyUserCoverLetterTemplate: AffectedRowsOutput;
  deleteManyUserJobApplication: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCompanyCategory?: Maybe<CompanyCategory>;
  deleteOneJobListing?: Maybe<JobListing>;
  deleteOneJobListingCategory?: Maybe<JobListingCategory>;
  deleteOneJobListingSubscription?: Maybe<JobListingSubscription>;
  deleteOneSavedListing?: Maybe<SavedListing>;
  deleteOneSession?: Maybe<Session>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserAttachments?: Maybe<UserAttachments>;
  deleteOneUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  deleteOneUserJobApplication?: Maybe<UserJobApplication>;
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
  subscribeToCompanyListings?: Maybe<JobListingSubscription>;
  unSaveJobListing?: Maybe<Scalars['Boolean']['output']>;
  unSubscribeToJobListings: Scalars['Boolean']['output'];
  updateCookiePreferences: Scalars['Boolean']['output'];
  updateManyAccount: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCompanyCategory: AffectedRowsOutput;
  updateManyJobListing: AffectedRowsOutput;
  updateManyJobListingCategory: AffectedRowsOutput;
  updateManyJobListingSubscription: AffectedRowsOutput;
  updateManySavedListing: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserAttachments: AffectedRowsOutput;
  updateManyUserCoverLetterTemplate: AffectedRowsOutput;
  updateManyUserJobApplication: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneCompany?: Maybe<Company>;
  updateOneCompanyCategory?: Maybe<CompanyCategory>;
  updateOneJobListing?: Maybe<JobListing>;
  updateOneJobListingCategory?: Maybe<JobListingCategory>;
  updateOneJobListingSubscription?: Maybe<JobListingSubscription>;
  updateOneSavedListing?: Maybe<SavedListing>;
  updateOneSession?: Maybe<Session>;
  updateOneUser?: Maybe<User>;
  updateOneUserAttachments?: Maybe<UserAttachments>;
  updateOneUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  updateOneUserJobApplication?: Maybe<UserJobApplication>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneCompany: Company;
  upsertOneCompanyCategory: CompanyCategory;
  upsertOneJobListing: JobListing;
  upsertOneJobListingCategory: JobListingCategory;
  upsertOneJobListingSubscription: JobListingSubscription;
  upsertOneSavedListing: SavedListing;
  upsertOneSession: Session;
  upsertOneUser: User;
  upsertOneUserAttachments: UserAttachments;
  upsertOneUserCoverLetterTemplate: UserCoverLetterTemplate;
  upsertOneUserJobApplication: UserJobApplication;
  upsertOneVerificationToken: VerificationToken;
  verifyEmail: VerifyEmailResponse;
};


export type MutationCompanySignUpArgs = {
  input: CompanySignUpInput;
};


export type MutationConfirmJobListingSubscriptionArgs = {
  subscriptionId: Scalars['String']['input'];
  subscriptionKey: Scalars['String']['input'];
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


export type MutationCreateManyJobListingSubscriptionArgs = {
  data: Array<JobListingSubscriptionCreateManyInput>;
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


export type MutationCreateManyUserAttachmentsArgs = {
  data: Array<UserAttachmentsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserCoverLetterTemplateArgs = {
  data: Array<UserCoverLetterTemplateCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserJobApplicationArgs = {
  data: Array<UserJobApplicationCreateManyInput>;
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


export type MutationCreateOneJobListingSubscriptionArgs = {
  data: JobListingSubscriptionCreateInput;
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


export type MutationCreateOneUserAttachmentsArgs = {
  data: UserAttachmentsCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserJobApplicationArgs = {
  data: UserJobApplicationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateUserCoverLetterTemplateArgs = {
  input: CreateUserCoverLetterTemplateInput;
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


export type MutationDeleteManyJobListingSubscriptionArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type MutationDeleteManyUserAttachmentsArgs = {
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type MutationDeleteManyUserCoverLetterTemplateArgs = {
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type MutationDeleteManyUserJobApplicationArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type MutationDeleteOneJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationDeleteOneUserAttachmentsArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationDeleteOneUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationDeleteOneUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type MutationSubscribeToCompanyListingsArgs = {
  input: SubscribeToJobListingsInput;
};


export type MutationUnSaveJobListingArgs = {
  listingId: Scalars['String']['input'];
};


export type MutationUnSubscribeToJobListingsArgs = {
  subscriptionId: Scalars['String']['input'];
};


export type MutationUpdateCookiePreferencesArgs = {
  input: UpdateCookiePreferencesInput;
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


export type MutationUpdateManyJobListingSubscriptionArgs = {
  data: JobListingSubscriptionUpdateManyMutationInput;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type MutationUpdateManyUserAttachmentsArgs = {
  data: UserAttachmentsUpdateManyMutationInput;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type MutationUpdateManyUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateUpdateManyMutationInput;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type MutationUpdateManyUserJobApplicationArgs = {
  data: UserJobApplicationUpdateManyMutationInput;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type MutationUpdateOneJobListingSubscriptionArgs = {
  data: JobListingSubscriptionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationUpdateOneUserAttachmentsArgs = {
  data: UserAttachmentsUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationUpdateOneUserCoverLetterTemplateArgs = {
  data: UserCoverLetterTemplateUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationUpdateOneUserJobApplicationArgs = {
  data: UserJobApplicationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type MutationUpsertOneJobListingSubscriptionArgs = {
  create: JobListingSubscriptionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: JobListingSubscriptionUpdateInput;
  where: JobListingSubscriptionWhereUniqueInput;
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


export type MutationUpsertOneUserAttachmentsArgs = {
  create: UserAttachmentsCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserAttachmentsUpdateInput;
  where: UserAttachmentsWhereUniqueInput;
};


export type MutationUpsertOneUserCoverLetterTemplateArgs = {
  create: UserCoverLetterTemplateCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserCoverLetterTemplateUpdateInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type MutationUpsertOneUserJobApplicationArgs = {
  create: UserJobApplicationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserJobApplicationUpdateInput;
  where: UserJobApplicationWhereUniqueInput;
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

export type NestedEnumJobListingSubscriptionNotificationFrequencyFilter = {
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
};

export type NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  _min?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyFilter>;
  equals?: InputMaybe<JobListingSubscriptionNotificationFrequency>;
  in?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
  not?: InputMaybe<NestedEnumJobListingSubscriptionNotificationFrequencyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<JobListingSubscriptionNotificationFrequency>>;
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
  aggregateJobListingSubscription: AggregateJobListingSubscription;
  aggregateSavedListing: AggregateSavedListing;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateUserAttachments: AggregateUserAttachments;
  aggregateUserCoverLetterTemplate: AggregateUserCoverLetterTemplate;
  aggregateUserJobApplication: AggregateUserJobApplication;
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
  findFirstJobListingSubscription?: Maybe<JobListingSubscription>;
  findFirstJobListingSubscriptionOrThrow?: Maybe<JobListingSubscription>;
  findFirstSavedListing?: Maybe<SavedListing>;
  findFirstSavedListingOrThrow?: Maybe<SavedListing>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstUserAttachments?: Maybe<UserAttachments>;
  findFirstUserAttachmentsOrThrow?: Maybe<UserAttachments>;
  findFirstUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  findFirstUserCoverLetterTemplateOrThrow?: Maybe<UserCoverLetterTemplate>;
  findFirstUserJobApplication?: Maybe<UserJobApplication>;
  findFirstUserJobApplicationOrThrow?: Maybe<UserJobApplication>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  findManyUserAttachments: Array<UserAttachments>;
  findUniqueUserAttachments?: Maybe<UserAttachments>;
  findUniqueUserAttachmentsOrThrow?: Maybe<UserAttachments>;
  getAccount?: Maybe<Account>;
  getAllEmploymentTypes: Array<GetEmploymentTypeDetailsResponse>;
  getAllKeywords: Array<GetKeywordsDetailsResponse>;
  getAllLanguages: Array<GetLanguagesDetailsResponse>;
  getAllLocations: Array<GetLocationsDetailsResponse>;
  getAllUsersWithSubscriptions: Array<User>;
  getAvailableCountries: Array<Scalars['String']['output']>;
  getCompany?: Maybe<Company>;
  getCompanyCategoriesDetails: Array<CategoryDetailsResponse>;
  getCompanyCategory?: Maybe<CompanyCategory>;
  getJobListing?: Maybe<JobListing>;
  getJobListingCategory?: Maybe<JobListingCategory>;
  getJobListingLevelsDetails: Array<GetJobListingLevelsDetailsResponse>;
  getJobListingSubscription?: Maybe<JobListingSubscription>;
  getMostRelevantCompanies: Array<Company>;
  getMyCoverLetterTemplates: Array<UserCoverLetterTemplate>;
  getSavedListing?: Maybe<SavedListing>;
  getSession?: Maybe<Session>;
  getSubscriptionsJobListingsForUser: GetSubscriptionsJobListingsResponse;
  getTopCompanies: Array<Company>;
  getTopListingCategories: Array<JobListingCategory>;
  getUser?: Maybe<User>;
  getUserCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  getUserJobApplication?: Maybe<UserJobApplication>;
  getVerificationToken?: Maybe<VerificationToken>;
  googleLoginUrl: Scalars['String']['output'];
  groupByAccount: Array<AccountGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCompanyCategory: Array<CompanyCategoryGroupBy>;
  groupByJobListing: Array<JobListingGroupBy>;
  groupByJobListingCategory: Array<JobListingCategoryGroupBy>;
  groupByJobListingSubscription: Array<JobListingSubscriptionGroupBy>;
  groupBySavedListing: Array<SavedListingGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserAttachments: Array<UserAttachmentsGroupBy>;
  groupByUserCoverLetterTemplate: Array<UserCoverLetterTemplateGroupBy>;
  groupByUserJobApplication: Array<UserJobApplicationGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  jobListing?: Maybe<JobListing>;
  jobListingCategories: Array<JobListingCategory>;
  jobListingCategory?: Maybe<JobListingCategory>;
  jobListingSubscription?: Maybe<JobListingSubscription>;
  jobListingSubscriptions: Array<JobListingSubscription>;
  jobListings: Array<JobListing>;
  me?: Maybe<User>;
  myApplications: Array<UserJobApplication>;
  myAttachments: Array<UserAttachments>;
  mySubscriptions: Array<JobListingSubscription>;
  savedListing?: Maybe<SavedListing>;
  savedListings: Array<SavedListing>;
  search: Array<UserSearchResponse>;
  searchJobListings: Array<JobListing>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  userCoverLetterTemplate?: Maybe<UserCoverLetterTemplate>;
  userCoverLetterTemplates: Array<UserCoverLetterTemplate>;
  userJobApplication?: Maybe<UserJobApplication>;
  userJobApplications: Array<UserJobApplication>;
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


export type QueryAggregateJobListingSubscriptionArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryAggregateUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryAggregateUserCoverLetterTemplateArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryAggregateUserJobApplicationArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryFindFirstJobListingSubscriptionArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};


export type QueryFindFirstJobListingSubscriptionOrThrowArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryFindFirstUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindFirstUserAttachmentsOrThrowArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindFirstUserCoverLetterTemplateArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryFindFirstUserCoverLetterTemplateOrThrowArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryFindFirstUserJobApplicationArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type QueryFindFirstUserJobApplicationOrThrowArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryFindManyUserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryFindUniqueUserAttachmentsArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type QueryFindUniqueUserAttachmentsOrThrowArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAttachmentsWhereUniqueInput;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetCompanyArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CompanyWhereUniqueInput;
};


export type QueryGetCompanyCategoriesDetailsArgs = {
  input: GetCategoriesDetailsInput;
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


export type QueryGetJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
};


export type QueryGetMostRelevantCompaniesArgs = {
  input: GetRelevantCompaniesInput;
};


export type QueryGetSavedListingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SavedListingWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetSubscriptionsJobListingsForUserArgs = {
  userId: Scalars['String']['input'];
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


export type QueryGetUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type QueryGetUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
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


export type QueryGroupByJobListingSubscriptionArgs = {
  by: Array<JobListingSubscriptionScalarFieldEnum>;
  having?: InputMaybe<JobListingSubscriptionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryGroupByUserAttachmentsArgs = {
  by: Array<UserAttachmentsScalarFieldEnum>;
  having?: InputMaybe<UserAttachmentsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type QueryGroupByUserCoverLetterTemplateArgs = {
  by: Array<UserCoverLetterTemplateScalarFieldEnum>;
  having?: InputMaybe<UserCoverLetterTemplateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryGroupByUserJobApplicationArgs = {
  by: Array<UserJobApplicationScalarFieldEnum>;
  having?: InputMaybe<UserJobApplicationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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


export type QueryJobListingSubscriptionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: JobListingSubscriptionWhereUniqueInput;
};


export type QueryJobListingSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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


export type QueryMyApplicationsArgs = {
  input: GetApplicationsByUserInput;
};


export type QueryMyAttachmentsArgs = {
  input: GetAttachmentsByUserInput;
};


export type QueryMySubscriptionsArgs = {
  input: GetSubscriptionsInput;
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


export type QuerySearchJobListingsArgs = {
  input: SearchJobListingsInput;
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


export type QueryUserCoverLetterTemplateArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserCoverLetterTemplateWhereUniqueInput;
};


export type QueryUserCoverLetterTemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type QueryUserJobApplicationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserJobApplicationWhereUniqueInput;
};


export type QueryUserJobApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
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

export type RangeJobListingSalary = JobListingSalary & {
  __typename?: 'RangeJobListingSalary';
  currency: Scalars['Currency']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export type SavedListing = {
  __typename?: 'SavedListing';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listing_id: Scalars['String']['output'];
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
  listing_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SavedListingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutSavesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  userId: Scalars['String']['input'];
};

export type SavedListingCreateManyListingInputEnvelope = {
  data: Array<SavedListingCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SavedListingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutSaved_ListingsInput;
};

export type SavedListingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  listing_id: Scalars['String']['output'];
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
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingMinAggregate = {
  __typename?: 'SavedListingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SavedListingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SavedListingOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listing_id',
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
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SavedListingOrderByWithRelationInput = {
  _relevance?: InputMaybe<SavedListingOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SavedListingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listing_id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SavedListingScalarWhereInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SavedListingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listing_id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SavedListingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutSavesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSaved_ListingsNestedInput>;
};

export type SavedListingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SavedListingWhereUniqueInput = {
  AND?: InputMaybe<Array<SavedListingWhereInput>>;
  NOT?: InputMaybe<Array<SavedListingWhereInput>>;
  OR?: InputMaybe<Array<SavedListingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SearchJobListingsInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  companyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<JobListingFrom>;
  furlough?: InputMaybe<FurloughPeriod>;
  internship?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  levels?: InputMaybe<Array<JobListingLevel>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  noExperience?: InputMaybe<Scalars['Boolean']['input']>;
  professions?: InputMaybe<Array<Scalars['String']['input']>>;
  remoteInterview?: InputMaybe<Scalars['Boolean']['input']>;
  salary?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<JobListingEmploymentType>>;
  workFromHome?: InputMaybe<Scalars['Boolean']['input']>;
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
  user: User;
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
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
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

export type SubscribeToJobListingsInput = {
  categories: Array<CompanyCategoryInput>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  employmentType?: InputMaybe<JobListingEmploymentType>;
  frequency: JobListingSubscriptionNotificationFrequency;
  job_categories: Array<JobCategoryInput>;
  keywords: Array<Scalars['String']['input']>;
  languages: Array<Scalars['String']['input']>;
  level?: InputMaybe<JobListingLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<JobListingParametersInput>;
  workFromHome?: InputMaybe<WorkFromHome>;
};

export type Subscription = {
  __typename?: 'Subscription';
  randomNumber: Scalars['Int']['output'];
  userSignedUp: User;
};

export type SubscriptionJobListingsResponse = {
  __typename?: 'SubscriptionJobListingsResponse';
  listingIds: Array<Scalars['String']['output']>;
  subscriptionId: Scalars['String']['output'];
};

export type UpdateCookiePreferencesInput = {
  Functionality: Scalars['Boolean']['input'];
  Marketing: Scalars['Boolean']['input'];
  Necessary: Scalars['Boolean']['input'];
  Statistics: Scalars['Boolean']['input'];
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  applications: Array<UserJobApplication>;
  attachments: Array<UserAttachments>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  cover_letter_templates: Array<UserCoverLetterTemplate>;
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
  subscriptions: Array<JobListingSubscription>;
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
export type UserApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserCover_Letter_TemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
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


/** Always after the prisma-client-js generator */
export type UserSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
};

export type UserAttachments = {
  __typename?: 'UserAttachments';
  attachment_extension: Scalars['String']['output'];
  attachment_name: Scalars['String']['output'];
  attachment_url: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserAttachmentsCountAggregate = {
  __typename?: 'UserAttachmentsCountAggregate';
  _all: Scalars['Int']['output'];
  attachment_extension: Scalars['Int']['output'];
  attachment_name: Scalars['Int']['output'];
  attachment_url: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserAttachmentsCountOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsCreateInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutAttachmentsInput;
};

export type UserAttachmentsCreateManyInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserAttachmentsCreateManyUserInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsCreateManyUserInputEnvelope = {
  data: Array<UserAttachmentsCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAttachmentsCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAttachmentsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAttachmentsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAttachmentsCreateManyUserInputEnvelope>;
};

export type UserAttachmentsCreateOrConnectWithoutUserInput = {
  create: UserAttachmentsCreateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsCreateWithoutUserInput = {
  attachment_extension: Scalars['String']['input'];
  attachment_name: Scalars['String']['input'];
  attachment_url: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsGroupBy = {
  __typename?: 'UserAttachmentsGroupBy';
  _count?: Maybe<UserAttachmentsCountAggregate>;
  _max?: Maybe<UserAttachmentsMaxAggregate>;
  _min?: Maybe<UserAttachmentsMinAggregate>;
  attachment_extension: Scalars['String']['output'];
  attachment_name: Scalars['String']['output'];
  attachment_url: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserAttachmentsListRelationFilter = {
  every?: InputMaybe<UserAttachmentsWhereInput>;
  none?: InputMaybe<UserAttachmentsWhereInput>;
  some?: InputMaybe<UserAttachmentsWhereInput>;
};

export type UserAttachmentsMaxAggregate = {
  __typename?: 'UserAttachmentsMaxAggregate';
  attachment_extension?: Maybe<Scalars['String']['output']>;
  attachment_name?: Maybe<Scalars['String']['output']>;
  attachment_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserAttachmentsMaxOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsMinAggregate = {
  __typename?: 'UserAttachmentsMinAggregate';
  attachment_extension?: Maybe<Scalars['String']['output']>;
  attachment_name?: Maybe<Scalars['String']['output']>;
  attachment_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserAttachmentsMinOrderByAggregateInput = {
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserAttachmentsOrderByRelevanceFieldEnum {
  AttachmentExtension = 'attachment_extension',
  AttachmentName = 'attachment_name',
  AttachmentUrl = 'attachment_url',
  Id = 'id',
  UserId = 'user_id'
}

export type UserAttachmentsOrderByRelevanceInput = {
  fields: Array<UserAttachmentsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserAttachmentsOrderByWithAggregationInput = {
  _count?: InputMaybe<UserAttachmentsCountOrderByAggregateInput>;
  _max?: InputMaybe<UserAttachmentsMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserAttachmentsMinOrderByAggregateInput>;
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserAttachmentsOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserAttachmentsOrderByRelevanceInput>;
  attachment_extension?: InputMaybe<SortOrder>;
  attachment_name?: InputMaybe<SortOrder>;
  attachment_url?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserAttachmentsScalarFieldEnum {
  AttachmentExtension = 'attachment_extension',
  AttachmentName = 'attachment_name',
  AttachmentUrl = 'attachment_url',
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserAttachmentsScalarWhereInput = {
  AND?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserAttachmentsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserAttachmentsScalarWhereWithAggregatesInput>>;
  attachment_extension?: InputMaybe<StringWithAggregatesFilter>;
  attachment_name?: InputMaybe<StringWithAggregatesFilter>;
  attachment_url?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserAttachmentsUpdateInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttachmentsNestedInput>;
};

export type UserAttachmentsUpdateManyMutationInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsUpdateManyWithWhereWithoutUserInput = {
  data: UserAttachmentsUpdateManyMutationInput;
  where: UserAttachmentsScalarWhereInput;
};

export type UserAttachmentsUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAttachmentsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAttachmentsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAttachmentsCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAttachmentsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAttachmentsWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAttachmentsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserAttachmentsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserAttachmentsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserAttachmentsUpdateWithWhereUniqueWithoutUserInput = {
  data: UserAttachmentsUpdateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsUpdateWithoutUserInput = {
  attachment_extension?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  attachment_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserAttachmentsUpsertWithWhereUniqueWithoutUserInput = {
  create: UserAttachmentsCreateWithoutUserInput;
  update: UserAttachmentsUpdateWithoutUserInput;
  where: UserAttachmentsWhereUniqueInput;
};

export type UserAttachmentsWhereInput = {
  AND?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserAttachmentsWhereUniqueInput = {
  AND?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  NOT?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  OR?: InputMaybe<Array<UserAttachmentsWhereInput>>;
  attachment_extension?: InputMaybe<StringFilter>;
  attachment_name?: InputMaybe<StringFilter>;
  attachment_url?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
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
  applications: Scalars['Int']['output'];
  attachments: Scalars['Int']['output'];
  cover_letter_templates: Scalars['Int']['output'];
  saved_listings: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  subscriptions: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountApplicationsArgs = {
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type UserCountAttachmentsArgs = {
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type UserCountCover_Letter_TemplatesArgs = {
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};


export type UserCountSaved_ListingsArgs = {
  where?: InputMaybe<SavedListingWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type UserCountSubscriptionsArgs = {
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplate = {
  __typename?: 'UserCoverLetterTemplate';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  letter: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserCoverLetterTemplateCountAggregate = {
  __typename?: 'UserCoverLetterTemplateCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  letter: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserCoverLetterTemplateCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutCover_Letter_TemplatesInput;
};

export type UserCoverLetterTemplateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

export type UserCoverLetterTemplateCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCoverLetterTemplateCreateManyUserInputEnvelope = {
  data: Array<UserCoverLetterTemplateCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCoverLetterTemplateCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCoverLetterTemplateCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserCoverLetterTemplateCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserCoverLetterTemplateCreateManyUserInputEnvelope>;
};

export type UserCoverLetterTemplateCreateOrConnectWithoutUserInput = {
  create: UserCoverLetterTemplateCreateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type UserCoverLetterTemplateGroupBy = {
  __typename?: 'UserCoverLetterTemplateGroupBy';
  _count?: Maybe<UserCoverLetterTemplateCountAggregate>;
  _max?: Maybe<UserCoverLetterTemplateMaxAggregate>;
  _min?: Maybe<UserCoverLetterTemplateMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  letter: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserCoverLetterTemplateListRelationFilter = {
  every?: InputMaybe<UserCoverLetterTemplateWhereInput>;
  none?: InputMaybe<UserCoverLetterTemplateWhereInput>;
  some?: InputMaybe<UserCoverLetterTemplateWhereInput>;
};

export type UserCoverLetterTemplateMaxAggregate = {
  __typename?: 'UserCoverLetterTemplateMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  letter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserCoverLetterTemplateMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateMinAggregate = {
  __typename?: 'UserCoverLetterTemplateMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  letter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserCoverLetterTemplateMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserCoverLetterTemplateOrderByRelevanceFieldEnum {
  Id = 'id',
  Letter = 'letter',
  Name = 'name',
  UserId = 'user_id'
}

export type UserCoverLetterTemplateOrderByRelevanceInput = {
  fields: Array<UserCoverLetterTemplateOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserCoverLetterTemplateOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCoverLetterTemplateCountOrderByAggregateInput>;
  _max?: InputMaybe<UserCoverLetterTemplateMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserCoverLetterTemplateMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserCoverLetterTemplateOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserCoverLetterTemplateOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  letter?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserCoverLetterTemplateScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Letter = 'letter',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserCoverLetterTemplateScalarWhereInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCoverLetterTemplateScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  letter?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserCoverLetterTemplateUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCover_Letter_TemplatesNestedInput>;
};

export type UserCoverLetterTemplateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserCoverLetterTemplateUpdateManyWithWhereWithoutUserInput = {
  data: UserCoverLetterTemplateUpdateManyMutationInput;
  where: UserCoverLetterTemplateScalarWhereInput;
};

export type UserCoverLetterTemplateUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCoverLetterTemplateCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserCoverLetterTemplateCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserCoverLetterTemplateCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserCoverLetterTemplateScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  set?: InputMaybe<Array<UserCoverLetterTemplateWhereUniqueInput>>;
  update?: InputMaybe<Array<UserCoverLetterTemplateUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserCoverLetterTemplateUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserCoverLetterTemplateUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserCoverLetterTemplateUpdateWithWhereUniqueWithoutUserInput = {
  data: UserCoverLetterTemplateUpdateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserCoverLetterTemplateUpsertWithWhereUniqueWithoutUserInput = {
  create: UserCoverLetterTemplateCreateWithoutUserInput;
  update: UserCoverLetterTemplateUpdateWithoutUserInput;
  where: UserCoverLetterTemplateWhereUniqueInput;
};

export type UserCoverLetterTemplateWhereInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCoverLetterTemplateWhereUniqueInput = {
  AND?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  NOT?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  OR?: InputMaybe<Array<UserCoverLetterTemplateWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  letter?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type UserCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
};

export type UserCreateNestedOneWithoutAttachmentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttachmentsInput>;
  create?: InputMaybe<UserCreateWithoutAttachmentsInput>;
};

export type UserCreateNestedOneWithoutCover_Letter_TemplatesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCover_Letter_TemplatesInput>;
  create?: InputMaybe<UserCreateWithoutCover_Letter_TemplatesInput>;
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

export type UserCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAttachmentsInput = {
  create: UserCreateWithoutAttachmentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCover_Letter_TemplatesInput = {
  create: UserCreateWithoutCover_Letter_TemplatesInput;
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

export type UserCreateOrConnectWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutApplicationsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutAttachmentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCover_Letter_TemplatesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  saved_listings?: InputMaybe<SavedListingCreateNestedManyWithoutUserInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSubscriptionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  applications?: InputMaybe<UserJobApplicationCreateNestedManyWithoutUserInput>;
  attachments?: InputMaybe<UserAttachmentsCreateNestedManyWithoutUserInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type UserJobApplication = {
  __typename?: 'UserJobApplication';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  listing: JobListing;
  listing_id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type UserJobApplicationCountAggregate = {
  __typename?: 'UserJobApplicationCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  listing_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserJobApplicationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutApplicationsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutApplicationsInput;
};

export type UserJobApplicationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserJobApplicationCreateManyListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserJobApplicationCreateManyListingInputEnvelope = {
  data: Array<UserJobApplicationCreateManyListingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserJobApplicationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing_id: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationCreateManyUserInputEnvelope = {
  data: Array<UserJobApplicationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserJobApplicationCreateNestedManyWithoutListingInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutListingInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyListingInputEnvelope>;
};

export type UserJobApplicationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyUserInputEnvelope>;
};

export type UserJobApplicationCreateOrConnectWithoutListingInput = {
  create: UserJobApplicationCreateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationCreateOrConnectWithoutUserInput = {
  create: UserJobApplicationCreateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationCreateWithoutListingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutApplicationsInput;
};

export type UserJobApplicationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing: JobListingCreateNestedOneWithoutApplicationsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationGroupBy = {
  __typename?: 'UserJobApplicationGroupBy';
  _count?: Maybe<UserJobApplicationCountAggregate>;
  _max?: Maybe<UserJobApplicationMaxAggregate>;
  _min?: Maybe<UserJobApplicationMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  listing_id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserJobApplicationListRelationFilter = {
  every?: InputMaybe<UserJobApplicationWhereInput>;
  none?: InputMaybe<UserJobApplicationWhereInput>;
  some?: InputMaybe<UserJobApplicationWhereInput>;
};

export type UserJobApplicationMaxAggregate = {
  __typename?: 'UserJobApplicationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserJobApplicationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationMinAggregate = {
  __typename?: 'UserJobApplicationMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserJobApplicationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserJobApplicationOrderByRelevanceFieldEnum {
  Id = 'id',
  ListingId = 'listing_id',
  UserId = 'user_id'
}

export type UserJobApplicationOrderByRelevanceInput = {
  fields: Array<UserJobApplicationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserJobApplicationOrderByWithAggregationInput = {
  _count?: InputMaybe<UserJobApplicationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserJobApplicationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserJobApplicationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserJobApplicationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserJobApplicationOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  listing?: InputMaybe<JobListingOrderByWithRelationInput>;
  listing_id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserJobApplicationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ListingId = 'listing_id',
  Metadata = 'metadata',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserJobApplicationScalarWhereInput = {
  AND?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserJobApplicationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserJobApplicationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  listing_id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserJobApplicationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutApplicationsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
};

export type UserJobApplicationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationUpdateManyWithWhereWithoutListingInput = {
  data: UserJobApplicationUpdateManyMutationInput;
  where: UserJobApplicationScalarWhereInput;
};

export type UserJobApplicationUpdateManyWithWhereWithoutUserInput = {
  data: UserJobApplicationUpdateManyMutationInput;
  where: UserJobApplicationScalarWhereInput;
};

export type UserJobApplicationUpdateManyWithoutListingNestedInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutListingInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutListingInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyListingInputEnvelope>;
  delete?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserJobApplicationUpdateWithWhereUniqueWithoutListingInput>>;
  updateMany?: InputMaybe<Array<UserJobApplicationUpdateManyWithWhereWithoutListingInput>>;
  upsert?: InputMaybe<Array<UserJobApplicationUpsertWithWhereUniqueWithoutListingInput>>;
};

export type UserJobApplicationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserJobApplicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserJobApplicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserJobApplicationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserJobApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserJobApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserJobApplicationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserJobApplicationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserJobApplicationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserJobApplicationUpdateWithWhereUniqueWithoutListingInput = {
  data: UserJobApplicationUpdateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpdateWithWhereUniqueWithoutUserInput = {
  data: UserJobApplicationUpdateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpdateWithoutListingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
};

export type UserJobApplicationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listing?: InputMaybe<JobListingUpdateOneRequiredWithoutApplicationsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserJobApplicationUpsertWithWhereUniqueWithoutListingInput = {
  create: UserJobApplicationCreateWithoutListingInput;
  update: UserJobApplicationUpdateWithoutListingInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationUpsertWithWhereUniqueWithoutUserInput = {
  create: UserJobApplicationCreateWithoutUserInput;
  update: UserJobApplicationUpdateWithoutUserInput;
  where: UserJobApplicationWhereUniqueInput;
};

export type UserJobApplicationWhereInput = {
  AND?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type UserJobApplicationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  NOT?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  OR?: InputMaybe<Array<UserJobApplicationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listing?: InputMaybe<JobListingRelationFilter>;
  listing_id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
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
  createdAt?: InputMaybe<SortOrder>;
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
  applications?: InputMaybe<UserJobApplicationOrderByRelationAggregateInput>;
  attachments?: InputMaybe<UserAttachmentsOrderByRelationAggregateInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionOrderByRelationAggregateInput>;
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
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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
  applications: Array<UserJobApplication>;
  attachments: Array<UserAttachments>;
  cookieConsent?: Maybe<Scalars['Boolean']['output']>;
  cookiePreferences?: Maybe<UserCookiePreferences>;
  cover_letter_templates: Array<UserCoverLetterTemplate>;
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
  subscriptions: Array<JobListingSubscription>;
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


export type UserSearchResponseApplicationsArgs = {
  cursor?: InputMaybe<UserJobApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserJobApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserJobApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserJobApplicationWhereInput>;
};


export type UserSearchResponseAttachmentsArgs = {
  cursor?: InputMaybe<UserAttachmentsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAttachmentsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAttachmentsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAttachmentsWhereInput>;
};


export type UserSearchResponseCover_Letter_TemplatesArgs = {
  cursor?: InputMaybe<UserCoverLetterTemplateWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserCoverLetterTemplateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserCoverLetterTemplateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserCoverLetterTemplateWhereInput>;
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


export type UserSearchResponseSubscriptionsArgs = {
  cursor?: InputMaybe<JobListingSubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobListingSubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobListingSubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobListingSubscriptionWhereInput>;
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
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutApplicationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutApplicationsInput>;
};

export type UserUpdateOneRequiredWithoutAttachmentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttachmentsInput>;
  create?: InputMaybe<UserCreateWithoutAttachmentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAttachmentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAttachmentsInput>;
};

export type UserUpdateOneRequiredWithoutCover_Letter_TemplatesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCover_Letter_TemplatesInput>;
  create?: InputMaybe<UserCreateWithoutCover_Letter_TemplatesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCover_Letter_TemplatesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCover_Letter_TemplatesInput>;
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

export type UserUpdateOneWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSubscriptionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscriptionsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
  data: UserUpdateWithoutApplicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAttachmentsInput = {
  data: UserUpdateWithoutAttachmentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCover_Letter_TemplatesInput = {
  data: UserUpdateWithoutCover_Letter_TemplatesInput;
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

export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
  data: UserUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutApplicationsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutAttachmentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutCover_Letter_TemplatesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSaved_ListingsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saved_listings?: InputMaybe<SavedListingUpdateManyWithoutUserNestedInput>;
  subscriptions?: InputMaybe<JobListingSubscriptionUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSubscriptionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  applications?: InputMaybe<UserJobApplicationUpdateManyWithoutUserNestedInput>;
  attachments?: InputMaybe<UserAttachmentsUpdateManyWithoutUserNestedInput>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  update: UserUpdateWithoutApplicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAttachmentsInput = {
  create: UserCreateWithoutAttachmentsInput;
  update: UserUpdateWithoutAttachmentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCover_Letter_TemplatesInput = {
  create: UserCreateWithoutCover_Letter_TemplatesInput;
  update: UserUpdateWithoutCover_Letter_TemplatesInput;
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

export type UserUpsertWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  update: UserUpdateWithoutSubscriptionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  attachments?: InputMaybe<UserAttachmentsListRelationFilter>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  applications?: InputMaybe<UserJobApplicationListRelationFilter>;
  attachments?: InputMaybe<UserAttachmentsListRelationFilter>;
  cover_letter_templates?: InputMaybe<UserCoverLetterTemplateListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  subscriptions?: InputMaybe<JobListingSubscriptionListRelationFilter>;
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


export type GetTopEmployersQuery = { __typename?: 'Query', getTopCompanies: Array<{ __typename?: 'Company', id: string, name: string, banner_image_url?: any | null, brand_image_url?: any | null, listingsCount: number, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type TotalJobListingsCountQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalJobListingsCountQueryQuery = { __typename?: 'Query', jobListings: Array<{ __typename?: 'JobListing', id: string, name: string, createdAt: any }>, me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listing_id: string, metadata?: any | null, createdAt: any }> } | null };

export type GetJobListingsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetJobListingsQuery = { __typename?: 'Query', jobListings: Array<{ __typename?: 'JobListing', id: string, name: string, description_raw: string, createdAt: any, external_application_url?: string | null, keywords: Array<string>, languages: Array<string>, location: string, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, company_id: string, categories: Array<{ __typename?: 'CategoryOnJobListing', category_id: string }>, company: { __typename?: 'Company', id: string, name: string, about_raw: string, email: any, brand_image_url?: any | null } }> };

export type GetAllUsersWithSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersWithSubscriptionsQuery = { __typename?: 'Query', getAllUsersWithSubscriptions: Array<{ __typename?: 'User', id: string, name: string, email: any }> };

export type GetSubscriptionsJobListingsForUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetSubscriptionsJobListingsForUserQuery = { __typename?: 'Query', getSubscriptionsJobListingsForUser: { __typename?: 'GetSubscriptionsJobListingsResponse', entries: Array<{ __typename?: 'SubscriptionJobListingsResponse', listingIds: Array<string>, subscriptionId: string }> } };

export type UnSaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type UnSaveJobListingMutation = { __typename?: 'Mutation', unSaveJobListing?: boolean | null };

export type SaveJobListingMutationVariables = Exact<{
  jobListingId: Scalars['String']['input'];
}>;


export type SaveJobListingMutation = { __typename?: 'Mutation', saveJobListing?: { __typename?: 'SavedListing', id: string, listing_id: string, userId: string, metadata?: any | null, createdAt: any } | null };

export type GetCompanyListingsCountQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyListingsCountQueryQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, company: { __typename?: 'Company', _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetCompanyWithListingsQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyWithListingsQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, brand_image_url?: any | null, banner_image_url?: any | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, isSaved?: boolean | null, parametersTyped?: { __typename?: 'JobListingParameters', remoteInterview?: boolean | null, internship?: boolean | null, furlough: FurloughPeriod, from?: JobListingFrom | null, salary?: { __typename: 'FixedJobListingSalary', value: number, currency: any } | { __typename: 'RangeJobListingSalary', min: number, max: number, currency: any } | null } | null }> } | null };

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type GetCompanyQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyQueryQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string, about_raw: string, career_description_raw: string, benefits: Array<string>, company_values: Array<string>, work_environment: Array<string>, hiring_process: Array<string>, createdAt: any, updatedAt: any, metadata?: any | null, email: any, brand_image_url?: any | null, banner_image_url?: any | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> | null, listings: Array<{ __typename?: 'JobListing', id: string, name: string, location: string, languages: Array<string>, createdAt: any, description_raw: string, keywords: Array<string>, level?: JobListingLevel | null, parameters: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null }>, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string, coordinates?: { __typename?: 'Coordinates', latitude?: any | null, longitude?: any | null } | null }> } | null, local_info?: { __typename?: 'CompanyLocalInfo', since?: any | null, employeeCount?: number | null, locations: Array<string> } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', founded?: any | null, employeeCount?: number | null, headquarters: string, locations: Array<string> } | null } | null };

export type FileUploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type FileUploadMutation = { __typename?: 'Mutation', fileUpload: boolean };

export type GetJobListingQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetJobListingQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, company_id: string, createdAt: any, updatedAt: any, company: { __typename?: 'Company', id: string, email: any, name: string, brand_image_url?: any | null, banner_image_url?: any | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', employeeCount?: number | null, headquarters: string, locations: Array<string>, founded?: any | null } | null, _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetCompanyJobQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyJobQuery = { __typename?: 'Query', getJobListing?: { __typename?: 'JobListing', id: string, name: string, description_raw: string, external_application_url?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, location: string, languages: Array<string>, parameters: any, keywords: Array<string>, company_id: string, createdAt: any, updatedAt: any, company: { __typename?: 'Company', id: string, name: string, _count?: { __typename?: 'CompanyCount', listings: number } | null } } | null };

export type GetAllCategoriesQueryQueryVariables = Exact<{
  input: GetCategoriesDetailsInput;
}>;


export type GetAllCategoriesQueryQuery = { __typename?: 'Query', getCompanyCategoriesDetails: Array<{ __typename?: 'CategoryDetailsResponse', id: string, name: string, description: string, totalJobListings: number }> };

export type GetAllCompaniesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQueryQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string, email: any, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null }> };

export type GetAllEmploymentTypesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmploymentTypesQueryQuery = { __typename?: 'Query', getAllEmploymentTypes: Array<{ __typename?: 'GetEmploymentTypeDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLevelsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLevelsQueryQuery = { __typename?: 'Query', getJobListingLevelsDetails: Array<{ __typename?: 'GetJobListingLevelsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllKeywordsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllKeywordsQueryQuery = { __typename?: 'Query', getAllKeywords: Array<{ __typename?: 'GetKeywordsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLanguagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQueryQuery = { __typename?: 'Query', getAllLanguages: Array<{ __typename?: 'GetLanguagesDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllLocationsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLocationsQueryQuery = { __typename?: 'Query', getAllLocations: Array<{ __typename?: 'GetLocationsDetailsResponse', name?: string | null, totalJobsCount: number }> };

export type GetAllJobCategoriesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobCategoriesQueryQuery = { __typename?: 'Query', jobListingCategories: Array<{ __typename?: 'JobListingCategory', id: string, name: string, description: string, _count?: { __typename?: 'JobListingCategoryCount', listings: number } | null }> };

export type GetJobListingsWithFilterQueryVariables = Exact<{
  filter: SearchJobListingsInput;
  categories?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetJobListingsWithFilterQuery = { __typename?: 'Query', getMostRelevantCompanies: Array<{ __typename?: 'Company', id: string, name: string, email: any, _count?: { __typename?: 'CompanyCount', listings: number, categories: number } | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string }> | null, contacts?: { __typename?: 'CompanyContacts', name: string, company_bulstat: string, email: any, phone_number: string, address: string, website_url: any, facebook_url: any, twitter_url: any, linkedin_url: any, youtube_url: any, contacts: Array<{ __typename?: 'CompanyContact', city: string, address: string, phone_number: string }> } | null }>, companies: Array<{ __typename?: 'Company', id: string, name: string }>, searchJobListings: Array<{ __typename?: 'JobListing', id: string, name: string, company_id: string, createdAt: any, type?: JobListingEmploymentType | null, work_from?: WorkFromHome | null, parameters: any, keywords: Array<string>, level?: JobListingLevel | null, isSaved?: boolean | null, languages: Array<string>, location: string, description_raw: string, external_application_url?: string | null, parametersTyped?: { __typename?: 'JobListingParameters', from?: JobListingFrom | null, furlough: FurloughPeriod, internship?: boolean | null, remoteInterview?: boolean | null, salary?: { __typename: 'FixedJobListingSalary', value: number, currency: any } | { __typename: 'RangeJobListingSalary', min: number, max: number, currency: any } | null } | null, categories: Array<{ __typename?: 'CategoryOnJobListing', category_id: string }>, company: { __typename?: 'Company', id: string, name: string, email: any, brand_image_url?: any | null, _count?: { __typename?: 'CompanyCount', listings: number } | null, companyCategories?: Array<{ __typename?: 'CompanyCategory', id: string, name: string }> | null, local_info?: { __typename?: 'CompanyLocalInfo', employeeCount?: number | null, locations: Array<string>, since?: any | null } | null, worldwide_info?: { __typename?: 'CompanyWorldwideInfo', locations: Array<string>, employeeCount?: number | null, founded?: any | null, headquarters: string } | null } }> };

export type DeleteAllCvsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllCvsMutation = { __typename?: 'Mutation', deleteAllCoverLetterTemplates: boolean };

export type MyCvsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCvsQueryQuery = { __typename?: 'Query', getMyCoverLetterTemplates: Array<{ __typename?: 'UserCoverLetterTemplate', id: string, name: string, letter: string, metadata?: any | null, createdAt: any, user_id: string }> };

export type CreateCvTemplateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  template: Scalars['String']['input'];
}>;


export type CreateCvTemplateMutation = { __typename?: 'Mutation', createUserCoverLetterTemplate?: { __typename?: 'UserCoverLetterTemplate', id: string, user_id: string, name: string, letter: string, createdAt: any, metadata?: any | null } | null };

export type SignInWithEmailCodeMutationVariables = Exact<{
  code: Scalars['Int']['input'];
  email: Scalars['EmailAddress']['input'];
  identifier: Scalars['String']['input'];
}>;


export type SignInWithEmailCodeMutation = { __typename?: 'Mutation', signInWithEmailCode?: { __typename?: 'User', id: string, first_name: string, last_name: string, name: string, metadata?: any | null, image?: string | null, email: any } | null };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', getAvailableCountries: Array<string> };

export type CompanySignUpMutationVariables = Exact<{
  input: CompanySignUpInput;
}>;


export type CompanySignUpMutation = { __typename?: 'Mutation', companySignUp?: { __typename?: 'Company', id: string, email: any, name: string, metadata?: any | null } | null };

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

export type MeQueryGsByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryGsByIdQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string } | null };

export type GetSubscriptionByIdQueryQueryVariables = Exact<{
  subscriptionId: Scalars['String']['input'];
  meId: Scalars['String']['input'];
}>;


export type GetSubscriptionByIdQueryQuery = { __typename?: 'Query', jobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, company_id?: string | null, user_id?: string | null, user_email?: string | null, metadata?: any | null, notification_frequency: JobListingSubscriptionNotificationFrequency, description: string, location?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, languages: Array<string>, parameters: any, keywords: Array<string>, createdAt: any, updatedAt: any, user?: { __typename?: 'User', id: string, name: string, email: any } | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string }>, job_categories: Array<{ __typename?: 'JobListingCategory', id: string, name: string }>, company?: { __typename?: 'Company', id: string, name: string } | null } | null };

export type DeleteAllSubscriptionsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllSubscriptionsMutation = { __typename?: 'Mutation', deleteAllSubscriptions: { __typename?: 'DeleteAllSubscriptionsResponse', deleted_count: number, success: boolean } };

export type GetMySubscriptionsQueryVariables = Exact<{
  input: GetSubscriptionsInput;
}>;


export type GetMySubscriptionsQuery = { __typename?: 'Query', mySubscriptions: Array<{ __typename?: 'JobListingSubscription', id: string, company_id?: string | null, user_id?: string | null, metadata?: any | null, notification_frequency: JobListingSubscriptionNotificationFrequency, location?: string | null, level?: JobListingLevel | null, work_from?: WorkFromHome | null, type?: JobListingEmploymentType | null, languages: Array<string>, parameters: any, keywords: Array<string>, createdAt: any, updatedAt: any, description: string, company?: { __typename?: 'Company', id: string, name: string, email: any } | null, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }> }> };

export type MeQuerySlimQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuerySlimQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: any } | null };

export type GetSubscriptionByIdQueryVariables = Exact<{
  subscriptionId: Scalars['String']['input'];
}>;


export type GetSubscriptionByIdQuery = { __typename?: 'Query', jobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, company_id?: string | null, createdAt: any, metadata?: any | null, company?: { __typename?: 'Company', id: string, name: string } | null } | null };

export type ConfirmSubscriptionMutationVariables = Exact<{
  key: Scalars['String']['input'];
  subscriptionId: Scalars['String']['input'];
}>;


export type ConfirmSubscriptionMutation = { __typename?: 'Mutation', confirmJobListingSubscription?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, createdAt: any, metadata?: any | null } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, createdAt: any, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, first_name: string, last_name: string, email: any, image?: string | null, metadata?: any | null, cookieConsent?: boolean | null, cookiePreferences?: { __typename?: 'UserCookiePreferences', functionality: boolean, marketing: boolean, necessary: boolean, statistics: boolean } | null, saved_listings: Array<{ __typename?: 'SavedListing', id: string, listing_id: string, metadata?: any | null, createdAt: any }> } | null };

export type GoogleLoginQueryQueryVariables = Exact<{
  redirectUrl: Scalars['String']['input'];
}>;


export type GoogleLoginQueryQuery = { __typename?: 'Query', googleLoginUrl: string };

export type SubscribeToCompanyListingsMutationVariables = Exact<{
  input: SubscribeToJobListingsInput;
}>;


export type SubscribeToCompanyListingsMutation = { __typename?: 'Mutation', subscribeToCompanyListings?: { __typename?: 'JobListingSubscription', id: string, user_id?: string | null, metadata?: any | null, createdAt: any, updatedAt: any, work_from?: WorkFromHome | null, level?: JobListingLevel | null, type?: JobListingEmploymentType | null, location?: string | null, languages: Array<string>, parameters: any, keywords: Array<string>, description: string, categories: Array<{ __typename?: 'CompanyCategory', id: string, name: string, description: string }>, job_categories: Array<{ __typename?: 'JobListingCategory', id: string, name: string }> } | null };

export type UpdateCookiePreferencesMutationVariables = Exact<{
  preferences: UpdateCookiePreferencesInput;
}>;


export type UpdateCookiePreferencesMutation = { __typename?: 'Mutation', updateCookiePreferences: boolean };

export type AcceptAllCookiesMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptAllCookiesMutation = { __typename?: 'Mutation', acceptAllCookies: boolean };

export type DeclineAllCookiesMutationVariables = Exact<{ [key: string]: never; }>;


export type DeclineAllCookiesMutation = { __typename?: 'Mutation', declineAllCookies: boolean };


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
    "types": [
      {
        "kind": "INTERFACE",
        "name": "JobListingSalary",
        "possibleTypes": [
          {
            "name": "FixedJobListingSalary"
          },
          {
            "name": "RangeJobListingSalary"
          }
        ]
      }
    ]
  }
};

      export default result;
    