import React, { useEffect, useState } from 'react'

const Loader = () => {

    const [text, setText] = useState('')
    const [showImg, setShowImg] = useState(true)
    useEffect(()=>{
        
        setTimeout(()=>{
           setText ('CHANDRU')
           setShowImg(false)
        },3000)
    },[ ])
  
  
    return (
    <>
      <div className="loader">
        <span className='loader-a'>C</span>
        <span className='loader-a'>H</span>
        <span className='loader-a'>A</span>
        <span className='loader-a'>N</span>
        <span className='loader-a'>D</span>
        <span className='loader-a'>R</span>
        <span className='loader-a'>U</span>
        <span className='loader-a'>.</span>
        <span className='loader-a'>.</span>
        <span className='loader-a'>.</span>
      </div>
   
    </>
  )
}

export default Loader
