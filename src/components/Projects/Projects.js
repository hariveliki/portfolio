import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import log from "../../Assets/Projects/log.png";
import time_series from "../../Assets/Projects/time_series.png";
import dtp from "../../Assets/Projects/dtp.png";
import onboarder from "../../Assets/Projects/onboarder.png";
import real_estate from "../../Assets/Projects/real_estate.png";
import pim from "../../Assets/Projects/pim.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Work</strong> Experience
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onboarder}
              isBlog={false}
              title="Onboarder"
              description="I co-developed a complex orchestration system that enhances every PIM (Product Information Management System). It takes data from various sources as input, e.g. suppliers, internet, marketplace, etc., and enriches product data with the help of machine learning or customised mappings. The result is high data quality, a high degree of automation and a faster time-to-market cycle for retailers."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pim}
              isBlog={false}
              title="Data Centralisation Project"
              description="I worked as a sub-project manager on the implementation of a new PIM (Product Information Management) system. It allows collecting, managing and enriching product information in a single place and distributing it to sales, eCommerce, marketplace, etc. channels."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dtp}
              isBlog={false}
              title="Digital Transformation Project"
              description="I worked on a reengineering project for the purchasing department, where I was responsible for analyzing, capturing, and documenting requirements. I also organized and moderated stakeholder presentations using the SCRUM methodology. This role has improved my skills in business analysis and project management."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={log}
              isBlog={false}
              title="Logistics Projects and Leadership"
              description="During my time in logistics, I worked as a sub-project manager where we had to set up a new returns department for our growing online store. There I also had the opportunity to lead a team for the first time."
              // ghLink=""
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">
          <strong className="purple">Study</strong> Experience
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've studied recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={time_series}
              isBlog={false}
              title="Appliance Detection"
              description="I have developed a new type of time series classification model for a grid operator that is based on state-of-the-art approaches. The aim of the classifier is to recognise devices in household based on electricity consumption data. The results helped the company to plan its future grid supply and reduce costs."
              ghLink="https://github.com/hariveliki/appliance-detection.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real_estate}
              isBlog={false}
              title="Real Estate Calculator"
              description="Based on thousands of real estate data, we built a machine learning model that predicts the price based on some attributes, e.g. location, type, m2, etc."
              ghLink="https://github.com/Immobilienrechner-Challenge"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
