import "./App.css"

const list = [
  {
    make: 'Honda',
    model: 'Civic',
    year: '2022',
    miles: '19,240' 
  },
  {
    make: 'Toyota',
    model: 'Camary',
    year: '2022',
    miles: '21,530'
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
      <form action="" method="post">
        <label htmlFor="search">Search </label>
        <input type="text" name="search" id="search" />
      </form>
    </>
  )
}

function Item(props) {
  const details = props.details
  
  return (
      <li>{details.id}: {details.attribute}</li>
  )
}

function List() {
  return (
   <>
      {list.map((car, index) => (
        <div key={index}>
          <p>{car.make}</p>
          <ul>
          <Item details={{id: 'Model', attribute:car.model}}/>
          <Item details={{id: 'Year', attribute:car.year}}/>
          <Item details={{id: 'Miles', attribute:car.miles}}/>
          
          </ul>
        </div>
        ))} 
   </>
  )
}

export default App
