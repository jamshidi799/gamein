import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="/">
          گیمین
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                بلاگ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                ورود
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                ثبت نام
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Navbar);
