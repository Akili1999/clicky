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
    
    handleOnClick = id => { // This is the main function for the game
      // we are passing in the id of our cards, so that we can later control where they go
      // Once a card is clicked, it will be stored into the array of Guesses
      // If a user guesses a card id that exists in the Guesses array, the user loses
    if(this.state.guessed.includes(id)){ 
      this.Losses();
      return;
    } else {
      this.state.guessed.push(id); //If the user makes a successful guess, we push the card with the corresponding Id, into the guessed array
      this.setState({ score: this.state.score + 1}); // And then grant a point to the user
      for (let i = artists.length - 1; i > 0; i--) { // To shuffle the cards, we are gonna loop through the artists array
        var shuffle = Math.floor(Math.random() * (i + 0.5)); // This varible, can be applied to our array, allowing us to take
        // A random card, picked by math.random, and swap it with the index of artists. Thus, shuffling the array for the user to guess again
        [artists[i], artists[shuffle]] = [artists[shuffle], artists[i]]
      }

      if(this.state.score > this.state.highscore){ //If the score that we have currently scored is higher
        //than our previous best, then we will update the nav bar so show
        this.setState({highscore: this.state.score})
      }
    }
    };


    Losses = () => {
      this.setState({ guessed: [], score: 0 }); // if the user losses, the array to store guesses will be emptied
      // And the score will be reset
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
