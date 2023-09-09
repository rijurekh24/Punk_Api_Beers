import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "react-loading-skeleton/dist/skeleton.css";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers?per_page=80').then((response) => {
      console.log(response.data);
      setBeers(response.data);
    });
  }, []);


  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="header">
        <h1>Punk API Beers</h1>
      </div>

      <div className="main">
        <input
          type="text"
          placeholder="Search for a beer..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="beer-list">
          
          { filteredBeers.length > 0 ? filteredBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          )) : (
            <div>Opps! No items found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
