import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

import Modal from "../Ui/Modal";

function Form() {
  const [vatInput, setVatInput] = useState("");
  const [result, setResult] = useState(false);

  const handelVatState = (event) => {
    setVatInput(event.target.value);
  };

  const closeModalHandler = () => {
    setResult(false);
  };

  const onFormSubmit = (event) => {
    axios
      .get("https://vat.erply.com/numbers?vatNumber=BG999999999")
      .then((response) => {
        let inputCountryCode = VatInput.slice(0, 2);
        let inputVatCode = VatInput.slice(2);
        if (
          inputCountryCode === response.data.CountryCode &&
          inputVatCode === response.data.VATNumber
        ) {
          console.log(response);
          setResult(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <Container fluid className="justify-content-center">
      <Row>
        <Col>
          <h4>VAT Validator</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <form onSubmit={onFormSubmit}>
          <Col>
            <label className="text-muted">Please Enter A Vat Number:</label>
          </Col>
          <Col>
            <input
              type="text"
              name="VatInput"
              placeholder="Please Enter A Vat Number"
              onChange={handelVatState}
            />
          </Col>

          <br />
          <input type="submit" value="Let'Go" />
        </form>
      </Row>
      <Row>
        <Col>
          <label className="text-muted">Result : </label>

          {result ? (
            <Modal clicked={closeModalHandler} />
          ) : (
            <div>{vatInput}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Form;

// let inputCountryCode = this.state.vatInput.slice(0, 2);
// let inputVatCode = this.state.vatInput.slice(2);
// if (
//   inputCountryCode === response.data.CountryCode &&
//   inputVatCode === response.data.VATNumber
// ) {
//   console.log("it is");
//   this.setState({ result: true });
// }
