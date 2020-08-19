import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../AddItem/addItems.css';

class AddItem extends React.Component {
  state = {
    type: '',
    quantitey: '',
    date: 0,
    price: '',
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
      this.state.quantitey == 0 ||
      this.state.price == 0
    ) {
      swal('Wrong in Enter Items P.S try agin!');
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
      swal('Sucess!');
      this.setState({
        type: '',
        quantitey: '',
        date: 0,
        price: '',
        sell: false,
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      // <div className='products'>
      //   <form onSubmit={this.submitValues}>
      //     name of product:{' '}
      //     <input type='text' name='type' onChange={this.handelChange}></input>{' '}
      //     <br />
      //     Quantitey:
      //     <input
      //       type='number'
      //       name='quantitey'
      //       onChange={this.handelChange}
      //     ></input>
      //     <br />
      //     Date:
      //     <input type='date' name='date' onChange={this.handelChange}></input>
      //     <br />
      //     price/Units
      //     <input
      //       type='number'
      //       name='price'
      //       onChange={this.handelChange}
      //     ></input>
      //     <br />
      //     <input type='submit'></input>
      //   </form>
      // </div>
      <div className='addItems'>
        <h1>Add products</h1>
        <Form.Group>
          <Form.Label className='label'>Enter products </Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Name product'
            onChange={this.handelChange}
            name='type'
            value={this.state.type}
          />
          <br />
          <Form.Label className='label'>Enter Quantitey </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='Total of Quantitey'
            onChange={this.handelChange}
            name='quantitey'
            value={this.state.quantitey}
          />{' '}
          <br />
          <Form.Label className='label'>Enter the Date </Form.Label>
          <Form.Control
            size='lg'
            type='date'
            placeholder=' Date'
            onChange={this.handelChange}
            name='date'
            value={this.state.date}
          />{' '}
          <br />
          <Form.Label className='label'>Enter the price </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='price'
            onChange={this.handelChange}
            name='price'
            value={this.state.price}
          />{' '}
          <br />
          <Button variant='primary' type='submit' onClick={this.submitValues}>
            Submit
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default AddItem;
