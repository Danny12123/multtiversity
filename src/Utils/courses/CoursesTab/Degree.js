import React from 'react'
import { DegreeCourses } from '../../../Component/Data/EnrollData';

const Degree = () => {
  return (
    <div>
      <div className="co_select">
        {DegreeCourses.map((item, index) => {
          return (
        <div className="co_box" item={index}>
          <h6>{item.title}</h6>
        </div>
          )
        })}
      </div>
    </div>
  );
}

export default Degree
