
export default function Item({car}) {
    return (
        <li>
            <span>{car.year} </span>
            <span>{car.make} </span>
            <span>{car.model}: </span> 
            <span>{car.miles} Miles</span> 
        </li>
    )
  }