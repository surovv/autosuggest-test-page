import React from 'react';
import { mount } from 'enzyme';
import Suggestion, { typesIcons } from './Suggestion';


it('renders suggestion with autocomplete_value type', () => {
  const valueSuggestion = {
    name: 'Band',
    type: 'autocomplete_value',
  };

  const suggestionComp = mount(<Suggestion suggestion={valueSuggestion} />);

  expect(suggestionComp).toContainExactlyOneMatchingElement('.root');
  expect(suggestionComp).toContainExactlyOneMatchingElement(`.${typesIcons[valueSuggestion.type]}`);
  expect(suggestionComp).not.toContain('.wrongIcon');
});

it('renders suggestion with artist type', () => {
  const artistSuggestion = {
    name: 'Tyler',
    type: 'artist',
  };

  const suggestionComp = mount(<Suggestion suggestion={artistSuggestion} />);

  expect(suggestionComp).toContainExactlyOneMatchingElement('.root');
  expect(suggestionComp).toContainExactlyOneMatchingElement(`.${typesIcons[artistSuggestion.type]}`);
  expect(suggestionComp).not.toContain('.wrongIcon');
});


it('renders suggestion with city type', () => {
  const citySuggestion = {
    name: 'Lugano',
    type: 'city',
  };

  const suggestionComp = mount(<Suggestion suggestion={citySuggestion} />);

  expect(suggestionComp).toContainExactlyOneMatchingElement('.root');
  expect(suggestionComp).toContainExactlyOneMatchingElement(`.${typesIcons[citySuggestion.type]}`);
  expect(suggestionComp).not.toContain('.wrongIcon');
});
