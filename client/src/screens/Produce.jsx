import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Produce.css";

export default function Produce(props) {
  const { produceList } = props;

  return (
    <div className="screen-width-div">
      {produceList.map((produce) => (
        <div key={produce.id}>
          <div className="produces-container">
            <Link className="link-font-change" to={`/produces/${produce.id}`}>
              <div>
                <p className="green-div w-text">{produce.name}</p>
              </div>
              <p className="b-text"> Price ${produce.price}</p>
              <p className="b-text"> Quantity: {produce.quantity}</p>
              <p className="b-text"> Total: ${produce.quantity * produce.price}</p>
            </Link>
          </div>
        </div>
      ))}
      {/* <Link to={`/produces/${produce.id}/edit`}><button>Edit</button></Link> */}
    </div>
  );
}
