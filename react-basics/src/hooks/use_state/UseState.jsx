import React, { useState } from 'react'

// code with error
const UseState = () => {
    const [id,setId] = useState(0)
    const [name,setName]=useState("");
    const [eligible,setEligible]=useState(false);
    // const [person,setPerson]=useState({})
    const [skills,setSkills]=useState([])

    setId(3)
    setName("yogesh")
    setEligible(true)
    // setPerson({name:"yogesh ck",degree:"MCA",skill:"java"})
    // setPerson({...person,skill:"react js"})
    setSkills(["front end","back end","database"])

  return (
    <div>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{eligible}</h1>
        {/* <h1>{person}</h1> */}
        <h1>{skills}</h1>
    </div>
  )
}

export default UseState