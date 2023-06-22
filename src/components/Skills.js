import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import redux from "../assets/img/redux.svg";
import nodejs from "../assets/img/nodejs.svg";
import postgresql from "../assets/img/postgresql.svg"
import express from "../assets/img/express.svg"
import sequelize from "../assets/img/sequelize.svg";
/* import mongodb from "../assets/img/mongodb.svg"
import tailwind from "../assets/img/tailwind.svg" */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a highly motivated and passionate Full Stack Web Developer, I possess a strong foundation in various technologies, including Javascript, HTML, CSS, Tailwind, React, Redux, Node, Express, PostgreSQL, Sequelize, and MongoDB.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="javascript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="redux" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="nodejs" />
                                <h5>NodeJs</h5>
                            </div>
                             <div className="item">
                                <img src={express} alt="express" />
                                <h5>ExpressJs</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="postgresql" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="sequelize" />
                                <h5>Sequelize</h5>
                            </div>
                            {/* <div className="item">
                                <img src={mongodb} alt="mongodb" />
                                <h5>MongoDb</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="tailwind" />
                                <h5>Tailwind</h5>
                            </div>
                            */}
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="sharp" />
    </section>
  )
}
