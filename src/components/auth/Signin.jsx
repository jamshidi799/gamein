import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

class Signin extends Component {
  state = {
    username: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    return (
      <div className="container form">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>نام کاربری</label>
            <input type="text" className="form-control" name="username" value={this.state.username} required onChange={this.onChange} />
          </div>
          <div className="form-group col-md-12">
            <label>پسورد</label>
            <input type="password" className="form-control" name="password" value={this.state.password} required onChange={this.onChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
          ثبت نام
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { login })(Signin);
