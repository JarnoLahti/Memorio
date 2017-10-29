import { Card } from '../dto';
import * as React from 'react';

interface Props {
  card:Card;
  selectCard:(cardId:number) => void;
}

const Card: React.SFC<Props> = props => {
  return (
    <div className="card" onClick={() => props.selectCard(props.card.id)}>
      {props.card.id}, {props.card.data}, {props.card.flipped.toString()}, 
    </div>
  );
};

export default Card;