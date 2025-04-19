import Button from './Button'

export default function Item({year, make, model, miles, position, onClick}) {
    
    return (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles </span>
            <Button value={'Delete'} index={position} onClick={onClick} />
        </li>
    )
  }