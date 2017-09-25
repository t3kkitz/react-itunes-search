import React from 'react';
import Card from './Card';

function CardList(props) {
  const {entities} = props;
  const cardItems  = [];
  return (
    <div>
      {cardItems}
    </div>
  );
}

export default CardList;
