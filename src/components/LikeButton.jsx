import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likeCount: 0,
        colorCount : 0,
        color: ['purple','blue','green','yellow','orange','red']
      };
     
      handleIncrementClick = () => {
        console.log('counting...');
        this.setState({
            likeCount: this.state.likeCount + 1,
            colorCount : Math.floor(Math.random() * this.state.color.length)
          });
      };
     
      render() {

        const background = {
            backgroundColor: this.state.color[this.state.colorCount]
        };

        return (
          <div>
            <button onClick={this.handleIncrementClick} style={background}> {this.state.likeCount} Likes </button>
          </div>
        );
      }
    }
