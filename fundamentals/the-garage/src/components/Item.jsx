
export default function Item({year, make, model, miles}) {
    return (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles</span> 
        </li>
    )
  }