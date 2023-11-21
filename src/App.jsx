/* eslint-disable react/prop-types */
import './App.css'
import MoviesList2 from './components/MoviesList2';


const App = () => { // This is also a functional component
  console.log("APP is mounted");

  return (
    <>
      <MoviesList2 />
    </>
  )
}

export default App
