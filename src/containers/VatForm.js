import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

import Modal from "../Ui/Modal";

class Form extends Component {
  state = {
    vatInput: "",
    result: false,
  };

  handelVatState = (event) => {
    this.setState({ vatInput: event.target.value });
  };

  closeModalHandler = () => {
    this.setState({ result: false });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    let inputCountryCode = this.state.VatInput.slice(0, 2);
    let inputVatCode = this.state.VatInput.slice(2);
    axios
      .get("https://vat.erply.com/numbers?vatNumber=BG999999999")
      .then((response) => {
        if (
          inputCountryCode === response.data.CountryCode &&
          inputVatCode === response.data.VATNumber
        ) {
          console.log(response);
          this.setState({ result: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container fluid className="justify-content-center">
        <Row>
          <Col>
            <h4>VAT Validator</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <form onSubmit={this.onFormSubmit}>
            <Col>
              <label className="text-muted">Please Enter A Vat Number:</label>
            </Col>
            <Col>
              <input
                type="text"
                name="VatInput"
                placeholder="Please Enter A Vat Number"
                onChange={this.handelVatState}
              />
            </Col>

            <br />
            <input type="submit" value="Let'Go" />
          </form>
        </Row>
        <Row>
          <Col>
            <label className="text-muted">Result : </label>

            {this.state.result ? (
              <Modal clicked={this.closeModalHandler} />
            ) : (
              <div>{this.state.vatInput}</div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
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
