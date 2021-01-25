import React from 'react';
import './ContactCard.css';

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        console.log("PROPS", this.props)

        this.state = {
            isHidden: false
        }
    }
        
        
        
        
        detailToggle = () => {
            let hidden = this.state.isHidden;
            if (hidden === true) {
                this.setState({isHidden: false})
            } else {
                this.setState({isHidden: true})
            }
            
        };
        
        
        render() {
            if (this.state.isHidden === true) {
                console.log(this.state.isHidden)
                return (
                    <section>
                    <li style={{ margin: "0px"}}>
                        <img src={this.props.picture} alt={"Person"}></img>
                        <h2>{this.props.firstName} {this.props.lastName}</h2>
                        <h4>Phone: {this.props.phone}</h4> 
                        <h4>Cell: {this.props.cell}</h4>
                          <h4>{this.props.email}</h4>
                        <h5>{this.props.city}, {this.props.state}, {this.props.country}</h5>
                    </li>
                    <button style={{ margin: "10px"}} onClick={this.detailToggle}>
                       Hide Details
                    </button>
                </section>
                )
            } else {
                return (
                    <section>
                    <li style={{ margin: "0px"}}>
                         <img src={this.props.picture} alt={"Person"}></img>
                          <h2>{this.props.firstName} {this.props.lastName}</h2>
                       </li>
                    <button style={{ margin: "10px"}} onClick={this.detailToggle}>
                        Show Details</button>
                </section>
                )
            }
        }
}
export default ContactCard;