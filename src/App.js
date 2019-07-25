import React, { Component } from "react";

import Card from "./components/Card";

import Wrapper from "./components/Wrapper";

import NavBar from "./components/NavBar";

import artists from "./artists.json";

class App extends Component {
    state = {
      artists,
      score: 0,
      highscore: 0
    };

    losses = () => {
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

      clickNumber = id => {
        this.state.artists.find((j, i) => {
          if (j.id === id) {
            if(artists[i].number === 0){
              artists[i].number = artists[i].number + 1;
              this.setState({score : this.state.score + 1}, function(){
              });
              this.state.artists.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              this.losses();
            }
          }
        });
      }

      render() {
        return (
          <Wrapper>
            <NavBar score={this.state.score} highscore={this.state.highscore}>Music Clicky</NavBar>
            {this.state.artists.map(card => (
              <Card
                clickNumber={this.clickNumber}
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