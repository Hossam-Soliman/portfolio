import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './skills.css';
import fast from './img/fast.png'
import responsive from './img/responsive.png'
import intuitive from './img/intuitive.png'
import dynamic from './img/dynamic.png'



const Skills = () => {

    return ( 
        <div className = "skills">
            <h1>Skills</h1>
            <div className="row">
                <div className="skills-left col-md-5">
                    
                    <div className="details row">
                        <div className="detail col-md-2">
                            <img src={fast} alt=""></img>
                            <h4>Fast</h4>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                        <div className="detail col-md-2">
                            <img src={responsive} alt=""></img>
                            <h4>Responsive</h4>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                        <div className="detail col-md-2">
                            <img src={intuitive} alt=""></img>
                            <h4>Intuitive</h4>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                        <div className="detail col-md-2">
                            <img src={dynamic} alt=""></img>
                            <h4>Dynamic</h4>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                        

                    </div>
                </div>

                <div className="skills-right col-md-5">
                    <div className="bar"><div className="bar-fill"><span className="course">HTML</span></div><span className="precent"><strong>90%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">CSS</span></div><span className="precent"><strong>90%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">JavaScript</span></div><span className="precent"><strong>80%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">reactJS</span></div><span className="precent"><strong>80%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">Node.js</span></div><span className="precent"><strong>70%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">Express</span></div><span className="precent"><strong>70%</strong></span></div>
                    <div className="bar"><div className="bar-fill"><span className="course">UI Design</span></div><span className="precent"><strong>80%</strong></span></div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;