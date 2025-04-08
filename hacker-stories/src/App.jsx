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
     <List />
   </div>
  )
}

function List() {
  return (
   <>
      {list.map((car, index) => (
        <div key={index}>
          <p>{car.make}</p>
          <ul>
            <li>Model: {car.model}</li>
            <li>Year: {car.year}</li>
            <li>Miles: {car.miles}</li>
          </ul>
        </div>
        ))} 
   </>
  )
}

export default App
