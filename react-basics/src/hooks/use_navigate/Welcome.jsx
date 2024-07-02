import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate();
  return (
    <>
    <h1>Welcome Page</h1>
    <button onClick={()=>navigate('/navigate/thankyou')}>go forward to thankyou page {"===>>>"}</button>
    </>
  )
}

export default Welcome