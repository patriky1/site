import React from "react";
import Logo from "../imagens/Suddath.png";
import "./navbar.css";
import { Row, Col, Container } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Container fluid className="bgcolorintem">
        <Row className="colapse" lg={6}>
          <Col className="itens mt-5" lg={5}>
            <a className="item" href="#portfolio">
              Portifólio
            </a>
            <a className="item" href="#education">
              Education
            </a>
            <a className="item" href="mailto:patrikybrito@gmail.com">
              Contato
            </a>
          </Col>
          <Col lg={7} className="logocontainer mobileresize">
            <img className="logoimage" src={Logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu;
