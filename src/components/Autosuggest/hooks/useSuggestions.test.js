import React from 'react';
import { mount } from 'enzyme';
import useSuggestions from './useSuggestions';


const defaultSuggestions = {
  genres: ['post', 'post-punk', 'post-rock'],
};

const SuggestionsStub = () => {
  const { suggestions, clearSuggestions } = useSuggestions(defaultSuggestions);

  return (
    <div className="root">
      <div className="suggestions">
        {JSON.stringify(suggestions)}
      </div>
      <button
        className="btn"
        type="button"
        onClick={clearSuggestions}
      >
        Clear
      </button>
    </div>
  );
};

it('set initial suggestions to SuggestionsStub and clear them onClick', () => {
  const suggestionComp = mount(<SuggestionsStub />);

  expect(suggestionComp).toContainExactlyOneMatchingElement('.root');
  expect(suggestionComp).toContainExactlyOneMatchingElement('.suggestions');
  expect(suggestionComp).toContainExactlyOneMatchingElement('.btn');

  const suggestionsEl = suggestionComp.find('.suggestions');

  expect(
    suggestionsEl.text(),
  ).toEqual(
    JSON.stringify(defaultSuggestions),
  );

  suggestionComp.find('.btn').simulate('click');

  expect(
    suggestionsEl.text(),
  ).toEqual(
    JSON.stringify({}),
  );
});
