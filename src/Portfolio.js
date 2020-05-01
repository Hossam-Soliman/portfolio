import React, {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css'

import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'
import pic5 from './img/pic5.jpg'
import pic6 from './img/pic6.jpg'
import pic7 from './img/pic7.png'
import pic8 from './img/pic8.jpg'
import pic9 from './img/pic9.jpg'
import pic10 from './img/pic10.jpg'
import pic11 from './img/pic11.jpg'
import pic12 from './img/pic12.jpg'
import pic13 from './img/pic13.jpg'
import pic14 from './img/pic14.jpg'
import pic15 from './img/pic15.jpg'



const Skills = () => {

   useEffect(() => {
      const lightbox = document.createElement('div')
      lightbox.id = 'lightbox'
      document.body.appendChild(lightbox)
      
      const images = document.querySelectorAll('img')
      images.forEach(image => {
        image.addEventListener('click', e => {
          lightbox.classList.add('active')
          const img = document.createElement('img')
          img.src = image.src
          while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
          }
          lightbox.appendChild(img)
        })
      })
      
      lightbox.addEventListener('click', e => {                    //e.target is the element that triggered the event (e.g., the user clicked on)        
                                                                  // e.currentTarget is the element that the event listener is attached to (lightbox)
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active')
      })

    });

    return ( 
        <div className = "portfolio">
            <div className = "grid">
               <img src= {pic1} alt =""></img>
               <img src={pic2} alt =""></img>
               <img src={pic3} alt =""></img>
               <img src={pic4} alt =""></img>
               <img src={pic5} alt =""></img>
               <img src={pic6} alt =""></img>
               <img src={pic7} alt =""></img>
               <img src={pic8} alt =""></img>
               <img src={pic9} alt =""></img>
               <img src={pic10} alt =""></img>
               <img src={pic11} alt =""></img>
               <img src={pic12} alt =""></img>
               <img src={pic13} alt =""></img>
               <img src={pic14} alt =""></img>
               <img src={pic15} alt =""></img>
            </div> 
         </div>
     );
}
 
export default Skills;