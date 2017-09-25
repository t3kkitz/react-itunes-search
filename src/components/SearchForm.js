import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  background:#fff;
  display: inline-block;
  line-height: 32px;
  padding: 8px;
`;

class SearchForm extends Component {
  render() {
    return (
      <Wrapper>
        <input type="text" />
        <button type="submit">Search</button>
        <select>
          <option>all</option>
        </select>
      </Wrapper>
    );
  }
}

export default SearchForm;
