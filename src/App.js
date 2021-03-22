import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Feed from './pages/feed';
import Login from './pages/loginPage';
import Splash from './pages/splashScreen';

function App() {
  return (
    <Router>
      <Body>
        <Switch>
          <Route path="/" exact={true}>
            <Splash />
          </Route>
          <Route path="/login" exact={true}>
            <Login />  
          </Route>
          <Route path="/feed" exact={true}>
            <Feed />  
          </Route>
        </Switch>
    </Body>
    </Router>

  );
}

const Body = styled.div `
  width: 100vw;
`

export default App;
