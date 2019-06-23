import gql from 'graphql-tag';

export const user = gql`
  query user($id: String!) {
    user(id: $id) {
      name
      email
      avatarUrl
      skills {
        id
        name
      }
    }
  }
`;
