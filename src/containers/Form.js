import React, { useState } from "react";
import axios from "axios";

import { Container, Col, Button } from "react-bootstrap";

import Modal from "../Ui/Modal";
import Companey from "../Ui/Companey";
import Spinner from "../Ui/spinner/Spinner";

function Form() {
  const [vatValue, setVatValue] = useState("");
  const [isVatValid, setIsVatValid] = useState(null);
  const [companyData, setCompaneyData] = useState({
    name: "",
    address: "",
    requestDate: "",
    countryCode: "",
    vatNumber: "",
  });
  const [showSpinner, setShowSppiner] = useState(false); // spinner state

  // set the input value
  const handelVatState = (event) => {
    setVatValue(event.target.value);
  };

  // to close the modal
  const closeModalHandler = () => {
    setIsVatValid(null);
    setVatValue("");
  };

  // to submit form and sending request to the end point
  const onFormSubmit = (event) => {
    event.preventDefault();
    setShowSppiner(true);
    axios
      .get("https://vat.erply.com/numbers?vatNumber=BG999999999")
      .then((response) => {
        const inputCountryCode = vatValue.substring(0, 2);
        const inputVatCode = vatValue.substring(2);
        setCompaneyData({
          name: response.data.Name,
          address: response.data.Address,
          requestDate: response.data.RequestDate,
          countryCode: response.data.CountryCode,
          vatNumber: response.data.VATNumber,
        });

        if (
          inputCountryCode === response.data.CountryCode &&
          inputVatCode === response.data.VATNumber
        ) {
          setIsVatValid(true);
          setShowSppiner(false);
        } else {
          setIsVatValid(false);
          setShowSppiner(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // conditions to what should render on DOM
  const getResultRepresentation = () => {
    if (isVatValid === null) {
      return null;
    }

    if (isVatValid) {
      return (
        <Companey
          name={companyData.name}
          address={companyData.address}
          countryCode={companyData.countryCode}
          requestDate={companyData.requestDate}
          vatNumber={companyData.vatNumber}
          clicked={closeModalHandler}
        />
      );
    } else {
      return <Modal clicked={closeModalHandler} />;
    }
  };

  return (
    <Container>
      <Col>
        <Col>
          <h1>VAT Validator</h1>
        </Col>
        <form onSubmit={onFormSubmit}>
          <Col>
            <label className="text-muted">Please Enter A Vat Number:</label>
          </Col>
          <Col>
            <input
              type="text"
              name="VatInput"
              value={vatValue}
              onChange={handelVatState}
            />
          </Col>
          <br />
          <Button type="submit" variant="secondary" size="lg">
            Let's Go
          </Button>
        </form>
        <br />
        {/* condition for sppiner */}
        {showSpinner ? <Spinner /> : getResultRepresentation()}
      </Col>
    </Container>
  );
}

export default Form;
