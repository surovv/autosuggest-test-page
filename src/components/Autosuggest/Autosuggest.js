import React, { useState, useRef } from 'react';
import AutosuggestBase from 'react-autosuggest';
import debounce from 'lodash/debounce';
import stubFalse from 'lodash/stubFalse';

import Suggestion from './components/Suggestion';

import useSuggestions from './hooks/useSuggestions';

import { maybeTransformToArray } from './Autosuggest.lib';

import styles from './Autosuggest.module.css';

const Autosuggest = () => {
  const { suggestions, updateSuggestions } = useSuggestions();
  const updateSuggestionsDebounced = useRef(debounce(updateSuggestions, 500)).current;


  const [inputVal, setInputVal] = useState('');


  const inputProps = {
    placeholder: 'Search here',
    value: inputVal,
    onChange: (_e, { newValue }) => setInputVal(newValue),
  };

  const renderSectionTitle = suggestion => (
    <h3>
      {suggestion.group}
    </h3>
  );

  const getSectionSuggestions = ({ items }) => items;

  const renderSuggestion = suggestion => <Suggestion suggestion={suggestion} />;

  const getSuggestionValue = ({ name }) => name;

  const handleFetchRequested = ({ value, reason }) => (
    reason === 'input-changed' && updateSuggestionsDebounced(value)
  );

  return (
    <div className={styles.root}>
      <AutosuggestBase
        multiSection
        suggestions={maybeTransformToArray(suggestions)}
        onSuggestionsFetchRequested={handleFetchRequested}
        onSuggestionsClearRequested={stubFalse}
        getSuggestionValue={getSuggestionValue}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={styles}
      />
    </div>
  );
};

export default Autosuggest;
