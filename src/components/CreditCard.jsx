import React from 'react';

class CreditCard extends React.Component {
    render() {

        let creditLogo = (this.props.type === "Visa")? "/img/visa.png" : "/img/master-card.svg";

        let bankNb = this.props.number;
        let seqBankNb = bankNb.slice(0, 12)
        let displayBankNb = bankNb.replace(seqBankNb, "**** **** **** ")


        let month = (this.props.expirationMonth > 9) ? this.props.expirationMonth : this.props.expirationMonth.toString().padStart(2, '0');
       
        return (
            
            <div className="creditCard" style={{
                color: this.props.color,
                backgroundColor : this.props.bgColor,
                width: '400px',
                height: '215px',
                borderRadius: "15px"
                
                }}>
            <img src={creditLogo} alt="" style={{
                width: "15%",
                height: "auto"
                }}/>
            <h3>{displayBankNb}</h3>
            <h3>Expires: {month}/{this.props.expirationYear.toString().slice(2)}</h3> 
            <span>{this.props.bank}</span>
            <h3>{this.props.owner}</h3>

                
            </div>
    
        )
    }
}

export default CreditCard
