import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

function Landing() {
    return (
        <MDBRow center>
            <MDBCol className="text-center" md="8">
                <h2>Welcome to Text-Em</h2>
                <h4>The platform that allows you to easily send out text message communications to a large group.</h4>
                <br />
                <Link to="/register"><MDBBtn color="info">Let's go!</MDBBtn></Link>
            </MDBCol>
        </MDBRow>
    );
}

export default withRouter(Landing);