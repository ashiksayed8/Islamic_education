import React, { useEffect, useState } from 'react';
import Scholar from '../Scholar/Scholar';
import './Faculty.css';

const Faculty = () => {
    const [persons, setPersons] = useState([]);
//Data Load section=========
    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    return (  
        <div className="person-container">
            <h1>Faculty OF Islamic Study</h1>
            <div className="scholar-container">
            {
                persons.map(person => <Scholar
                    key = {person.id}
                    person = {person}
                >
                </Scholar>
                )
            }
            </div>       
        </div>
    );
};

export default Faculty;