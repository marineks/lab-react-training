import React, { Component } from 'react'

const b =['/img/dice1.png','/img/dice2.png','/img/dice3.png','/img/dice4.png','/img/dice5.png','/img/dice6.png'];

export default class Dice extends Component {
    state = {
        diceCount: Math.floor(Math.random() * b.length),
        diceSide: b,
        diceDefault : ['/img/dice-empty.png'],
        newDiceSide: b,
    };
     
      handleIncrementClick = () => {
        setTimeout(() => {
            this.setState({
                diceSide: this.state.diceDefault,
                diceCount : 0
              });
        }, 1);

        setTimeout(() => { 
          this.setState({
              diceSide: this.state.newDiceSide,
              diceCount : Math.floor(Math.random() * this.state.newDiceSide.length)
          });
      }, 1000);
      };

    render() {

    const sortDice = this.state.diceSide[this.state.diceCount]
          
        return (
            <div>
                <img style={{ width: '100px', height: '100px'}} onClick={this.handleIncrementClick} src={sortDice}  alt=""/>
            </div>
        )
    }
}
