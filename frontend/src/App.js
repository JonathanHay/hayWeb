import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav";
import PageHeader from "./components/pageheader";
import $ from 'jquery';
import { Button } from 'semantic-ui-react';

class App extends Component {

  componentDidMount() {
    $('html, body').animate({
      scrollTop: $(".AboutPage").offset().top
    });
  }

  render() {
    return (
      <div className="App">
        <PageHeader></PageHeader>
        <Nav></Nav>
      </div>
    );
  }

}

export default App;
