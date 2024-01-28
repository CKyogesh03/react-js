import React from 'react'
import Colors from './componentname.module.css' 
//we can give any reference name to our imported files/components/images etc..
const ModuleCSS = () => {
  return (
    <div>
        <h1 Class={Colors.heading1}>ModuleCSS</h1> 
        {/* using reference we can access the styles present in muduce.css file . access the corresponding class name to use in an element */}
    </div>
  )
}

export default ModuleCSS