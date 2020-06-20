import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route } from 'react-router-dom';
import SendText from './components/SendText';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/demo" component={SendText} />
    </React.Fragment>
  );
}

export default App;
