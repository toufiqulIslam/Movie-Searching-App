import React,{Component} from 'react';
import './App.css';
import Home from './home';
import Login from './login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar,Nav,Container,NavbarBrand,CardGroup,Card,Form,FormControl,Button } from 'react-bootstrap';

class App extends React.Component{

  componentWillMount() {
    document.title = 'Showtime'
  };
  render() {
    return (
      <>
        <Router>
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
