import React from 'react'
import './partners.css'
import { Row ,Col, Container } from 'react-bootstrap'

const Partners = () => {
  return (
    <div id="partner">
      <Container>
        <div className="partner_head">
          <h2>For Partners</h2>
          <hr />
        </div>
        <Row>
          <Col md>
            <div className="partner_content">
              <div className="part_cont1">
                <p>
                  We believe that in today's world, partnerships are more
                  profitable and creative than competition. We are always open
                  to partner with interested and capable persons/organizations
                  to help reach out to a more larger audience. For collaborative
                  works or Agencies, let's work together!
                </p>
                <button>Partners</button>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="partner_content">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners
