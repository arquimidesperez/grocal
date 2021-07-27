import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout} = props;
  return (
    <div>
      <header>
        <div className='green-div flex-layout'>

          <div className='flex-layout-grocal'>
            <h1><Link to='/' className='link-font-change'>grocal</Link></h1>

                {currentUser ? (
                <div>
                <p>{currentUser.username}</p>
                <button onClick={handleLogout}  className='green-button'>Logout</button>
                </div>
                ) : (
                <div>
                <div className='flex-layout'>
                <Link to='/login' className='link-font-change'>login</Link>            
                </div>
                <div className='flex-layout'>
                <Link to='/register' className='link-font-change'>register</Link>
                </div>
                </div>
                )}

            {currentUser && (
              <nav>
                <Link to='/produces' className='link-font-change'>produce</Link>
                <br/>
                <Link to='/seasons' className='link-font-change'>seasonal</Link>
                <br/>
                <Link to='/produces/new' className='link-font-change'>create</Link>
              </nav> 
            )}

          </div>

        </div>

        <hr />
        
      </header>
      {props.children}
    </div>
  )
}
