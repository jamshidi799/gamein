import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { register } from '../../actions/auth';
// import { DatePicker } from 'jalali-react-datepicker';
// import { RangeDatePicker } from 'jalali-react-datepicker';

class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    repeat_password: '',
    profile: {
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
    // register(user);
  };

  render() {
    return (
      <div className="container form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>نام</label>
            <input type="text" className="form-control" name="first_name" value={this.state.first_name} required onChange={this.onChange} />
            <label>نام کاربری</label>
            <input type="text" className="form-control" name="username" value={this.state.username} required onChange={this.onChange} />
            <label>تکرار رمز عبور</label>
            <input
              type="password"
              className="form-control"
              name="repeat_password"
              value={this.state.repeat_password}
              required
              onChange={this.onChange}
            />
            <label>دانشگاه</label>
            <input
              type="text"
              className="form-control"
              name="university"
              value={this.state.profile.university}
              required
              onChange={this.onProfileFieldsChange}
            />
            <label>تاریخ تولد</label>
            <input
              type="text"
              className="form-control"
              name="birth_date"
              value={this.state.profile.birth_date}
              required
              onChange={this.onProfileFieldsChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>نام خانوادگی</label>
            <input type="text" className="form-control" name="last_name" value={this.state.last_name} required onChange={this.onChange} />
            <label>رمز عبور</label>
            <input type="password" className="form-control" name="password" value={this.state.password} required onChange={this.onChange} />
            <label>ایمیل</label>
            <input type="email" className="form-control" name="email" value={this.state.email} required onChange={this.onChange} />
            <label>رشته</label>
            <input
              type="text"
              className="form-control"
              name="major"
              value={this.state.profile.major}
              required
              onChange={this.onProfileFieldsChange}
            />
            <label>تلفن تماس</label>
            <input
              type="text"
              className="form-control"
              name="phone_number"
              value={this.state.profile.phone_number}
              required
              onChange={this.onProfileFieldsChange}
            />
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
