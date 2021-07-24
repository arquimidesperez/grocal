import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Layout.css'

export default function Layout(props) {
  return (
    <div>
      <header>
        <div class='green-div flex-layout'>
          <div class='flex-layout-grocal'>
          <h1><Link to='/' class='link-font-change'>grocal</Link></h1>            
          </div>
          <div class='flex-layout'>
          <Link to='/login' class='link-font-change'>login</Link>            
          </div>
          <div class='flex-layout'>
          <Link to='/register' class='link-font-change'>register</Link>
          </div>
        </div>
        <hr/>
      </header>
      {props.children}
    </div>
  )
}
