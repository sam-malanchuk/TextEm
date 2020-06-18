import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { send_sms } from '../redux/actions.js';
import { MDBRow, MDBBtn, MDBInput } from "mdbreact";

class SendText extends React.Component {
    constructor() {
		super()
		this.state = {
            phone: '',
            message: '',
		}
    }

	handleChange = event => {
		event.preventDefault()

		this.setState({
			[event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const { phone, message } = this.state;
        const payload = {
            "recipient": "+1" + phone,
            "message": message,
        }

        this.props.send_sms(payload)
            .then(() => {
                console.log("Text has sent!");
            })
            .catch((err) => {
                console.error(err);
            })
    }
    
	render() {
		const { phone, message } = this.state
        
        return (
            <MDBRow center>
                <form onSubmit={this.handleSubmit}>
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
                    <MDBBtn type="submit" color="deep-orange">Send a Text!</MDBBtn>
                </form>
            </MDBRow>
        );
    }
}

const mapStateToProps = state => ({
    sendLoading: state.sendLoading,
    sendError: state.sendError,
    sendConfirm: state.sendConfirm,
})

const mapDispatchToProps = {
    send_sms,
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(SendText)
);