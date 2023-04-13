## Requirements
- NodeJS
- NestJS Cli

  ```npm i -g @nestjs/cli```

## Setting Up Your local mySql DB
In mySql workbench, open one of your connections (e.g., local instance),
create and name a new schema, and then click apply -> apply -> finish.

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