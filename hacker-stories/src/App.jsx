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


const App = () => (
   <div>
      <Search/>
      <hr />
      <List />
   </div>
  )


const Search = () => (
  <form action="" method="post">
    <label htmlFor="search">Search </label>
    <input type="text" name="search" id="search" />
  </form>
  )


const Item = ({details}) => (
      <li>{details.id}: {details.attribute}</li>
  )


const List = () => (
   <ul>
      {list.map((car) => (
        <div key={car.make}>
          <Item details={{id: 'Make', attribute:car.make}}/>
          <Item details={{id: 'Model', attribute:car.model}}/>
          <Item details={{id: 'Year', attribute:car.year}}/>
          <Item details={{id: 'Miles', attribute:car.miles}}/>
        </div>
        ))} 
   </ul>
  )


export default App
