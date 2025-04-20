import * as React from 'react'
import useLocalStorageState from './hooks/userLocalStorageState';
import Input from "./components/Input"
import List from "./components/List"
import { carList } from './data/carList'
import "./App.css"

function App() {
  
  const [query, setQuery] = useLocalStorageState('search',"React");
  const [isLoading, setIsLoading] = React.useState();
  const [cars, dispatchCars] = React.useReducer(carsReducer, []);

  function carsReducer(state, action) {
  
    switch (action.type) {
      case 'SET_CARS':
        return action.payload;
      case 'REMOVE_CAR':
        return state.filter(
          (car) => action.payload.id !== car.id 
        );
      default:
        throw new Error();
    }
  }

  React.useEffect(() => {
    setIsLoading(true)   

    getAsyncCars().then(result => {
      dispatchCars({type:"SET_CARS", payload: result.data.cars});
      setIsLoading(false);
    })
  }, []);

  function getAsyncCars() {
    return new Promise((resolve) => {  
      setTimeout(
        () => resolve({data:{cars: carList}})  
      , 1000);
    })

  }

  const filteredCars = searchCars(cars);

  function handleRemoveCar(item) {
    dispatchCars({type:"REMOVE_CAR", payload: item});
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
      <List list={filteredCars} onRemoveItem={handleRemoveCar} loading={isLoading}/>
   </div>
  )
}

export default App
