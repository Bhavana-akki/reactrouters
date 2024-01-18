import React, { useEffect, useState } from 'react'

const Gallery = () => {

    let[userData, setUserData] = useState([])
    useEffect(()=>
    {
        fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((y)=>setUserData(y))
        .catch((err)=>console.log("Please check the server"))
    },[])
  return (
    <>
    {userData.map((x)=>
    {
        return(
            <li>
                <h3>{x.login}</h3>
            </li>
        )
    })}
    </>
  )
}

export default Gallery