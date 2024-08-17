import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={href} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
