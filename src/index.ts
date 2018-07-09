import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

import { GuestResolver } from './resolvers/GuestResolver';
import { PartyResolver } from './resolvers/PartyResolver';

const start = async () => {
  await createConnection();

  const schema: GraphQLSchema = await buildSchema({
    resolvers: [GuestResolver, PartyResolver]
  });

  const app = express();

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  app.listen(4000);
  console.log('Listening on port 4000');
};

start();
