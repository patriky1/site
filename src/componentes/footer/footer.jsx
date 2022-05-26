import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";





function Footer() {
    return (
      <>
        <Container  fluid className="footer">
            <Row>
                <Col className="colorfooter" lg={6}>
                        
                    <h1 className="m-5">e-company.</h1>
                    
                </Col>
                <Col lg={6} className="mt-5"><a className="item1" href="#portfolio">Company</a>
                <Col className="mt-2">  <a className="item" href="home">Home</a></Col>
                <Col className="mt-2">  <a className="item" href="sobre">Sobre</a></Col>
                <Col className="mt-2 mb-5">  <a className="item" href="mailto:patrikybrito@gmail.com">Contato</a></Col>
                </Col>
                
                
            </Row>
            <Row>
            <p className="direitos" className="direitos m-5"> © Todos os direitos reservados, 2022.</p>
            </Row>
        </Container>
      </>
    );
  }
  
  export default Footer;