import { Col } from "react-bootstrap";
import {Link } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl,url}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt ="img" />
        <div className="proj-txtx"><a   target="__blank" href={url}>
          <h4>{title}</h4>
          <span>{description}</span> </a><Link size={40}/>
        </div>
      </div>
    </Col>
  )
}
