import React from 'react';
class LogOut extends React.Component {
  componentDidMount() {
    localStorage.removeItem('phoneNumber');
    this.props.history.push('/');
  }
  render() {
    return <div></div>;
  }
}
export default LogOut;
