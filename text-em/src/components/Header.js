import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBFormInline } from 'mdbreact';

class Header extends React.Component {  state = {
  collapsed: false
};

handleTogglerClick = () => {
  const { collapsed } = this.state;
  this.setState({
    collapsed: !collapsed
  });
};

componentWillUnmount() {
  document.querySelector('nav').style.height = 'auto';
}

render() {
  const { collapsed } = this.state;

  const overlay = (
    <div
      id='sidenav-overlay'
      style={{ backgroundColor: 'transparent' }}
      onClick={this.handleTogglerClick}
    />
  );
  return (
      <Router>
        <div>
          <MDBNavbar
            color='deep-orange'
            dark
            expand='md'
            fixed='top'
            scrolling
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className='white-text'>Text-Em</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='#!'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Link 1</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Link 2</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className='md-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
      </Router>
    );
  }
}

export default withRouter(Header);