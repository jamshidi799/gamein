import React, {Component} from 'react'
import { connect } from "react-redux";


class Signup extends Component {

    render() {
        return <div>Signup</div>
    }
}

const mapStateToProps = (state) => ({
    //   isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps, {  })(Signup);