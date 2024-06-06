
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import CardGrid from './components/CardGrid '
import axios from 'axios'
import { SearchProvider } from './components/SearchContext'

const App = () => {
  const [data, setData] = useState([]);


  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res?.data)
    console.log("res ", res?.data);
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <SearchProvider>
      <Header />
      <CardGrid data={data} />
    </SearchProvider>
  )
}

export default App