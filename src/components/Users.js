import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
         {this.props.users.map(user => <li>{user.username}</li>)}
         {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps =(state)=>{
  //debugger;
  return {users: state.users,
          userCount: state.users.length} 
}
export default connect(mapStateToProps)(Users);
