import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class SendText extends React.Component {
    constructor() {
		super()
		this.state = {
            phone: '',
            message: '',
		}
    }

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
        })
    }
    
	render() {
		const { phone, message } = this.state
        
        return (
            <MDBRow center>
                <MDBCol className="text-center" md="8">
                    <h2>Text-Em Demo</h2>
                    <h4>Try it out yourself!</h4>
                    <MDBInput
                            label="Phone Number"
                            group
                            type="phone"
                            name="phone"
                            value={phone}
                            validate
                            onChange={this.handleChange}
                            required
                            />
                    <MDBInput
                        label="Text Message"
                        group
                        type="text"
                        name="message"
                        value={message}
                        validate
                        onChange={this.handleChange}
                        required
                        />
                    <br />
                    <MDBBtn color="deep-orange">Send a Text!</MDBBtn>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default withRouter(SendText);