import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class AddItem extends React.Component {
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
  submitValues = (e) => {
    e.preventDefault();
    if (
      this.state.type.length == 0 ||
      this.state.type.quantitey == 0 ||
      this.state.type.price == 0
    ) {
      swal('Hello world!');
    } else {
      // this.setState({
      //   phoneNumber: localStorage.getItem('phoneNumber'),
      // });
      // console.log('hhdahsdsadsadsadsa', localStorage.getItem('phoneNumber'));
      var phoneNumbers = localStorage.getItem('phoneNumber');

      axios
        .post('/addItems', {
          type: this.state.type,
          quantitey: this.state.quantitey,
          date: this.state.date,
          price: this.state.price,
          ID_Phone: phoneNumbers,
          sell: this.state.sell,
        })

        .then((result) => {
          console.log('response from server in AddItems ! ', result);
        })
        .catch((error) => {
          console.log('error from server that requsted via add items ', error);
        });
      // console.log('hhdahsdsadsadsadsa', localStorage.getItem('phoneNumber'));
    }
  };
  render() {
    return (
      <div className='products'>
        <form onSubmit={this.submitValues}>
          name of product:{' '}
          <input type='text' name='type' onChange={this.handelChange}></input>{' '}
          <br />
          Quantitey:
          <input
            type='number'
            name='quantitey'
            onChange={this.handelChange}
          ></input>
          <br />
          Date:
          <input type='date' name='date' onChange={this.handelChange}></input>
          <br />
          price/Units
          <input
            type='number'
            name='price'
            onChange={this.handelChange}
          ></input>
          <br />
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
