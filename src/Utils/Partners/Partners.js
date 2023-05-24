import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./partners.css";
import { Row, Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Partners = () => {
  const [show, setShow] = useState(false);
 
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');
  const [whyText, setWhyText] = useState('');
  const handleShow = () => {
    setShow(true);
  };

   const handleClose = async () => {
    const partnerShip = {
      FullName,
      email,
      phone,
      website,
      country,
      company,
      whyText,
    };
    try {
      const res = await axios.post("partnerRoute/", partnerShip);
      console.log(res.data);
    } catch (err) {
      console.log(err)  
    }
    setShow(false);
   }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="partner">
      <Container>
        <div className="partner_head">
          <h2>For Partners</h2>
          <hr />
        </div>
        <Row>
          <Col md>
            <div className="partner_content" data-aos="flip-left">
              <div className="part_cont2">
                <h4>Connect with us if you are into</h4>
                <ul>
                  <li>Online / Offline Media Corporations</li>
                  <li>Educational Organizations</li>
                  <li>Professional Bloggers (with 50,000+ subscribers)</li>
                  <li>Affiliate Partners</li>
                  <li>Official Representative in your region</li>
                  <li>Social Media Influencers/Content Creators</li>
                  <li>Mentors looking for Mentees</li>
                </ul>
                <button onClick={handleShow}>Partners</button>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="partner_content" data-aos="flip-right">
              <div className="part_cont1">
                <img src="./image/partenr.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Multiversity Of Africa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="par_form">
            <h3>Fill out the form</h3>
            <input
              type="text"
              placeholder="Name"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country of residence"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your company / brand"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <textarea
              cols="
            "
              rows="10"
              placeholder="Why do you want to be our Partener?"
              value={whyText}
              onChange={(e) => setWhyText(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bt_submit" onClick={handleClose}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Partners;
