import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project11.png";
import projImg2 from "../assets/img/landing.png";
import projImg3 from "../assets/img/eccomerce.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Landing page, made for CEMRED S.A.S",
      description: "Web Desing & Development",
      imgUrl: projImg2,
      url:"https://github.com/jesusespinel/consultoria-cemred"
    },
    {
      title: "Food App Project",
      description: "Javascript, React, Redux, Express, Postgresql, CSS ",
      imgUrl: projImg1,
      url:"https://github.com/jesusespinel/PI-FOODS/tree/main/PI-Food-main"
    },
    {
      title: "Ecommerce App Project",
      description: "Javascript, React, Redux, Express, MongoDB, Tailwind",
      imgUrl: projImg3,
      url:"https://github.com/Santiago-Miranda/HENRY-LUXURY"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>There are some of my projects that I did in SoyHenry Bootcamp, and other one that I created by my own.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Show my projects</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
