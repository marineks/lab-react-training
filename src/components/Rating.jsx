import React, { Component } from 'react'

export default class Rating extends Component {
    render() {

        const roundRate = Math.round(this.props.children);
        console.log("this is the rating:", this.props.children);
        let totalRating = "";
        
        for (let i = 0; i < 5; i++) {
          (i < roundRate)? totalRating += "★" : totalRating += "☆"
        }
        
        
        return (
            <div>
            <p>{totalRating}</p>  
            </div>
        )
    }
}
