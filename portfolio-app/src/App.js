import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/pages/homepage.css';
import About from './components/about';
import Header from "./components/header";

class App extends Component {

  constructor(props) {
    super(props);
    this.about= React.createRef();
    this.projects= React.createRef();
    this.contact= React.createRef();
  }
  handleClick= (x) => {
    switch(x) {
      case 1: 
      this.about.current.scrollIntoView({behavior: 'smooth'});
      break;
      case 2:
        this.projects.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 3:
        this.contact.current.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
      <Header fxn={this.handleClick}/>
      <Homepage fxn={this.handleClick}/>
      <About rf={this.about}/>
      </div>
    );
  }
}

export default App;
