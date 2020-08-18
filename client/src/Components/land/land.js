import React from 'react';
import axios from 'axios';
import { timers, data } from 'jquery';
import Button from '@material-ui/core/Button';
import '../land/land.css';
import ControlledCarousel from '../slider/Slider';

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

  click = async (e) => {
    var currentId = e.target.id;
    var index = 0;
    var cur = this.getInput();

    for (var i = 0; i < cur.length; ++i) {
      if (cur[i].id == currentId) {
        index = i;
      }
    }

    var itemsDelete = this.state.ele;
    itemsDelete.splice(index, 1);
    this.setState({
      ele: itemsDelete,
    });

    await axios
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

  ////////////////////////////////////////////////////
  handelInput = (e) => {
    var curentType = e.target.value;
    this.setState({
      curentType: curentType,
    });
  };
  searchData = (e) => {
    e.preventDefault();
    axios
      .post('/filter', {
        sell: false,
        curentType: this.state.curentType,
      })
      .then((e) => {
        this.setState({
          ele: e.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
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

        <div>
          <form onSubmit={this.searchData}>
            <input type='text' onChange={this.handelInput} />
            <br />
            <input type='submit' value='search' />
          </form>
        </div>
        <div className='rendeElments'>
          {this.state.ele.map((element, index) => {
            return (
              <div class='card1' width='20rem'>
                <div className='item1 '>
                  {' '}
                  Type: {element.type}
                  <br />
                  quantitey: {element.quantitey}
                  <br />
                  date: {element.date}
                  <br />
                  price: {element.price + '$'}
                  <br />
                  <button
                    type='button'
                    class='btn btn-success'
                    id={element._id}
                    onClick={this.click}
                  >
                    AddToCart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Land;
