import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {getOneProduce} from '../services/produces'

export default function ProduceDetails(props) {
  const { handleDelete, seasonsList } = props;

  const [produce, setProduce] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchProduceItem = async () => {
			const produceData = await getOneProduce(id);
      setProduce(produceData);
      console.log(produceData)
      console.log(produceData.name)
		};
		fetchProduceItem();
  }, [id]);
  
  // console.log(produce?.seasons[0].name)

  
  return (
    <div className='screen-width-div'>
      <p>This is the produce details</p>
      <p>type: {produce?.produce_type}</p>
      <p>name: {produce?.name}</p>
      <p>variety: {produce?.variety}</p>
      <p>quantity: {produce?.quantity}</p>
      <p>price: ${produce?.price} /per</p>

      <p>season: {produce?.seasons[0].name}</p>
      <p>season: {produce?.seasons[1].name}</p>
      <p>season: {produce?.seasons[2].name}</p>
      <p>season: {produce?.seasons[3].name}</p>

      <Link to={`/produces/${produce?.id}/edit`}><button>Edit</button></Link>
      <button onClick={() => handleDelete(produce.id)}>Delete</button>

    </div>
  )
}
