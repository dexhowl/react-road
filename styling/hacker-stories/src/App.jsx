import * as React from 'react'
import useLocalStorageState from './hooks/useLocalStorageState';
import useListReducer from './hooks/useListReducer';
import Input from "./components/Input"
import List from "./components/List"
import Form from "./components/Form"
import styles from  "./App.module.css"

function App() {
  const HACKER_NEWS_API_ENDPOINT = 'http://hn.algolia.com/api/v1/search?query='
  
  const [query, setQuery] = useLocalStorageState('search',"Tesla");
  const [url, setUrl] = React.useState(`${HACKER_NEWS_API_ENDPOINT}${query}`)
  const [news, dispatchNews] = useListReducer(url ,{data: [], isLoading: false, isError: false});

  function handleRemoveItem(item) {
    dispatchNews({type:"REMOVE_ITEM", payload: item});

  }

  function handleSearch(event) {
    setQuery(event.target.value);

  }
  function handleSearchSubmit() {
    setUrl(`${HACKER_NEWS_API_ENDPOINT}${query}`)
  }
  

  return (
   <div className={styles.container}>
      <h1 className={styles.headlinePrimary}>My Hacker Stories</h1>
      <Form styles={styles}  formAction={handleSearchSubmit}>
        <Input styles={styles} id={'search'} name={'search'} text={query} onSearch={handleSearch} isFocused>
          <strong>Search: </strong>
        </Input>
      </Form>
      <List styles={styles}  list={news.data} onRemoveItem={handleRemoveItem} loading={news.isLoading} error={news.isError}/>
   </div>
  )
}

export default App
