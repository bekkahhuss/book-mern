// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID 
    username: String 
    email: String 
    bookCount: Int
    savedBooks: [String]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String 
    title: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    me: User
  }

  
  input BookContent {
    authors: [String!]
    description: String! 
    title: String!
    bookId: ID
    media: BookMedia
  }

  input BookMedia {
    link: String!
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(content: BookContent): User
  }
`;


// export the typeDefs
module.exports = typeDefs;