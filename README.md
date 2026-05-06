# basic-to-deploy

A simple Node.js backend project using Express and dotenv.

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

## Basic Routes

- `GET /` - returns a plain text greeting
- `GET /about` - returns JSON with a short description
- `GET /users` - returns a sample list of users
- `GET /users/:id` - returns a user object for the given ID
- `POST /users` - accepts JSON body and returns the created user

## Notes

- Entry point: `index.js`
- Uses `dotenv` for environment variable support
- Add any environment variables to a `.env` file
- To test `POST /users`, use a JSON body like `{ "name": "Charlie" }`
