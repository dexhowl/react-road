import * as React from 'react'
import useLocalStorageState from './hooks/useLocalStorageState';
import useListReducer from './hooks/useListReducer';
import Input from "./components/Input"
import List from "./components/List"
import Form from "./components/Form"
//import "./App.css"
import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 100vw;
  padding: 20px;
  background: #83a4d4;
  background: linear-gradient(to left, #b6fbff, #83a4d4);
  color: #171212;
`;

const StyledHeadlinePrimary = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
`;




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
   <StyledContainer>
      <StyledHeadlinePrimary>My Hacker Stories</StyledHeadlinePrimary>
      <Form formAction={handleSearchSubmit}>
        <Input id={'search'} name={'search'} text={query} onSearch={handleSearch} isFocused>
          <strong>Search: </strong>
        </Input>
      </Form>
      <List list={news.data} onRemoveItem={handleRemoveItem} loading={news.isLoading} error={news.isError}/>
   </StyledContainer>
  )
}

export default App
