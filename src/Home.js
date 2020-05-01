import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom'
import second from './img/second.png'
import css from './img/css.png'
import js from './img/new.png'
import react from './img/react.png'
import node from './img/node.jpg'
import mongo from './img/mongo.png'


const Home = () => {


    return ( 
        <div className = "home-page">
            <div className ="row">
                <div className = "text-zone col-md-4">
                    <h1 id = "homeSpan"><span>Hi,</span><br></br> <span>I</span><span>'</span><span>m</span> <span>H</span><span>o</span><span>s</span><span>s</span><span>a</span><span>m</span><span>,</span><br></br> 
                    <span>w</span><span>e</span><span>b</span> <span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span><span>.</span></h1>
                    <h2 id = "ml2">Front End Developer / ReactJS / MERN stack</h2>
                    <Link to ="/contact"><button>CONTACT ME</button></Link>
                </div>
                <div className="wrapper">
                    <div className = "profile col-md-5">
                        <img className="node" src = {node} alt=""></img>
                        <img className="css" src = {css} alt=""></img>
                        <img className="mongo" src = {mongo} alt=""></img>
                        <img className="react" src = {react} alt=""></img>
                        <img className="html" src = {second} alt=""></img>
                        <img className="js" src = {js} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;