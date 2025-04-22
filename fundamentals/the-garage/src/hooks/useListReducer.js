import * as React from "react";

export default function useListReducer(term, dataSet) {
  const [value, dispatcValue] = React.useReducer(listReducer, dataSet);
  
  React.useEffect(() => {
    if (!term) return;
    
    dispatcValue({ type: "FETCH_INIT" });

    getHackerNews(term)
        .then((result) => {
        dispatcValue({ type: "FETCH_SUCCESS", payload: result.hits});
        
        })
        .catch(() => dispatcValue({ type: "FETCH_FAILURE" }));
    }, [term]);

  return [value, dispatcValue];
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

async function getHackerNews(search) {
  
  const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return await response.json();
}
