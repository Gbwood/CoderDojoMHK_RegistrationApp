import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class RegistrationForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            numberOfStudents: "1",
            ninjaType: null,
            receiveEmails: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateCallBackFromParent = this.updateCallBackFromParent.bind(this)
    }

    updateCallBackFromParent() {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            numberOfStudents: this.state.numberOfStudents,
            ninjaType: this.state.ninjaType,
            receiveEmails: this.state.receiveEmails
        }
        this.props.callbackFromParent(data)
    }



    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
        this.updateCallBackFromParent()
        console.log(this.state)
    }

    componentDidMount() {
        this.setState({
            firstName: this.props.GoogleFirstName,
            lastName: this.props.GoogleLastName,
            email: this.props.GoogleEmail
        })
        console.log(this.state)
        console.log(this.props)
    }

    render() {
        return (
            this.props.isSignedIn === "true" ? (
                <Form>
                    <FormGroup>
                        <Label for="GoogleFirstName">First Name</Label>
                        <Input
                            type="name"
                            name="firstName"
                            id="GoogleFirstName"
                            value={this.state.GoogleFirstName}
                            placeholder={this.props.GoogleFirstName}
                            onChange={this.handleChange}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="GoogleLastName">Last Name</Label>
                        <Input
                            type="name"
                            name="lastName"
                            id="GoogleLastName"
                            value={this.state.GoogleLastName}
                            placeholder={this.props.GoogleLastName}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="GoogleEmail">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="GoogleEmail"
                            value={this.state.GoogleEmail}
                            placeholder={this.props.GoogleEmail}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="studentSelect">How many students?</Label>
                        <Input
                            type="select"
                            name="numberOfStudents"
                            id="studentSelect"
                            value={this.state.numberOfStudents}
                            onChange={this.handleChange}
                        >
                            <option value="1">1</option>
                            {this.props.maxStudents >= 2 ? <option value="2">2</option> : null}
                            {this.props.maxStudents >= 3 ? <option value="3">3</option> : null}
                            {this.props.maxStudents >= 4 ? <option value="4">4</option> : null}
                            {this.props.maxStudents >= 5 ? <option value="5">5</option> : null}
                        </Input>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Type of Ninja</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="ninjaType"
                                    value="1"
                                    checked={this.state.ninjaType === "1"}
                                    onChange={this.handleChange}
                                />
                                {' '} Young Padawan (First Time)
          </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="ninjaType"
                                    value="2"
                                    checked={this.state.ninjaType === "2"}
                                    onChange={this.handleChange} />
                                {' '} Returning Padawan</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="receiveEmails"
                                checked={this.state.receiveEmails}
                                onChange={this.handleChange} />{' '}I would like to receive emails about future events</Label>
                    </FormGroup>


                    {/* <Button>Submit</Button> */}
                </Form>
            ) : (
                    <h3>Please log in or create an account before registering for an event</h3>
                )



        )
    }
}
// const RegistrationForm = (props) => {
//     return (
//         <Form>
//             <FormGroup>
//                 <Label for="GoogleFirstName">Name</Label>
//                 <Input type="name" name="name" id="GoogleFirstName" placeholder={props.GoogleFirstName} disabled />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="GoogleLastName">Name</Label>
//                 <Input type="name" name="name" id="GoogleLastName" placeholder={props.GoogleLastName} disabled />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="GoogleEmail">Email</Label>
//                 <Input type="email" name="email" id="GoogleEmail" placeholder={props.GoogleEmail} disabled />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="studentSelect">How many students?</Label>
//                 <Input type="select" name="select" id="studentSelect">
//                     <option>1</option>
//                     {props.maxStudents >= 2 ? <option>2</option> : null}
//                     {props.maxStudents >= 3 ? <option>3</option> : null}
//                     {props.maxStudents >= 4 ? <option>4</option> : null}
//                     {props.maxStudents >= 5 ? <option>5</option> : null}
//                 </Input>
//             </FormGroup>

//             <FormGroup tag="fieldset">
//                 <legend>Type of Ninja</legend>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="radio" name="radio1" />{' '}
//             Young Padawan (First Time)
//           </Label>
//                 </FormGroup>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="radio" name="radio1" />{' '} Returning Padawan</Label>
//                 </FormGroup>
//             </FormGroup>
//             <FormGroup check>
//                 <Label check>
//                     <Input type="checkbox" />{' '}I would like to receive emails about future events</Label>
//             </FormGroup>


//             {/* <Button>Submit</Button> */}
//         </Form>
//     );
// }

export default RegistrationForm;