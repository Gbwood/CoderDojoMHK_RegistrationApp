import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert,Toast,ToastHeader,ToastBody } from 'reactstrap';

const EventDetailsModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const signUp = () => {
    return (
      <div>
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
        {toggle}
      </div>
    )
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Event Details for {props.Title}</ModalHeader>
        <ModalBody>
          <p>
            {props.DescriptionSummary}
          </p>
          <p>
            {props.DescriptionBody}
          </p>
          <p>
            {props.DescriptionExpandedDetails}
          </p>
        </ModalBody>

        {/*will need to pass in sign up button or remove footer*/}
        <ModalFooter>
          <Button color="secondary"
            onClick={
              toggle}>Back</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EventDetailsModal;