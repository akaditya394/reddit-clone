import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id: $post_id, upvote: $upvote, username: $username) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $title: String!
    $subreddit_id: ID!
    $image: String!
    $username: String!
  ) {
    insertPost(
      body: $body
      title: $title
      subreddit_id: $subreddit_id
      image: $image
      username: $username
    ) {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
