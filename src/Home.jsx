import React from 'react';
import About_me from './About_me';
import Education from './Education';
import Skills from './Skills';

import Spline from '@splinetool/react-spline';
import Project from './Project';

import Communication from './Communication';
const Home = () => {
  return (
    <>
       
          <div className='container-fluid home-cont'>
            <div className="row">
              
                    <div className="col-2  symbol">
                       <i class="bi bi-envelope" data-aos="fade-right" data-aos-delay="70" data-aos-duration="3000"></i>

                              <a className='nav-link' href="https://github.com/chandru143-rv"><i class="bi bi-github" data-aos="fade-left"  data-aos-delay="70" data-aos-duration="3000"></i></a>
              
                   
               </div>
              <div className="col-3 ms-1 mt-2 conc">
                                <span className='span-hello'>H</span>
                                <span className='span-hello'>E</span>
                                 <span className='span-hello'>L</span>
                                  <span className='span-hello'>L</span>
                                  <span className='span-hello'>O</span>
                                  <span className='span-hello'>!</span>
                          <div className="con">
                                    <p className='mt-5' data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" >
                                        Welcome to my portfolio! Here, 
                                        you can explore my work and see the skills I bring to each project
                                      </p>
                                  <a className='nav-link' href="chandru fin (1).pdf" download="v chandru"><button data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="4000">Resume</button></a>
                          </div>
               </div>
                     <div className="col-6  box">
                          <Spline   scene="https://prod.spline.design/yzbRG0hpKu3tFMOc/scene.splinecode" />
                      </div>
             </div>
         
       <div className="container abou-content about-head overflow-hidden" >
           <About_me></About_me>
          
       </div>
       
       <div className="container education-content about-head">
           <Education></Education>
       </div>
        
        <div className="container Skills-content about-head">
           <Skills></Skills>
        </div>
        
        <div className="container project-content about-head ">
           <Project></Project>
        </div>
        <div className="container contact-content about-head">
          <Communication></Communication>
        </div>
    </div>
 </>
  )
}

export default Home;
 