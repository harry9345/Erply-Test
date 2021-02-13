import React from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";

import { Col, Container, Row } from "react-bootstrap";

function VatForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (vatInput) => {
    // let inputCountryCode = vat.slice(0, 2);
    // let inputVatCode = vat.slice(2);

    console.log(Object.keys(vatInput));
    // axios
    //   .get("https://vat.erply.com/numbers?vatNumber=BG999999999")
    //   .then((response) => {
    //     let inputCountryCode = vat.slice(0, 2);
    //     let inputVatCode = vat.slice(2);
    //     if (
    //       inputCountryCode === response.data.CountryCode &&
    //       inputVatCode === response.data.VATNumber
    //     ) {
    //       console.log("it is");
    //     }
    //     console.log("it is not");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <h4>VAT Validator</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <label className="text-muted">
              Please Enter A Vat Number:
              <input
                ref={register}
                type="text"
                name="VatInput"
                placeholder="Please Enter A Vat Number"
              />
            </label>
          </Row>

          <Row>
            <label className="text-muted">Result</label>
            <output lg={5} type="text" name="VatOtput" placeholder="result" />
          </Row>

          <button type="submit">Let's check.</button>
        </form>
      </Row>
    </Container>
  );
}

export default VatForm;
