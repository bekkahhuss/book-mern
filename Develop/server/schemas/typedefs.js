// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID 
    username: String 
    email: String 
    bookCount: Int
    savedBooks: [Book]
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
    bookId: String
    authors: [String]
    description: String
    title: String
    media: BookMedia
  }

  input BookMedia {
    format: MediaFormat!
    link: String!
  }

  enum MediaFormat {
    IMAGE
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, authors: [String], description: String, title: String): User
  }
`;


// export the typeDefs
module.exports = typeDefs;