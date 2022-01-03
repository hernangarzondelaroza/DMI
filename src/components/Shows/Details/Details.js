import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowsService from "./../../../services/shows.service";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

import "./Details.scss";

export default function Details() {
  let params = useParams();

  const [shows, setShows] = useState([]);
  const [show, setShow] = useState(undefined);

  useEffect(() => {
    ShowsService.getShows()
      .then((response) => setShows(response))
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    if (shows.data) {
      shows.data.map((element) => {
        if (element.show.id == params.id) {
          setShow(element.show);
        }
      });
    }
  }, [shows, params]);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <Container style={{ margin: "0 auto" }}>
      <Row className="justify-content-md-center">
        <Col>
          <h1>{show?.name}</h1>
          <Image
            className="detailsImage mx-auto d-block"
            src={show?.image?.medium}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: show?.summary || "No description provided"
            }}
          />
          <Button variant="link" className="mx-auto d-block">
            <a href={show?.officialSite} alt={show?.officialSite}>
              {show?.officialSite}
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
