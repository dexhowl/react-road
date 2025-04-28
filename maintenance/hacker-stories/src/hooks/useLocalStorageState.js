import * as React from 'react'

export default function useLocalStorageState(key, initialState) {

    const [value, setValue] = React.useState(
        localStorage.getItem(key) ?? initialState 
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
      }, [value, key]);


    return [value, setValue];

}    