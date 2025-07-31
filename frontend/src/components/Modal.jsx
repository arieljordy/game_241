import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

export default function Modal(props) {
  const { centredModal, setCentredModal, titre, children } = props;
  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <>
      <MDBModal
        staticBackdrop
        className={`animate__animated ${
          centredModal
            ? " animate__backInDown"
            : " animate__backOutUp animate__slow"
        }`}
        tabIndex="-1"
        open={centredModal}
        setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader className="d-flex justify-content-center">
              <MDBModalTitle className="element-noir">{titre}</MDBModalTitle>
              <MDBBtn
                className="btn-close my-btn-close-modal"
                color="none"
                onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <>{children}</>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
