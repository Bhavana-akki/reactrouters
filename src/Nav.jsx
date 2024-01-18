import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <ol>
            <li className='image'>
                <img src='https://tse3.mm.bing.net/th?id=OIP.VBaPSFRPelrZGAaLztFrOgHaHY&pid=Api&P=0&h=180'/>
            </li>
            <li>
                <Link to={"/"} >HOME</Link>
            </li>
            <li>
                <Link to={"/gallery"} >Gallery</Link>
            </li>
            <li>
                <Link to={"/login"} >LOGIN</Link>
            </li>
            <li>
                <Link to={"/register"} >REGISTER</Link>
            </li>
        </ol>
    </nav>
  )
}

export default Nav
