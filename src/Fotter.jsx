import { Link,Outlet} from 'react-router-dom';
import React from 'react';

function Fotter(){
  return (
    <>
    <footer>
          <h2>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
            <span>R</span>
            <span>U</span>
          </h2>

          
              
            <div class="footer-contact">
               <h3>Contact</h3>
               <p>Email: vchandrukadambur71@gmail.com</p>
               <p>Phone: +91 7639175310</p>
               <p>Location:Thirukovilur,villupuram</p>
            </div>
       
            <div class="footer-links">
            
         <ul>
                      <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page" href="/" >Home</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/About" class="nav-link" href="#">About</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/Education" class="nav-link" href="#">Education</Link>
                      </li>
                      <li class="nav-item">
                        <Link to='/Skills' class="nav-link" href="#">Skills</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to='/Project' href="#">Project</Link>
                      </li>
                      <li class="nav-item">
                        <Link to='./Communication' class="nav-link" href="#">Contact</Link>
                      </li>
         </ul>
       
    </div>

    <div className='rights'>
    <p> © 2025vchandru. All rights reserved.</p>

    </div>
    
   <Outlet/>

    </footer>
      </>
  )
  
}
export default Fotter;