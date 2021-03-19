import React from 'react';
import styled from 'styled-components';
import Feed from './components/feed';
import Nav from './components/nav';

function App() {
  return (
    <Body>
      <Nav />
      <Feed />
    </Body>
  );
}

const Body = styled.div `
  width: 100vw;
`

export default App;
