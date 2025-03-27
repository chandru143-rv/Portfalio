import React,{useEffect,useRef} from 'react'

const Mouse = () => {
    const cursorRef=useRef(null);
    
    useEffect(()=>{
        const cursor= cursorRef.current;

        const moveCursor = (e) => {
            let x = e.pageX;
            let y = e.pageY;
      
            cursor.style.top = `${y}px`;
            cursor.style.left = `${x}px`;
          };
          document.addEventListener("mousemove", moveCursor);
          return () => {
            document.removeEventListener("mousemove", moveCursor);
          };
    },[]);

  return (
     
    <>
        <div className="cursor" ref={cursorRef}></div>
       
    </>
    

    
  )
}

export default Mouse
