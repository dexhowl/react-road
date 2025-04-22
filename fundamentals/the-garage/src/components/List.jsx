import Item from "./Item"

export default function List({list, onRemoveItem, loading, error}) {
  
  if (loading) {
    return <p>Loading...</p>
  }
    return (
      <ul>
      {error && <p>Something went wrong...</p>}
          {list.map((item) => (
                <Item key={item.id} item={item} onRemoveItem={onRemoveItem}/>
            ))} 
      </ul>
    )
  }