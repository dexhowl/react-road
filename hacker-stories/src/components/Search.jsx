

export default function Search() {
    function handleChange(event) {
        console.log(event);
        console.log(event.target.value);
    }
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" name="search" onChange={handleChange} id="search" />
      </>
    )
  }