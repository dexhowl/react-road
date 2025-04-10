import "./App.css"

const list = [
  {
    make: 'Honda',
    model: 'Civic',
    year: '2022',
    miles: '19,240',
    id: '0'
  },
  {
    make: 'Toyota',
    model: 'Camary',
    year: '2022',
    miles: '21,530',
    id: '1'
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
      <li>{details.year} {details.make} {details.model}: {details.miles} Miles</li>
  )


const List = () => (
   <ul>
      {list.map((car) => (
          <Item key={car.id} details={{make:car.make, year:car.year, model:car.model, miles:car.miles}}/>
        ))} 
   </ul>
  )


export default App
