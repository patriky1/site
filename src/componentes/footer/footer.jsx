import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../imagens/Suddath.png";
import "./footer.css";
import {EmailIcon, Instaicone, Linkedinicone} from "./icon/iconSocial";




function Footer() {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col lg={8} className="mobileresize">
            
              <img className="imagemlogo" src={Logo} alt="..."/>
            
          </Col>
          <Col lg={4}>
               <a href="mailto: patrikybrito@gmail.com" className="marginl">  <EmailIcon/>
             </a>
              <a href="https://www.linkedin.com/in/patriky-brito/" className="marginl"> <Linkedinicone/> </a>
              <a href="https://www.instagram.com/patrikybrito/" className="marginl"> <Instaicone/> </a>
          </Col>
        </Row>
          <Col> <p className="colorbranco">© all rights reserved, 2022.</p></Col>
        <Row>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
