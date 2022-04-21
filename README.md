FRONTASTICS SWAPI GraphQL Wrapper
=====================

A wrapper around [SWAPI](http://swapi.dev) built using GraphQL converting it into [this schema](schema.graphql).

Uses:

* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [DataLoader](https://github.com/graphql/dataloader) - for coalescing and caching fetches.
* [express-graphql](https://github.com/graphql/express-graphql) - to provide HTTP access to GraphQL.
* [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) - to use `express-graphql` on aws lambda.
* [GraphiQL](https://github.com/graphql/graphiql) - for easy exploration of this GraphQL server.

Try it out at: https://frontastic-swapi-graphql.netlify.app

## Getting Started

Install dependencies with

```sh
npm install
```

## SWAPI Wrapper

The SWAPI wrapper is in `./swapi`. It can be tested with:

```sh
yarn test
```

## Local Server

A local express server is in `./server`. It can be run with:

```sh
npm start
```

## Making Changes

To see your changes you have to built it also for development. It can be run with:

```sh
npm run dev
```

A GraphiQL instance will be opened at http://localhost:3000/ (will be printed to the console) to explore the API.
