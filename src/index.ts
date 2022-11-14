import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { UsersResolver } from './users/users.resolvers';
import mongoose from 'mongoose';
import { AccountResolver } from './accounts/account.resolvers';

export async function connectToMongo() {
  try {
    await mongoose.connect(process.env.dbUri!);
    console.log('Connected to Database');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function main() {
  await connectToMongo();

  const schema = await buildSchema({
    resolvers: [UsersResolver, AccountResolver],
    emitSchemaFile: true,
  });

  const app = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  app.listen(8000);

  console.log('Running a GraphQL API server at http://localhost:8000/graphql');
}

main();
