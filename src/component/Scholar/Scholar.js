import React from 'react';
import './Scholar.css'

const Scholar = (props) => {
    //Destructuring Object Data ========
    const{name, born, age, country, img, salary} = props.person;
    return (
    //Scholar Data Show =========
        <div className = "scholar">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Born: {born}</h4>
            <h4>Age: {age}</h4>
            <h5>Country: {country}</h5> 
            <h3>Salary: ${salary}</h3>
            <p className ="icon">
                <span><i class="fab fa-youtube-square"></i></span>
                <span><i class="fab fa-twitter"></i></span>
            </p>
        </div>
    );
};
export default Scholar;