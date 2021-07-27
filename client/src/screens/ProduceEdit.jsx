import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProduceEdit(props) {
  const [produceFormData, setProduceFormData] = useState({
		produce_type: '',
		name: '',
		variety: '',
		img_url: '',
		quantity: '',
    price: '',
	});
  const { produce_type, name, variety, img_url, quantity, price } = produceFormData;
	const { produceList, handleUpdate, seasonsList } = props;
	const { id } = useParams();

	useEffect(() => {
		const prefillFormData = () => {
			const editingProduce = produceList.find((produce) => produce.id === Number(id));
			setProduceFormData({
				produce_type: editingProduce.produce_type,
				name: editingProduce.name,
				variety: editingProduce.variety,
				img_url: editingProduce.img_url,
				quantity: editingProduce.quantity,
				price: editingProduce.price,
			});
		};
		if (produceList.length) {
			prefillFormData();
		}
	}, [produceList]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduceFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, produceFormData);
        }}
        >
        <h3>Edit Food</h3>
        <label>
          produce type:
          <br/>
          <input
            type='text'
            name='produce_type'
            value={produce_type}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          name:
          <br/>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          variety:
          <br/>
          <input
            type='text'
            name='variety'
            value={variety}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          image url:
          <br/>
          <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          quantity:
          <br/>
          <input
            type='text'
            name='quantity'
            value={quantity}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          price:
          <br/>
          <input
            type='text'
            name='price'
            value={price}
            onChange={handleChange} />
        </label>
        <br/>
        <select
          onChange={handleChange}
          defaultValue='default'
          name='season'>
					<option disabled value='default'>
						-- Select a Season --
					</option>
          {seasonsList.map((season, idx) => (
            <option key={idx} value={season.id}>{season.name}</option>
          ))}
          </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
