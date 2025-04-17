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
  },
  {
    make: 'Audi',
    model: 'R8',
    year: '2026',
    miles: '1,500',
    id:'2'
  },
  {
    make: 'BMW',
    model: 'M4',
    year: '2024',
    miles: '10,500',
    id:'3'
  }
];

function App() {
  
  const [query, setQuery] = React.useState(localStorage.getItem('search') ?? 'React');
  const filteredCars = searchCars(cars);

  React.useEffect(() => {
    localStorage.setItem('search', query)
  }, [query]);

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
