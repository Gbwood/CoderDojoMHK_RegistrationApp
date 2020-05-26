/* global gapi */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styling/Login.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';






class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            modal: false,
            setModal: false
        }

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

    onSuccess() {
        console.log('on success')
        this.setState({
            isSignedIn: true,
            err: null
        })
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
                    <p>hello user, you're signed in </p>
                    <button id="logoutButton">Logout</button>
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
        const toggle = () => this.state.setModal(!this.state.modal);



        return (
            <Modal isOpen={this.state.modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Sign in to CoderDojoMHK</ModalHeader>
                <ModalBody>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Sample App.</h2>

                    {this.getContent()}
                </ModalBody>

                {/*will need to pass in sign up button or remove footer*/}
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Sign up</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default LoginModal;