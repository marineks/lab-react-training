import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        toggle : {isToggleOn: true},
        handleClick : this.handleClick.bind(this)
      }
    
    handleClick() {
        this.setState({
          toggle: !this.state.toggle
      })
    };
    
    render() {
        return (
            <div>
                <img onClick={this.state.handleClick} src={this.state.toggle ? `${this.props.img}` : `${this.props.imgClicked}`} alt=""/>
            </div>
        )
    }
}

// constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

