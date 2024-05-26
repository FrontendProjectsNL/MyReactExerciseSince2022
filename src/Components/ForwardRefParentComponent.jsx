import React, {useRef, useEffect} from 'react'

const CustomInput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />
});


const ForwardRefParentComponent = () => {
  const mijnRef = useRef(null);


  useEffect(()=> {

    //Even een paar seconden vertraging zodat ik de forwardRef concept beter kan begrijpen
    const timeoutId = setTimeout(()=>{
      mijnRef.current.focus();
    }, 3000)

    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <div>
      <CustomInput ref={mijnRef} />

    </div>
  )
}

export default ForwardRefParentComponent
