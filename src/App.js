import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import About from "./Pages/About.js"
import Home from "./Pages/Home.js"
import Faq from "./Pages/Faq.js"
import Login from "./Pages/Login.js"
import Files from "./Pages/Files.js"
import Register from "./Pages/Register.js"
import Resources from "./Pages/Resources.js"


class App extends React.Component {

    constructor(props) {
        super(props)


        if (sessionStorage.length > 0) {

        }
        else {
            sessionStorage.setItem("isSignedIn", false);
            sessionStorage.setItem("firstName", null);
            sessionStorage.setItem("lastName", null);
            sessionStorage.setItem("email", null);
        }


        this.state = {
            isSignedIn: sessionStorage.getItem("isSignedIn"),
            firstName: sessionStorage.getItem("firstName"),
            lastName: sessionStorage.getItem("lastName"),
            email: sessionStorage.getItem("email"),
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({
            isSignedIn: dataFromChild.signedIn,
            firstName: dataFromChild.firstName,
            lastName: dataFromChild.lastName,
            email: dataFromChild.email
        })
        sessionStorage.setItem("isSignedIn", dataFromChild.signedIn);
        sessionStorage.setItem("firstName", dataFromChild.firstName);
        sessionStorage.setItem("lastName", dataFromChild.lastName);
        sessionStorage.setItem("email", dataFromChild.email);
    }


    data() {
        return (
            {
                signedIn: this.state.isSignedIn,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            }
        )
    }




    render() {


        console.log(localStorage)
        console.log(sessionStorage)
        console.log("current state")
        console.log(this.state)
        return (
            <BrowserRouter >
                <div>
                    <Header isSignedIn={this.state.isSignedIn} />
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/login" render={(props) => <Login {...props} callbackFromParent={this.myCallback} />} />
                        <Route path="/resources/files" render={(props) => <Files {...props} data = {this.data()}/>} />
                        <Route path="/register" render={(props) => <Register {...props} data = {this.data()}/>} />
                        <Route path="/resources/StudentResources" component={Resources} />
                        <Route path="/Home" Component={Home} />
                        {<Route component={Home} />}
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }

}

export default App