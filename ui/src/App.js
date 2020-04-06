import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import MedProvider from './pages/search_pages/medical_providers';
import CHC from './pages/search_pages/chcs';
import BHProvider from './pages/search_pages/bh_providers';
import Hospital from './pages/search_pages/hospitals';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import './App.scss';


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path="/about" render={(routeProp) => (
          <AboutUs {...routeProp} {...this.state} update={this.update}/>
          )} />

        <Route exact path="/" render={(routeProp) => (
          <Home {...routeProp} {...this.state} update={this.update}/>
          )} /> 

        <Route exact path="/contact" render={(routeProp) => (
          <ContactUs {...routeProp} {...this.state} update={this.update}/>
          )} />   

        <Route exact path="/medical_providers" render={(routeProp) => (
          <MedProvider {...routeProp} {...this.state} update={this.update}/>
          )} />

        <Route exact path="/chcs" render={(routeProp) => (
          <CHC {...routeProp} {...this.state} update={this.update}/>
          )} />

        <Route exact path="/bh_providers" render={(routeProp) => (
          <BHProvider {...routeProp} {...this.state} update={this.update}/>
          )} />

        <Route exact path="/hospitals" render={(routeProp) => (
          <Hospital {...routeProp} {...this.state} update={this.update}/>
          )} />

      <Footer />
    </div>
  </Router>
  );
}
}

export default App;
