import React from 'react'
import Mouse from './Mouse'


const About_me = () => {
  return (
    <>
    <Mouse/>
  <p className='h2 ms-5 cont'data-aos="fade-up-right"  data-aos-delay="50"
         data-aos-duration="2000" style={{color:'white', letterSpacing:'1rem',overflow:'hidden',marginTop:'4rem'
         }}  >About</p>
      <div className="row  ms-3 cotent" data-aos="fade-up-left"  data-aos-delay="50"
          data-aos-duration="2000">
            <div className='col-6 abotimage'>
                <img className='image' src="IMG_20250320_135411 (1).jpg" alt=" ##"  height={310} width={300}/>
            </div>
            <div className='col-6  about'>
                <p>Hello! I'm Chandru, a Java Full Stack Developer  with a strong passion for building scalable, 
                    efficient, and user-friendly web applications. Currently, I'm honing my skills in both front-end and back-end development,
                     and I’m excited to continue growing in this field.I have experience working with Java, Spring Boot,
                      HTML, CSS, JavaScript, and React, along with a solid understanding of Databases SQL and 
                      version control using Git. I love the challenge of bridging the gap between the user interface and the 
                      server-side logic, which allows me to create end-to-end solutions for real-world problems.</p>
            </div>
            
          </div>
    </>
  )
}

export default About_me
