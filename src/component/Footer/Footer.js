import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="row">
                {/* Social Media Section  */}
                <div className="col-4 text-start p-5">
                    <h3>Social Media</h3>
                    <ul className ="list-unstyled" >
                        <li> <span><i class="fab fa-facebook-square"></i></span> Facebook</li>
                        <li> <span><i class="fab fa-youtube-square"></i></span> Twitter</li>
                        <li> <span><i class="fab fa-twitter-square"></i></span> Youtube</li>
                        <li> <span><i class="fab fa-linkedin"></i></span> Link In</li>
                    </ul>
                </div>
                {/* Quote Section  */}
                <div className="col-6 p-4">
                <blockquote className="blockquote">
                    <p class="pb-3">
                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                        <span className="lead font-italic">“There is no god but He: That is the witness of Allah, His angels, and those endued with knowledge, standing firm on justice. There is no god but He, the Exalted in Power, the Wise” [Quran, 3:18].</span>
                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                     </p>
                </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Footer;