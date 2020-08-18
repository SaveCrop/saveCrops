import React from 'react';
import NavBar from '../Header/NavBar/NavBar';
import Land from '../land/land';
import SignUp from '../Header/signUp/signUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.js';
import AddItem from '../AddItem/AddItem';
import ShowTRansication from '../ShowTrnasications/ShowTransications';
import ContactUS from '../Contact Us/ContactUs';
import LogIn from '../Header/LogIn/Login';
import AboutUs from '../AboutUs/AboutUs';
import EditItem from '../Home/editItem';
import ShowOrders from '../ShowOrders/ShowOrders';

var Header = () => {
  return (
    <Router>
      <switch>
        <NavBar />
        <Route exact path='/' component={Land} />
        <Route exact path='/home' component={Land} />
        <Route exact path='/AddItems' component={AddItem} />
        <Route exact path='/showItem' component={Home} />
        <Route exact path='/ShowOd' component={ShowOrders} />
        <Route exact path='/contact' component={ContactUS} />
        <Route exact path='/logIn' component={LogIn} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/aboutUs' component={AboutUs} />
        <Route exact path='/edit/:id' component={EditItem} />
      </switch>
    </Router>
  );
};
export default Header;
