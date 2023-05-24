import './partners.css';
import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const Facilitators = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id='facilitators'>
      <div className="facilitator" data-aos="fade-up">
        <Container>
          <div className="partner_head">
            <h2>Facilitators</h2>
            <hr />
          </div>
          <p>
            We believe that in today's world, partnerships are more <br />
            profitable and creative than competition. We are always <br /> open
            to partner with interested and capable persons/organizations <br />{" "}
            to help reach out to a more larger audience. For collaborative works
            or Agencies, let's work together!
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Facilitators
