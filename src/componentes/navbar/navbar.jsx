import React from "react";


import "./navbar.css";
import { Row, Col, Container, Button } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Container fluid className="bgcolorintem">
        <Row className="colapse">
          <Col> <a className="item" href="E-Company.">E-Company</a></Col>
          <Col className="itens" >
            <a className="item" href="#">
              Inicio
            </a>
            <a className="item" href="#sobre">
              Sobre
            </a>
            <Button href="mailto:patrikybrito@gmail.com">Contato</Button>
          </Col>


        </Row>
      </Container>
    </>
  );
}

export default Menu;


