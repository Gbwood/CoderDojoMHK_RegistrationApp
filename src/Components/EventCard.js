import React from "react"
import RegistrationModal from "../Components/RegistrationModal.js"
import EventDetailsModal from "../Components/EventDetailsModal.js"
import SeptemberImage from "../Images/CoderDojomhk_banner_September.jpg"
import OctoberImage from "../Images/CoderDojo_October (1).jpg"
import NovemberImage from "../Images/CoderDojo_October.jpg"
import DecemberImage from "../Images/CoderDojo_October.jpg"

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


function image(img) {
    return (img == "September") ? SeptemberImage :  
    img === "October" ? OctoberImage : 
    img === "November" ? NovemberImage :
    img === "December" ? DecemberImage : null
}


const EventCard = (props) => {
    const info = props.item
    console.log("info")
    console.log(info)
    return (
        <div className="eventCard">
            <Card>
                {info.ImgURL ? <CardImg top width="auto" src={image(info.ImgURL)} alt="Card image cap" /> : null}
                <CardBody>
                    {info.EventTitle ? <CardTitle tag="h2">{info.EventTitle}</CardTitle> : null}
                    {info.Location ? <CardSubtitle>Location: {info.Location}</CardSubtitle> : null}
                    <br />
                    {info.Date ? <CardText>Date: {info.Date}</CardText> : null}
                    {<CardText>Time: 10:00 AM - 12:00 PM</CardText>}
                    {info.TicketsAvailable ? <CardText>Remaining Tickets: {info.TicketsAvailable}</CardText> :  <CardText>Remaining Tickets: {info.TicketsAvailable}</CardText>}
                    <Row>
                        <Col sm="6">
                            <EventDetailsModal
                                buttonLabel="More Details"
                                Title={info.EventTitle}
                                DescriptionSummary={info.DescriptionSummary}
                                DescriptionBody={info.DescriptionBody}
                                DescriptionExtendedDetail={info.DescriptionExtendedDetail} />
                        </Col>
                        <Col sm="6">
                            <RegistrationModal
                                info = {info}
                                buttonLabel="Register"
                                ID={info.ID}
                                Title={info.EventTitle}
                                isSignedUp={true}
                                GoogleEmail={sessionStorage.getItem("email")}
                                GoogleFirstName={sessionStorage.getItem("firstName")}
                                GoogleLastName={sessionStorage.getItem("lastName")}
                                maxStudents={info.TicketsAvailable}
                                isSignedIn = {sessionStorage.getItem("isSignedIn")}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <br />
        </div>
    );
};

export default EventCard