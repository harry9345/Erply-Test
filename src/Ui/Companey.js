import React from "react";
import { Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";

const Companey = (props) => {
  return (
    <div onClick={props.clicked}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Country Code</th>
            <th>Company Name</th>
            <th>VAT Number</th>
            <th>Companey Address</th>
            <th>Requesting date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.countryCode}</td>
            <td>{props.name}</td>
            <td>{props.vatNumber}</td>
            <td>{props.address}</td>
            <td>{props.requestDate}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={props.clicked} variant="secondary" size="lg">
        Reset
      </Button>
    </div>
  );
};

export default Companey;
