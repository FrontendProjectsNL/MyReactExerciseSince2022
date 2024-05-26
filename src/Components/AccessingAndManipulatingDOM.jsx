import React, {useEffect, useRef} from 'react'

const AccessingAndManipulatingDOM = () => {
    const inputRef = useRef();

    useEffect(() => {

      
      //Ik heb 2sec timeout gebruikt om het beter te zien in de browser (om het beter te begrijpen, ter illustratie)
      const timeoutId = setTimeout(()=> {
        // Focus on the input element when the component mounts
        inputRef.current.focus();
      }, 2000)

      return () => clearTimeout(timeoutId); 
    }, []);
  
    return <input ref={inputRef} />;
  
}

export default AccessingAndManipulatingDOM
