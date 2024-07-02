import React, { useState } from 'react'
import Comp1 from './Comp1'

// directly sending data in props as jsx/html attribute
const  AsDataDirectlyInAttribute= () => {
  const [color,setColor]=useState("blue")
    //note: number must be enclosed in { }. if we enclose with double quotes then it act as string
    //doubt: proper event sending and accessing
  // Define the event handler function
    const handleButtonClick = () => {
      window.alert('Button clicked in parent component');
    };
  return (
    <>
      <Comp1 numberValue= {3}
             booleanValue="true" 
             stringValue="Yogesh"
             arr ={[1,2,3]}
             obj={{name:"vijay",age:25}}
             fun1={()=>window.alert("executing function. which is passed as props")}
             passEvent={handleButtonClick}
             cssStyle={{color:"red",backgroundColor:"yellow"}}
             state={color}
      />
    </>
  )
}

export default AsDataDirectlyInAttribute