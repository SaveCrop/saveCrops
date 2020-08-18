import React from 'react';
import axios from 'axios';
import '../ShowOrders/ShowOrder.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
const head = ['#', 'Type', 'Quantitey Kg', 'Date', 'Price $'];
class ShowOrders extends React.Component {
  state = {
    elements: [],
    sumation: 0,
    name: '',
  };
  sumOfValue = () => {
    var arr = this.state.elements.map((item) => {
      return item.price;
    });
    var sum = arr.reduce((acc, prev) => {
      return acc + prev;
    }, 0);
    return sum;
  };
  componentDidMount = () => {
    var phoneNumber = localStorage.getItem('phoneNumber');
    axios
      .post('/getName', {
        phoneNumber: phoneNumber,
      })
      .then((result) => {
        this.setState({
          name: result.data[0].name,
        });
        // var x = result.data;
        // console.log(x['name']);
      });
    axios
      .post('/getcards', {
        phoneNumber: phoneNumber,
      })
      .then((result) => {
        // console.log(result);
        // console.log('resullllllllllllt');
        this.setState({
          elements: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  hanldeSelect = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    var curMonth = e.target.value;
    var currentTime = new Date().getMonth();
    // console.log(currentTime);
    // console.log(currentTime);
    this.state.elements.forEach((element) => {
      console.log(typeof element.date);
    });
  };
  render() {
    return (
      <div>
        <div>Welocme :{this.state.name}</div>
        <select
          class='browser-default custom-select'
          onChange={this.hanldeSelect}
        >
          <option selected> this select menu</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
        <button type='button' class='btn btn-info'>
          get the total
        </button>
        <p> Total Price :{this.sumOfValue() + '$'}</p>

        <table class='table'>
          <thead>
            <tr>
              {head.map((e, index) => {
                return <th key={index}>{e}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.elements.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td> {element.type}</td>
                  <td> {element.quantitey}</td>
                  <td> {element.date}</td>
                  <td> {element.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowOrders;
