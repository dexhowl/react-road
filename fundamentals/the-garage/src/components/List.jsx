import Item from "./Item"

export default function List({list, onClick}) {
    return (
      <ul>
          {list.map(({id, ...item}, listIndex) => (
                <Item key={id} {...item} position={listIndex} onClick={onClick}/>
            ))} 
      </ul>
    )
  }