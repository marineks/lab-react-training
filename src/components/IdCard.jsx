import React, {Component} from 'react';

// Iteration 1
class IdCard extends Component {
    render() {

        return (

            <div className="idCard">
            <p> Last name: {this.props.lastName}</p>
            <p> First name: {this.props.firstName}</p>
            <p> Gender: {this.props.gender}</p>
            <p> Height:{this.props.height}</p>
            <p> Birth: {this.props.birth.toDateString()}</p>
            <img src={this.props.picture} alt=""/>
            </div>

        // lastName = String,
        // firstName = String,
        // gender = {
        //   type: String,
        //   enum: ['male', 'female']
        // },
        // height = Number,
        // birth = Date,
        // picture = String,
        );
    }
}


export default IdCard;