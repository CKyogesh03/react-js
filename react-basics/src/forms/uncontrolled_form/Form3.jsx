import { useRef, useState } from 'react';

function Form3() {
  const nameRef= useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let userName=nameRef.current.value;
    alert(userName)
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          ref={nameRef}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form3