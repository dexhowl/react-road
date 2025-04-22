export default function Item({item, onRemoveItem}) {

    
    return (
        <li>
            <span><strong><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></strong> </span>
            <span>by {item.author} </span>
            <button type='button' onClick={() => onRemoveItem(item)}>Delete</button>
        </li>
    )
  }