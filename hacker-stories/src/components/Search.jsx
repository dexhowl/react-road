

export default function Search() {
  let query = ''

    function handleChange(event) {
        //console.log("Change Trigger");
        query = event.target.value;
    }
    
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" name="search" onChange={handleChange} id="search" />
        <p>{query}</p>
      </>
    )
  }