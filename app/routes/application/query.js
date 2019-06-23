import gql from 'graphql-tag';

export const skills = gql`
  query skills {
    skills {
      id
      name
    }
  }
`;
