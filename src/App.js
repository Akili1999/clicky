import React, { Component } from "react";

import Card from "./components/Card";

import Wrapper from "./components/Wrapper";

import NavBar from "./components/NavBar";

import artists from "./artists.json";


class App extends Component { //setting the state of our app
    state = {
      artists, // This is our array of objects that is stored within a json file
      score: 0, // This is the starting score
      highscore: 0, // This is the starting highscore
      guessed: [] // This is an array which will house all of our guessed pictures
    };
    
    NewHigh = () => { // If the score the user reached is higher than the current high score, then we will change
      // The high score to the previous record
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score})
      }
    };

    shuffle() { // This will shuffle both arrays so that all cards on the screen will move
      this.state.artists.sort(() => Math.random() - 1);
      this.state.guessed.sort(() => Math.random() - 1);
    };

    handleOnClick = id => {
      if(this.state.guessed.includes(id)){
        this.setState({
          guessed: [],
          score: 0
        })
      }
    }



      
      render() { //rendering the cards, and assigning them all of the properties we need
        return (
          <Wrapper>
            <NavBar score={this.state.score} highscore={this.state.highscore}>Music Clicky</NavBar>
            {this.state.artists.map(card => (
              <Card
                handleOnClick={this.handleOnClick}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </Wrapper>
        );
      }
    }
    
export default App;