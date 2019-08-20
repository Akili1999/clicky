import React, { Component } from "react";

import Card from "./components/Card";

import Wrapper from "./components/Wrapper";

import NavBar from "./components/NavBar";

import artists from "./artists.json";


class App extends Component { //setting the state of our app
    state = {
      artists, // This is our array of objects that is stored within a json file, which includes the name, id, and image for each card
      score: 0, // This is the starting score
      highscore: 0, // This is the starting highscore
      guessed: [] // This is an array which will house all of our guessed pictures
    };
    
    shuffle() { // This will shuffle both arrays so that all cards on the screen will move
      const shuffled = []; // This will store our new array positions after we've shuffled artists
      while (this.state.artists.length > 0){
       shuffled.push(this.state.artists.splice(Math.floor(Math.random() * this.state.artists.length), 1)[0]) // Shuffles the array, and pushes the objects into the shuffled array
      }
      return shuffled; // returning the shuffled array
    };


    NewHigh = () => { // If the score the user reached is higher than the current high score, then we will change
      // The high score to the previous record
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score})
      }
    };

    handleOnClick(clickedCard) {
      const shuffledArray = this.shuffle();
      if (!this.state.guessed.includes(clickedCard)){
        this.state.score++;
        shuffledArray.push(clickedCard);
      }
      this.state.guessed.push(clickedCard);

      if (this.state.guessed.includes(clickedCard)){
        this.state.score = 0;
        return this.setState({
          score: this.state.score,
          highscore: this.state.highscore,
          guessed: []
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
