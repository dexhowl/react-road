import Item from "./Item"

export default function List({list, onRemoveItem, loading, error,styles}) {
  if (loading) {
    return <p>Loading...</p>
  }
    return (
      <ul>
          {error && <p>An Error Occured...</p>}
          {list.map((item) => (
                <Item styles={styles} key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
            ))} 
      </ul>
    )
  }