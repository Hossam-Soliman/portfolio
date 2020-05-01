import React from 'react';
import "bootstrap/dist/css/bootstrap.css";



const ContactSuccess = () => {
    return ( 
        <div className = "success">
            <h1 style={{color: 'white'}}>Thank you <span>{localStorage.getItem('name')}</span> for getting in touch!</h1>
            <p style={{color: 'white'}}>I will reply to you at your email as soon as possible.</p>
        </div>
     );
}
 
export default ContactSuccess;