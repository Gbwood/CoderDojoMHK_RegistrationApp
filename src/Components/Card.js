import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const CardComponent = (props) => {
    return (
        <div>
            <Card>
                {props.imgURL ? <CardImg top width="auto" src={props.imgURL} alt="Card image cap" /> : null}
                <CardBody className="text-left">
                    {props.title ? <CardTitle tag="h2">{props.title}</CardTitle> : null}
                    {props.subTitle ? <CardSubtitle>{props.subTitle}</CardSubtitle> : null}
                    {props.text ? <CardText>{props.text}</CardText> : null}
                    {props.buttonText ? <Button>{props.buttonText}</Button> : null}
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComponent