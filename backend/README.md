## Requirements
- NodeJS
- NestJS Cli

  ```npm i -g @nestjs/cli```

## Env file setup
To run this project, you will need a .env file located in the root directory.
The .env file will contain constants that will be loaded into process.env 
to connect the backend to your local mySQL DB.
The .env file should consist of the following fields:

```
DB_HOST = ""
DB_USER = ""
DB_PW = ""
```
use information from your mysql workbench

example:
DB_HOST = "localhost"
DB_USER = "root"
DB_PW = "123"

## Running the backend with NestJS
```npm install```

```npm run start:dev```

## NestJS Commands
Generate a module
``` nest g module {module name} ```

Generate a service
``` nest g service {service name} ```

## How connection to local database is made
After the base app module initializes, in the app.module.ts file there is
a this.db.init_db() call. The init_db() method comes from the
datebase.servie.ts file, which is where the local database conneciton is made, schema
is defined, and table values are inserted through a series of sql queries.