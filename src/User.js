import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
          <div>
            Nome: {this.props.name}
          </div>
          <div>
            Foto: <img src={this.props.photo}></img>
          </div>
      </div>

    );
  }
}

export default User;
