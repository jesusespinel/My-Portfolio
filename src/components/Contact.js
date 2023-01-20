import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function validate(formInitialDetails){
  let errors = {}
  if(!formInitialDetails.firstName){
      errors.firstName = "Name required"
  }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(formInitialDetails.firstName.trim()))){
      errors.firstName = "Name only letters"
  }
  if(!formInitialDetails.lastName){
    errors.lastName = "Last name required"
}else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(formInitialDetails.lastName.trim()))){
    errors.lastName = "Last name only letters"
}
  if(!formInitialDetails.email){
    errors.email = "Email required"
  }
  if(!formInitialDetails.phone){
    errors.phone = "Phone required"
  }else if((!/^[0-9\s]+$/g.test(formInitialDetails.phone.trim()))){
    errors.message = "only acepts numbers"
  }
if(!formInitialDetails.message){
  errors.message = "Message required"
}else if((!/^[A-Za-z0-9\s]+$/g.test(formInitialDetails.message.trim()))){
  errors.message = "Message only accept numbers and letters"
}
return errors
}

export const Contact = () => {
  
  const [formInitialDetails, setFormInitialDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [errors, setErrors] = useState({});

  

  function handleInputChange(e){
    setFormInitialDetails({
     ...formInitialDetails,
     [e.target.name]:e.target.value
    })
    setErrors(validate({
      ...formInitialDetails,
      [e.target.name]:e.target.value
}))
}

 
  const sendEmail = (event) => {
    event.preventDefault();
    if(formInitialDetails.firstName && formInitialDetails.lastName && formInitialDetails.message && formInitialDetails.phone &&  formInitialDetails.email){
    emailjs.sendForm('service_qp9apk7','template_kdnsu4n',event.target,'H3JQgxWxGIoURM9E_')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    event.target.reset()
    Swal.fire({
      title:"Mensaje enviado correctamente",
      text: "Pulsa en el botón para continuar",
      icon: "success",
      confirmButtonText:"Volver atrás",
    })
    setFormInitialDetails({
    firstName:"",
    lastName:"",
    message:"",
    phone:""
    })
  }else{
    Swal.fire({
      title:"Mensaje no enviado",
      text: "Porfavor completa todos los campos del formulario para enviar un mensaje",
      icon: "error",
      confirmButtonText:"Regresar al formulario",
    })
  }
  }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Let's work together</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formInitialDetails.firstName} name ="firstName"placeholder="First Name" onChange={handleInputChange} />
                      {errors.firstName&& <p className="danger">{errors.firstName}</p>}

                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formInitialDetails.lastName} name="lastName" placeholder="Last Name" onChange={handleInputChange}/>
                      {errors.lastName&& <p className="danger">{errors.lastName}</p>}

                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formInitialDetails.email} name="email" placeholder="Email Address" onChange={handleInputChange} />
                      {errors.email&& <p className="danger">{errors.email}</p>}

                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formInitialDetails.phone} name="phone"placeholder="Phone No." onChange={handleInputChange}/>
                      {errors.phone&& <p className="danger">{errors.phone}</p>}

                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formInitialDetails.message}  name ="message" placeholder="Message" onChange={handleInputChange}></textarea>
                      {errors.message&& <p className="danger">{errors.message}</p>}

                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
