import React from 'react'
import {Link,Outlet} from "react-router-dom" 
import "./MainLayout.css"

function MainLayout() {
  return (
    <div><h1>Welcome to main layout</h1>
    <nav>
        <ul className='aa'>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>

        </ul>
    </nav>
    <Outlet/> 
    </div>
  )
}

export default MainLayout