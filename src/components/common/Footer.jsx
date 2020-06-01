import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return <div>Footer</div>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Footer);
