import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');
export default class AboutUs extends Component {
  state = {
    name: '',
    phoneNumber: 0,
    role: '',
    password: 0,
  };
  handelChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  registerData = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className='addItem'>
        <h1>ٍSign Up</h1>
        <Form.Group>
          <Form.Label>Fisrt and last name </Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='name'
            onChange={this.handelChange}
            name='name'
          />
          <br />
          <Form.Label>Enter phoneNumber</Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='phoneNumber'
            onChange={this.handelChange}
            name='phoneNumber'
          />{' '}
          <br />
          <Form.Label>Enter As farmer /User </Form.Label>
          <select selected onChange={this.handelChange} name='role'>
            <option value='role'>role</option>
            <option value='farmer'>Farmers</option>
            <option value='user'>User</option>
          </select>
          <br />
          <br />
          <Form.Label>Enter the password </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='password'
            onChange={this.handelChange}
            name='password'
          />{' '}
          {/* <select>
            <option value='ads'>value</option>
          </select> */}
          <br />
          <Button variant='primary' type='submit' onClick={this.registerData}>
            Submit
          </Button>
        </Form.Group>

        {/* <form>
          <h3>Sign In</h3>

          <div className='form-group'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter phone Number'
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
            />
          </div>

          <div className='form-group'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='customCheck1'
              />
              <label className='custom-control-label' htmlFor='customCheck1'>
                Remember me
              </label>
            </div>
          </div>

          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
          <p className='forgot-password text-right'>
            Forgot <a href='#'>password?</a>
          </p>
        </form> */}
      </div>
    );
  }
}
