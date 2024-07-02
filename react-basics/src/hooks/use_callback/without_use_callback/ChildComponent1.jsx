import React from 'react'

const ChildComponent1 = (props) => {
  window.alert("callback function passed child component is rendered every time even same function is passed")
  return (
    <>
      <div>rerender child component even the state is not changed. bcoz passed function have different memory address for every render.bcoz of local scope</div>
    </>
  )
}

export default React.memo(ChildComponent1)