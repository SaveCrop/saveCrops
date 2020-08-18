import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import '../land/land.css';

class EditItem extends React.Component {
  state = {
    type: '',
    quantitey: 0,
    date: 0,
    price: 0,
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
  };

  render() {
    console.log(this.state);
    return (
      <div className='editEle'>
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

export default EditItem;
