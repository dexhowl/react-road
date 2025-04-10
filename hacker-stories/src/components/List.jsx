import Item from "./Item.jsx"

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


export default function List() {
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