import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <h2>Contact Us</h2>
          <h6>
            <span style={{ color: "#7b1113" }}>
              <ImLocation />{" "}
            </span>{" "}
            Christ Mission Bus Stop, Santa Maria Road, Accra Ghana
          </h6>
          <h6>
            <span style={{ color: "#7b1113" }}>
              <BsFillTelephoneFill />
            </span>{" "}
            Phone: +233 302937688 | Whatsapp: +233 500040202
          </h6>
          <h6>
            <span style={{ color: "#7b1113" }}>
              <MdOutlineEmail />{" "}
            </span>{" "}
            E-mail: multiversityofafrica@gmail.com
          </h6>
        </div>
        <p>Copyright @ 2023</p>
      </Container>
    </footer>
  );
}

export default Footer
