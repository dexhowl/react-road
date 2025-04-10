import "./App.css"

const list = [
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
  return (
   <div>
      <Search/>
      <hr />
      <List />
   </div>
  )
}

function Search() {
  return (
    <>
      <label htmlFor="search">Search </label>
      <input type="text" name="search" id="search" />
    </>
  )
}

function Item({details}) {

  return (
      <li>{details.year} {details.make} {details.model}: {details.miles} Miles</li>
  )
}

function List() {
  return (
   <ul>
      {list.map((car) => (
          <Item key={car.id} 
            details={
              { 
                make: car.make, 
                model:car.model, 
                year:car.year, 
                miles:car.miles
              }
            }/>
        ))} 
   </ul>
  )
}

export default App
