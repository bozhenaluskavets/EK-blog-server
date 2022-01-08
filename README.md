# Backend details and setup

Backend is implemented using:

1. json-server https://www.npmjs.com/package/json-server
2. json-server-auth https://www.npmjs.com/package/json-server-auth

Backend is deployed on heroku https://www.heroku.com/home
But you can run it locally as well, just run:

1. `npm install` to install dependencies
2. `npm start` to start server

Localy server is available under http://localhost:3040/
Server on heroku: https://ekreative-json-server.herokuapp.com/

# Requirements for React Test Project

## Prerequirements

Successfully complete react course on udemy (or any other react course).

## Requirements

Create a react application where users can write/read posts and comment them.
Also users should see recent announcements.
UI should be nice and scalable, so users with big and small screen can enjoy your UI.

### Detailed technical requirements

#### Main concepts

All users should be able to see all articles, but only authorized users can write and comment articles.
Users should be able to edit/delete their own articles and comments.

All users should be able to see all announcements.
Only authorizes users can write/edit/delete announcements.

#### User authorization

User should be able to access web application main page as a incognito (without authentication)
But user should be authorized in order to:

1. Create/Edit/Delete posts
2. Create/Edit/Delete post comments
3. Create/Edit/Delete announcements
4. Edit User Profile

Please use following endpoints for authorization:

Register new user

```
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Olivier",
  "lastname": "Monge",
  "age": 32,
  "avatar": "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
}
```

All fields are mandatory.
On user registration - user should enter all necessary fields:

- email
- password with confirmation
- first and last name
- age
- avatar (user should select avatar from predefined list. Pelase define avatar list by yourself)

#### User login/logout

User should be able to login/logout
On a right corner - "Login" link should be present it user is not logged in.
if user is logged in - two links should be present on a top right corner:

- <user> link whick contains user first and lat name and leads to user page
- Logout - link with log user out.

user page should contain user data in read only mode.

Login request:

```
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

Login and Register response contain JWT access token which will be expired in one hour.
Token should be stored in local storage for further usage.

All generated users password is "bestPassw0rd".

Each request to server should contain Authorization header in order to provide ability to load data.
After login each request shold cointan following header:

Authorization: Bearer <user access token>

user acess token is provided on login, for instance:

```
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

will provide response:

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXIyQG1haWwuY29tIiwiaWF0IjoxNjM2OTA4MDcxLCJleHAiOjE2MzY5MTE2NzEsInN1YiI6IjEifQ.RsLgwvCOgaV0Wow7p-6-5ZimGZNpWR-Bh8jCOrnHRRI",
    "user": {
        "email": "olivier2@mail.com",
        "firstname": "Olivier",
        "lastname": "Monge",
        "age": 32,
        "id": 1
    }
}
```

On logout simply clean token from local storage. That should be indication whether user is looged in or not.
User data should be stored in local storage as well (we will need it).

#### Posts

##### Create Post

```
POST /664/posts
  {
    "title": "Post Title",
    "body": "Post Body",
    "userId": 1,
    "createdAt": "2021-09-29T14:01:49.563Z",
    "updatedAt": "2021-09-29T14:01:49.563Z"
  }
```

Here userId - represents logged in user Id.
Only authorized users can create posts.

##### Get Posts

```
GET /664/posts
```

To paginate posts please use following params:
\_page=<number>
\_limit=<number>

example /posts?\_page=7&\_limit=20 - which represents 7th page with up to 20 posts.

##### Update Post

```
PATCH /664/posts/2

  {
    "title": "Post Title Updated",
    "body": "Post Body Updated",
    "userId": 1,
    "createdAt": "2021-09-29T14:01:49.563Z",
    "updatedAt": "2021-09-29T14:01:49.563Z"
  }
```

where 2 - is post id.
user should be able to edit only its own posts

##### Delete Post

```
DELETE /664/posts/2
```

where 2 - is post id.
user should be able to delete only its own posts

##### Get Posts with related users

by default when we receive list of posts - it contain only userId,
for instance:

{
"id": 98,
"title": "Voluptas tenetur molestiae voluptatem ut iste inventore.",
"body": "some text",
"userId": 11,
"createdAt": "2021-10-01T18:50:20.818Z",
"updatedAt": "2021-11-14T19:50:20.818Z"
},

but we whould need to get posts with a user object. to do it - please use following url:

```
GET /posts?_expand=user
```

in this case you receive:

{
"id": 98,
"title": "Voluptas tenetur molestiae voluptatem ut iste inventore.",
"body": "some text",
"userId": 11,
"createdAt": "2021-10-01T18:50:20.818Z",
"updatedAt": "2021-11-14T19:50:20.818Z",
"user": {
"id": 11,
"email": "melba.purdy40@gmail.com",
"password": "$2a$10$PjxK1XEgkR/1htAcHR.n3eyhMsxF7ohTerKvpzjrMGiXELE9O.GnO",
"firstname": "Melba",
"lastname": "Purdy",
"age": 18
}
},

for more informartion please refer json-server documentation

#### Post Comments

##### Get Post Comments

```
GET /comments?postId=2&_sort=createdAt&_order=asc
```

where 2 is a post id.
all comments should be available for all users, even not authenticated.
\_sort param specifies sorting by field. createdAt as example
\_order param specifies sorting order: "asc" or "desc"

##### Create Post Comment

```
POST /664/comments
{
        "body": "some comment",
        "createdAt": "2021-09-20T14:01:49.563Z",
        "updatedAt": "2021-09-29T14:01:49.563Z",
        "postId": 1
}
```

##### Update Post Comment

```
PATCH /664/comments/2
    {
        "body": "some comment3.2",
        "updatedAt": "2021-09-29T14:01:49.563Z"
    }
```

User can update only its own comments.
User shold be authentiacted in order to udpate comment.

Please pay attention that comment is updated by id specified in URL + on update we specify only fields we want to update.

##### Delete Post Comment

```
DELETE /664/comments/2
```

#### Announcements

#### Get Announcements

```
GET /664/announcements?_sort=created&At_order=desc&limit=10
```

here we load last 10 announcements sorted by date

##### Create Announcement

```
POST /664/announcements
    {
        "title": "some announcement title",
        "body": "some announcement message ",
        "userId": 1,
        "createdAt": "2021-09-29T14:01:49.563Z",
        "updatedAt": "2021-09-29T14:01:49.563Z"
    }
```

where 1 - is a authenticated user id.
User should be authenticated in order to create announcement

##### Update Announcement

```
POST /664/announcements/2
    {
        "title": "updated announcement title",
        "body": "updated announcement message ",
        "updatedAt": "2021-09-29T14:01:49.563Z"
    }
```

User should be authenticated in order to update announcement.
User can update only its own announcement.

##### Delete Announcement

```
DELETE /664/announcements/2
```

User should be authenticated in order to update announcement.
User can update only its own announcement.
