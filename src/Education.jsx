import React from 'react'


const Education = () => {
  return (
    <>
    
 <div className="eaducation-con mt-5">

    <p className='h2 cont ms-5' data-aos="fade-up-right"  data-aos-delay="50"
    data-aos-duration="2000" style={{color:'white', letterSpacing:'1rem'}}>Education</p> 
    <div className="row off content" data-aos="zoom-in-up" data-aos-delay="50"
    data-aos-duration="2000">
      <div className="col-2  year-right"  >
        <p className='o'>2020</p>
      </div>
      <div className="col-10  p-4 o">
        <p>ST.Anne's College Of Engineering And Technology , Cuddalore</p>
        <p>Bachelor of Engineering in Computer Science Engineering </p>
      </div>
    </div>
    <div className="row off mt-4" data-aos="zoom-in-left" data-aos-delay="50"
    data-aos-duration="2000">
      <div className="col-10 p-4 o">
        <p>Government Higher Secondary School , veerapermanalur</p>
        <p>Higher Secondary Certificate</p>
      </div>
      
      <div className="col-2 year-left">
        <p className='o'>2019</p>
      </div>
    </div>
    <div className="row off mt-4" data-aos="zoom-in-right" data-aos-delay="50"
    data-aos-duration="2000">
     
      <div className="col-2 year-right">
        <p className='o'>2018</p>
      </div>
      <div className="col-10 p-4 o">
        <p>Government High School , kadambur</p>
        <p>Secondary School Leaving Certificate</p>
       
      </div>
    </div>
 </div> 
    </>
  )
}

export default Education
