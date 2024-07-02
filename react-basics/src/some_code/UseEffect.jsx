import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    const[users,setUsers]=useState([]);
    console.log(users)
    useEffect(()=>{
        window.fetch("http://api.github.com/users")
        .then(res=>res.json()).then((data)=>{
            setUsers(data)
        }).catch(error=>console.log(error))
    },[])
  return (
    <div>
        {
            users.map(val=>{
                return(
                    <>
                    <img src={val.avatar_url}/>
                    </>
                )
            })
        }
    </div>
  )
}
