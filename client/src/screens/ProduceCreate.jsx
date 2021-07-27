import React from 'react'
import { useState } from 'react'

export default function ProduceCreate(props) {
  const [produceFormData, setProduceFormData] = useState({
		produce_type: '',
		name: '',
		variety: '',
		img_url: '',
		quantity: '',
		price: '',
  });
  const [seasonId, setSeasonId] = useState()

  const { produce_type, name, variety, img_url, quantity, price } = produceFormData;
  const { handleCreate, seasonsList } = props;

  console.log(seasonsList);

  const handleChange = (e) => {
    e.preventDefault();
		const { name, value } = e.target;
		setProduceFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <div className='screen-width-div'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleCreate(produceFormData);
        }}>
          <label>
          type:
          <br/>
          <input
            type='text'
            name='produce_type'
            value={produce_type}
            onChange={handleChange} />
          </label>
          <br/>
          <label>
          name:
          <br/>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange} />
          </label>
          <br/>
          <label>
          variety:
          <br/>
          <input
            type='text'
            name='variety'
            value={variety}
            onChange={handleChange} />
          </label>
          <br/>
          <label>
          image url (optional):
          <br/>
          <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handleChange} />
          </label>
          <br/>
          <label>
          quantity:
          <br/>
          <input
            type='text'
            name='quantity'
            value={quantity}
            onChange={handleChange} />
          </label>
          <br/>
          <label>
          price (per unit):
          <br/>
          <input
            type='text'
            name='price'
            value={price}
            onChange={handleChange} />
          </label>
        <br />
        <select onChange={(e)=>setSeasonId(e.target.value)} defaultValue='default'>
					<option disabled value='default'>
						-- Select a Season --
					</option>
          {seasonsList.map((season) => (
            <option value={season.id}>{season.name}</option>
          ))}
          </select>
          <br/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}
