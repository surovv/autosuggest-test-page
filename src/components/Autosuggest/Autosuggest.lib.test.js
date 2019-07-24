import { maybeTransformToArray, noItemsDefaultArray } from './Autosuggest.lib';

const cities = ['Amsterdam', 'Utrecht'];

const items = {
  city: cities,
};

const noResults = {
  no_items: 'some messa',
};

it('transforms object to array', () => {
  expect(
    JSON.stringify(maybeTransformToArray(items)),
  ).toEqual(
    JSON.stringify([{ group: 'cities', items: cities }]),
  );
});


it('return noItemsDefaultArray', () => {
  expect(
    JSON.stringify(maybeTransformToArray(noResults)),
  ).toEqual(
    JSON.stringify(noItemsDefaultArray),
  );
});
