import Item from "./Item.jsx"

export default function List(props) {
    return (
     <ul>
        {props.list.map((item) => (
            <Item key={item.id} item={item}/>   
          ))} 
     </ul>
    )
  }