import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList}) {

  const displayPokemon = pokemonList.map(pokemon => {
    return (
      <PokemonCard
      key={pokemon.id}
      {...pokemon} />
    )
  })


  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
