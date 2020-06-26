import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        message="Your text message has been sent!"
        text="Now"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}

export default Notification;