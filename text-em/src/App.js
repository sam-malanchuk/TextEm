import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import Landing from './components/Landing';
import SendText from './components/SendText';

function App() {
  return (
    <MDBContainer>
      <Route exact path="/" component={Landing} />
      <Route exact path="/demo" component={SendText} />
    </MDBContainer>
  );
}

export default App;
