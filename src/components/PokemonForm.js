import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {

 const [newName, setNewName] = useState('');
 const [newHP, setNewHP] = useState('');
 const [newFront, setNewFront] = useState('');
 const [newBack, setNewBack] = useState('');

 const handleNewName = (e) => setNewName(e.target.value) 
 const handleNewHP = (e) => setNewHP(e.target.value) 
 const handleNewFront = (e) => setNewFront(e.target.value)
 const handleNewBack = (e) => setNewBack(e.target.value)

function handleFormSubmit(e) {
  e.preventDefault();
  const newPokemon = {
    name: newName,
    hp: newHP,
    sprites: {
      front: newFront,
      back: newBack
    }
  }
  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newPokemon)
  })
  .then(r=> r.json())
  .then(newPoke => handleNewPokemon(newPoke))
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleNewName} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleNewHP} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
          onChange={handleNewFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
          onChange={handleNewBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
