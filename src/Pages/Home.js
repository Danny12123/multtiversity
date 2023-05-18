import React from 'react'
import NavBar from '../Component/ComHome/NavBar'
import Hero from '../Component/ComHome/Hero';
import ".././Component/ComHome/style.css"
import WhyUs from '../Utils/WhyUs';
import Courses from '../Utils/courses/Courses';
import About from '../Utils/About/About'
import Footer from '../Utils/Footer/Footer'
import Mission from '../Utils/MissV/Mission';
import Vision from '../Utils/MissV/Vision';
import Partners from '../Utils/Partners/Partners';
import Department from '../Utils/Department/Department';
const Home = () => {
  return (
    <div>
      <div className="her_bg">
        <NavBar />
        <Hero />
      </div>
      <WhyUs />
      <Courses />
      <About />
      <Mission />
      <Vision />
      <Partners />
      {/* <Department /> */}
    <Footer />
    </div>
  );
}

export default Home
