# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "test",
  "password": "password",
  "name": "testing"
}
```

Response Body Success :

```json
{
  "username": "test",
  "name": "testing"
}
```

Response Body Error :

```json
{
  "errors": "username sudah pernah dipakai"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "test",
  "password": "password"
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
  "errors": "username atau password salah"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "testing", //optional
  "password": "new password" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "testing"
  }
}
```

Response Body Error :

```json
{
  "errors": "nama tidak boleh lebih dari 20"
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
    "username": "test",
    "name": "testing"
  }
}
```

Response Body Error :

```json
{
  "errors": "Error"
}
```

## Logout User API

Endpoint : Delete /api/users/logout

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "Error"
}
```
