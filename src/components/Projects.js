import React from "react";
import bazaar from "../assest/projects/bazaar.png";
import redux from "../assest/projects/redux.png";
import dashboard from "../assest/projects/dashboard.png";
import taskify from "../assest/projects/taskify.png";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import colorSharp2 from "../assest/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const project = [
    {
      title: "Bazaar.com",
      description: "Ecommerce website",
      imgUrl: bazaar,
      href: "https://bazaar-com.netlify.app/",
    },
    {
      title: "Taskify - your Go-to To-do List app",
      description: "Add, Edit, Delete tasks to your to-do list",
      imgUrl: taskify,
      href: "https://taskify-shalaka.netlify.app/",
    },
    {
      title: "Dashboard",
      description: "Recreated a Dashboard UI",
      imgUrl: dashboard,
      href: "https://dashboard-shalaka.netlify.app/",
    },
    {
      title: "Simple React Redux website",
      description: "View, Edit and Delete User Information",
      imgUrl: redux,
      href: "https://extraaedge-assignment.netlify.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {project.length > 0 &&
                            project
                              .slice(0, 3)
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project.length > 3 &&
                            project
                              .slice(3, 6)
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                        </Row>
                        {project.length <= 3 && <p>No more projects yet</p>}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project.length > 6 &&
                            project
                              .slice(6, 9)
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                        </Row>
                        {project.length <= 6 && (
                          <p>We are working on new projects</p>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-img"
      ></img>
    </section>
  );
};

export default Projects;
