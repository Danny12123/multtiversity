import React from 'react'
import "./ctab.css"

const BootCamp = () => {
  return (
    <div>
      <section className="co_select">
        <div className="co_box">
          <h3>Full Stack Software Development</h3>
          <div className="co_box_content">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Bootstrap</li>
              <li>GitHub</li>
              <li>Hosting</li>
              <li>JavaScript</li>
              <li>Data structures & algorithms</li>
              <li>React.js</li>
              <li>Firebase</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>React Native (mobile development)</li>
            </ul>
          </div>
          <button>Apply now</button>
        </div>
        <div className="co_box">
          <h3>Front End Development</h3>
          <div className="co_box_content">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Bootstrap</li>
              <li>GitHub</li>
              <li>Hosting</li>
              <li>JavaScript</li>
              <li>Data structures & algorithms</li>
              <li>React.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <button>Apply now</button>
        </div>
        <div className="co_box">
          <h3>Back End Development</h3>
          <div className="co_box_content">
            <ul>
              <li>JavaScript</li>
              <li>Data structures & algorithms</li>
              <li>Firebase</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootCamp
