import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import '../../AddItem/addItems.css';
import './signup.css';

class SignUp extends React.Component {
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
    if (
      this.state.name.length < 3 ||
      this.state.phoneNumber < 5 ||
      this.state.password === 0
    ) {
      swal('wrong  in name or phone Try agin please ');
    } else {
      axios
        .post('/SignUp', {
          name: this.state.name,
          phoneNumber: this.state.phoneNumber,
          role: this.state.role,
          password: this.state.password,
        })
        .then((result) => {
          console.log(result);
          if (result.data === 'Add user opreation is sucess') {
            this.props.history.push('/logIn');
          } else {
            // alert('Pleas   sign Up^-^');
            console.log('fail');
            this.props.history.push('/signUp');
          }
        })

        .catch((e) => {
          console.log(e);
        });
    }
    swal('Sucess');
    this.setState({
      name: '',
      phoneNumber: '',
      role: '',
      password: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className='signUp'>
        <h1>ٍ SignUp</h1>
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
            type='password'
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
      </div>
    );
  }
}
export default SignUp;
