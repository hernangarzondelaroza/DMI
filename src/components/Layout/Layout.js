import React from "react";
import "./Layout.scss";

import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import PropTypes from "prop-types";

const layout = (props) => {
  return (
    <Container>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
};

layout.propTypes = {
  children: PropTypes.any
};

export default layout;
