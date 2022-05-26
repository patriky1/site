import React from "react";
import Imggrid from "../imagens/image2.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./grid.css";
import perfilgrid from "../imagens/perfil1.png";
import perfilgrid2 from "../imagens/perfil2.png";
import Imggrid4 from "../imagens/image4.png";
import Imggrid5 from "../imagens/cea.png";
import Imggrid6 from "../imagens/adidas.png";
import Imggrid7 from "../imagens/nike.png";



export function Grid() {
  return (
    <Container fluid>
      <Row>
        <Col className="mt-5" lg={6}>
          <img className="imagemgrid " src={Imggrid} alt="..." />
        </Col>
        <Col className="center" lg={6}>
          <p className="titulo">
            Recursos de escritório e<br></br> melhores localizações.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
            Eleifend auctor pulvinar massa semper nibh vitae
          </p>
          <Button href="mailto:patrikybrito@gmail.com">Contato</Button>
        </Col>
      </Row>
    </Container>
  );
}

export function Grid2() {
  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col>
            {" "}
            <p className="titulo marginleft "> Nossas avaliações</p>{" "}
          </Col>
          <Row className="centralized mt-5">
            <Col lg={6} className="borderLeft">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Row>
                <Col sm={4}>
                  <img height="50px" width="50px" src={perfilgrid} alt="..." />
                </Col>
                <Col>
                  <p className="textonome m-0">Patriky</p>
                  <p className="gray m-0">Greece</p>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="borderLeft">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Row>
                <Col sm={4}>
                  <img height="50px" width="50px" src={perfilgrid2} alt="..." />
                </Col>
                <Col>
                  <p className="textonome m-0">Patriky</p>
                  <p className="gray m-0">Greece</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export function Grid3() {
  return (
    <Container fluid>
      <Row className="imagemgrid3"> 
        
          <Col  lg={6} className="centralized">
            <div>
              <p className="titulo1 titulo">Nossos parceiros</p>
              <p className="mt-5 centralized1">
                Seja você também um parceiro da e-company.<br></br>Conheça nossos
                parceiros:
              </p></div>
          </Col>

          <Col lg={6}>

          
          <Row>
            <Col lg={6} className="coluna">
          <img className="imagemgrid4 m-3" src={Imggrid4} width={"50%"} height={"50%"} alt="..." />
          
          </Col>
          <Col lg={6} className="coluna">
          <img className="imagemgrid4 m-3" src={Imggrid5} width={"50%"} height={"50%"} alt="..." />
          </Col>
          </Row>
          


          <Row>
            <Col lg={6} className="coluna">
          <img  className="imagemgrid5 m-3" src={Imggrid6} width={"50%"} height={"50%"} alt="..." />
          
          </Col>
          <Col lg={6} className="coluna">
          <img  className="imagemgrid5 m-3" src={Imggrid7} width={"50%"} height={"50%"} alt="..." />
          </Col>
          </Row>

          </Col>

      </Row>
      </Container>

  );
}
