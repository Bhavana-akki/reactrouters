import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    let navigate=useNavigate()
    let[loginusername, setLoginusername] = useState("")
    let[loginpassword, setLoginpassword] = useState("")

    let localuseremail = localStorage.getItem("useremail")
    let localpassword = localStorage.getItem("userpassword")

    let handleLogin = (e) => {
        e.preventDefault()
        if(loginusername==localuseremail && loginpassword==localpassword)
        {
            toast.success(`${loginusername} logged in successfully`)
            navigate("/Gallery")
        }
        else{
            toast.error("please check username and password")
        }
    }
  return (
    <div>
      <form action='' style={{textAlign:"center"}}>
        <fieldset>
            <legend>LOGIN FORM</legend>
            <br/> <br/>
            <label htmlFor='email'>EMAIL: </label>
            <input type='text' id='email' onChange={(e)=>
            {
                setLoginusername(e.target.value)
            }}/> <br/> <br/>
            <label htmlFor='password'>PASSWORD: </label>
            <input type='number' id='password' onChange={(e)=>
            {
                setLoginpassword(e.target.value)
            }}/> <br/> <br/>
            <label htmlFor='phone'>PHONE: </label>
            <input type='number' id='phone'/> <br/> <br/>
            <button onClick={handleLogin}>LOGIN</button>
            <button>CANCEL</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
