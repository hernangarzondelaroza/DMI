import React from "react";
import { Row } from "react-bootstrap";

import "./Footer.scss";

const footer = () => {
  return (
    <Row>
      <footer className="footer fixed-bottom">
        by Hernan Garzon de la Roza
      </footer>
    </Row>
  );
};

export default footer;
