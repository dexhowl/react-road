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
      {list.map((value,key) => (
        <div key={key}>
          <p>{value.make}</p>
          <ul>
            <li>Model: {value.model}</li>
            <li>Year: {value.year}</li>
            <li>Miles: {value.miles}</li>
          </ul>
        </div>
        ))} 
   </div>
  )
}

export default App
