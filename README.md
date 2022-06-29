# Event Manager API
____
## Technical description

This app was created using [Node](https://nodejs.org/en/) + [express](https://expressjs.com/pt-br/), [TypeORM](https://typeorm.io/), and [MySQL](https://www.mysql.com/) database as main technologies.
Autentication using [JSON Web Token](jwt.io) with [passport](http://www.passportjs.org/packages/passport-jwt/) to create a token and validate it in every request.
Request body validation with [Joi](https://joi.dev/).

## App description

This app has the intuite to manage events and connect users to events in companies or universities.

## Usage


#### POST /user

**Request body**

```
{
  "email": "email@gmail.com.br",
  "password": "123456"
}
```

**Response body**

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```


#### POST /auth

**Request body**

```
{
  "email": "email@gmail.com.br",
  "password": "123456"
}
```

**Response body**

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
