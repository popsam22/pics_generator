import React,{useState} from 'react'
import imagesSearch from './api'
import SearchBar from './components/SearchBar'
import ResultDisplay from './components/ResultDisplay'

const App = () => {
    const [images, setImages] = useState([])

    const submitHandler = async (userInput) => {
        const response = await imagesSearch(userInput)
        setImages(response)
    }
  return (
    <div>
        <SearchBar onSubmit={submitHandler}/>
        <ResultDisplay images={images}/>
    </div>
  )
}

export default App