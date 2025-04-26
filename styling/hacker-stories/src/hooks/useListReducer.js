import * as React from "react";
import axios from 'axios'

export default function useListReducer(endpoint, dataSet) {
  const [value, dispatchValue] = React.useReducer(listReducer, dataSet);

const getHackerNews = React.useCallback(async () => {
        dispatchValue({ type: "FETCH_INIT" });

        try {
            const response = await axios.get(endpoint);
            dispatchValue({ type: "FETCH_SUCCESS", payload: response.data.hits});
        }
        catch {
            dispatchValue({ type: "FETCH_FAILURE" });
        }
    }, [endpoint]) 

    
  React.useEffect(() => {
    getHackerNews();
        
    }, [getHackerNews]);

  return [value, dispatchValue];
}

function listReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "REMOVE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => action.payload.title !== item.title),
      };
    default:
      throw new Error();
  }
}