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
import '../Contact Us/contact.css';

var ContactUS = () => {
  return (
    <div>
      <h3>Contact Form</h3>

      <div class='container'>
        <form>
          <label for='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
          />

          <label for='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name..'
          />

          <label for='country'>Country</label>
          <select id='country' name='country'>
            <option value='australia'>Australia</option>
            <option value='canada'>Canada</option>
            <option value='usa'>USA</option>
          </select>

          <label for='subject'>Subject</label>
          <textarea
            id='subject'
            name='subject'
            placeholder='Write something..'
          ></textarea>

          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};
export default ContactUS;
