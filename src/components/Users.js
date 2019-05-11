import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return (
              <li>
                {user.username}, from {user.hometown}
              </li>
            );
          })}
        </ul>
        Total number of users: {this.props.users.length}
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
