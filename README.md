# Clone the repository
```
git clone https://github.com/sjMalik/node-typescript-mongo.git
```

# Install Dependencies
```
cd node-typescript-mongo
npm install
```

# Build The application
```
npm run build
```

# Run The application
```
npm start
```

# Typescript, Node, Express & MongoDB Tutorial

## Introduction of Typescript

* A statically typed `superset` of JavaScript that compiles to plain JavaScript.
  * Any valid JavaScript, is valid Typescript
* TypeScript adds additional developer features to JavaScript that are stripped away at compile time

![](./TS_JS.png)

* TypeScript is a static type checker
  * Detects errors in code without running it
* TypeScript does NOT effect the runtime behavior of JavaScript
* To run TypeScript code, we have to convert it to JavaScript FIRST
* The TypeScript to JavaScript compilation process removes all type information
* TypeScript doesn’t provide any additional runtime libraries. There’s no additional TypeScript-specific framework to learn.

## Project Structure

```
node-typescript-mongo/
├── src/                              # Source code directory
|   ├── app.ts                        # Main application entry point
|   ├── server.ts                     # Express server setup
|   ├── routes.ts                     # Application routes definition
|   ├── mongo-connection.ts           # MongoDB connection setup
|   ├── logger.ts                     # Logging utility or configuration
|   ├── models/                       # Directory for data models
|   |   ├── user.ts                   # Data model for users
|   |   ├── todo.ts                   # Data model for todos
|   |   └── ...
|   ├── controllers/                  # Directory for route controllers
|   |   ├── auth/                     # Controllers for authentication routes
|   |   |   ├── index.ts              # Export point for authentication controllers
|   |   |   ├── login.ts              # Controller for login
|   |   |   ├── register.ts           # Controller for user registration
|   |   ├── user/                     # Controllers for user-related routes
|   |   |   ├── index.ts              # Export point for user controllers
|   |   |   ├── all.ts                # Controller for fetching all users
|   |   ├── todo/                     # Controllers for todo-related routes
|   |   |   ├── index.ts              # Export point for todo controllers
|   |   |   ├── todo-crud.ts          # Controller for todo CRUD APIs
|   |   └── ...
|   ├── errors/                       # Error handling and custom error classes
|   |   ├── index.ts                  # Export point for error classes
|   |   ├── application-error.ts      # Base application error class
|   |   ├── bad-request.js            # Custom error class for bad requests
|   |   ├── unauthorized-request.ts   # Custom error class for unauthorized requests
|   |   └── ...
|   ├── middleware/                   # Custom middleware functions
|   |   ├── request-middleware.js     # Custom middleware for handling requests
|   |   └── ...
├── .env                              # Environment variable configuration
├── tsconfig.json                     # TypeScript configuration
├── node_modules/                     # Dependencies installed via npm
├── package.json                      # Package configuration file
├── package-lock.json                 # Lock file for package dependencies
└── ...                               # Other project files and directories

  ```

## initiate Project
  ```
  npm init -y
  npm i typescript ts-node nodemon -D
  npx tsc --init 
  npm i express dotenv
  npm i @types/express -D
  ```

## Add Swagger
**Install Dependencies**

```
npm i swagger-ui-express
npm i yamljs
```
**Add in app.ts**

```
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load("./api.yaml");

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
```