import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneProduce } from "../services/produces";
import '../assets/css/ProduceDetails.css'

export default function ProduceDetails(props) {
  const { handleDelete } = props;

  const [produce, setProduce] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduceItem = async () => {
      const produceData = await getOneProduce(id);
      setProduce(produceData);
      console.log(produceData);
      console.log(produceData.name);
    };
    fetchProduceItem();
  }, [id]);

  console.log(produce?.seasons);
  var A = produce?.seasons;
  console.log(A?.[0].name);
  console.log(A?.length);
  // let i = 0;
  // while (i < A.length) {
  //   console.log(A?.[i].name)
  //   i++;
  // }

  return (
    <div className="screen-width-div">

      <div className='green-div'>
        <p className='w-text big-text'>details</p>
      </div>
      <br/>
      <p>type: {produce?.produce_type}</p>
      <br/>
      <p>name: {produce?.name}</p>
      <br/>
      <p>variety: {produce?.variety}</p>
      <br/>
      <p>quantity: {produce?.quantity}</p>
      <br/>
      <p>price: ${produce?.price} /per</p>
      <br/>

      {/* <p>season: {produce?.seasons[0].name}</p>
      <p>season: {produce?.seasons[1].name}</p>
      <p>season: {produce?.seasons[2].name}</p> */}

      <Link to={`/produces/${produce?.id}/edit`}>        
        <button className='green-button'>Edit</button>
      </Link>
      <br/>
      <br/>
      <button className='green-button' onClick={() => handleDelete(produce.id)}>Delete</button>


      
    </div>
  );
}
