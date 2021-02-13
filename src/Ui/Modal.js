import React from "react";

import Classes from "../containers//Form.module.css";

const Modal = (props) => {
  return (
    <div id={props.id} className={Classes.Success} onClick={props.clicked}>
      <span> Sorry !! Please Insert corect VAT Number</span>
    </div>
  );
};

export default Modal;
