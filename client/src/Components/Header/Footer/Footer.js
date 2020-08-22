import React from 'react';
import '../Footer/Footer.css';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <div className='main_footer'>
      <div className='cont'>
        <div className='row'>
          <div className='col'>
            <h4>Location</h4>
            <ul className='unstyleOrder'>
              <li className='list-unstyled'> countrey Palestine</li>
              <li className='list-unstyled'>citey Gaza </li>
              <li className='list-unstyled'>El_Jalaa Street</li>
            </ul>
          </div>
          <div className='col'>
            <h4>communcation</h4>
            <ul className='unstyleOrder'>
              <li className='list-unstyled'>Email:Abedsamhadana@gmail.com</li>
              <li className='list-unstyled'>Phone Number :+972595659828</li>
              <li className='list-unstyled'>Telephone : 082854492</li>
            </ul>
          </div>
          <div className='col'>
            <h4>About us</h4>
            <ul className='unstyleOrder'>
              <li className='list-unstyled'>
                we provide service soluation in agriclutral sectore{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <p className='col-sm'>
          &copy;{new Date().getFullYear()} Save Cops | All Right reserved |
          Terms of services | privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
