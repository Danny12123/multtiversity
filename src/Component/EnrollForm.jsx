import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const EnrollForm = () => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [genderMale, setGenderMale] = useState('');
  const [genderFeMale, setGenderFeMale] = useState('');
  const [currentWork, setCurrentWork] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cyberSeurity, setCyberSeurity] = useState('');
  const [cloudSecurityManager, setCloudSecurityManager] = useState('');
  const [leadEthicalHacker, setLeadEthicalHacker] = useState('');
  const [penetrationTestingProfessional, setPenetrationTestingProfessional] = useState('');
  const [computerForenics, setComputerForenics] = useState('');
  const [LeadForenics, setLeadForenics] = useState('');
  const [agricultreAndFood, setAgricultreAndFood] = useState('');
  const [scurityAndRiskManagement, setScurityAndRiskManagement] = useState('');
  const [businessAndCryptocurrency, setBusinessAndCryptocurrency] = useState('')
  const [blockchain, setBlockchain] = useState('');
  const [projectAndBandManagement, setProjectAndBandManagement] = useState('');
  const [earlyChildhoodAndMontessori, setEarlyChildhoodAndMontessori] = useState('');
  const [earlyChildhoodAndMeontessori, setEarlyChildhoodAndMeontessori] = useState('');
  const [businessStartUp, setBusinessStartUp] = useState('');
  const [communicationAndPublc, setCommunicationAndPublc] = useState('');
  const [b5ankingAndFinance, setBankingAndFinance] = useState("");
  const [projectManagement, setProjectManagement] = useState('');
  const [oilandGasMarketing, setOilandGasMarketing] = useState('');
  const [strategicManagement, setStrategicManagement] = useState('');
  const [marketingManagement, setMarketingManagement] = useState('');
  const [securityAndRiskManagementt, setSecurityAndRiskManagementt] = useState('');
  const [humanResource0Management, setHumanResource0Management] = useState('');
  const [logisticsAndSupplyChainManagement, setLogisticsAndSupplyChainManagement] = useState('');
  const [OccupationalHealthAndSafetyManagment, setOccupationalHealthAndSafetyManagment] = useState('');
  const [online, setOnline] = useState('');
  const [inPersonClassRoom, setInPersonClassRoom] = useState('');
  const [socialMediaMerketing, setSocialMediaMerketing] = useState('');
  const [referredBrAFrined, setReferredBrAFrined] = useState('');
  const [referredMessage, setReferredMessage] = useState('');


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
        <input
          type="text"
          placeholder="Your Response"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          What is your Age ? <span>*</span>
        </h6>
        <input
          type="text"
          placeholder="Your Response"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          What is your gender ? <span>*</span>
        </h6>
        <div className="ra_box">
          <input
            type="radio"
            onChange={(e) => setGenderFeMale(e.target.value)}
          />
          <span>Female</span>
        </div>
        <div className="ra_box">
          <input type="radio" onChange={(e) => setGenderMale(e.target.value)} />
          <span>Male</span>
        </div>
      </div>
      <div className="card_holder">
        <h6>Where do you currently work?</h6>
        <input
          type="text"
          placeholder="Your Response"
          onChange={(e) => setCurrentWork(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          Your email? <span>*</span>
        </h6>
        <input
          type="text"
          placeholder="Your Response"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          Your phone number? <span>*</span>
        </h6>
        <input
          type="text"
          placeholder="Your Response"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          Course option <span>*</span>
        </h6>
        <select>
          <option
            value="#"
            key="#"
            onChange={(e) => setCyberSeurity(e.target.value)}
          >
            Cyber Security (2days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setCloudSecurityManager(e.target.value)}
          >
            Cybersecurity Manager (5days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setCloudSecurityManager(e.target.value)}
          >
            Cloud Security Manager (5days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setLeadEthicalHacker(e.target.value)}
          >
            Lead Ethical Hacker (5days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setPenetrationTestingProfessional(e.target.value)}
          >
            Penetration Testing Professional (5days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setComputerForenics(e.target.value)}
          >
            Computer Forensics (2days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setLeadForenics(e.target.value)}
          >
            Lead Forensic Examiner (5days with exams)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setAgricultreAndFood(e.target.value)}
          >
            Agriculture And Food Security (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setScurityAndRiskManagement(e.target.value)}
          >
            Security And Risk Management (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setBusinessAndCryptocurrency(e.target.value)}
          >
            Blockchain And Cryptocurrency (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setProjectAndBandManagement(e.target.value)}
          >
            Project And Brand Management (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setEarlyChildhoodAndMeontessori(e.target.value)}
          >
            Early Childhood And Montessori Education (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setBusinessStartUp(e.target.value)}
          >
            Business Start-Up And Entrepreneurship (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setCommunicationAndPublc(e.target.value)}
          >
            Communication And Public Relations (6 weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setBankingAndFinance(e.target.value)}
          >
            Banking And Finance (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setProjectManagement(e.target.value)}
          >
            Project Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setOilandGasMarketing(e.target.value)}
          >
            Oil and Gas Marketing (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setStrategicManagement(e.target.value)}
          >
            Strategic Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setMarketingManagement(e.target.value)}
          >
            Marketing Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setSecurityAndRiskManagementt(e.target.value)}
          >
            Security And Risk Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) => setHumanResource0Management(e.target.value)}
          >
            Human Resource Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) =>
              setLogisticsAndSupplyChainManagement(e.target.value)
            }
          >
            Logistics And Supply Chain Management (4 Weekends)
          </option>
          <option
            value="#"
            key="#"
            onChange={(e) =>
              setOccupationalHealthAndSafetyManagment(e.target.value)
            }
          >
            Occupational Health And Safety Management (4 Weekends)
          </option>
        </select>
      </div>
      <div className="card_holder">
        <h6>
          Mode of teaching? <span>*</span>
        </h6>
        <div className="ra_box">
          <input type="radio" onChange={(e) => setOnline(e.target.value)} />
          <span>Online</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            onChange={(e) => setInPersonClassRoom(e.target.value)}
          />
          <span>In Person Classroom</span>
        </div>
      </div>
      <div className="card_holder">
        <h6>
          How did you find out about the course <span>*</span>
        </h6>
        <div className="ra_box">
          <input
            type="radio"
            onChange={(e) => setSocialMediaMerketing(e.target.value)}
          />
          <span>Social Media Marketing</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            onChange={(e) => setReferredBrAFrined(e.target.value)}
          />
          <span>Referred by a Friend</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            onChange={(e) => setReferredBrAFrined(e.target.value)}
          />
          <div className="sub_ra">
            <span>Referred by a Friend: </span>
            <input
              type="text"
              className="sub_input"
              placeholder="Your Response"
              onChange={(e) => setReferredMessage(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card_holder">
        <button className="btn-submit">
          <Link to="/potal">Apply</Link>
        </button>
      </div>
    </div>
  );
}

export default EnrollForm
