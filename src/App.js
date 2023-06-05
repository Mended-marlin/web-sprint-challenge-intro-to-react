import {React, useState, useEffect} from 'react';
import axios from "axios"
import Character from "./components/Character"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 

  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        !data ? <div>... Loading ...</div> :
        data.map((char,i) => {
        return (<Character character={char} key={i} />)
      })}
    </div>
  );
}

export default App;
