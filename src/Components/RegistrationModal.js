//use a modal
//fill data correctly, display date and time and make sure we have ID
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegistrationForm from "../Components/RegistrationForm.js"
import axios from 'axios';

const RegistrationModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [ninjaType, setNinjaType] = useState("1")
    const [numberOfStudents, setNumberOfStudents] = useState("1")
    const [receiveEmails, setReceiveEmails] = useState(false)

    const myCallback = (dataFromChild) => {
        setEmail(dataFromChild.email)
        setFirstName(dataFromChild.firstName)
        setLastName(dataFromChild.lastName)
        setNinjaType(dataFromChild.ninjaType)
        setNumberOfStudents(dataFromChild.numberOfStudents)
        setReceiveEmails(dataFromChild.receiveEmails)

        console.log("data from child")
        console.log(dataFromChild)
        console.log(receiveEmails)
    }

    var putData = {
        "@odata.type":"CDataAPI.Events",
        ID: props.info.ID,
        Date: props.info.Date,
        DescriptionBody: props.info.DescriptionBody,
        DescriptionExtendedDetails: props.info.DescriptionExtendedDetails,
        DescriptionSummary: props.info.DescriptionSummary,
        EventLink: props.info.EventLink,
        EventTitle: props.info.EventTitle,
        ImgURL: props.info.ImgURL,
        Location: props.info.Location,
        TicketsAvailable: props.info.TicketsAvailable - numberOfStudents,
        TicketsClaimed: 1,
        TotalTicket: props.info.TotalTicket
    }



    const signUp = () => {
        // Object.assign(axios.defaults, { header: { authorization: 'Basic ' + btoa("c_user" + ':' + "3m2O9b1s8W8r9t2I7s7r") } });
        // axios.put("http://localhost:8153/api.rsc/Events(" + props.ID + ")", { putData })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch(function (error) {
        //         if (error.response) {
        //             alert('Code: ' + error.response.data.error.code +
        //                 '\r\nMessage: ' + error.response.data.error.message);
        //         } else {
        //             console.log('Error', error.message);
        //         }
        //     });

        Object.assign(axios.defaults, { headers: { authorization: 'Basic ' + btoa("c_user" + ':' + "3m2O9b1s8W8r9t2I7s7r") } });
        axios({
            dataType: "json",
            method: "PUT",
            header: { 'Content-Type': 'application/json'},
            url: "http://localhost:8153/api.rsc/Events(" + props.ID + ")?@authtoken=3m2O9b1s8W8r9t2I7s7r",
            contentType: 'application/json',
            data: JSON.stringify(putData),
            success: function (data) {
                ("#result").html(JSON.stringify(data));
            }
        });
        // axios({
        //     method: 'PUT',
        //     url: `http://localhost:8153/api.rsc/Events(`+ props.ID + `)`,
        //     timeout: 3000,
        //     data: data,
        // });

        // setTimeout(function () {

        // }.bind(this), 1000)


        toggle()
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const enabled = props.maxStudents > 0 ? true : false;

    console.log(enabled)

    return (
        <div>
            <Button color="danger" onClick={toggle} disabled={!enabled} >{enabled ? props.buttonLabel : "Event Full"}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Register for {props.Title}</ModalHeader>
                <ModalBody>
                    <RegistrationForm
                        callbackFromParent={myCallback}
                        GoogleEmail={props.GoogleEmail}
                        isSignedUp={props.isSignedUp}
                        GoogleFirstName={props.GoogleFirstName}
                        GoogleLastName={props.GoogleLastName}
                        maxStudents={props.maxStudents}
                        isSignedIn={props.isSignedIn}
                    />
                </ModalBody>

                {/*will need to pass in sign up button or remove footer*/}
                <ModalFooter>
                    <Button color={props.isSignedIn === "true" ? "primary" : "danger"} onClick={signUp} disabled={props.isSignedIn === "true" ? false : true}>Sign up</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default RegistrationModal;