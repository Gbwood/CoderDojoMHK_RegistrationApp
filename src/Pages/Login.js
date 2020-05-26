/* global gapi */
import React, { Component } from 'react';
import logo from '../Images/1159537.png';
import '../Styling/Login.css';




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      firstName: null
    }
    this.signOut = this.signOut.bind(this)
  }

  componentDidMount() {

    const successCallback = this.onSuccess.bind(this);

    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '418141995314-b4ng9nvajko0g87g9pks1mr0uim3vum5.apps.googleusercontent.com',
      })

      // this.auth2.attachClickHandler(document.querySelector('#loginButton'), {}, this.onLoginSuccessful.bind(this))

      this.auth2.then(() => {
        console.log('on init');
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
    });

    window.gapi.load('signin2', function () {
      // Method 3: render a sign in button
      // using this method will show Signed In if the user is already signed in
      var opts = {
        width: 200,
        height: 50,
        client_id: '418141995314-b4ng9nvajko0g87g9pks1mr0uim3vum5.apps.googleusercontent.com',
        onsuccess: successCallback
      }
      gapi.signin2.render('loginButton', opts)
    })

  }

  signOut() {
    this.setState({
      isSignedIn: false,
      error: null,
    })

    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

    localStorage.clear();
    sessionStorage.clear();
    const data = { signedIn: "false", firstName: "null", lastName: "null", email: "null" }
    this.props.callbackFromParent(data)
  }

  onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile()
    console.log('on success')
    this.setState({
      isSignedIn: true,
      firstName: profile.getGivenName(),
      err: null
    })

    const data = { signedIn: this.state.isSignedIn, firstName: profile.getGivenName(), lastName: profile.getFamilyName(), email: profile.getEmail() }
    this.props.callbackFromParent(data)
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }


  getContent() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <p>Hello {this.state.firstName}, you're signed in </p>
          <button id="logoutButton" onClick={this.signOut}>Logout</button>
        </div>
      )

    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      )
    }

  }

  render() {

    return (
      <div className="App">
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <h2>Welcome to CoderDojoMHK</h2>
        {this.getContent()}
        <br />
      </div>
    );
  }
}

export default Login;