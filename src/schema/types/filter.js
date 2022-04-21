/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 * @flow strict
 */

import { GraphQLObjectType, GraphQLString } from 'graphql';

import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../relayNode';
import { createdField, editedField } from '../commonFields';

/**
 * The GraphQL type equivalent of the Filter resource
 */
const FilterType = new GraphQLObjectType({
  name: 'Filter',
  description: 'A single filter.',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of this filter.',
    },
    type: {
      type: GraphQLString,
      description: 'The type of this filter.',
    },
    created: createdField(),
    edited: editedField(),
    id: globalIdField('filter'),
  }),
  interfaces: () => [nodeInterface],
});

export default FilterType;
