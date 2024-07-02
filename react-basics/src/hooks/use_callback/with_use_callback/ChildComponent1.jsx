import React from 'react'

const ChildComponent1 = (props) => {
  window.alert("callback function passed child component is rendered, only when passed state or function is different from previously sent state or function")
  return (
    <>
      <div>child component is rendered, only when the color state is modified in parent. otherwise child rendering is prevented</div>
    </>
  )
}

export default React.memo(ChildComponent1)