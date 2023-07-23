import React from 'react';
import './App.css';
import Listing from './components/Listing/Listing';
import items from './data.json'

function App() {
  return (
    <div><Listing items={items}></Listing></div>
  );
}

export default App;
