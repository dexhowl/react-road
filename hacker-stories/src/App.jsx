import { useState } from "react"
import "./App.css"

function getWelcome() {
  const welcome = {
    title: "Hacker Stories",
    greeting: "Hi"
  }
  return welcome
}


function App() {

  return (
   <div>
     <h1>{getWelcome().greeting} {getWelcome().title}</h1>
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
