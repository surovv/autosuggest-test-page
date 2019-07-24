const suggestionsUrl = 'https://api.earlytestabc.plugify.nl/autocomplete.json';

export const fetchSuggestions = query => (
  fetch(`${suggestionsUrl}?query=${query}`)
    .then(resp => resp.json())
    .then(({ results }) => results)
);
