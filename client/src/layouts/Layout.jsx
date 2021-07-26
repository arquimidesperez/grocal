import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout} = props;
  return null;
  // return (
  //   <div>
  //     <header>
  //       <div class='green-div flex-layout'>

  //         <div class='flex-layout-grocal'>
  //           <h1><Link to='/' class='link-font-change'>grocal</Link></h1>

  //               {currentUser ? (
  //               <div>
  //               <p>{currentUser.username}</p>
  //               <button onClick={handleLogout}  class='green-button'>Logout</button>
  //               </div>
  //               ) : (
  //               <div>
  //               <div class='flex-layout'>
  //               <Link to='/login' class='link-font-change'>login</Link>            
  //               </div>
  //               <div class='flex-layout'>
  //               <Link to='/register' class='link-font-change'>register</Link>
  //               </div>
  //               </div>
  //               )}

  //           {currentUser && (
  //             <nav>
  //               <Link to='/produces' class='link-font-change'>produce</Link>
  //               <br/>
  //               <Link to='/seasons' class='link-font-change'>seasonal</Link>
  //               <br/>
  //               <Link to='/produces/new' class='link-font-change'>produces</Link>
  //             </nav> 
  //           )}

  //         </div>

  //       </div>

  //       <hr />
        
  //     </header>
  //     {props.children}
  //   </div>
  // )
}
