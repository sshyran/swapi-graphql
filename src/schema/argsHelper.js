import { connectionArgs } from 'graphql-relay';
import { GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

function getObjectArgs(name) {
  const standardArgs = { id: { type: GraphQLID }, [name]: { type: GraphQLID } };
  const filmArgs = { ...standardArgs, episodeID: { type: GraphQLInt } };

  if (name === 'filmID') {
    return filmArgs;
  }
  return standardArgs;
}

function getObjectListArgs(name) {
  const standardArgs = { ...connectionArgs, name: { type: GraphQLString } };
  const filmArgs = {
    ...standardArgs,
    withCharacter: { type: GraphQLString },
  };
  const peopleArgs = { ...standardArgs };

  if (name === 'Films') {
    return filmArgs;
  }
  if (name === 'People') {
    return peopleArgs;
  }
  return standardArgs;
}

export function getArgsByName(name) {
  if (name.includes('ID')) {
    return getObjectArgs(name);
  }
  return getObjectListArgs(name);
}
