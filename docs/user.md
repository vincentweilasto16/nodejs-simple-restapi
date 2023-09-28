# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "budi123",
  "password": "budibudi",
  "name": "Budi Mulyano"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "budi123",
    "name": "Budi Mulyano"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "budi123",
  "password": "budibudi"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "budi123",
    "name": "Budi Wicaksono"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
