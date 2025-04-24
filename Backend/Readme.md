# User Registration Endpoint Documentation

## POST `/users/register`

Registers a new user in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 8 chars, required)"
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword123"
}
```

### Response

- **201 Created**  
  Registration successful. Returns a JWT token and user object.
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- **400 Bad Request**  
  Validation failed. Returns an array of error messages.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

### Notes

- `firstname`, `email`, and `password` are required fields.
- `lastname` is optional but must be at least 3 characters if provided.
- Password must be at least 8 characters.
- Email must be unique and valid.

---