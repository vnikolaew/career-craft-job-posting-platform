import { gql } from "@/__generated__";

export const GET_COMPANY_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetCompanyWithListingsQuery($id: String!) {
        getCompany(where: {id: $id}) {
            id
            name
            brand_image_url
            banner_image_url
            listings {
                id
                name
                location
                languages
                createdAt
                description_raw
                keywords
                level
                parameters
                type
                work_from
                isSaved @client
            }
        }
    }
`);

