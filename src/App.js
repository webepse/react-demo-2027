import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from 'react';
import Membre from './components/Membre'
import Button from './components/Button';

const ufcLegends = {
  membre1: {
    nom: "Georges St-Pierre",
    age: 45
  },
  membre2: {
    nom: "Jon Jones",
    age: 39
  },
  membre3: {
    nom: "Khabib Nurmagomedov",
    age: 38
  },
  membre4: {
    nom: "Anderson Silva",
    age: 51
  }
}


class App extends Component{

  state = {
    league: ufcLegends,
    plus: 2
  }

  handleClick = (nb) => {
    // cloner this.state.league
    // en JS pour clone ...
    const league = {...this.state.league}
    //league.membre1.age = league.membre1.age + nb
    league.membre1.age += nb
    //this.setState({league:league})
    this.setState({league})
  }

  render() {
    return (
      <Fragment>
        <h1>UFC</h1>
        <h3>Légende du MMA</h3>
        <Membre 
          nom={this.state.league.membre1.nom} 
          age={this.state.league.membre1.age} 
        />
        <Membre 
          nom={this.state.league.membre2.nom} 
          age={this.state.league.membre2.age} 
        />
        <Membre 
          nom={this.state.league.membre3.nom} 
          age={this.state.league.membre3.age} 
        />
        <Membre 
          nom={this.state.league.membre4.nom} 
          age={this.state.league.membre4.age} 
        />
        {/* this.handleClick(this.state.plus) dans une fonction anonyme () => {} fonction flechée */}
        <Button plus={this.state.plus} veillir={()=>{this.handleClick(this.state.plus)}}/>
      </Fragment>
    )
    // return React.createElement('h1',null,'Hello World');
  }

}

export default App;

