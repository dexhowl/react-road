import * as React from 'react';

function App() {
  
  return (
    <div>
      <Welcome />
    </div>
  )
}

function Welcome() {
  const greeting = 'Welcome to React'
  return (
    <h1>{greeting}</h1>
  )
}

export default App
