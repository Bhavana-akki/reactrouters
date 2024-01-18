import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Register = () => {
    let navigate = useNavigate()

    let handleSignup = ()=>
    {
        navigate("/login")
        localStorage.setItem("useremail", email)
        localStorage.setItem("userpassword", password)
        toast.warning("Succesfully registered")
    }

    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")



  return (
    <div>
      <form action='' style={{textAlign:"center"}}>
        <fieldset>
            <legend>SIGNUP FORM</legend>
            <br/> <br/>
            <label htmlFor='email'>EMAIL: </label>
            <input type='text' id='email' onChange={(e)=>
            {
                setEmail(e.target.value)
            }}/> <br/> <br/>
            <label htmlFor='password'>PASSWORD: </label>
            <input type='number' id='password' onChange={(e)=>
            {
                setPassword(e.target.value)
            }}/> <br/> <br/>
            <label htmlFor='phone'>PHONE: </label>
            <input type='number' id='phone'/> <br/> <br/>
            <button onClick={handleSignup}>SIGNUP</button>
            <button>CANCEL</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Register
