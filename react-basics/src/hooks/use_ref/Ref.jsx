import React, { useEffect,useRef } from 'react'
export const Ref = () => {
    let headRef=useRef();
    let nameRef=useRef();
    useEffect(()=>{
        headRef.current.style.color="red";
        nameRef.current.style.color="blue";
    },[])

  return (
    <div>
        <h1 ref={headRef}>Profile</h1>
        <p ref={nameRef}>name: Yogesh C.K</p>
        <p>age : 23</p>
    </div>
  )
}