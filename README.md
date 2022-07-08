# Event Manager API
____
## Technical description

This app was created using [Node](https://nodejs.org/en/) + [express](https://expressjs.com/pt-br/), [TypeORM](https://typeorm.io/), and [MySQL](https://www.mysql.com/) database as main technologies.
Autentication using [JSON Web Token](jwt.io) with [passport](http://www.passportjs.org/packages/passport-jwt/) to create a token and validate it in every request.
Request body validation with [Joi](https://joi.dev/).

## App description

This app has the intuite to manage events and connect users to events in companies or universities.

## Usage

### Endpoint - /user

#### POST /user

**Request body**

```
{
  "email": "email@gmail.com.br",
  "password": "123456",
  "role": "user"
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

### Endpoint - /event

#### POST /events

**Request body**

```
{
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
}
```


**Response body**

```
{
  "id": 1,
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
}
```


#### GET /events

**Response body**

```
[
 {
  "id": 1,
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
  }, 
  {...}
]
```


#### GET /events/id

**Response body**

```
 {
  "id": 1,
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
 }

```


#### PUT /events/id

**Request body**

```
 {
  "name": "A Great Event Name Changed",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 321,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
 }

```

**Response body**

```
 {
  "id": 1,
  "name": "A Great Event Name Changed",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 321,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
 }

```


#### DELETE /events/id

**Response body**

```
{
    "raw": [],
    "affected": 1
}
```


### Endpoint - /tickets

#### POST /tickets

**Request body**


```
{
   "eventId": 1
}
```

**Response body**

```
[
 {
  "id": 1,
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
  }, 
  {...}
]
```

#### GET /tickets

**Response body**

```
[
 {
  "id": 1,
  "name": "A Great Event Name",
  "description": "This is a great event...",
  "place": "Event Place, 123 - City/UF - Country",
  "image": "image url",
  "price": 123,
  "date": "2020/12/01",
  "category": "BUSINESS" or "UNIVERSITY"
  }, 
  {...}
]
```

#### DELETE /tickets/1

**Response body**

```
[
    {
        "id": 2,
        "name": "A Great Event Name Changed",
        "description": "This is a great event...",
        "place": "Event Place, 123 - City/UF - Country",
        "date": "2020-12-01",
        "category": "UNIVERSITY",
        "image": "image url",
        "price": 321
    },
    {...}
]
```
