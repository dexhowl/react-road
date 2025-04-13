import * as React from 'react';

function App() {
  const greeting = 'Welcome to React'
  
  return (
    <div>
      <Welcome text={greeting} />
    </div>
  )
}

function Welcome(props) {
  return (
    <h1>{props.text}</h1>
  )
}

export default App
