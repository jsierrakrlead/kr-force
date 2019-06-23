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

export const levels = gql`
  query levels {
    levels {
      id
      name
      description
      weight
    }
  }
`;

export const searchSkillsByName = gql`
  query searchSkills($name: String) {
    searchSkills(filter:{
      nameContains: $name
    }) {
      id
      name
    }
  }
`;
