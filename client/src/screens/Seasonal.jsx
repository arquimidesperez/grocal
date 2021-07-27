import React from 'react'
import { useState } from 'react'
import '../assets/css/Seasonal.css'

export default function Seasonal(props) {
  const { seasonsList } = props;
  const [seasonId, setSeasonId] = useState()

  

  return (
    <div  className='screen-width-div'>
      <p className='b-text'>View Produce by Seasons</p>
      <br/>
      <select
          onChange={(e)=>setSeasonId(e.target.value)}
          defaultValue='default'
          className='seasonal-selector'
          name='season'>
          {/* value={season.name} */}
					<option disabled value='default'>
						- Select a Season -
					</option>
          {seasonsList.map((season, idx) => (
            <option key={idx} value={season.id}>{season.name}</option>
          ))}
          </select>


    </div>
  )
}
