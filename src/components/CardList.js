import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { randomId } from '../utils';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin:  16px;
`;

function CardList(props) {
  const {entities} = props;
  if (!entities.length) return null;
  //console.log('×××', entities[0]);
  const cardItems = entities.map(card => <Card key={randomId()} {...card} />);
  return (
    <Wrapper>
      {cardItems}
    </Wrapper>
  );
}

export default CardList;
