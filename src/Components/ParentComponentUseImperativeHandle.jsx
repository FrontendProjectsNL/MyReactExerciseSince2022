import React, {useRef, useImperativeHandle} from 'react'

// eslint-disable-next-line react/display-name
const MyComponent = React.forwardRef((props, ref) => { 
    const doSomething = () => { 
        console.log('doing something'); 
    }; 
    
    useImperativeHandle(ref, () => (
              { doSomething }
           )
        ); 

        return <div>My Component</div>; 
    }
); 


const ParentComponentUseImperativeHandle = () => {
    const myComponentRef = useRef(null); 
    
    const handleClick = () => { 
        myComponentRef.current.doSomething(); 
    }; 
    
    return ( 
       <div> 
           <button onClick={handleClick}>Do Something</button> 
           <MyComponent ref={myComponentRef} /> 
        </div> 
        );
}

export default ParentComponentUseImperativeHandle
