import React, { useEffect } from "react";

import { Card, Button, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import { noImage } from "../../../utils/utils";

import PropTypes from "prop-types";

import "./Show.scss";

const Show = ({ data }) => {
  useEffect(() => {}, []);

  return (
    <>
      <Row as="section" className="mt-5">
        {data.map((element, key) => (
          <Card key={element?.show?.id} className="showCard">
            <Card.Img
              className="showImage"
              variant="top"
              src={element?.show?.image?.medium || { noImage }}
            />
            <Card.Body>
              <Card.Title>{element?.show?.name}</Card.Title>
              <Card.Text className="showSummary">
                <div
                  dangerouslySetInnerHTML={{
                    __html: element?.show?.summary || "No description provided"
                  }}
                />
              </Card.Text>
              <Button variant="primary" className="cardButton">
                <Link
                  to={`/details/${element?.show?.id}`}
                  key={element?.show?.id}
                >
                  Show details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
        <Outlet />
      </Row>
    </>
  );
};

Show.propTypes = {
  data: PropTypes.array
};

export default Show;
