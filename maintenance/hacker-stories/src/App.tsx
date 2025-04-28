import * as React from 'react'
import './App.css'
import Input from './components/Input'
import Form from './components/Form'
import List from './components/List'

function App() {

  function handleSubmit() {

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input/>
        <List/>
      </Form>
    </>
  )
}

export default App
