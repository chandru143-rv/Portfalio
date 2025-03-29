import React from 'react'

const Communication = () => {
  return (
    <>
    <div className="row comum cont mt-5">
          <p className='h2  ms-5 'data-aos="fade-up-right"  data-aos-delay="50"
       data-aos-duration="2000" style={{ color:'white', letterSpacing:'1rem'}} >Contact</p> <break/>
     <div className="form-dummy">
        <form action="https://formsubmit.co/vchandrukadambur71@mail.com" method='POST' className='contact-form ms-5'>
        <div className="cente">
           <div className="topic">
            <p className='title h3'>contact me</p>
            </div>
        < input type="hidden" name='access_key' value={"73c1bc246fe29ea7f4e20d9d69931ace"} />
             <input type='text' placeholder='Username' name='name' className='user' required />
             <input type='email' placeholder='Gmail' name='email'  className='Gmail' required/>
             <textarea name='message' placeholder='write on your message' required/>
             <input type="hidden" name="_captcha" value="false"></input>
             <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
             <div className="topic">
              <button type='sumbit' className="px-1">Submit form<i class="bi bi-arrow-right"></i> </button>
              </div> 
        </div>      
        </form>
       </div>    
    </div>
    </>
  )
}

export default Communication
