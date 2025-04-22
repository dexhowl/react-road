import * as React from 'react'
import useLocalStorageState from './hooks/useLocalStorageState';
import useListReducer from './hooks/useListReducer';
import Input from "./components/Input"
import List from "./components/List"
import "./App.css"

function App() {
  
  const [query, setQuery] = useLocalStorageState('search',"Tesla");
  const [news, dispatchNews] = useListReducer(query, {data: [], isLoading: false, isError: false});

  function handleRemoveItem(item) {
    dispatchNews({type:"REMOVE_ITEM", payload: item});

  }

  function handleSearch(event) {
    setQuery(event.target.value);

  }
  

  return (
   <div>
      <Input id={'search'} name={'search'} text={query} onSearch={handleSearch} isFocused>
        <strong>Search: </strong>
      </Input>
      <hr />
      <List list={news.data} onRemoveItem={handleRemoveItem} loading={news.isLoading} error={news.isError}/>
   </div>
  )
}

export default App
