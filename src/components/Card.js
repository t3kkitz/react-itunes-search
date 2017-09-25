import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  min-width:180px;
  min-height: 180px;
  margin: 8px;
  display: inline-block;
  background: #CCCCCC url(${props => props.artwork}) center/cover no-repeat;
`;

function Card(props) {
  const {
    trackViewUrl,
    collectionViewUrl,
    artworkUrl100,
  } = props;
  const artwork = artworkUrl100.replace('100x100', '200x200');

  return (
    <Wrapper
      href={trackViewUrl || collectionViewUrl}
      target="_blank"
      rel="noopener noreferrer"
      artwork={artwork}
    />
  );
}

export default Card;
