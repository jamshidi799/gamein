import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import img from '../../assets/img/2.png';

const CssTextField = withStyles({
  root: {
    '& label': {
      right: '0px',
    },
    '& label.Mui-focused': {
      color: 'green',
      right: '-50px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

export default function Signin() {
  const [state, setState] = useState({ username: '', password: '' });

  const onChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form">
        <div className="row p-3 field">
          <div className="col-1 mt-3">
            <AccountCircle />
          </div>
          <div className="col-10">
            <CssTextField fullWidth id="outlined-basic" label="نام کاربری" name="username" onChange={onChange} value={state.username} />
          </div>
        </div>

        <div className="row p-3 field">
          <div className="col-1 mt-3">
            <LockIcon />
          </div>
          <div className="col-10">
            <CssTextField
              fullWidth
              type="password"
              id="outlined-basic"
              label="پسورد"
              onChange={onChange}
              name="password"
              value={state.password}
            />
          </div>
        </div>
        <button className="btn">ورود</button>
      </div>
    </div>
  );
}
