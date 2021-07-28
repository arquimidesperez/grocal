import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneProduce } from "../services/produces";
import '../assets/css/ProduceDetails.css'
import onlineShopping from "../assets/images/Online-shopping.png";

export default function ProduceDetails(props) {
  const { handleDelete } = props;

  const [produce, setProduce] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduceItem = async () => {
      const produceData = await getOneProduce(id);
      setProduce(produceData);
    };
    fetchProduceItem();
  }, [id]);

  const allSeasons = produce?.seasons;

  const produceSeasonArr = [];

  for (let i = 0; i < allSeasons?.length; i++){
    produceSeasonArr.push(produce?.seasons[i].name)
  }

  console.log(produceSeasonArr);
  const set = new Set(produceSeasonArr)
  const myArr = Array.from(set)

  return (
    <div className="screen-width-div">


<div className='green-div'>
        <p className='w-text big-text'>details</p>
      </div>
      <div className='details-container'>
        <div className='details-form-container'>
      <p>type: {produce?.produce_type}</p>
      <br/>
      <p>name: {produce?.name}</p>
      <br/>
      <p>variety: {produce?.variety}</p>
      <br/>
      <p>quantity: {produce?.quantity}</p>
      <br/>
      <p>price: ${produce?.price} /per</p>
      <br />
      <p>available seasons: {myArr}</p>
      <br />
      
      <Link to={`/produces/${produce?.id}/edit`}>        
        <button className='green-button'>Edit</button>
      </Link>
      <br/>
      <br/>
      <button className='green-button' onClick={() => handleDelete(produce.id)}>Delete</button>

        </div>

        <div className='details-image-container'>
        <img
              src={onlineShopping}
              alt="online shopping"
              className="flowers"
            />
        </div>
      </div>

    </div>
  );
}
