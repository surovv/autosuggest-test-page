const suggestionsTypes = {
  autocomplete_value: 'tags',
  city: 'cities',
  artist: 'artists',
};

export const transformObjToArray = suggestions => Object.keys(suggestions).reduce(
  (acc, key) => [...acc, { group: suggestionsTypes[key], items: suggestions[key] }],
  [],
);


export const noItemsDefaultArray = [
  {
    group: 'no results',
    items: [{ name: 'try another search term' }],
  },
];

export const maybeTransformToArray = suggestions => (
  JSON.stringify(Object.keys(suggestions)) === JSON.stringify(['no_items'])
    ? noItemsDefaultArray
    : transformObjToArray(suggestions)
);
