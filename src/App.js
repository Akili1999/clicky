import React, { Component } from "react";

import Card from "./components/Card";

import Wrapper from "./components/Wrapper";

<<<<<<< HEAD
import NavBar from "./components/NavBar";
=======
import Header from "./components/Header";
>>>>>>> 1a26f2bf09abdd041011c3ce26af0b76d834eeb3

import cards from "./cards.json";

class App extends Component {
    state = {
      cards,
      score: 0,
      highscore: 0
    };

    gameOver = () => {
        if (this.state.score > this.state.highscore) {
          this.setState({highscore: this.state.score}, function() {
            console.log(this.state.highscore);
          });
        } else if (this.state.score === 10){
          
        }
        this.state.cards.forEach(card => {
          card.number = 0;
        });
        this.setState({score: 0});
        return true;
      }
    
      clickNumber = id => {
        this.state.cards.find((o, i) => {
          if (o.id === id) {
            if(cards[i].number === 0){
              cards[i].number = cards[i].number + 1;
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });
              this.state.cards.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              this.gameOver();
            }
          }
        });
      }

      render() {
        return (
          <Wrapper>
            <NavBar score={this.state.score} highscore={this.state.highscore}>Clicky Game</NavBar>
            {this.state.cards.map(card => (
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