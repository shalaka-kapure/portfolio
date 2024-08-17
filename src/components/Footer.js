import { Container, Row, Col } from "react-bootstrap";
import logo from "../assest/img/logo.svg";
import navIcon1 from "../assest/img/nav-icon1.svg";
import navIcon2 from "../assest/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{marginTop: "20px"}}>
              <a
                href="https://www.linkedin.com/in/shalaka-kapure-636335230/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/shalaka-kapure"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
