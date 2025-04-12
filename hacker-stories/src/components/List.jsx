import Item from "./Item.jsx"

export default function List(props) {
  console.log("List Component Renders");
    return (
     <ul>
        {props.list.map((item) => (
            <Item key={item.id} item={item}/>   
          ))} 
     </ul>
    )
  }