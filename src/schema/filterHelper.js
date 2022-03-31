import { getObjectsFromUrls } from './apiHelper';

export async function filterHelper(connection) {
  const { args } = connection;
  if (args.name) {
    return getObjectsFilteredByName(connection);
  }
  if (args.episodeID) {
    return getObjectsFilteredByID(connection);
  }
  if (args.withCharacter) {
    const people = getObjectsFilteredByName(connection);
    return getObjectsFromUrls(people[0].films);
  }
}

async function getObjectsFilteredByID(con) {
  const { name, objects, args } = con;
  if (name === 'filmID') {
    return objects.filter(obj => isIdentical(obj.episode_id, args.episodeID));
  }
}

function getObjectsFilteredByName(con) {
  const { name, objects, args } = con;
  if (name === 'Films' && args.name) {
    return objects.filter(obj => isIncluded(obj.title, args.name));
  }
  if (name === 'Films' && args.withCharacter) {
    return objects.filter(obj => isIncluded(obj.name, args.withCharacter));
  }
  return objects.filter(obj => isIncluded(obj.name, args.name));
}

function isIncluded(searchLocation, searchTerm) {
  return searchLocation.toLowerCase().includes(searchTerm.toLowerCase());
}

function isIdentical(searchLocation, searchTerm) {
  return searchLocation === searchTerm;
}
