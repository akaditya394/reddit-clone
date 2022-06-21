import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    id
    topic
    created_at
  }
`;
