import React from 'react';

class BoxColor extends React.Component {
    render() {

        function colorOf(r,g,b){ 
        return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
        };
      
        return (
            
            <div style={{
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
        }}>

            <p>rgb({this.props.r}, {this.props.g}, {this.props.b})</p>
            <br></br>
            <p>{colorOf(this.props.r, this.props.g, this.props.b)}</p>

            </div>
    
        )
    }
}

export default BoxColor
