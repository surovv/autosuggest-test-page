import { useReducer } from 'react';

import { fetchSuggestions } from '../Autosuggest.api';


const validateQuery = query => query.trim();

const groupSuggests = suggests => suggests.reduce(
  (groupedSuggs, { _type: type, ...suggestionData }) => ({
    ...groupedSuggs,
    [type]: (
      groupedSuggs[type]
        ? [...groupedSuggs[type], suggestionData]
        : [suggestionData]
    ),
  }),
  {},
);


const SET_SUGGESTIONS = 'SET_SUGGESTIONS';
const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SUGGESTIONS: return action.payload;
    case CLEAR_SUGGESTIONS: return {};
    default: return state;
  }
};


const useSuggestions = () => {
  const [suggestions, dispatch] = useReducer(reducer, {});

  const setSuggestions = suggests => dispatch({
    type: SET_SUGGESTIONS,
    payload: suggests,
  });

  const clearSuggestions = () => dispatch({ type: CLEAR_SUGGESTIONS });

  const updateSuggestions = query => (
    validateQuery(query)
      ? fetchSuggestions(query).then(suggs => setSuggestions(groupSuggests(suggs)))
      : clearSuggestions()
  );

  return { suggestions, updateSuggestions, clearSuggestions };
};

export default useSuggestions;
