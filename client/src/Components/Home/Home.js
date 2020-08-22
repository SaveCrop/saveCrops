import React from 'react';
import axios from 'axios';
import '../land/land.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
    if (phoneNumber) {
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
    } else {
      alert('you are not login the oage pleas login');
      this.props.history.push('/LogIn');
    }
  }

  render() {
    return (
      <div style={{ marginLeft: '100px', marginBottom: '300px' }}>
        <h4 style={{ marginBottom: '60px', marginTop: '100px' }}>
          {' '}
          Prdoucts Added{' '}
        </h4>
        <CardGroup>
          {this.state.elements.map((element, index) => {
            return (
              <div className='addItem' style={{ width: '20%', margin: '10px' }}>
                <Card>
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
                      style={{ margin: '5px' }}
                      variant='primary'
                      onClick={this.editElement}
                      id={element._id}
                    >
                      Edit{' '}
                    </Button>
                    <Button
                      variant='primary'
                      onClick={this.delteItem}
                      id={element._id}
                    >
                      Delet{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

export default Home;
