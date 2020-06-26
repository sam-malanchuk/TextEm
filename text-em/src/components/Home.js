import React from 'react';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBAnimation } from 'mdbreact';
import { Link } from 'react-router-dom';
import '../AppPage.css';

class Home extends React.Component {
  render() {
    return (
      <div id='apppage'>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    Text your team with ease
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                  The platform that allows you to easily send out 
                  text message communications to a large group with a click of a button.
                  </h6>
                  <Link to="/demo">
                    <MDBBtn color='white'>Try Demo</MDBBtn>
                  </Link>
                  <Link to="/demo">
                    <MDBBtn outline color='white'>Sign Up</MDBBtn>
                  </Link>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Home;