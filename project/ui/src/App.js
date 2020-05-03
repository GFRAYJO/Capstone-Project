import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './shared/components/header';
import Footer from './shared/components/footer';
import Home from './home/home';
import MedProvider from './pages/medical/medical_providers';
import CHC from './pages/chc/chcs';
import BHProvider from './pages/behavioral/bh_providers';
import Hospital from './pages/hospital/hospitals';
import AboutUs from './aboutUs/about';
import ContactUs from './contactUs/contact';
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
