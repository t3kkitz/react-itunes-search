import React from 'react';
import styled from 'styled-components';

function Message(props) {

  const text = {
    start:     {
      header:      'Welcome back!',
      background:  'black',
      description: 'Please use enter to start search!'
    },
    loading:   {
      header:      'Just one second',
      background:  'blue',
      description: 'Fetching data......'
    },
    noContent: {
      header:      'No search results',
      background:  'yellow',
      description: 'There is no data.'
    },
    error:     {
      header:      'Error',
      background:  'red',
      description: `We're sorry please try again later.`
    },
    clean:     {
      header:      'Looks for something else?',
      background:  'cyan',
      description: `Please enter your next search request`
    }

  }[props.status];

  const Wrapper = styled.div`
padding:  16px;
background-color:#CCCCCC;
color:#FFFFFF;
margin:  16px;
.description{
margin-top:  8px;
}
`

  return (
    <Wrapper>
      <div className="header">{text.header}</div>
      <div className="description">{text.description}</div>
    </Wrapper>
  );
}

export default Message;