import React from 'react'

const Communication = () => {
  return (
    <>
    <div className="row comum cont">
          <p className='h2  ms-5 'data-aos="fade-up-right"  data-aos-delay="50"
       data-aos-duration="2000" style={{ color:'white', letterSpacing:'1rem'}}>Contact</p>
        <form action="https://formsubmit.co/vchandrukadambur71@mail.com" method='POST' className='contact-form'>
        <div className="cente">
           <div className="topic">
            <p className='title h3'>contact me</p>
            </div>
        < input type="hidden" name='access_key' value={"8c5aba53-566d-45e5-a380-b805b5ba513e"} />
             <input type='text' placeholder='Username' name='name' className='user' required />
             <input type='email' placeholder='Gmail' name='email'  className='Gmail' required/>
             <textarea name='message' placeholder='write on your message' required/>
             <input type="hidden" name="_captcha" value="false"></input>
             <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
             <div className="topic">
              <button type='sumbit' className="px-1">Sumbmit form<i class="bi bi-arrow-right"></i> </button>
              </div> 
        </div>      
        </form>
    </div>
    </>
  )
}

export default Communication
