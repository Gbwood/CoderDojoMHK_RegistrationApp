//componentDidMount to load in data

import React, { Component } from "react"
import Event from "../Components/EventCard.js"
import { Spinner } from 'reactstrap';
import axios from 'axios';








class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            tables: [],
            eventContents: [],
            selectedTable: '',
            auth: 'Basic ' + btoa("c_user" + ':' + "3m2O9b1s8W8r9t2I7s7r")
        }
    }


    componentDidMount() {
        this.setState({ loading: true })
        Object.assign(axios.defaults, { headers: { authorization: this.state.auth } });

        setTimeout(function () {
            axios.get("http://localhost:8153/api.rsc/Events")
                .then(response => {
                    const eventContents = response.data.value;
                    this.setState({eventContents})
                    this.setState({ loading: false })
                })
                .catch(function (error) {
                    if (error.response) {
                        alert('Code: ' + error.response.data.error.code +
                            '\r\nMessage: ' + error.response.data.error.message);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        }.bind(this), 1000)
    }


    render() {
        


        const itemData = this.state.eventContents;

        const eventItemState = this.state.loading ? <Spinner color="primary" /> : itemData.map(item =>
            <Event key={item.id}
                item={item}
            />)


        return (
            <div>
                <main>
                    <div className="container">
                        <br />
                        <article>
                            <div className="content-item">
                                <div className="text">
                                    <h1 id="title">Upcoming Events</h1>
                                    <div className="underline"></div>
                                    <br />
                                    {eventItemState}
                                </div>
                            </div>
                        </article>
                    </div>
                </main>
            </div>
        )
    }

}

export default Register