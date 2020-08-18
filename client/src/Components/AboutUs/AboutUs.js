import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');
var AboutUs = () => {
  var alertClicked = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <p>Search icon on a styled button:</p>
      <button type='button' class='btn btn-info'>
        <span class='glyphicon glyphicon-search'></span> Search
      </button>
    </div>
  );
};
export default AboutUs;
