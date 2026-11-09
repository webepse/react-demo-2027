import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from 'react';

class App extends Component{

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h3>Début de ReactJS</h3>
      </Fragment>
    )
    // return React.createElement('h1',null,'Hello World');
  }

}

export default App;