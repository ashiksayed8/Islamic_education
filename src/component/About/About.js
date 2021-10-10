import React from 'react';

const About = () => {
    return (
        <div>
            {/* About Intro Section  */}
            <section>
                <h1>About Us</h1>
                <p className ="lead p-5 text-center text-dark">The course aims to enable students to understand key texts, beliefs, practices and concepts of the religion of Islam as well as their significance for Muslims throughout history. At the same time, it aims to provide students with the means to investigate questions relating to the religion of Islam on their own and to pursue research projects within this field. In order to achieve this, the course explores the historical contexts in which key elements of Islam emerged, highlights how they have developed and changed over the course of time and illustrates their role and significance for Muslims up to the modern period.

                Outline of the content: The course will cover central elements and concepts of the religion of Islam. These will include the central texts of Islam, the Qur'an and Hadith, as well as the role and significance of the prophet Muhammad, the central beliefs and the major ritual duties. The course will also explore the main divisions of Islam and various aspects of Islamic thought, such as law, theology, Sufism and political thought.

                Learning experience: The course has a programme of one two-hour session and one one-hour session per week. The two-hour sessions will consist of a combination of lectures and interactive elements, such as group work and in-class exercises. The majority of the one-hour sessions will be taught in tutorial groups, in which the focus will be on the discussion of central primary sources (in translation) or secondary literature. Each student will be required to submit a short written assignment in preparation for each tutorial. Students will also compile an annotated bibliography on a set topic in order to get used to some of the major resources and scholarly tools for the study of Islam.</p>
            </section>
            {/* University Details Section  */}
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="card p-3">
                            <h3 className="text-primary">University Introduction</h3>
                            <h4> Name: Islamic Education</h4>
                            <h4>Founded: 2007</h4>
                            <h5>Mobile No: 019555555555</h5>
                            <h5>Email: islamicedu4@gmail.com</h5>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                        <h3 className="text-success">University Location</h3>
                        <h5>Address: Moghbazar ,Noyatola</h5>
                        <h6>Dhaka ,Bangladesh</h6>
                        </div>        
                    </div>
                </div>
            </div>
            {/* Contact Section  */}
            <div className ="container mt-5">
                <h1>Contact Us</h1>
                <form role="form " action="" method="">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" required/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" required/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" className="form-control" id="sub" name="sub" placeholder="Subject" required/>
                    </div>
                    <div className="form-group mt-2">
                         <textarea rows="5" className="form-control" cols="30" id="msg" name="msg" placeholder="Message" ></textarea>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-outline-success my-3">Submit</button>
                    </div>
                </form>
       </div>
    </div>
    );
};

export default About;