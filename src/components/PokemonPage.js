import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);


 

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r=> r.json())
    .then(pokeData => {
      setPokemonList(pokeData)
    })
  }, ([]))


function handleNewPokemon (newObj) {
  setPokemonList([newObj, ...pokemonList])
}

 function handleSearchResults (newString) {
    setSearchQuery(searchQuery => newString.toLowerCase())
    console.log(searchQuery)
  }

 const byName = (pokemonObj) => pokemonObj.name.toLowerCase().includes(searchQuery)
 const filteredResults = pokemonList.filter(byName)
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search handleSearchResults={handleSearchResults} />
      <br />
      <PokemonCollection pokemonList={filteredResults} />
    </Container>
  );
}

export default PokemonPage;
