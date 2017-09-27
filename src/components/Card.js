import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100%/6 - 16px);
  min-width:  200px;
  margin: 8px;
  background:#FFFFFF;
  border-radius: 2px;
  display: flex;
  flex-flow:  column nowrap;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 
  0px 3px 4px 0px rgba(0, 0, 0, 0.14), 
  0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  transition: transform .2s;
  &:hover{
  transform: translateY(-3px);
  }
`;

const ArtworkBox = styled.a`
  display: inline-block;
`;

const Artwork = styled.img`
width: 100%;
  max-width: 100%;
  vertical-align: middle;
`

const Header = styled.div`
  padding: 8px;
  .type{
  float: right;
  font-size: 13px;
  color:#CCCCCC;
  }
  .name{
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  }
  .artist{
    font-size: 15px;
    color:#999999;
  }
`;

const Extra = styled.div`
border-top: 1px solid #EEEEEE;
font-size:  13px;
color:#999999;
margin-top: auto;
padding:  8px;
.releaseDate{
float: right;
}
`

function Card(props) {
  const {kind, artistName} = props;

  const artwork     = props.artworkUrl100.replace('100x100', '300x300');
  const name        = props.trackName || props.collectionName;
  const description = props.longDescription || props.description;
  const viewUrl     = props.trackViewUrl || props.collectionViewUrl;
  const price       = (() => {
    let price = props.trackPrice || props.collectionPrice || props.price || 0;
    if (typeof price === 'number' && price !== -1) return price;
    return undefined;
  })();
  const releaseDate = new Date(props.releaseDate).toLocaleDateString();

  return (
    <Wrapper title={description}>
      <ArtworkBox href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer">
        <Artwork src={artwork} alt={name}/>
      </ArtworkBox>
      <Header>
        <div className="name">{name}</div>
        <div className="type">{kind}</div>
        <div className="artist" title={artistName}>{artistName}</div>
      </Header>
      <Extra>
        <span className="releaseDate" title={`Release on ${releaseDate}`}>{releaseDate}</span>
        {price && <span>$&nbsp;{price}</span>}
      </Extra>
    </Wrapper>
  );
}

export default Card;
