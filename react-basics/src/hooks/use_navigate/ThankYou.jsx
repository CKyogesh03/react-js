import React from 'react'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {
    const navigate= useNavigate();
  return (
    <>
        <h1>ThankYou Page</h1>
        <button onClick={()=>navigate('/navigate/welcome')}>{"<<<<<==="} go back to welcome page</button>
    </>
  )
}

export default ThankYou