import * as React from 'react'
import useLocalStorageState from './hooks/userLocalStorageState';
import Search from "./components/Search"
import List from "./components/List"
import {cars} from './data/cars'
import "./App.css"

function App() {
  
  const [query, setQuery] = useLocalStorageState('search',"React");
  const filteredCars = searchCars(cars);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function searchCars(cars) {
    let newList = cars.filter((car) => {
        return car.make.toLowerCase().includes(query.toLowerCase());
    });
    
    return newList;
  }

  return (
   <div>
      <Search text={query} onSearch={handleSearch}/>
      <hr />
      <List list={filteredCars} />
   </div>
  )
}

export default App
