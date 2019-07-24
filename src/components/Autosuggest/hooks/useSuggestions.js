import { useReducer } from 'react';

import { fetchSuggestions } from '../Autosuggest.api';


const validateQuery = query => query.trim();

const groupSuggests = suggests => suggests.reduce(
  (groupedSuggs, { _type: type, ...suggestionData }) => ({
    ...groupedSuggs,
    [type]: (
      groupedSuggs[type]
        ? [...groupedSuggs[type], { ...suggestionData, type }]
        : [{ ...suggestionData, type }]
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


const useSuggestions = (defaultSuggestions = {}) => {
  const [suggestions, dispatch] = useReducer(reducer, defaultSuggestions);

  const setSuggestions = suggests => dispatch({
    type: SET_SUGGESTIONS,
    payload: suggests,
  });

  const clearSuggestions = () => dispatch({ type: CLEAR_SUGGESTIONS });

  const updateSuggestions = query => (
    validateQuery(query)
      ? (
        fetchSuggestions(query)
          .then(suggs => setSuggestions(groupSuggests(suggs)))
          .catch(err => console.log(err))
      ) : (
        clearSuggestions()
      )
  );

  return { suggestions, updateSuggestions, clearSuggestions };
};

export default useSuggestions;
