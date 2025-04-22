import * as React from "react";

export default function useListReducer(list, dataSet) {
  const [value, dispatcValue] = React.useReducer(listReducer, dataSet);

  React.useEffect(() => {
    dispatcValue({ type: "FETCH_INIT" });

    getAsyncItems(list)
        .then((result) => {
        dispatcValue({ type: "FETCH_SUCCESS", payload: result.data.items });
        })
        .catch(() => dispatcValue({ type: "FETCH_FAILURE" }));
    }, []);


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
        data: state.data.filter((item) => action.payload.id !== item.id),
      };
    default:
      throw new Error();
  }
}

function getAsyncItems(list) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { items: list } }), 1000);
  });
}
