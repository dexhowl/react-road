export default function Item({item, onRemoveItem}) {

    
    return (
        <li>
            <span><strong>{item.title}</strong> <a href={item.url} target="_blank" rel="noopener noreferrer">View Article</a> </span>
            
            <span>{item.points} </span>
            <span>{item.num_comments} </span>
            <button type='button' onClick={() => onRemoveItem(item)}>Delete</button>
        </li>
    )
  }