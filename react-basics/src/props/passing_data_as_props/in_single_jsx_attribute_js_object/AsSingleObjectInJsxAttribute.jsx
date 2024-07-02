import React, { useState } from 'react'
import Comp1 from './Comp1';

const AsSingleObjectInJsxAttribute = () => {

    const handleButtonClick = () => {
        window.alert('Button clicked in parent component');
      };
    const [color,setColor]=useState("blue")
    const obj1={
                numberValue:3,
                booleanValue:true, 
                stringValue:"Yogesh",
                arr : [1,2,3],
                obj: {name:"vijay",age:25},
                fun1: ()=>window.alert("executing function. which is passed as props"),
                passEvent: handleButtonClick,
                cssStyle: {color:"red",backgroundColor:"yellow"},
                state: color
    }
  return (
    <>
    <Comp1 obj={obj1}/>
    </>
  )
}
export default AsSingleObjectInJsxAttribute