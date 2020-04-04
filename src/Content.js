import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Content(props) {
  return (
    <div>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
}
