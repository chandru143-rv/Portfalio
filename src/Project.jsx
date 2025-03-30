import React from 'react'

const Project = () => {
  return (
    <>
   
    
    <p className='h2 about-head ms-1 mt-5 cont' data-aos="fade-up"  data-aos-delay="50"
         data-aos-duration="2000">Project</p> 
     <div className="dumm-porject">   
       <div className='row  ms-2 mt-5 porject-main content'data-aos="zoom-in-down" data-aos-delay="50" data-aos-duration="2000">
          
           <div className="por-1">
               <div className='porject-1'>
                      <img src="Screenshot (4).png" alt="" height={200} width={400} />
                      <div className="content">
                      <details>
                       
                             <summary >Descrption</summary>
                            <div className="suround">
                                    <p className='titile h4'>MY Personal Portfalio</p>
                                 <p className="sum">I developed my personal portfolio website using a combination of HTML, CSS, JavaScript, React, and Bootstrap. The portfolio serves as both a showcase of my web development skills and a demonstration of how I can 
                                 integrate various technologies into one cohesive, user-friendly web experience. 
                                 <div className="link-btn">
                                     <a className='nav-link btn-succes' type='button' href='https://chandrur.netlify.app/'><button>Click me</button></a>

                                  </div>
                                      </p>

                                  </div>   
                                   
                 </details>
               </div>
               </div>
               
           </div>
           <div className="por-2">
           <div className='porject-2'>
           <img src="Screenshot (7).png" alt="" height={200} width={400} />
           <div className="content">
             <details>
              <summary > Descrption </summary>
              <div className="suround">
                  <p className='titile h4'>Anieme ART</p>
              
                          <p className="sum">I created an interactive Anime Art & Manga Viewer web application that allows users to explore their favorite anime shows, read manga chapters, and read or leave reviews. 
                                     This project utilizes various web technologies to provide a seamless and engaging user experienced,<div className="link-btn">
                                     <a className='nav-link btn-success' type='button' href='https://chandru143-rv.github.io/Art-Anieme/'><button>Click me</button></a>

                                           </div>
                             </p>
             
             </div>
             
              </details>
             </div>
            </div>
            </div>    
           </div>
      </div>
         
    </>
  )
}

export default Project
