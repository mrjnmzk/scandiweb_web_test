import { gql } from "@apollo/client";

export const CATEGORIES = gql`
    {
        categories {
            name
        }
    }
`;

