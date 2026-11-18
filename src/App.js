import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from 'react';
import Membre from './components/Membre'


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
    plus: 2,
    isShow : false
  }

  componentDidMount(){
    this.setState({league:ufcLegends})
  }

  handleShow = () =>{
    const isShow = !this.state.isShow
    this.setState({isShow:isShow})
  }

  handleChange = (event, id) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league[id].nom = nom
    this.setState({league:league})
  }

  hideName = (id) => {
    const league = {...this.state.league}
    league[id].nom = "X"
    league[id].age = 0
    this.setState({league:league})
  }

  handleClick = (id,nb) => {
    // cloner this.state.league
    // en JS pour clone ...
    const league = {...this.state.league}
    //league.membre1.age = league.membre1.age + nb
    league[id].age += nb
    //this.setState({league:league})
    this.setState({league})
  }

  render() {
    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre
          key={iteration} 
          age={this.state.league[iteration].age}
          nom={this.state.league[iteration].nom}
          handleChange={(event)=> this.handleChange(event,iteration)}
          hideName={()=>this.hideName(iteration)}
          plus={this.state.plus}
          handleClick={()=>this.handleClick(iteration,this.state.plus)} 
        />
      )
    })

    return (
      <Fragment>
        <h1>UFC</h1>
        <h3>Légende du MMA</h3>
        {list}
        {/* this.handleClick(this.state.plus) dans une fonction anonyme () => {} fonction flechée */}
      </Fragment>
    )
    // return React.createElement('h1',null,'Hello World');
  }

}

export default App;
