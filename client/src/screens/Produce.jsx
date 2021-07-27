import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Produce.css'

export default function Produce(props) {
  const{produceList} = props;

  return (
    <div className='screen-width-div'>
      {produceList.map((produce) => (
        
        <div key={produce.id}>
          <div className='produces-container'>
            <Link to={`/produces/${produce.id}`}>
              <div>
              <p className='green-div'>{produce.name}</p>
              </div>
            <p>Price ${produce.price}</p>
            <p>Quantity: {produce.quantity}</p>
          </Link>
          </div>
        </div>
        
      ))}
      {/* <Link to={`/produces/${produce.id}/edit`}><button>Edit</button></Link> */}
    </div>
  )
}
