import "./App.css"

const carArray = [ "Toyota", "Honda", "Ford", "Chevrolet", "Nissan" ];


function App() {

  return (
   <div>
     <ul>
      {carArray.map((value,key) => <li key={key}>{value}</li>)}
     </ul>
     
   </div>
  )
}

export default App
