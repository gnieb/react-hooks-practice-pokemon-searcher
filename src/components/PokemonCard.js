import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
const [isFront, setIsFront] = useState(true)

function toggleFront () {
  setIsFront(isFront => !isFront)
}

  return (
    <Card>
      <div>
        <div onClick ={toggleFront}className="image">
          {isFront ? <img src={sprites.front} alt="oh no!" /> :
          <img src={sprites.back} alt="back" /> }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
