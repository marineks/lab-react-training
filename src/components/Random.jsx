import React from 'react';

class Random extends React.Component {
    render() {
        // Math.random() * (max - min) + min;
        let randomNumber = Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min);

        return (
            <div>
            <p>Random value between {this.props.min} and {this.props.max} is {randomNumber} </p>
            </div>
        )
    }
}

export default Random
