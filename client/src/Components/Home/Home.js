import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import '../land/land.css';

class Home extends React.Component {
  state = {
    elements: [],
    elements: [],
    id: 0,
  };
  delteItem = (e) => {
    e.preventDefault();
    var e = e.target.id;
    var phoneNumber = localStorage.getItem('phoneNumber');
    // console.log(e.target.id);
    axios
      .delete('/delete', {
        data: { id: e, ID_Phone: phoneNumber },
        headers: { Authorization: '***' },
      })
      .then((result) => {
        console.log(
          result,
          'result  when you delete the element from show elements'
        );
        var st = this.state.elements;
        for (let i = 0; i < this.state.elements.length; i++) {
          if (this.state.elements[i]._id === e) {
            st.splice(i, 1);
          }
        }
        this.setState({
          elements: st,
        });
      })
      .catch((e) => {
        console.log(
          e,
          'error  when you delete the element from show elements '
        );
      });
  };
  ////////////////////////////////////////////////EditElement///////////////
  editElement = (e) => {
    console.log(e.target);
    var id = e.target.id;
    this.props.history.push(`/edit/${id}`);
  };
  componentDidMount() {
    var phoneNumber = localStorage.getItem('phoneNumber'); // phone number
    console.log(phoneNumber, 'phone from the landing ');
    axios
      .post('/ShowOrders', {
        ID_Phone: phoneNumber,
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          elements: result.data,
        });
      })
      .catch((error) => {
        console.log(error, 'Error for dataCome from Items ');
      });
  }

  render() {
    return (
      <div className='ShowTransication'>
        {this.state.elements.map((element) => {
          return (
            <div>
              type: {element.type}
              <br />
              quantitey: {element.quantitey}
              <br />
              date: {element.date}
              <br />
              price: {element.price}
              <br />
              <button type='submit' onClick={this.delteItem} id={element._id}>
                {' '}
                Delete
              </button>
              <button type='submit' onClick={this.editElement} id={element._id}>
                {' '}
                Edit
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Home;
