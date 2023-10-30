## Project Structure

```
node-typescript-mongo/
  ├── src/
  |   ├── app.ts
  |   ├── server.ts
  |   ├── routes.ts
  |   ├── mongo-connection.ts
  |   ├── logger.ts
  |   ├── models/
  |   |   ├── user.ts
  |   |   └── ...
  |   ├── controllers/
  |   |   ├── auth/
  |   |   |   ├── index.ts
  |   |   |   ├── login.ts
  |   |   |   ├── register.ts
  |   |   ├── user/
  |   |   |   ├── index.ts
  |   |   |   ├── all.ts
  |   |   └── ...
  |   ├── errors/
  |   |   ├── index.ts
  |   |   ├── application-error.ts
  |   |   ├── bad-request.js
  |   |   ├── unauthorized-request.ts
  |   |   └── ...
  |   ├── middleware/
  |   |   ├── request-middleware.js
  |   |   └── ...
  ├── .env
  ├── tsconfig.json
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  └── ...
  ```