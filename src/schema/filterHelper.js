let name;
let objects;
let args;

export async function filterHelper(connection) {
  name = connection.name;
  objects = connection.objects;
  args = connection.args;
  if (args.name) {
    return getObjectsFilteredByName();
  }
}

function getObjectsFilteredByName() {
  if (name === 'Films') {
    return objects.filter(obj => isIncluded(obj.title, args.name));
  }
  return objects.filter(obj => isIncluded(obj.name, args.name));
}

function isIncluded(searchLocation, searchTerm) {
  return searchLocation.toLowerCase().includes(searchTerm.toLowerCase());
}
