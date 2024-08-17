import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assest/img/meter1.svg";
import meter2 from "../assest/img/meter2.svg";
import meter3 from "../assest/img/meter3.svg";
import colorSharp from "../assest/img/color-sharp.png";

function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>React Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img"/>
    </section>
  );
}

export default Skills;
