export default function Item({item, onRemoveItem}) {
    const {year,make,model,miles} = item;
    
    return (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles </span>
            <button type='button' onClick={() => onRemoveItem(item)}>Delete</button>
        </li>
    )
  }