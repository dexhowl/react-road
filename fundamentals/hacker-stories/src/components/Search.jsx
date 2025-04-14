export default function Search({text, onSearch}) {
    
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" name="search" onChange={onSearch} id="search" />
        <p>Looking for: <strong>{text}</strong></p>
      </>
    )
  }