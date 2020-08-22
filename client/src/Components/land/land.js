import React from 'react';
import axios from 'axios';
import { timers, data } from 'jquery';
import '../land/land.css';
import ControlledCarousel from '../slider/Slider';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../Header/Footer/Footer';

class Land extends React.Component {
  state = {
    ele: [],
    filter: [],
    curentType: '',
    sort: [],
  };
  getInput = () => {
    var inputs = document.getElementsByName('input');
    return inputs;
  };

  click = (e) => {
    var currentId = e.target.id;
    var itemsNotDeleted = this.state.ele.filter((e) => {
      return e._id !== currentId;
    });
    this.setState({
      ele: itemsNotDeleted,
    });
    // console.log(currentId, 'curennnnnet');
    // var index = 0;
    // var cur = this.getInput();
    // console.log(cur.length);

    // for (var i = 0; i < cur.length; ++i) {
    //   if (cur[i].id === currentId) {
    //     index = i;
    //     console.log(index);
    //   }
    // }

    // var itemsDelete = this.state.ele;
    // itemsDelete.splice(index, 1);
    // console.log(index, 'indexxxxxxxxxxx');
    // this.setState({
    //   ele: itemsDelete,
    // });
    console.log(currentId, 'current id when targeted');
    axios
      .post('/upDate', {
        sell: true,
        _id: currentId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(
          er,
          'from trqust update to soft delete  in the database ! '
        );
      });
    var phoneNumber = localStorage.getItem('phoneNumber');
    //   axios.post('/addToCard', {
    //     _id: currentId,
    //     phoneNumber: phoneNumber,
    //   });
    axios
      .post('/postInOrder', {
        _id: currentId,
      })
      .then((result) => {
        console.log(
          result.data[0].price,
          'result come from find data in schema Item'
        );

        axios.post('/postDatainOrder', {
          phoneNumber: phoneNumber,
          type: result.data[0].type,
          quantitey: result.data[0].quantitey,
          date: new Date(),
          price: result.data[0].price,
        });
      });
  };

  componentDidMount() {
    var phoneNumber = localStorage.getItem('phoneNumber');
    console.log(phoneNumber, 'phone from the landing ');
    axios
      .post('/b', {
        ID_Phone: phoneNumber,
        sell: false,
      })

      .then((result) => {
        this.setState({
          ele: result.data,
        });
      })
      .catch((error) => {
        console.log(error, 'Error for dataCome from Items ');
      });
  }
  //////////////////////////////////////for Sort data //////////////

  hadlChange = (e) => {
    var currentElement = e.target.value;
    // console.log(currentElement);

    var sorted = this.state.ele.sort((a, b) => {
      return a[currentElement] - b[currentElement];
    });
    this.setState({
      sort: sorted,
    });
  };
  Sort = () => {
    this.setState({
      ele: this.state.sort,
    });
    console.log(this.state);
  };

  ////////////////////////////////////////////////////Search DAta ///////////////////////////////////
  handelInput = (e) => {
    var curentType = e.target.value;
    this.setState({
      curentType: curentType,
    });
    //
    var fi = this.state.ele.filter((e) => {
      return e.type === curentType;
    });
    this.setState({
      filter: fi,
    });
  };
  searchData = (e) => {
    e.preventDefault();
    this.setState({
      ele: this.state.filter,
    });

    // axios
    //   .post('/filter', {
    //     sell: false,
    //     curentType: this.state.curentType,
    //   })
    //   .then((e) => {
    //     this.setState({
    //       ele: e.data,
    //     });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  ///////////////////////////////////////Search data ///////////////////////////////

  render() {
    console.log(this.state);
    return (
      <div>
        <ControlledCarousel />
        <div className='sortItem'>
          <div class='input-group'>
            <select
              class='custom-select'
              id='inputGroupSelect04'
              // height='400'
              onChange={this.hadlChange}
            >
              <option selected> Sort By:</option>
              <option value='price'>Price</option>
              <option value='date'>Date</option>
            </select>
            <div class='input-group-append'>
              <button type='button' class='btn btn-info'>
                {' '}
                Sort
              </button>
            </div>
          </div>
        </div>

        <div className='searchData'>
          <InputGroup className='mb-3'>
            <FormControl
              className='a'
              onChange={this.handelInput}
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
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
        <h1 style={{ marginBottom: '70px' }}>Our Products </h1>
        <div style={{ marginLeft: '100px' }}>
          <CardGroup>
            {this.state.ele.map((element, index) => {
              return (
                <div className='addItem' style={{ margin: '10px' }}>
                  <Card style={{ width: '20rem' }}>
                    <Card.Img variant='top' src={element.imageUrl} />
                    <Card.Body>
                      <Card.Title> Product Name :{element.type}</Card.Title>
                      <Card.Text>
                        Quantitey is :{element.quantitey}
                        <b>Kg</b>
                      </Card.Text>
                      <Card.Text>Date :{element.date}</Card.Text>
                      <Card.Text>
                        Price :{element.price}
                        <b>$</b>
                      </Card.Text>

                      <Button
                        variant='primary'
                        onClick={this.click}
                        id={element._id}
                      >
                        Add Cart{' '}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </CardGroup>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Land;
