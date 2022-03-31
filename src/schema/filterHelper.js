export async function filterHelper(connection) {
  if (args.name) {
    return getObjectsFilteredByName(connection);
  }
}

function getObjectsFilteredByName(con) {
  const { name, objects, args } = con;
  if (name === 'Films') {
    return objects.filter(obj => isIncluded(obj.title, args.name));
  }
  return objects.filter(obj => isIncluded(obj.name, args.name));
}

function isIncluded(searchLocation, searchTerm) {
  return searchLocation.toLowerCase().includes(searchTerm.toLowerCase());
}
