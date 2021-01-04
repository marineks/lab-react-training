import React, { Component } from 'react';
import Rating from './Rating';

export default class DriverCard extends Component {
    render() {
        console.log("driver rating", this.props.rating);
        // let ratingNb = Number(this.props.rating);

        return (
            <div className="driverCard" style={{
                backgroundColor: "rgb(76, 107, 225)",
                margin: "5px",
                padding: "0 50px 0 50px",
                width: '700px',
                height: '200px',
                borderRadius: "15px",
                color: "white"
            }}>

            <img src={this.props.img} alt="" style={{
                width: "70px",
                height: "auto"
            }}/>

                <h4>{this.props.name}</h4>
                <Rating>{this.props.rating}</Rating>
                <span>{this.props.car.model} - {this.props.car.licensePlate}</span>
            </div>
        )
    }
    }

