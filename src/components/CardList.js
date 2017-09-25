import React from 'react';
import Card from './Card';

function CardList(props) {
  const { entities } = props;
  if (!entities.length) return null;
  const cardItems = entities.map(card => <Card key={card.trackId} {...card} />);
  return (
    <div>
      {cardItems}
    </div>
  );
}

export default CardList;
