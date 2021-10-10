import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
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
    // Four Courses Filter Process ===
    const results = courses.filter(result => result.id < 5);
    return (  
        <div className ="main-section">
                <h1>Welcome to Course</h1>
               <div className="row">
                   {   
                       results.map(course => 
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

export default Home;