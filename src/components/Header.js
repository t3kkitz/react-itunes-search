import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Wrapper = styled.header`
  background:#999999;
  color:#FFFFFF;
  min-height: 56px;
`;

function Header() {
  return (
    <Wrapper>
      <SearchForm />
    </Wrapper>
  );
}

export default Header;
