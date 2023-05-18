import { Container } from 'react-bootstrap';
import React, {useEffect} from 'react';
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="vision" data-aos="fade-up">
      <Container>
        <div className="vis_head">
          <h2>Our Mission</h2>
          <hr />
        </div>
        <div>
          <p>
            To define eduction in the context of the African Continent, <br /> in its present day reality! It's a Milestone for the renewed <br /> African Spirit.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Mission
