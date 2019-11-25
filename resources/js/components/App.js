  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
  import Container from '@material-ui/core/Container'
  import Login from './Login.js'
  import SignUp from './SignUp.js'
  import AfficherThese from './AfficherThese.js'
  import Acceuil from './Acceuil.js'
  import AddThese from './AddThese.js'

    const App = (props) => {
      return (
        <Router>
            <Switch>
              <Route exact path="/" component={Acceuil}/>
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/AfficherThese" component={AfficherThese}/>
              <Route path="/AddThese" component={AddThese}/>
            </Switch>
        </Router>
      );
    };

  ReactDOM.render(<App />, document.getElementById('app'))
