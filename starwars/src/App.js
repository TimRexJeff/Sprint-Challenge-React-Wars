import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './components/StarWars'
import './App.scss';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        setData(res.data.results)
      })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="char-cards">
        {data.map(data => (
           <CharCard  name={data.name}
                      birth_year={data.birth_year}
                      homeworld={data.homeworld} />
          // : <div>Focusing the Force</div>
        ))}
      </div>
    </div>
  );
}

export default App;
