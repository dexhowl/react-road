import { useState } from "react"
import "./App.css"

const title = "Hacker Stories";

function App() {
  return (
   <div>
     <h1>Hello {title}</h1>
     <div>
      <form action="" method="post">
        <label htmlFor="text">Label </label>
        <input type="text" name="text" id="text" />
      </form>
     </div>
   </div>
  )
}

export default App
