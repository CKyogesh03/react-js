import React from 'react';

const PrintName = (props) => {
  console.log("child component PrintName is rendering")
  return (
    <>
      <h2>My Name</h2>
      <p>{props.c1}</p>
    </>
  );
};

export default React.memo(PrintName);
