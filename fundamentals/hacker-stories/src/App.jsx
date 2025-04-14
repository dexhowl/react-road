import * as React from 'react'
import Search from "./components/Search.jsx"
import List from "./components/List.jsx"
import "./App.css"

const cars = [
  {
    make: 'Honda',
    model: 'Civic',
    year: '2022',
    miles: '109,240',
    id:'0' 
  },
  {
    make: 'Toyota',
    model: 'Camary',
    year: '2025',
    miles: '21,530',
    id:'1'
  }
];

function App() {
  
  const [query, setQuery] = React.useState('');

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
   <div>
      <Search text={query} onSearch={handleSearch}/>
      <hr />
      <List list={cars} />
   </div>
  )
}

export default App
