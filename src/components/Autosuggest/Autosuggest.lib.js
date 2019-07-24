const suggestionsTypes = {
  autocomplete_value: 'tags',
  city: 'cities',
  artist: 'artists',
};

export const transformObjToArray = suggestions => Object.keys(suggestions).reduce(
  (acc, key) => [...acc, { group: suggestionsTypes[key], items: suggestions[key] }],
  [],
);
