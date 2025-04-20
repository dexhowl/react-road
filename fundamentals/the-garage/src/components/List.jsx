import Item from "./Item"

export default function List({list, onRemoveItem, loading}) {
  if (loading) {
    return <p>Loading...</p>
  }
    return (
      <ul>
          {list.map((item) => (
                <Item key={item.id} item={item} onRemoveItem={onRemoveItem}/>
            ))} 
      </ul>
    )
  }