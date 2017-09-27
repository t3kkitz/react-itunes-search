import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background:#212121;
  padding:  8px;
  display: flex;
  justify-content: center;
  form {
  margin: 8px;
  width: 100%;
  max-width: 960px;
  display: flex;
  background:#FFFFFF;
  height:  40px;
  }
  input{
  flex: 1 0 auto;
  height:  100%;
  outline: none;
  padding:  0 8px;
  border: none;
  font-size:  20px;
  font-weight: bold;
  } 
  select{
  height: 100%;
  }
`;

function Header(props) {
  const {query, media, handleInputChange, handleMediaChange} = props;
  return (
    <Wrapper>
      <form>
        <input type="text"
               onChange={handleInputChange}
               placeholder="iTunes search"
               value={query}
               autoFocus/>
        <select value={media} onChange={handleMediaChange}>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="musicVideo">MusicVideo</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">ShortFilm</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">E-book</option>
          <option value="all">All</option>
        </select>
      </form>
    </Wrapper>
  );
}

export default Header;