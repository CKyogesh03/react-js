import React, { useState } from 'react'
import Comp1 from './Comp1';

const AsVariableInAttribute = () => {

    
    //note: number must be enclosed in { }. if we enclose with double quotes then it act as string
    //doubt: proper event sending and accessing
  // Define the event handler function
  const handleButtonClick = () => {
    window.alert('Button clicked in parent component');
  };

    const numberValue=3
    const booleanValue="true" 
    const stringValue="Yogesh"
    const arr=[1,2,3]
    const obj={name:"vijay",age:25}
    const fun1=()=>window.alert("executing function. which is passed as props")
    const passEvent=handleButtonClick;
    const cssStyle={color:"red",backgroundColor:"yellow"}
    const [color,setColor]=useState("blue")


  return (
    <>
      <Comp1 numberValue= {numberValue}
             booleanValue={booleanValue}
             stringValue={stringValue}
             arr ={arr}
             obj={obj}
             fun1={fun1}
             passEvent={passEvent}
             cssStyle={cssStyle}
             state={color}
      />
    </>
  )
}

export default AsVariableInAttribute