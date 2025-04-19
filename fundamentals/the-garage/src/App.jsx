import * as React from 'react'
import useLocalStorageState from './hooks/userLocalStorageState';
import Input from "./components/Input"
import List from "./components/List"
import { carList } from './data/carList'
import "./App.css"

function App() {
  
  const [query, setQuery] = useLocalStorageState('search',"React");
  const [cars, setCars] = React.useState(carList);

  const filteredCars = searchCars(cars);

  function handleRemoveCar(item) {
    const newCars = cars.filter(
      (car) => item.id !== car.id 
    );
    setCars(newCars);
  }

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
      <Input id={'search'} name={'search'} text={query} onSearch={handleSearch} isFocused>
        <strong>Search: </strong>
      </Input>
      <hr />
      <List list={filteredCars} onRemoveItem={handleRemoveCar}/>
   </div>
  )
}

export default App
