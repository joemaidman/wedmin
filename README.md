
# Wedmin

A node backend using express, postgres, graphql and TypeORM to serve wedding guest information to frontend clients.

## Prerequisites
- Postgres installed and running
- A database called wedmin
- typeorm and nodemon npm packages installed globally

  ``````npm i -g typeorm nodemon``````

## Setup

#### Install packages

```npm i```

#### Update database connection details
```ormconfig.json```

#### Migrate database
```npm run migrate```

#### Run dev @localhost: 4000
```npm start```

#### Run dev in watch mode @localhost: 4000
```npm start:watch```

#### Access data via GraphiQl tool
Visit ```localhost:4000/graphql``` in the browser 

## Maintenance

#### Generate a new migration file based on changes
```npm run generate-migration -- --n=NAMEOFTHEMIGRATION```