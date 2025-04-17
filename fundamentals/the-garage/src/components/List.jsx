import Item from "./Item.jsx"

export default function List({list}) {
    return (
     <ul>
        {list.map(({id, ...item}) => (
            <Item key={id} {...item}/>   
          ))} 
     </ul>
    )
  }