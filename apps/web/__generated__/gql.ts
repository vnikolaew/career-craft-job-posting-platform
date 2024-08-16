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
    "\n    query GetTopJobCategories($input: GetTopListingCategoriesInput!) {\n        getTopListingCategories(input: $input) {\n            id\n            name\n            description\n            _count {\n                listings\n            }\n        }\n    }\n": types.GetTopJobCategoriesDocument,
    "\n    query GetTopEmployers($input: GetTopCompaniesInput!) {\n        getTopCompanies(input: $input) {\n            id\n            name\n            banner_image_url\n            brand_image_url\n            listingsCount\n            _count {\n                listings\n            }\n        }\n    }\n": types.GetTopEmployersDocument,
    "\n    mutation UnSaveJobListing($jobListingId: String!) {\n        unSaveJobListing(listingId: $jobListingId)\n    }\n": types.UnSaveJobListingDocument,
    "\n    mutation SaveJobListing($jobListingId: String!) {\n        saveJobListing(listingId: $jobListingId) {\n            id\n            listing_id\n            userId\n            metadata\n            createdAt\n        }\n    }\n": types.SaveJobListingDocument,
    "\n    query GetCompanyWithListingsQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            brand_image_url\n            banner_image_url\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n                isSaved @client\n            }\n        }\n    }\n": types.GetCompanyWithListingsQueryDocument,
    "\n    query GetAllCompanies {\n        companies {\n            id\n            name\n        }\n    }\n": types.GetAllCompaniesDocument,
    "\n    query GetCompanyQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            about_raw\n            career_description_raw\n            benefits\n            company_values\n            work_environment\n            hiring_process\n            createdAt\n            updatedAt\n            metadata\n            email\n            brand_image_url\n            banner_image_url\n            companyCategories {\n                id\n                name\n                description\n            }\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n            }\n            contacts {\n                name\n                contacts {\n                    city\n                    coordinates {\n                        latitude\n                        longitude\n                    }\n                    address\n                    phone_number\n                }\n                company_bulstat\n                email\n                phone_number\n                address\n                website_url\n                facebook_url\n                twitter_url\n                linkedin_url\n                youtube_url\n            }\n            local_info {\n                since\n                employeeCount\n                locations\n            }\n            worldwide_info {\n                founded\n                employeeCount\n                headquarters\n                locations\n            }\n        }\n    }\n": types.GetCompanyQueryDocument,
    "\n    query GetCompanyJob($id: String!) {\n        getJobListing(where: { id: $id }) {\n            id\n            name\n            description_raw\n            external_application_url\n            level\n            work_from\n            type\n            location\n            languages\n            parameters\n            keywords\n            company_id    \n            createdAt\n            updatedAt\n        }\n    }\n": types.GetCompanyJobDocument,
    "\n    mutation SignInWithEmailCode($code: Int!, $email: EmailAddress!, $identifier: String!) {\n        signInWithEmailCode(code: $code, email: $email, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n": types.SignInWithEmailCodeDocument,
    "\n    mutation GenerateEmailCode($email: EmailAddress!) {\n        generateSignUpEmailCode(email: $email) {\n            code\n            error\n            identifier\n            expires\n            success\n        }\n    }\n": types.GenerateEmailCodeDocument,
    "\n    mutation SignUpWithEmailCode($code: Int!, $email: EmailAddress!, $firstName: String!, $lastName: String!, $identifier: String!) {\n        signUpWithEmailCode(code: $code, email: $email, firstName: $firstName, lastName: $lastName, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n": types.SignUpWithEmailCodeDocument,
    "\n    mutation SignOut {\n        signOut\n    }\n": types.SignOutDocument,
    "\n    mutation SignIn($signInModel: UserSignInInput!) {\n        signIn(signInModel: $signInModel) {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            createdAt\n        }\n    }\n": types.SignInDocument,
    "\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            saved_listings {\n                id\n                listing_id\n                metadata\n                createdAt\n            }\n        }\n    }\n": types.MeQueryDocument,
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
export function gql(source: "\n    query GetTopJobCategories($input: GetTopListingCategoriesInput!) {\n        getTopListingCategories(input: $input) {\n            id\n            name\n            description\n            _count {\n                listings\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetTopJobCategories($input: GetTopListingCategoriesInput!) {\n        getTopListingCategories(input: $input) {\n            id\n            name\n            description\n            _count {\n                listings\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetTopEmployers($input: GetTopCompaniesInput!) {\n        getTopCompanies(input: $input) {\n            id\n            name\n            banner_image_url\n            brand_image_url\n            listingsCount\n            _count {\n                listings\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetTopEmployers($input: GetTopCompaniesInput!) {\n        getTopCompanies(input: $input) {\n            id\n            name\n            banner_image_url\n            brand_image_url\n            listingsCount\n            _count {\n                listings\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UnSaveJobListing($jobListingId: String!) {\n        unSaveJobListing(listingId: $jobListingId)\n    }\n"): (typeof documents)["\n    mutation UnSaveJobListing($jobListingId: String!) {\n        unSaveJobListing(listingId: $jobListingId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SaveJobListing($jobListingId: String!) {\n        saveJobListing(listingId: $jobListingId) {\n            id\n            listing_id\n            userId\n            metadata\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    mutation SaveJobListing($jobListingId: String!) {\n        saveJobListing(listingId: $jobListingId) {\n            id\n            listing_id\n            userId\n            metadata\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCompanyWithListingsQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            brand_image_url\n            banner_image_url\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n                isSaved @client\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCompanyWithListingsQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            brand_image_url\n            banner_image_url\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n                isSaved @client\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllCompanies {\n        companies {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetAllCompanies {\n        companies {\n            id\n            name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCompanyQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            about_raw\n            career_description_raw\n            benefits\n            company_values\n            work_environment\n            hiring_process\n            createdAt\n            updatedAt\n            metadata\n            email\n            brand_image_url\n            banner_image_url\n            companyCategories {\n                id\n                name\n                description\n            }\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n            }\n            contacts {\n                name\n                contacts {\n                    city\n                    coordinates {\n                        latitude\n                        longitude\n                    }\n                    address\n                    phone_number\n                }\n                company_bulstat\n                email\n                phone_number\n                address\n                website_url\n                facebook_url\n                twitter_url\n                linkedin_url\n                youtube_url\n            }\n            local_info {\n                since\n                employeeCount\n                locations\n            }\n            worldwide_info {\n                founded\n                employeeCount\n                headquarters\n                locations\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCompanyQuery($id: String!) {\n        getCompany(where: {id: $id}) {\n            id\n            name\n            about_raw\n            career_description_raw\n            benefits\n            company_values\n            work_environment\n            hiring_process\n            createdAt\n            updatedAt\n            metadata\n            email\n            brand_image_url\n            banner_image_url\n            companyCategories {\n                id\n                name\n                description\n            }\n            listings {\n                id\n                name\n                location\n                languages\n                createdAt\n                description_raw\n                keywords\n                level\n                parameters\n                type\n                work_from\n            }\n            contacts {\n                name\n                contacts {\n                    city\n                    coordinates {\n                        latitude\n                        longitude\n                    }\n                    address\n                    phone_number\n                }\n                company_bulstat\n                email\n                phone_number\n                address\n                website_url\n                facebook_url\n                twitter_url\n                linkedin_url\n                youtube_url\n            }\n            local_info {\n                since\n                employeeCount\n                locations\n            }\n            worldwide_info {\n                founded\n                employeeCount\n                headquarters\n                locations\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCompanyJob($id: String!) {\n        getJobListing(where: { id: $id }) {\n            id\n            name\n            description_raw\n            external_application_url\n            level\n            work_from\n            type\n            location\n            languages\n            parameters\n            keywords\n            company_id    \n            createdAt\n            updatedAt\n        }\n    }\n"): (typeof documents)["\n    query GetCompanyJob($id: String!) {\n        getJobListing(where: { id: $id }) {\n            id\n            name\n            description_raw\n            external_application_url\n            level\n            work_from\n            type\n            location\n            languages\n            parameters\n            keywords\n            company_id    \n            createdAt\n            updatedAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignInWithEmailCode($code: Int!, $email: EmailAddress!, $identifier: String!) {\n        signInWithEmailCode(code: $code, email: $email, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n"): (typeof documents)["\n    mutation SignInWithEmailCode($code: Int!, $email: EmailAddress!, $identifier: String!) {\n        signInWithEmailCode(code: $code, email: $email, identifier: $identifier) {\n            id\n            first_name\n            last_name\n            name\n            metadata\n            image\n            email\n        }\n    }\n"];
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
export function gql(source: "\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            saved_listings {\n                id\n                listing_id\n                metadata\n                createdAt\n            }\n        }\n    }\n"): (typeof documents)["\n    query MeQuery {\n        me {\n            id\n            name\n            first_name\n            last_name\n            email\n            image\n            metadata\n            cookieConsent\n            cookiePreferences {\n                functionality\n                marketing\n                necessary\n                statistics\n            }\n            saved_listings {\n                id\n                listing_id\n                metadata\n                createdAt\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GoogleLoginQuery($redirectUrl: String!) {\n        googleLoginUrl(redirect_url: $redirectUrl)\n    }\n"): (typeof documents)["\n    query GoogleLoginQuery($redirectUrl: String!) {\n        googleLoginUrl(redirect_url: $redirectUrl)\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;