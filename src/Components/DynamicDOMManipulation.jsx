import { useRef, useEffect } from 'react';

function DynamicDOMManipulation() {
  const myElementRef = useRef(null);

  useEffect(() => {
    // Access and manipulate the DOM element using the ref
    if (myElementRef.current) {
        console.log("myElementRef: ", myElementRef);
        console.log("============================");
        console.log("myElementRef.current: ", myElementRef.current);
      myElementRef.current.style.backgroundColor = 'blue';
    }
  }, []);

  return <div ref={myElementRef}>This is my element</div>;
}
export default DynamicDOMManipulation
