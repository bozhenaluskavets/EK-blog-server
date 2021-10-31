# Backend details and setup

Backend is implemented using:

1. json-server https://www.npmjs.com/package/json-server
2. json-server-auth https://www.npmjs.com/package/json-server-auth

Backend is deployed on heroku https://www.heroku.com/home
But you can run it locally as well, just run:

1. `npm install` to install dependencies
2. `npm start` to start server

Localy server is available under http://localhost:3000/
Server on heroku: http://zapier-json-server.herokuapp.com/

:

# Requirements for React Test Project

## Prerequirements

Successfully complete react course on udemy (or any other react course).

## Requirements

Create a react application where users can write/read articles and comment them.
Also users should see recent announcements.
UI should be nice and scalable, so users with big and small screen can enjoy your UI.

### Detailed technical requirements

#### Main concepts

All users should be able to see all articles, but only authorized users can write and comment articles.
Users should be able to edit/delete their own articles and comments.

All users should be able to see all announcements.
Only authorizes users can write/edit/delete announcements.

#### User authorization

User should be able to access web application main page as a incognito (without authorization)
But user should be authorized in order to:

1. Create/Edit/Delete articles
2. Create/Edit/Delete announcements
3. Edit User Profile

Please use following endpoints for authorization:

```

```
