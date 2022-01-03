import React from "react";
import "./Header.scss";
import { Image, Row } from "react-bootstrap";

import { DMIlogo } from "../../../utils/utils";

const header = () => {
  return (
    <Row>
      <header className="header">
        <h1>Technical Test</h1>
        <Image className="logo" src={DMIlogo} />
      </header>
    </Row>
  );
};

export default header;
