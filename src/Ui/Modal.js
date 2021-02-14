import React from "react";
import { Button, Col, Container } from "react-bootstrap";

import Classes from "../containers//Form.module.css";

const Modal = (props) => {
  return (
    <Container className={Classes.Success} onClick={props.clicked}>
      <Col>
        <p>Inccorect VAT Number!! </p>

        <br />

        <Button variant="secondary" size="lg">
          Try Again
        </Button>
      </Col>
    </Container>
  );
};

export default Modal;
