import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import AddItem from '../src/Components/AddItem/AddItem';
import ContactUs from '../src/Components/Contact Us/ContactUs';
import ShowTransications from '../src/Components/ShowTrnasications/ShowTransications';
import Home from '../src/Components/Home/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  );
}

export default App;
