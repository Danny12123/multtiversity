import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { CourseOption } from './Data/EnrollData';
import axios from "axios";
import Payment from '../Pages/Payment/Payment';


const EnrollForm = () => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  // const [genderMale, setGenderMale] = useState('');
  // const [genderFeMale, setGenderFeMale] = useState('');
  const [currentWork, setCurrentWork] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [online, setOnline] = useState('');
  const [inPersonClassRoom, setInPersonClassRoom] = useState('');
  const [socialMediaMerketing, setSocialMediaMerketing] = useState('');
  const [referredBrAFrined, setReferredBrAFrined] = useState('');
  const [referredMessage, setReferredMessage] = useState('');
  const [courseOption, setCourseOption] = useState('');
  // const [selectedOption, setSelectedOption] = useState("");
   const [topping, setTopping] = useState("");
   const [teachingMode, setTeachingMode] = useState('');
   const [howYouFind, setHowYouFind] = useState('');
   const [lastName, setLastName] = useState("");
   const [otherName, setOtherName] = useState("");
   const [isActive, setIsActive] = useState(true);
   const [userInfo, setUserInfo] = useState(null);
   

  const handleEnrollF = async() => {
    const enrollExecutive = {
      executive: "Executive Short Course",
      teachingMode,
      howYouFind,
      topping,
      firstName,
      lastName,
      otherName,
      age,
      currentWork,
      email,
      phoneNumber,
      socialMediaMerketing,
      referredBrAFrined,
      referredMessage,
      courseOption,
    };
    try {
      const res = await axios.post("executive/", enrollExecutive);
      setUserInfo(res.data);
    } catch (err) {
      console.log(err)  
    }
    setIsActive(false);
  }

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
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          What is your last name? <span>*</span>
        </h6>
        <input
          type="text"
          placeholder="Your Response"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          What is your Other name? <span>*</span>
        </h6>
        <input
          type="text"
          placeholder="Your Response"
          required
          value={otherName}
          onChange={(e) => setOtherName(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          What is your Age ? <span>*</span>
        </h6>
        <input
          type="number"
          placeholder="Your Response"
          value={age}
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
            value="Female"
            name="gender"
            required
            checked={topping === "Female"}
            onChange={(e) => setTopping(e.target.value)}
          />
          <span>Female</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={topping === "Male"}
            onChange={(e) => setTopping(e.target.value)}
          />
          <span>Male</span>
        </div>
      </div>
      <div className="card_holder">
        <h6>Where do you currently work?</h6>
        <input
          type="text"
          placeholder="Your Response"
          value={currentWork}
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
          value={email}
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="card_holder">
        <h6>
          Course option <span>*</span>
        </h6>
        <select
          value={courseOption}
          onChange={(e) => setCourseOption(e.target.value)}
        >
          {CourseOption.map((title) => {
            return <option key={title._id}>{title.title}</option>;
          })}
        </select>
      </div>
      <div className="card_holder">
        <h6>
          Mode of teaching? <span>*</span>
        </h6>
        <div className="ra_box">
          <input
            type="radio"
            value="online"
            name="modeTeaching"
            required
            checked={teachingMode === "online"}
            onChange={(e) => setTeachingMode(e.target.value)}
          />
          <span>Online</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            value="inPersonClassRoom"
            name="modeTeaching"
            checked={teachingMode === "inPersonClassRoom"}
            onChange={(e) => setTeachingMode(e.target.value)}
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
            value="socialMediaMerketing"
            required
            name="howdidyoufindUs"
            checked={howYouFind === "socialMediaMerketing"}
            onChange={(e) => setHowYouFind(e.target.value)}
          />
          <span>Social Media Marketing</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            value="referredBrAFrined"
            name="howdidyoufindUs"
            checked={howYouFind === "referredBrAFrined"}
            onChange={(e) => setHowYouFind(e.target.value)}
          />
          <span>Referred by a Friend</span>
        </div>
        <div className="ra_box">
          <input
            type="radio"
            value={referredMessage}
            name="howdidyoufindUs"
            onChange={() => setReferredBrAFrined("Referred by a Friend")}
          />
          <div className="sub_ra">
            <span>Referred by a Friend: </span>
            <input
              type="text"
              className="sub_input"
              name="howdidyoufindUs"
              placeholder="Your Response"
              onChange={(e) => setReferredMessage(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card_holder">
        <button className="btn-submit" onClick={handleEnrollF}>
          Apply
        </button>
      </div>
      {/* {userInfo && Payment} */}
    </div>
  );
}

export default EnrollForm
