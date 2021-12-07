
import React, { useState, useEffect } from 'react'
import './App.css';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';

function App() {

  const [pageNumer, setPageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumer}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      console.log(data.results);
    })()
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center poppins my-4">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
