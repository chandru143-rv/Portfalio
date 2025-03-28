import React from 'react'
import { Link,Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
       <nav class="navbar navbar-expand-lg">
              <div class="container-fluid ">
                       <Link to="/" class="navbar-brand" >
                           <span>C</span>
                            <span>H</span>
                           <span>A</span>
                           <span>N</span>
                            <span>D</span>
                            <span>R</span>
                             <span>U</span>
                         </Link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page"  >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/Education" class="nav-link">Education</Link>
              </li>
              <li class="nav-item">
                <Link to='/Skills' class="nav-link">Skills</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/Project'>Project</Link>
              </li>
              <li class="nav-item">
                <Link to='./Communication' class="nav-link">Contact</Link>
              </li>
                </ul>
            
                </div>
               </div>
              </nav>
              <Outlet></Outlet>
    </>
  )
}
export default NavBar
