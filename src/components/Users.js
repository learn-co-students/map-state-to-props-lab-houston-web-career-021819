import React, { Component } from 'react';
import {connect} from 'react-redux'



class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: 4
   }
}

export default connect()(Users)
