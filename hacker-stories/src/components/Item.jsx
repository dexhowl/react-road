
export default function Item(props) {
    return (
        <li>
            <span>{props.item.year} </span>
            <span>{props.item.make} </span>
            <span>{props.item.model}: </span> 
            <span>{props.item.miles} Miles</span> 
        </li>
    )
  }