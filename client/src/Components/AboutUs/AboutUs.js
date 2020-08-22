import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import img from '../AboutUs/abd.jpg';

// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');
export default class AboutUs extends Component {
  state = {
    name: '',
    phoneNumber: 0,
    role: '',
    password: 0,
  };
  handelChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  registerData = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div class='about-section' style={{ margin: '50px' }}>
          <h1>OVERVIEW</h1>
          <p style={{ maxWidth: '1000px' }}>
            Digital technologies and analytics are transforming agriculture,
            making a farm’s field operations more insight driven and efficient.
            Digital-based farm services are helping to improve financial
            performance and boost yield. But less than 20 percent of acreage
            today is managed using digital agriculture technologies (e.g.,
            variable-rate spraying) due to the high cost of gathering precise
            field data. To help farmers increase productivity and profitability,
            Accenture has combined digital technologies such as the Internet of
            Things with its big data analytics, visualization capabilities, and
            industry knowledge to create the Accenture Precision Agriculture
            Service and the Accenture Connected Crop Solution. Learn more about
            these two innovative Digital Agriculture solutions below.
          </p>
        </div>
        <h4 style={{ marginBottom: '60px' }}> Team</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={img} />

            <Card.Body>
              <Card.Text>
                <b>Abdelrhman AbuSamhadana</b>
              </Card.Text>
              <Card.Text>
                <b>Software Enginner </b>
              </Card.Text>
              <Card.Text>
                <b> CEO in Save Crops </b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
