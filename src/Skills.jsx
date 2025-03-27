import React from 'react'
import Mouse from './Mouse'
const Skills = () => {
  return (
  <>
  <Mouse/>
  <div className='skill_main'>
  <p className='h2  ms-5 mt-5 cont'data-aos="fade-up-right"  data-aos-delay="50"
       data-aos-duration="2000" style={{color:'white', letterSpacing:'1rem' }}>Skills</p>

    <div className='row  ms-2 mt-5 skil content'data-aos="zoom-in-down" data-aos-delay="50" data-aos-duration="2000">
    <div className="sii">  
         <div className=" front">
             <p className='h3 heading'>Frontend</p>
              <ul>
                <li className='h5'>HTML</li>
                <li className='h5'>CSS</li>
                <li className='h5'>Java Script</li>
                <li className='h5'>Bootstrap</li>
                <li className='h5'>React</li>
             </ul>
        </div>
        <div className=" backend">
             <p className='h3 heading'>Backend</p>
             <ul>
                <li className='h5'>Java</li>
                <li className='h5'>JSP</li>
                <li className='h5'>SpringBoot</li>
                
             </ul>
            </div>
        <div className=" data">
        <p className='h3 heading'>DataBase</p>
             <ul>
                <li className='h5'>MySql</li>
                <li className='h5'>JDBC</li>
                
             </ul>
            </div>
              
      </div>
    </div>   
   </div>
  </>
  )
}

export default Skills
