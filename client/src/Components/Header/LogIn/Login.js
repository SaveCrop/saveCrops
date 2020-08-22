import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../LogIn/LogIn.css';
import img from '../LogIn/img.png';
// import '../../AddItem/addItems.css';
import swal from 'sweetalert';

class LogIn extends React.Component {
  state = {
    phoneNumber: '',
    password: '',
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  logIn = (e) => {
    e.preventDefault();
    if (this.state.phoneNumber > 4 || this.state.password.length > 4) {
      axios
        .post('/logIn', {
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
        })
        .then((result) => {
          if (result.data === 'The User is not exist') {
            // alert(' signUpPLease');
            swal(' no account Signup please ');
            this.props.history.push('/signUp');
          } else if (result.data === 'The password is Wrong') {
            swal('Password Worong! ');
            console.log(result.data.user.phoneNumber);
          }
          ////// it's phonenumber for define who the farmers.
          else {
            swal('sucess !');

            this.props.history.push('/');
            localStorage.setItem('phoneNumber', result.data.user.phoneNumber);
            // for the localStorge//
          }

          // for data come from validaite if the use is exisit or not.
        })
        .catch((e) => {
          console.log('error', e);
        });
    } else {
      swal('hhhhhh');
    }
  };

  render() {
    console.log(this.state);
    return (
      // <div className='logIn'>
      //   <form onSubmit={this.logIn}>
      //     <div class='form-group'>
      //       <label for='exampleInputEmail1'>phone Number</label>
      //       <input
      //         type='number'
      //         class='form-control'
      //         id='exampleInputEmail1'
      //         aria-describedby='emailHelp'
      //         placeholder='Enter email'
      //         name='phoneNumber'
      //         onChange={this.handleChange}
      //       />
      //       <small id='emailHelp' class='form-text text-muted'>
      //         We'll never share your email with anyone else.
      //       </small>
      //     </div>
      //     <div class='form-group'>
      //       <label for='exampleInputPassword1'>Password</label>
      //       <input
      //         type='password'
      //         class='form-control'
      //         id='exampleInputPassword1'
      //         placeholder='Password'
      //         name='Password'
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //     <div class='form-check'>
      //       <input
      //         type='checkbox'
      //         class='form-check-input'
      //         id='exampleCheck1'
      //       />
      //       <label class='form-check-label' for='exampleCheck1'>
      //         Check me out
      //       </label>
      //     </div>
      //     <button type='submit' class='btn btn-primary'>
      //       Submit
      //     </button>
      //   </form>
      // </div>
      <div className='login'>
        <div className='addItems ' id='signIn'>
          <h1>LogIn</h1>
          <Form.Group>
            <Form.Label className='label'>Enter phone number </Form.Label>
            <Form.Control
              size='lg'
              type='number'
              placeholder='phone number'
              onChange={this.handleChange}
              name='phoneNumber'
              value={this.state.phoneNumber}
            />
            <br />
            <Form.Label className='label'>Enter password</Form.Label>
            <Form.Control
              size='lg'
              type='password'
              placeholder='password'
              onChange={this.handleChange}
              name='password'
              value={this.state.password}
            />{' '}
            <br />
            <Button variant='primary' type='submit' onClick={this.logIn}>
              logIn
            </Button>
          </Form.Group>
        </div>
      </div>
    );
  }
}
export default LogIn;
