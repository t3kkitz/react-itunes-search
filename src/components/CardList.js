import React from 'react';
import Card from './Card';
import { randomId } from '../utils';

function CardList(props) {
  const { entities } = props;
  if (!entities.length) return null;
  console.log('×××', entities[0]);
  const cardItems = entities.map(card => <Card key={randomId()} {...card} />);
  return (
    <div>
      {cardItems}
    </div>
  );
}

export default CardList;
