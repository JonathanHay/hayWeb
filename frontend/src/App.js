import React from 'react';
import './App.css';
import Nav from "./components/nav";
import PageHeader from "./components/pageheader";
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <Nav></Nav>
    </div>
  );
}

export default App;
