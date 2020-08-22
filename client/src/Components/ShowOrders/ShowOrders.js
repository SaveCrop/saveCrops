import React from 'react';
import axios from 'axios';
import '../ShowOrders/ShowOrder.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
const head = ['#', 'Type', 'Quantitey Kg', 'Date', 'Price $'];
class ShowOrders extends React.Component {
  state = {
    elements: [],
    sumation: 0,
    name: '',
    curentType: '',
    filter: [],
  };
  sumOfValue = (prop) => {
    var arr = this.state.elements.map((item) => {
      return item[prop];
    });
    var sum = arr.reduce((acc, prev) => {
      return acc + prev;
    }, 0);
    return sum;
  };
  componentDidMount = () => {
    var phoneNumber = localStorage.getItem('phoneNumber');
    if (phoneNumber) {
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
    } else {
      alert('Your are not  logIn');
      this.props.history.push('/LogIn');
    }
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
  /////////////////////////////////////////////for Search Date ////////////////////////////
  handelInput = (e) => {
    var curentType = e.target.value;
    this.setState({
      curentType: curentType,
    });
    //
    var fi = this.state.elements.filter((e) => {
      return e.type === curentType;
    });
    // console.log(fi, 'the data filted ');
    this.setState({
      filter: fi,
    });
    console.log(this.state);
  };

  searchData = (e) => {
    e.preventDefault();
    this.setState({
      elements: this.state.filter,
    });
    this.setState({
      curentType: '',
      filter: [],
    });
  };

  ///////////////////////////////////
  render() {
    console.log(this.state);
    return (
      <div>
        <h1> Orders</h1>
        <p style={{ marginTop: '100px' }}>
          <b style={{ color: 'gray' }}>Welocme :</b>
          <b>{this.state.name} </b>{' '}
        </p>
        <div className='searchData'>
          <InputGroup className='mb-3'>
            <FormControl
              className='a'
              onChange={this.handelInput}
              placeholder='Search by type'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              value={this.state.curentType}
            />
            <InputGroup.Append>
              <Button
                variant='outline-secondary'
                onClick={this.searchData}
                style={{ marginBottom: '60px' }}
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <p>
          {' '}
          <b>Prices is : </b>
          {this.sumOfValue('price') + '$' + '            '}
          <b>Quantitey</b> is:
          {this.sumOfValue('quantitey')}
          <b> Kg</b>
        </p>

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
                  <td> {element.date.substr(0, 10)}</td>
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
