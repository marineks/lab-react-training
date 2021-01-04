import React from 'react'

class Greetings extends React.Component {
    render() {

        let message = this.props.lang === "de" ? <h5>Hallo {this.props.children}</h5>: <h5>Bonjour {this.props.children}</h5>; 


         return (
        <div>
            <h1 lang={this.props.lang}> {message}</h1>
        </div>
    )
    }
}


export default Greetings
