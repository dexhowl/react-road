import * as React from 'react';

function App() {
  const greeting = 'Welcome to React'

  const [isVisible, setVisible] = React.useState(true);  

  function handleToggle() {
    setVisible(!isVisible);
  }

  return (
    <div>
      <Button onClick={handleToggle} />
      {isVisible ? <Welcome text={greeting} /> : ''}
    </div>
  )
}

function Welcome(props) {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({onClick}) => <button onClick={onClick}>Toggle</button>

export default App
