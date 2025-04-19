import Item from "./Item"

export default function List({list, onRemoveItem}) {
    return (
      <ul>
          {list.map((item) => (
                <Item key={item.id} item={item} onRemoveItem={onRemoveItem}/>
            ))} 
      </ul>
    )
  }