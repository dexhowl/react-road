export default function Item({item, onRemoveItem}) {

    
    return (
        <li className="item">
            <span style={{ width: '40%'}}>
                <a href={item.url} target="_blank" rel="noopener noreferrer"><strong>{item.title}</strong></a>
            </span>
            <span style={{ width: '30%'}}>by {item.author} </span>
            <span style={{ width: '10%'}}>{item.num_comments} </span>
            <span style={{ width: '10%'}}>{item.points} </span>
            <span style={{ width: '10%'}}><button className="btn btn-sm" type='button' onClick={() => onRemoveItem(item)}>Dismiss</button></span>
        </li>
    )
  }