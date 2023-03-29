## Requirements
- NodeJS
- NestJS Cli

  ```npm i -g @nestjs/cli```

## Setting Up Your local mySql DB
In mySql workbench, open one of your connections (e.g., local instance),
create and name a new schema, and then click apply -> apply -> finish.

## Env file setup
To run this project, you will need a .env file located in the root directory.
The .env file connects the Prisma ORM tool to your local db.
The .env file consists of the following fields:

```
DATABASE_URL: mysql://USER:PASSWORD@HOST:PORT/DATABASE
```
use information from your mysql workbench
example: mysql://root:123@localhost:3306/csc4402db

## Using Prisma to Modify mySql DB Schema
Define the schema in the schema.prisma file in the prisma folder.
Run ``` npx prisma migrate dev ``` to create the tables defined in the 
schema.prisma file in your local db.

## Running the backend with NestJS
```npm install```

```npm run start:dev```

## NestJS Commands
Generate a module
``` nest g module {module name} ```

Generate a service
``` nest g service {service name} ```