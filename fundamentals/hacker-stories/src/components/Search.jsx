import * as React from 'react'

export default function Search() {
  const [query, setQuery] = React.useState('');

    function handleChange(event) {
       setQuery(event.target.value);
    }
    
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" name="search" onChange={handleChange} id="search" />
        <p>Looking for: <strong>{query}</strong></p>
      </>
    )
  }