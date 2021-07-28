import React from 'react'
import { useState } from 'react'
import '../assets/css/Seasonal.css'
import Produce from './Produce.jsx';

export default function Seasonal(props) {
  const { seasonsList } = props;

  console.log(seasonsList);

  const [produceList, setProduceList] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('this is value' + value);
    const season = seasonsList.find((season) => season.id === +value);
    console.log('this is season list' + seasonsList[0].id)
    console.log('this is season' + season.produces);
    season && setProduceList(season.produces)
  }

  return (
    <div className='screen-width-div'>
      <div className='green-div'>
        <p className='w-text'>seasonal availability</p>
      </div>
      <br/>
      <select
          onChange={handleChange}
          defaultValue='default'
          className='seasonal-selector'
          name='season'>
					<option disabled value='default'>
						- Select a Season -
					</option>
          {seasonsList.map((season, idx) => (
            <option key={idx} value={season.id}>{season.name}</option>
          ))}
      </select>
      <Produce produceList={produceList}/>


    </div>
  )
}
