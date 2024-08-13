/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation GenerateEmailCode($email: EmailAddress!) {\n        generateSignUpEmailCode(email: $email) {\n            code\n            error\n            identifier\n            expires\n            success\n        }\n    }\n": types.GenerateEmailCodeDocument,
    "\n    mutation SignUpWithEmailCode($code: Int!, $email: EmailAddress!, $firstName: String!, $lastName: String!, $identifier: String!) {\n        signUpWithEmailCode(code: $code, email: $email, firstName: $firstName, lastName: $lastName, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n": types.SignUpWithEmailCodeDocument,
    "\n    mutation SignOut {\n        signOut\n    }\n": types.SignOutDocument,
    "\n    mutation SignIn($signInModel: UserSignInInput!) {\n        signIn(signInModel: $signInModel) {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            createdAt\n        }\n    }\n": types.SignInDocument,
    "\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n        }\n    }\n": types.MeQueryDocument,
    "\n    query GoogleLoginQuery($redirectUrl: String!) {\n        googleLoginUrl(redirect_url: $redirectUrl)\n    }\n": types.GoogleLoginQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation GenerateEmailCode($email: EmailAddress!) {\n        generateSignUpEmailCode(email: $email) {\n            code\n            error\n            identifier\n            expires\n            success\n        }\n    }\n"): (typeof documents)["\n    mutation GenerateEmailCode($email: EmailAddress!) {\n        generateSignUpEmailCode(email: $email) {\n            code\n            error\n            identifier\n            expires\n            success\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignUpWithEmailCode($code: Int!, $email: EmailAddress!, $firstName: String!, $lastName: String!, $identifier: String!) {\n        signUpWithEmailCode(code: $code, email: $email, firstName: $firstName, lastName: $lastName, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n"): (typeof documents)["\n    mutation SignUpWithEmailCode($code: Int!, $email: EmailAddress!, $firstName: String!, $lastName: String!, $identifier: String!) {\n        signUpWithEmailCode(code: $code, email: $email, firstName: $firstName, lastName: $lastName, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignOut {\n        signOut\n    }\n"): (typeof documents)["\n    mutation SignOut {\n        signOut\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignIn($signInModel: UserSignInInput!) {\n        signIn(signInModel: $signInModel) {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    mutation SignIn($signInModel: UserSignInInput!) {\n        signIn(signInModel: $signInModel) {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n        }\n    }\n"): (typeof documents)["\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GoogleLoginQuery($redirectUrl: String!) {\n        googleLoginUrl(redirect_url: $redirectUrl)\n    }\n"): (typeof documents)["\n    query GoogleLoginQuery($redirectUrl: String!) {\n        googleLoginUrl(redirect_url: $redirectUrl)\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;