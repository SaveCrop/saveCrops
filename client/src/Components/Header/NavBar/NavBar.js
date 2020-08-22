// import React from 'react';
// import Home from '../../Home/Home';
// import AddItem from '../../AddItem/AddItem';
// import ShowOp from '../../ShowTrnasications/ShowTransications';
// import ContactUs from '../../Contact Us/ContactUs';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// var NavBar = () => {
//   return (
//     <div>
//       <ContactUs />
//     </div>
//   );
// };
// export default NavBar;

import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../NavBar/1751.jpg';

var NavBar = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/logIn'>
          <button type='button' class='btn btn-info'>
            LogIn
          </button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>
              <button type='button' class='btn btn-light'>
                Home
              </button>
            </Nav.Link>
            <Nav.Link href='/AddItems'>
              <button type='button' class='btn btn-light'>
                Add Product
              </button>
            </Nav.Link>
            <Nav.Link href='/showItem'>
              <button type='button' class='btn btn-light'>
                Products
              </button>
            </Nav.Link>
            <Nav.Link href='/ShowOd'>
              <button type='button' class='btn btn-light'>
                Orders{' '}
              </button>
            </Nav.Link>
            <Nav.Link href='/contact'>
              <button type='button' class='btn btn-light'>
                Contact Us
              </button>
            </Nav.Link>
            <Nav.Link href='/aboutUs'>
              <button type='button' class='btn btn-light'>
                About us
              </button>
            </Nav.Link>
          </Nav>
          <Nav.Link href='/LogOut'>
            <button type='button' class='btn btn-light'>
              LogOut
            </button>
          </Nav.Link>
          <Form>
            <img src={img} width='150' height='100' className='img' />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
