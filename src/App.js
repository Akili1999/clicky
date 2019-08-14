import React, { Component } from "react";

import Card from "./components/Card";

import Wrapper from "./components/Wrapper";

import NavBar from "./components/NavBar";

import artists from "./artists.json";


class App extends Component { //setting the state of our app
    state = {
      artists,
      score: 0,
      highscore: 0
    };

    losses = () => { //this function handles losses, if the new score is more than the highscore then the highscore is displayed
        if (this.state.score > this.state.highscore) {
          this.setState({highscore: this.state.score}, function() {
          });
        }
        this.state.artists.forEach(card => {
          card.number = 0;
        });
        this.setState({score: 0});
        return true;
      }

      cardValue = id => {
        const artists = this.state.artists.filter(artist => artist.id !== id);
        let artistIndex = artists.number;
        if(artistIndex === 0){
          artistIndex = artistIndex + 1;
          this.setState({score: this.state.score + 1}, function shuffle(){
            this.state.artists.sort(() => Math.random() - 1)
          })
        } else {
          this.losses()
        }
      }

      render() { //rendering the cards, and assigning them all of the properties we need
        return (
          <Wrapper>
            <NavBar score={this.state.score} highscore={this.state.highscore}>Music Clicky</NavBar>
            {this.state.artists.map(card => (
              <Card
                cardValue={this.clickValue}
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