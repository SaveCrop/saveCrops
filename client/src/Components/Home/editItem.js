import React from 'react';
import axios from 'axios';
import '../land/land.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../AddItem/addItems.css';

class EditItem extends React.Component {
  state = {
    type: '',
    quantitey: '',
    date: '',
    price: '',
    sell: false,
    id_Item: this.props.match.params.id,
  };
  handelChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitValues = (e) => {
    e.preventDefault();
    axios.put('/editElement', {
      type: this.state.type,
      quantitey: this.state.quantitey,
      date: this.state.date,
      price: this.state.price,
      sell: false,
      id_Item: this.props.match.params.id,
    });
    this.setState({
      type: '',
      quantitey: '',
      date: '',
      price: '',
      sell: false,
    });
  };
  componentDidMount() {
    axios
      .post('/getbeforeEdit', {
        id_Item: this.props.match.params.id,
      })
      .then((result) => {
        // console.log(result.data[0], 'the data coming from edit items');
        this.setState({
          type: result.data[0].type,
          quantitey: result.data[0].quantitey,
          date: result.data[0].date,
          price: result.data[0].price,
        });
      });
  }
  render() {
    return (
      <div className='addItems'>
        <h1>Edit products</h1>
        <Form.Group>
          <Form.Label className='label'>Edit/old products </Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Name product'
            onChange={this.handelChange}
            name='type'
            value={this.state.type}
          />
          <br />
          <Form.Label className='label'>Edit/old Quantitey </Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='Total of Quantitey'
            onChange={this.handelChange}
            name='quantitey'
            value={this.state.quantitey}
          />{' '}
          <br />
          <Form.Label className='label'>Edit old Date </Form.Label>
          <Form.Control
            size='lg'
            type='date'
            placeholder=' Date'
            onChange={this.handelChange}
            name='date'
            value={this.state.date}
          />{' '}
          <br />
          <Form.Label className='label'>Edit old price </Form.Label>
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

export default EditItem;
