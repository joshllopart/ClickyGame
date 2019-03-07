import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Cards from './Components/Cards';
import Img from './Images.json';

class App extends Component {
state={
  Img, 
  Clicked : [],
  Score : 0 
}

handleClick =event => {
  var index = event.target.alt;
  var gotClicked = this.state.Clicked.indexOf(index)>-1;

  if(gotClicked){
    this.setState({
    Img: this.state.Img.sort((a, b) => {
      return 0.5 - Math.random();
    }),

    Clicked : [],
    score : 0
    });
    alert("You lose :(");
  }
  else{
    this.setState({
      Img: this.state.Img.sort((a, b) => {
        return 0.5 - Math.random();
      }),
      gotClicked : this.state.Clicked.push(index),
      Score : this.state.Score+1,

    },
    ()=> {
      if(this.state.Score===12){
        alert("Yeyy You Win!!");
        this.setState({
          Img: this.state.Img.sort((a, b) => {
            return 0.5 - Math.random();
          }),
      
          Clicked : [],
          score : 0
        });
      }
    }
    )

  }

};

  render() {
    return (
      <div className="App">
        <Navbar 
          score = {this.state.Score}

        />
        <Jumbotron />
        <div className="container1">
          {this.state.Img.map(Image => (
          <Cards 
            key={Image.id}
            id={Image.id}
            name={Image.name}
            img={Image.Img}
            onClick={this.handleClick}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
