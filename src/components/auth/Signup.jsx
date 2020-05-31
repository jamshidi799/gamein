import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    repeat_password: '',
    profile: {
      email: '',
      university: '',
      birth_date: '',
      phone_number: '',
      major: '',
    },
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onProfileFieldsChange = e => {
    const profile = { ...this.state.profile, [e.target.name]: e.target.value };
    this.setState({ ...this.state, profile });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = { ...this.state };
    // this.props.login(userData);
  };

  render() {
    return (
      <div className="container form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>ایمیل</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.profile.email}
              required
              onChange={this.onProfileFieldsChange}
            />
          </div>
          <div className="form-group col-md-6">
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

const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Signup);
