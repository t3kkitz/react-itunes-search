import React from 'react';
import styled from 'styled-components';
import CardList from './CardList'

const Wrapper = styled.main`
  background:#eee;
  min-height: 600px;
`;

function Main() {
  return (
    <Wrapper>
      <CardList/>
    </Wrapper>
  );
}

export default Main;
