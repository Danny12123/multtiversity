import React from 'react'
import { Link } from 'react-router-dom';

const EnrollForm = () => {
  return (
    <div>
      <div className="card_holder">
        <h3>Multiversity Of Africa</h3>
        <h4>Executive Short Course Registration Form</h4>
        <p>
          The UK executive short courses are for CEOs, corporate executives,
          entrepreneurs, employees who seek promotion at work, graduates who
          desires to maximize their employabilities, students who aims to be
          ahead of their peers etc. In today's fast paced knowledge and work
          environment, employers are seeking to employ individuals who can grow
          people, grow the organization and grow profits. These requires
          advanced professional development in handling business that is
          structured in content and context to meet the training needs of high
          potential business and corporate executive. These UK executive short
          courses are intended to produce an elite group of business leaders who
          can lead change, drive innovation and solve complex business problems.
          These courses are taught in an MBA format and features key MBA topics.
          The courses are taken/delivered via online or onsite as seminars,
          workshops, events, or as presentation Upon filling this form, our
          Admissions department will contact you to assist you complete your
          registration. Kindly contact us on the numbers below if you need
          clarification on any of our courses.
        </p>
        <h6>Contact us on 0302 937 688 / 0500 040 202</h6>
      </div>
      <div className="card_holder">
        <h6>
          What is your first name? <span>*</span>
        </h6>
        <input type="text" placeholder="Your Response" />
      </div>
      <div className="card_holder">
        <h6>
          What is your Age ? <span>*</span>
        </h6>
        <input type="text" placeholder="Your Response" />
      </div>
      <div className="card_holder">
        <h6>
          What is your gender ? <span>*</span>
        </h6>
        <div className="ra_box">
          <input type="radio" />
          <span>Female</span>
        </div>
        <div className="ra_box">
          <input type="radio" />
          <span>Male</span>
        </div>
      </div>
      <div className="card_holder">
        <h6>Where do you currently work?</h6>
        <input type="text" placeholder="Your Response" />
      </div>
      <div className="card_holder">
        <h6>
          Your email? <span>*</span>
        </h6>
        <input type="text" placeholder="Your Response" />
      </div>
      <div className="card_holder">
        <h6>
          Your phone number? <span>*</span>
        </h6>
        <input type="text" placeholder="Your Response" />
      </div>
      <div className="card_holder">
        <h6>
          Course option <span>*</span>
        </h6>
        <select>
          <option value="#" key="#">
            Cyber Security (2days with exams)
          </option>
          <option value="#" key="#">
            Cybersecurity Manager (5days with exams)
          </option>
          <option value="#" key="#">
            Cloud Security Manager (5days with exams)
          </option>
          <option value="#" key="#">
            Lead Ethical Hacker (5days with exams)
          </option>
          <option value="#" key="#">
            Penetration Testing Professional (5days with exams)
          </option>
          <option value="#" key="#">
            Computer Forensics (2days with exams)
          </option>
          <option value="#" key="#">
            Lead Forensic Examiner (5days with exams)
          </option>
          <option value="#" key="#">
            Agriculture And Food Security (6 weekends)
          </option>
          <option value="#" key="#">
            Security And Risk Management (6 weekends)
          </option>
          <option value="#" key="#">
            Blockchain And Cryptocurrency (6 weekends)
          </option>
          <option value="#" key="#">
            Project And Brand Management (6 weekends)
          </option>
          <option value="#" key="#">
            Early Childhood And Montessori Education (6 weekends)
          </option>
          <option value="#" key="#">
            Business Start-Up And Entrepreneurship (6 weekends)
          </option>
          <option value="#" key="#">
            Communication And Public Relations (6 weekends)
          </option>
          <option value="#" key="#">
            Banking And Finance (4 Weekends)
          </option>
          <option value="#" key="#">
            Project Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Oil and Gas Marketing (4 Weekends)
          </option>
          <option value="#" key="#">
            Strategic Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Marketing Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Security And Risk Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Human Resource Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Logistics And Supply Chain Management (4 Weekends)
          </option>
          <option value="#" key="#">
            Occupational Health And Safety Management (4 Weekends)
          </option>
        </select>
      </div>
      <div className="card_holder">
        <h6>
          Mode of teaching? <span>*</span>
        </h6>
        <div className="ra_box">
          <input type="radio" />
          <span>Online</span>
        </div>
        <div className="ra_box">
          <input type="radio" />
          <span>In Person Classroom</span>
        </div>
      </div>
      <div className="card_holder">
        <h6>
          How did you find out about the course <span>*</span>
        </h6>
        <div className="ra_box">
          <input type="radio" />
          <span>Social Media Marketing</span>
        </div>
        <div className="ra_box">
          <input type="radio" />
          <span>Referred by a Friend</span>
        </div>
        <div className="ra_box">
          <input type="radio" />
          <div className="sub_ra">
            <span>Referred by a Friend: </span>
            <input
              type="text"
              className="sub_input"
              placeholder="Your Response"
            />
          </div>
        </div>
      </div>
      <button className="btn-submit">
        <Link to="/potal">Apply</Link>
      </button>
    </div>
  );
}

export default EnrollForm
