import React from "react";
import { Container, Row } from "react-bootstrap";
import "./hero.css"

function Hero() {
  return (
    <>
      <Container fluid className="hero">
        <Row>
          <h1>Extraordinary<br></br>Places.</h1>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
