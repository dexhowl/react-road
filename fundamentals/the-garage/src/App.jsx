import * as React from 'react'
import useLocalStorageState from './hooks/useLocalStorageState';
import useListReducer from './hooks/useListReducer';
import Input from "./components/Input"
import List from "./components/List"
import { carList } from './data/carList'
import "./App.css"

function App() {
  
  const [query, setQuery] = useLocalStorageState('search',"React");
  const [cars, dispatchCars] = useListReducer(carList, {data: [], isLoading: false, isError: false});
  const filteredCars = searchCars(cars);
  
  function searchCars(cars) {
    let newList = cars.data.filter((car) => {
        return car.make.toLowerCase().includes(query.toLowerCase());
    });
    
    return newList;
  }

  function handleRemoveCar(item) {
    dispatchCars({type:"REMOVE_ITEM", payload: item});
  }

  function handleSearch(event) {
    setQuery(event.target.value);
    
  }

  return (
   <div>
      <Input id={'search'} name={'search'} text={query} onSearch={handleSearch} isFocused>
        <strong>Search: </strong>
      </Input>
      <hr />
      <List list={filteredCars} onRemoveItem={handleRemoveCar} loading={cars.isLoading} error={cars.isError}/>
   </div>
  )
}

export default App
