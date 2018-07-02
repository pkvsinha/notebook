import React from 'react';


export default class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="sign-in-form">
          <div>
            <input id="username"/>
            <label for="username">Enter username</label>
          </div>
          <div>
            <input id="password"/>
            <label for="username">Enter password</label>
          </div>                    
        </form>
      </div>
    );
  }
}
