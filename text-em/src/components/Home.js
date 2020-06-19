import React from 'react';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBAnimation } from 'mdbreact';
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  </h6>
                  <MDBBtn color='white'>Download</MDBBtn>
                  <MDBBtn outline color='white'>
                    Learn More
                  </MDBBtn>
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

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;