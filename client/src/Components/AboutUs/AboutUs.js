import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');
export default class AboutUs extends Component {
  state = {
    type: '',
    quantitey: 0,
    date: 0,
    price: 0,
    sell: false,
  };
  handelChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className='addItem'>
        <h1>Add products</h1>
        <Form.Group>
          <Form.Label>Enter products </Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Name product'
            onChange={this.handelChange}
            name='type'
          />
          <br />
          <Form.Label>Enter Quantitey </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='Total of Quantitey'
            onChange={this.handelChange}
            name='quantitey'
          />{' '}
          <br />
          <Form.Label>Enter the Date </Form.Label>
          <Form.Control
            size='lg'
            type='date'
            placeholder=' Date'
            onChange={this.handelChange}
            name='date'
          />{' '}
          <br />
          <Form.Label>Enter the price </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='price'
            onChange={this.handelChange}
            name='date'
          />{' '}
          <br />
          <Button variant='primary' type='submit' onClick={this.submitValues}>
            Submit
          </Button>
        </Form.Group>

        <form>
          <h3>Sign In</h3>

          <div className='form-group'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
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
        </form>
      </div>
    );
  }
}
