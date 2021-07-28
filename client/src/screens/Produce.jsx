import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Produce.css";

export default function Produce(props) {
  const { produceList } = props;
  

  return (
    <div className="screen-width-div">
      {produceList?.map((produce, idx) => (
        <div key={idx}>
          <div className="produces-container">
            <Link className="link-font-change" to={`/produces/${produce.id}`}>
              <div>
                <p className="green-div w-text">{produce.name}</p>
              </div>
              <p className="b-text"> Price ${produce.price}</p>
              <p className="b-text"> Quantity: {produce.quantity}</p>
              <p className="b-text"> Total: ${(Math.round(produce.quantity * produce.price * 100) / 100).toFixed(2)}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
