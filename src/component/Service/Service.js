import React, { useEffect, useState } from 'react';
const Service = () => {
    const [courses, setCourses] = useState([]);
    //Data Load section=========
        useEffect(() => {
            fetch('./coursesData.JSON')
                .then(res => res.json())
                .then(data => setCourses(data));
        }, []);
        const styleImage = {
            width: '300px',
            height: '300px'
        }
    return (  
        <div className ="main-section">
               <h1>All Courses Details</h1>
               <div className="row">
                   {
                       courses.map(course => 
                            <div className="col-6 p-5"> 
                                <div className="card p-3" >
                                <div><img style = {styleImage} className="img-fluid" src={course.img} alt="" /></div>
                                <h1>{course.title}</h1>
                                <p>{course.description}</p>
                                </div>      
                            </div>
                       )
                   }   
               </div>
        </div>
    );
};

export default Service;