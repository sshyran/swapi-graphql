import { getObjectsFromUrls } from './apiHelper';
import { connectionArgs } from 'graphql-relay';

export async function filterHelper(connection) {
  let { name, objects, args } = connection;
  if (name === 'People') {
    objects = await peopleHelper(objects, args);
  }
  if (args.withCharacter) {
    const people = objects.filter(obj =>
      isIncluded(obj.name, args.withCharacter),
    );
    objects = await getObjectsFromUrls(people[0].films);
  }
  if (args.title) {
    objects = await objects.filter(obj => isIncluded(obj.title, args.title));
  }
  if (args.name && name !== 'People') {
    objects = await objects.filter(obj => isIncluded(obj.name, args.name));
  }
  if (args.episode_id) {
    objects = await objects.filter(obj =>
      isIdentical(obj.episode_id, args.episodeID),
    );
  }
  return objects;
}

async function peopleHelper(objects, args) {
  for (let arg in args) {
    if (isCustomFilter(arg)) {
      objects = await objects.filter(obj => {
        if (arg === 'name') {
          return isIncluded(obj[arg], args[arg]);
        }
        if (arg !== 'name' && !arg.includes('Height')) {
          return isIdentical(obj[arg], args[arg]);
        }
        if (arg.includes('Height')) {
          return isInRange(obj, args);
        }
      });
    }
  }
  return objects;
}

function isIncluded(searchLocation, searchTerm) {
  return searchLocation.toLowerCase().includes(searchTerm.toLowerCase());
}

function isIdentical(searchLocation, searchTerm) {
  return searchLocation === searchTerm;
}

function isInRange(obj, args) {
  if (!args.minHeight) {
    args.minHeight = -9999;
  }
  if (!args.maxHeight) {
    args.maxHeight = 9999;
  }
  return args.minHeight <= obj.height && obj.height <= args.maxHeight;
}

function isCustomFilter(arg) {
  return !connectionArgs[arg];
}
