# Bekkahs-Books

## Description
This app was built using the MERN stack and the Google Books API to allow an authenticated user to search for a book and add/remove the book from their list. The user interacts with a front-end UI build with React while their data is stored in a MongoDB database. This application runs on a Node.js/Express.js server and API. 

The project also uses Apollo Server to use GraphQL queries and mutations to fetch and modify data. The authentication middleware also interacts with GraphQL API. 

## Installation
- `git clone git@github.com:bekkahhuss/book-mern.git`
- Open the cloned folder in Visual Studio
- Right click the /client folder and select Open in Integrated Terminal
- Run `npm start` in the Integrated Terminal. This will Run the front-end app.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- Right click the /server folder and select Open in Integrated Terminal
- Run `npm start` in the Integrated Terminal. This will Run the back-end app and provide access to Apollo Server.
- Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Functionality
- Ability to search for books leveraging the Google Books API
- Ability to Login/Sign-up using an email and password
- Ability to search for books and add them to a list
- Ability to remove books from the list

