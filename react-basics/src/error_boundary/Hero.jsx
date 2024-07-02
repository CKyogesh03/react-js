import React from 'react'

const Hero = (props) => {
    if(props.heroName === "Joker"){
        throw new Error("Joker is not Hero")
    }
  return (
    <div>
        The hero props.heroName
    </div>
  )
}

export default Hero