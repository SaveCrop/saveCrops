import React from 'react';
import axios from 'axios';
class LogIn extends React.Component {
  state = {
    phoneNumber: 0,
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

    axios
      .post('/logIn', {
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
      })
      .then((result) => {
        if (result.data === 'The User is not exist') {
          alert(' signUpPLease');
          this.props.history.push('/signUp');
        } else if (result.data === 'The password is Wrong') {
          alert('Password Worong! ');
          console.log(result.data.user.phoneNumber);
        }
        ////// it's phonenumber for define who the farmers.
        else {
          this.props.history.push('/');
          localStorage.setItem('phoneNumber', result.data.user.phoneNumber);
          // for the localStorge//
        }

        // for data come from validaite if the use is exisit or not.
      })
      .catch((e) => {
        console.log('error', e);
      });
  };

  render() {
    return (
      <div className='logIn'>
        <form onSubmit={this.logIn}>
          <input
            type='number'
            placeholder='phoneNumber'
            name='phoneNumber'
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type='password'
            name='password'
            onChange={this.handleChange}
            placeholder='password'
          ></input>
          <br />
          <input type='submit' />
        </form>
        <form>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' class='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div class='form-check'>
            <input
              type='checkbox'
              class='form-check-input'
              id='exampleCheck1'
            />
            <label class='form-check-label' for='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default LogIn;
