import React, {useEffect} from 'react';
import './why.css'
import { BiTime } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";
import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="why">
      <Container>
        <div>
          <div className="why_head" data-aos="fade-up">
            <h2>Why Choose Us</h2>
            <p>
              "WE GUARANTEE YOUR ADVANTAGE!" 
            </p>
            <hr />
          </div>

          <div className="why_us">
            <div className="why_box" data-aos="fade-up">
              <div className="why_b_fa">
                <div className="why_fa_box">
                  <BiTime className="why_fa" />
                </div>
                <h3>Flexible Time</h3>
              </div>
              <p>
                Unlike traditional programs that follow rigid schedules, you now
                have the option to select the time slots that align with your
                availability. Whether it's during the day, evening, or even
                weekends, you can customize your experience to suit your
                lifestyle.
              </p>
            </div>
            <div className="why_box" data-aos="fade-up">
              <div className="why_b_fa">
                <div className="why_fa_box">
                  <BsGlobeAmericas className="why_fa" />
                </div>
                <h3>Access Anywhere</h3>
              </div>
              <p>
                Whether you're at the office, on the go, or even in the comfort
                of your own home, our platform ensures seamless connectivity and
                unparalleled flexibility. Stay connected, productive, and in
                control as you effortlessly navigate across devices and
                networks, making the most of your digital experiences.
              </p>
            </div>
            <div className="why_box" data-aos="fade-up">
              <div className="why_b_fa">
                <div className="why_fa_box">
                  <AiFillSafetyCertificate className="why_fa" />
                </div>
                <h3>Certified</h3>
              </div>
              <p>
                Rest assured that our program has been thoroughly vetted,
                ensuring its performance meets and exceeds the highest
                standards. We remain dedicated to delivering excellence without
                the need for unnecessary certifications.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyUs
