import React from 'react';
import axios from 'axios';
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
  };

  render() {
    console.log(this.state);
    return (
      <div className=''>
        <form onSubmit={this.registerData}>
          <input type='text' name='name' onChange={this.handelChange}></input>{' '}
          <br />
          <input
            type='number'
            name='phoneNumber'
            onChange={this.handelChange}
          ></input>{' '}
          <br />
          <select onChange={this.handelChange} name='role'>
            <option>Farmers</option>
            <option>User</option>
          </select>
          <br />
          <input
            type='password'
            name='password'
            onChange={this.handelChange}
          ></input>
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
export default SignUp;
