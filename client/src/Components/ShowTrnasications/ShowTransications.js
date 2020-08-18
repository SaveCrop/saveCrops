import React from 'react';
import axios from 'axios';
class ShowTRansication extends React.Component {
  state = {
    elments: [],
  };

  // componentDidMount() {
  //   var phoneNumber = localStorage.getItem('phoneNumber');
  //   console.log(phoneNumber, 'phone from the landing ');
  //   axios
  //     .post('/ShowOrders', {
  //       ID_Phone: phoneNumber,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       this.setState({
  //         elments: result.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error, 'Error for dataCome from Items ');
  //     });
  // }
  render() {
    return (
      <div className='ShowTransication'>
        {/* <ul>
          {this.state.elments.map((element) => {
            return (
              <li>
                <div>
                  {element.type}
                  <br />
                  {element.quantitey}
                  <br />
                  {element.date}
                  <br />
                  {element.price}
                  <br />
                  <button type='submit'> Add To Card</button>
                </div>
              </li>
            );
          })}
        </ul> */}
        <p>sdadsasa</p>
      </div>
    );
  }
}
export default ShowTRansication;
