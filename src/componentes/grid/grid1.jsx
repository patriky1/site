import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Imggrid from "./imagem_grid/perfil.png";
import "./grid.css";
import Carrossel from "../carrossel/carrossel";
import CarouNuka from "../carousel2/carousel2";

export function GridPerfil() {
  return (
    <>
      <Container fluid className="margemgeral">
        <Row>
          <Col lg={6} className="grid">
            <img className="imagemgrid" src={Imggrid} alt="..." />
          </Col>
          <Col lg={6}>
            <h2 className="textobranco">
              Eu sou <span className="textoamarelo">Patriky</span>
            </h2>
            <h3 className=" title titulo mt-2">
              Desenvolvedor Front-End com foco em escrever código limpo,
              elegante e eficiente.<br></br>
              <br></br>
              </h3>
              <h3 className=" title titulo">
              Minha experiência de mercado aliada ao meu networking profissional
              pode lhe ajudar a resolver seus problemas no ambiente
              digital, seja qual for sua demanda.
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export function GridCarousel() {
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h2 className="textstyle sizebox2 txt"> Sobre mim</h2>
          <p className="title titulo">
            Olá! Sou o Patriky Brito, tenho 24 anos e sou UI/UX Designer e uma
            coisa que amo na vida é entregar experiências memoráveis. Trabalho
            como designer desde 2020, e ao longo da minha carreira, atuei até
            como desenvolvedor front-end. Me considero um profissional bem
            capacitado, versátil e ágil. No mais, costumo dizer que a parte mais
            difícil do meu trabalho é entender as pessoas, e essa é a parte que
            importa no final. Um outro fato sobre mim é que estou sempre
            engajado no fortalecimento da comunidade de Desenvolvedores e
            Design, Na busca de aprimorar meu trabalho, estou sempre em busca de
            adquirir mais conhecimento, atrelando as práticas com o bom diálogo
            e troca de experiências com outros designers e profissionais da
            área.
          </p>
        </Row>
      </Container>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h2 className="textstyle sizebox2 txt"> Minha Trajetória</h2>
          <p className="title titulo">
            Me graduei na Área de Redes de Computadores (UNIP), porém encontrei
            minha paixão no universo do design, especificamente no
            desenvolvimento de interfaces e gerenciamento de projetos. Como
            designer, passei por diferentes empresas/equipes e cargos, e hoje me
            dou a liberdade de dizer que sou um profissional experiente, com um
            background versátil em diferentes áreas. Para acompanhar minha
            trajetória profissional, conecte-se comigo no LinkedIn.
          </p>
        </Row>
      </Container>
      <div className="button3">
        <Button href="https://www.linkedin.com/in/patriky-brito/" variant="primary"  target="blank" size="lg">
          Linkedin
        </Button>
        </div>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h2 className="textstyle sizebox2 txt"> Meus Projetos</h2>
          <Col className="centralized mt-5">
            <Carrossel />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function GridSkills() {
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h1 className=" sizebox2 txt"> Minhas habilidades</h1>{" "}
        </Row>

        <Row className="margens">
          <Col lg={6}>
            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> HTML</p>
              </Col>
              <Col lg={9}>
                <div className="container1">
                  <div className="progress-bar1">
                    {" "}
                    <span className="txtbranco">70%</span>
                  </div>
                </div>{" "}
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> CSS</p>
              </Col>
              <Col lg={9}>
                <div className="container1">
                  <div className="progress-bar1">
                    {" "}
                    <span className="txtbranco">70%</span>
                  </div>
                </div>{" "}
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> JAVA SCRIPT</p>
              </Col>
              <Col lg={9}>
                <div className="container2">
                  <div className="progress-bar2">
                    <span className="txtbranco">70%</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso">REACT</p>
              </Col>
              <Col lg={9}>
                <div className="container3">
                  <div className="progress-bar3">
                    {" "}
                    <span className="txtbranco">40%</span>{" "}
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> FIGMA</p>
              </Col>
              <Col lg={9}>
                <div className="container4">
                  <div className="progress-bar4">
                    {" "}
                    <span className="txtbranco">60%</span>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={5}>
            <CarouNuka />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export function GridEducation() {
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="imagemBG bgsize">
          <Col className="textstyle">
            <p className="title">
              Graduado em Redes de computadores pela Universidade Paulista UNIP,
              Sousa-PB
            </p>
            <p className="texto">
              Suporte aos sistemas de computadores de uma organização, incluindo
              redes locais (LANs), redes de longa distância (WANs), segmentos de
              rede, intranets e outros sistemas de comunicação de dados.
            </p>
            <p className="title">
              IFPB - Instituto Federal de Ciências e Técnologia da Paraíba.
            </p>
            <p className="texto">
              Ensino médio Integrado ao Técnico em Informática Voltada para
              programação web e manutenção e suporte de equipamentos de
              informática.
            </p>
            <p className="title">EXPERIÊNCIA PROFISSIONAL</p>
            <p className="texto">
              IBGE - INSTITUTO BRASILEIRO DE GEOGRAFIA ESTATÍSTICA: Agente de
              pesquisa e e mapeamento na agência do IBGE em Sousa-PB,
              experiência com pesquisas econômicas para área contábil e
              abordagem e comunicação nas pesquisas domiciliares.
            </p>
            <p className="texto">
              LANEARTDESIGN: Designer de layout para Apps de diversas categorias
              como desenvolvedor e atualizador de desktop.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
