import React, { useState, useRef } from 'react';
import AutosuggestBase from 'react-autosuggest';
import debounce from 'lodash/debounce';

import useSuggestions from './hooks/useSuggestions';

import { transformObjToArray } from './Autosuggest.lib';

const Autosuggest = () => {
  const { suggestions, updateSuggestions, clearSuggestions } = useSuggestions();
  const updateSuggestionsDebounced = useRef(debounce(updateSuggestions, 500)).current;


  const [inputVal, setInputVal] = useState('');


  const inputProps = {
    placeholder: 'Wat zoek je?',
    value: inputVal,
    onChange: (_e, { newValue }) => setInputVal(newValue),
  };

  const renderSectionTitle = suggestion => (
    <div>
      {suggestion.group}
    </div>
  );

  const getSectionSuggestions = ({ items }) => items;

  const renderSuggestion = sugg => <div>{sugg.name}</div>;

  const getSuggestionValue = ({ name }) => name;

  const handleFetchRequested = ({ value, reason }) => (
    reason === 'input-changed' && updateSuggestionsDebounced(value)
  );

  return (
    <div>
      <AutosuggestBase
        multiSection
        suggestions={transformObjToArray(suggestions)}
        onSuggestionsFetchRequested={handleFetchRequested}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

export default Autosuggest;
